"use client";

import React, { createContext, useContext, useState } from "react";

export type TrackType = "b2b" | "contractors";

interface TrackContextType {
  track: TrackType;
  setTrack: (track: TrackType) => void;
  toggleTrack: () => void;
  trackColor: string;
  trackLabel: string;
  isB2B: boolean;
  isContractors: boolean;
}

const TrackContext = createContext<TrackContextType | undefined>(undefined);

export function TrackProvider({ children }: { children: React.ReactNode }) {
  const [track, setTrack] = useState<TrackType>("b2b");

  const toggleTrack = () => {
    setTrack((prev) => (prev === "b2b" ? "contractors" : "b2b"));
  };

  const isB2B = track === "b2b";
  const isContractors = track === "contractors";
  const trackColor = isB2B ? "#ea580c" : "#0d9488"; // Signal Orange for B2B, Ice Teal for Contractors
  const trackLabel = isB2B
    ? "B2B & Founders Growth Engine"
    : "Trade Contractors Speed-to-Lead";

  return (
    <TrackContext.Provider
      value={{
        track,
        setTrack,
        toggleTrack,
        trackColor,
        trackLabel,
        isB2B,
        isContractors,
      }}
    >
      {children}
    </TrackContext.Provider>
  );
}

export function useTrack() {
  const context = useContext(TrackContext);
  if (!context) {
    throw new Error("useTrack must be used within a TrackProvider");
  }
  return context;
}
