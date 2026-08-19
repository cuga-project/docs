import { ArrowRight } from 'lucide-react';
import type { ReactNode } from 'react';

const tones = {
  sky: 'border-sky-300 bg-sky-50 text-sky-900 dark:border-sky-500/40 dark:bg-sky-950/60 dark:text-sky-100',
  indigo:
    'border-indigo-400 bg-indigo-600 text-white dark:border-indigo-400/40 dark:bg-indigo-500',
  indigoSoft:
    'border-indigo-300 bg-indigo-50 text-indigo-950 dark:border-indigo-500/40 dark:bg-indigo-950/60 dark:text-indigo-100',
  teal: 'border-teal-300 bg-teal-50 text-teal-900 dark:border-teal-500/40 dark:bg-teal-950/50 dark:text-teal-100',
  amber:
    'border-amber-300 bg-amber-50 text-amber-950 dark:border-amber-500/40 dark:bg-amber-950/40 dark:text-amber-100',
  slate:
    'border-slate-300 bg-slate-50 text-slate-800 dark:border-slate-500/40 dark:bg-slate-900/50 dark:text-slate-100',
  emerald:
    'border-emerald-400 bg-emerald-100 text-emerald-900 dark:border-emerald-500/40 dark:bg-emerald-950/50 dark:text-emerald-100',
  violet:
    'border-violet-300 bg-violet-50 text-violet-900 dark:border-violet-400/30 dark:bg-violet-950/50 dark:text-violet-100',
  dashed:
    'border-dashed border-teal-400/70 bg-transparent text-teal-800 dark:text-teal-200',
} as const;

type Tone = keyof typeof tones;

function DiagramFrame({ children, caption }: { children: ReactNode; caption: string }) {
  return (
    <figure className="not-prose my-8">
      <div className="relative overflow-hidden rounded-2xl border border-fd-border bg-gradient-to-b from-fd-secondary/40 to-transparent p-4 sm:p-5">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.35] [background-image:radial-gradient(circle_at_1px_1px,currentColor_1px,transparent_0)] [background-size:16px_16px] text-fd-muted-foreground/30"
        />
        <div className="relative">{children}</div>
      </div>
      <figcaption className="mt-3 text-center text-sm text-fd-muted-foreground">{caption}</figcaption>
    </figure>
  );
}

function Box({
  tone,
  children,
  sub,
  className = '',
}: {
  tone: Tone;
  children: ReactNode;
  sub?: string;
  className?: string;
}) {
  return (
    <div
      className={`rounded-xl border px-3 py-2.5 text-center text-sm font-medium shadow-sm ${tones[tone]} ${className}`}
    >
      {children}
      {sub ? <div className="mt-0.5 text-[10px] font-normal opacity-75">{sub}</div> : null}
    </div>
  );
}

function Arrow({ down = false }: { down?: boolean }) {
  return (
    <ArrowRight
      aria-hidden
      className={`h-4 w-4 shrink-0 text-fd-muted-foreground/80 ${down ? 'rotate-90' : ''}`}
    />
  );
}

function Row({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">{children}</div>
  );
}

export function SkillsFlow() {
  return (
    <DiagramFrame caption="Skills are discovered at startup, loaded on demand, then executed in the sandbox — optional uploads join at run time.">
      <Row>
        <Box tone="teal" sub=".cuga/skills">
          SKILL.md
        </Box>
        <Arrow />
        <Box tone="teal">Discovery</Box>
        <Arrow />
        <Box tone="indigoSoft" sub="short summaries only">
          Prompt + panel
        </Box>
        <Arrow />
        <Box tone="sky">Chat message</Box>
        <Arrow />
        <Box tone="indigo">load_skill</Box>
        <Arrow />
        <Box tone="teal" sub="/workspace/skills">
          Sandbox copy
        </Box>
      </Row>
      <div className="my-3 flex justify-center">
        <Arrow down />
      </div>
      <Row>
        <Box tone="dashed" sub="optional JSON">
          Upload
        </Box>
        <Arrow />
        <Box tone="slate" sub="/workspace/uploads">
          Thread files
        </Box>
        <Arrow />
        <Box tone="violet">run_command</Box>
        <Arrow />
        <Box tone="emerald" sub="./output">
          Artifacts
        </Box>
      </Row>
    </DiagramFrame>
  );
}

export function CugaAsMcpFlow() {
  return (
    <DiagramFrame caption="An MCP client talks to the CUGA MCP server, which runs a CugaAgent against tools, browser, or APIs.">
      <Row>
        <Box tone="sky">MCP client</Box>
        <Arrow />
        <Box tone="indigo">CUGA MCP server</Box>
        <Arrow />
        <Box tone="indigoSoft">CugaAgent</Box>
      </Row>
      <div className="mt-3 grid gap-3 sm:grid-cols-2 sm:px-8">
        <div className="flex flex-col items-center gap-1.5">
          <Arrow down />
          <Box tone="slate" className="w-full max-w-xs">
            Environment
          </Box>
        </div>
        <div className="flex flex-col items-center gap-1.5">
          <Arrow down />
          <Box tone="teal" className="w-full max-w-xs">
            Browser / API execution
          </Box>
        </div>
      </div>
    </DiagramFrame>
  );
}

export function LangflowFlow() {
  return (
    <DiagramFrame caption="Langflow wires Chat Input and MCP Tools into CUGA, then out to Chat Output. An LLM node is optional.">
      <div className="flex flex-col items-center gap-2">
        <Row>
          <Box tone="teal" sub="Tools input">
            MCP Tools
          </Box>
          <Box tone="slate" sub="optional">
            LLM
          </Box>
        </Row>
        <Arrow down />
        <Row>
          <Box tone="sky">Chat Input</Box>
          <Arrow />
          <Box tone="indigo">CUGA</Box>
          <Arrow />
          <Box tone="emerald">Chat Output</Box>
        </Row>
      </div>
    </DiagramFrame>
  );
}

export function MemoryFlow() {
  return (
    <DiagramFrame caption="Memory looks up guidelines before the run, then saves the trajectory after — it never blocks the task.">
      <Row>
        <Box tone="sky">Task</Box>
        <Arrow />
        <Box tone="amber">Recall guidelines</Box>
        <Arrow />
        <Box tone="indigoSoft">Prompt + run</Box>
        <Arrow />
        <Box tone="teal">Save trajectory</Box>
        <Arrow />
        <Box tone="emerald">Next run is better</Box>
      </Row>
    </DiagramFrame>
  );
}

export function PolicyFlow() {
  return (
    <DiagramFrame caption="Policies sit on the orchestrator loop: intent first, then guidance, then tool checks, then the final answer.">
      <Row>
        <Box tone="sky">User request</Box>
        <Arrow />
        <Box tone="violet">Intent Guard</Box>
        <Arrow />
        <Box tone="indigoSoft">Playbook / Tool Guide</Box>
        <Arrow />
        <Box tone="indigo" sub="HITL">
          Approval
        </Box>
        <Arrow />
        <Box tone="teal">ToolGuard</Box>
        <Arrow />
        <Box tone="emerald">Formatter</Box>
      </Row>
    </DiagramFrame>
  );
}
