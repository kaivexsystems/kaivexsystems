"use client";

import React, { useState } from "react";
import { Check, Copy, Play, Terminal, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface CodeSnippet {
  id: string;
  name: string;
  lang: string;
  tag: string;
  code: string;
  simulatedOutput: string;
}

const snippets: CodeSnippet[] = [
  {
    id: "outbound",
    name: "outbound-engine.ts",
    lang: "typescript",
    tag: "B2B Track",
    code: `// Kaivex Systems: Precision Outbound Dispatch Pipeline
import { verifySMTPSocket, dispatchPersonalizedSequence } from "@kaivex/engine";

export async function executeOutboundBatch(icpTargets: ExecutiveLead[]) {
  for (const exec of icpTargets) {
    // 1. Zero-Bounce SMTP Socket Handshake
    const isDeliverable = await verifySMTPSocket(exec.corporateEmail);
    if (!isDeliverable) continue;

    // 2. High-Signal Observation Sequence (No Aggressive Pitch)
    await dispatchPersonalizedSequence({
      target: exec,
      observationAngle: "C-suite Retention & Scaled Bottlenecks",
      calendarRouting: "https://cal.com/kaivex/diagnostic",
      delayHours: 24,
    });
  }
}`,
    simulatedOutput: `[KVX-CLI] Initializing verified socket handshake...
✓ 100 Dubai & Abu Dhabi C-suite inboxes verified (0% bounce rate)
✓ 3-touch bespoke sequence queued & dispatching
✓ 4 Warm responses recorded -> direct Cal.com conversions`,
  },
  {
    id: "speed-to-lead",
    name: "missed-call-bot.py",
    lang: "python",
    tag: "Contractors Track",
    code: `# Kaivex Speed-to-Lead: Sub-60s Contractor Auto-Textback
import asyncio
from kaivex_dialer import VoipListener, TwilioBridge

async def on_missed_contractor_call(call_event):
    caller_phone = call_event["from_number"]
    contractor_name = call_event["business_name"]
    
    # Trigger instant textback in < 45 seconds before homeowner calls competitor
    await asyncio.sleep(30)
    await TwilioBridge.send_sms(
        to=caller_phone,
        message=f"Hi, this is {contractor_name}! Sorry we missed you. "
                f"We are on a jobsite right now. How can we help you today?"
    )
    print(f"[RECOVERED] Lead saved from competitor for {contractor_name}")`,
    simulatedOutput: `[KVX-DIALER] US VoIP Inbound stream listening...
[ALERT] Incoming call missed from Dallas, TX (Plumbing Service)
✓ Auto-textback dispatched in 28 seconds!
✓ Homeowner replied with job details: $3,200 emergency pipe burst recovered`,
  },
  {
    id: "scorecard",
    name: "scorecard-app.tsx",
    lang: "typescript",
    tag: "Conversion Magnet",
    code: `// Kaivex Interactive Diagnostic Scorecard
import { useState } from "react";
import { generateExecutiveReport } from "@kaivex/diagnostic";

export function ExecutiveEQScorecard() {
  const [score, setScore] = useState(0);

  const onComplete = async (answers: Record<string, number>, workEmail: string) => {
    // Generate custom 6-page PDF diagnostic report automatically
    const reportUrl = await generateExecutiveReport({ answers, workEmail });
    
    // Bridge directly to 1-on-1 strategy call with ICF coach
    window.location.href = \`/book?report=\${reportUrl}\`;
  };

  return <DiagnosticWizard onComplete={onComplete} />;
}`,
    simulatedOutput: `[SCORECARD ENGINE] 3-Minute Executive Diagnostic loaded
✓ Lead captured: Managing Director, Corporate Investment Bank
✓ Automated PDF assessment generated in 1.4s
✓ Redirected to Cal.com for $4,500/mo retained advisory enrollment`,
  },
];

export function InteractiveTerminal() {
  const [activeTab, setActiveTab] = useState(snippets[0]);
  const [copied, setCopied] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [showConsole, setShowConsole] = useState(true);

  const handleCopy = () => {
    navigator.clipboard.writeText(activeTab.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSimulate = () => {
    setIsRunning(true);
    setTimeout(() => {
      setIsRunning(false);
      setShowConsole(true);
    }, 700);
  };

  return (
    <div className="w-full rounded-2xl border border-slate-800 bg-[#070b12] shadow-2xl overflow-hidden backdrop-blur-xl">
      {/* Terminal Title Bar */}
      <div className="flex flex-wrap items-center justify-between border-b border-slate-800/80 bg-[#0d131f] px-4 py-2.5 gap-2">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 mr-2">
            <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block"></span>
          </div>
          <Terminal className="w-4 h-4 text-slate-400" />
          <span className="font-mono text-xs font-bold text-slate-300">
            kaivex-infrastructure // live-engine
          </span>
        </div>

        {/* Tab Switchers */}
        <div className="flex items-center gap-1 bg-slate-900/90 p-1 rounded-lg border border-slate-800">
          {snippets.map((snip) => (
            <button
              key={snip.id}
              onClick={() => {
                setActiveTab(snip);
                setShowConsole(true);
              }}
              className={cn(
                "px-2.5 py-1 rounded-md text-xs font-mono transition-all flex items-center gap-1.5 cursor-pointer",
                activeTab.id === snip.id
                  ? "bg-slate-800 text-white font-bold shadow-sm"
                  : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/40"
              )}
            >
              <span>{snip.name}</span>
              <span className="text-[10px] px-1 rounded bg-slate-700/60 text-slate-300">
                {snip.tag}
              </span>
            </button>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleSimulate}
            disabled={isRunning}
            className="px-2.5 py-1 rounded-md bg-orange-600/90 hover:bg-orange-500 text-white font-mono text-xs font-bold transition flex items-center gap-1.5 cursor-pointer shadow-sm shadow-orange-600/30"
          >
            <Play className={cn("w-3 h-3", isRunning && "animate-spin")} />
            <span>{isRunning ? "Executing..." : "Test Protocol"}</span>
          </button>
          <button
            onClick={handleCopy}
            className="p-1.5 rounded-md hover:bg-slate-800 text-slate-400 hover:text-white transition cursor-pointer"
            title="Copy Code"
          >
            {copied ? (
              <Check className="w-3.5 h-3.5 text-emerald-400" />
            ) : (
              <Copy className="w-3.5 h-3.5" />
            )}
          </button>
        </div>
      </div>

      {/* Code Display Area */}
      <div className="p-4 md:p-6 font-mono text-xs text-slate-200 overflow-x-auto leading-relaxed max-h-[320px]">
        <pre>
          <code>{activeTab.code}</code>
        </pre>
      </div>

      {/* Console Output Tray */}
      {showConsole && (
        <div className="border-t border-slate-800/80 bg-[#05080e] p-3.5 font-mono text-[11px] flex items-start gap-2.5">
          <Sparkles className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
          <div className="text-teal-300/90 whitespace-pre-line leading-relaxed">
            {activeTab.simulatedOutput}
          </div>
        </div>
      )}
    </div>
  );
}
