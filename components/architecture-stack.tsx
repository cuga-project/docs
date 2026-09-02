import {
  ArrowRight,
  Cloud,
  Cpu,
  Database,
  GitBranch,
  Monitor,
  Shield,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';

const SERVER_RUNTIMES = ['CugaLite', 'CugaSupervisor', 'CugaBrowser'] as const;

function Chip({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11px] font-medium ${className}`}
    >
      {children}
    </span>
  );
}

function Layer({
  n,
  title,
  subtitle,
  icon: Icon,
  accent,
  children,
}: {
  n: string;
  title: string;
  subtitle?: string;
  icon: LucideIcon;
  accent: {
    wrap: string;
    bar: string;
    icon: string;
    title: string;
    muted: string;
  };
  children?: ReactNode;
}) {
  return (
    <div className={`relative overflow-hidden rounded-xl border p-4 pl-5 ${accent.wrap}`}>
      <div className={`absolute inset-y-0 left-0 w-1 ${accent.bar}`} />
      <div className="flex items-center gap-2.5">
        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${accent.icon}`}
        >
          <Icon className="h-4 w-4" />
        </span>
        <div className="min-w-0">
          <div className="flex flex-wrap items-baseline gap-x-2">
            <span className={`font-mono text-[10px] font-bold tracking-[0.18em] ${accent.muted}`}>
              {n}
            </span>
            <h3 className={`text-sm font-semibold tracking-tight ${accent.title}`}>{title}</h3>
          </div>
          {subtitle ? <p className={`text-xs ${accent.muted}`}>{subtitle}</p> : null}
        </div>
      </div>
      {children ? <div className="mt-3">{children}</div> : null}
    </div>
  );
}

export function ArchitectureStack() {
  return (
    <figure className="not-prose my-8">
      <div className="relative overflow-hidden rounded-2xl border border-fd-border bg-gradient-to-b from-fd-secondary/40 to-transparent p-3 sm:p-4">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.35] [background-image:radial-gradient(circle_at_1px_1px,currentColor_1px,transparent_0)] [background-size:16px_16px] text-fd-muted-foreground/30"
        />
        <div className="relative flex flex-col gap-2.5">
          <Layer
            n="01"
            title="Clients"
            subtitle="How you talk to CUGA"
            icon={Monitor}
            accent={{
              wrap: 'border-sky-400/50 bg-sky-50/80 dark:border-sky-500/40 dark:bg-[#0f2d4a]/80',
              bar: 'bg-sky-500',
              icon: 'bg-sky-500/15 text-sky-700 dark:text-sky-300',
              title: 'text-sky-950 dark:text-sky-100',
              muted: 'text-sky-700/70 dark:text-sky-300/70',
            }}
          >
            <div className="flex flex-wrap gap-1.5">
              <Chip className="border-sky-300/80 bg-white/70 text-sky-800 dark:border-sky-500/30 dark:bg-sky-950/40 dark:text-sky-100">
                Web UI
              </Chip>
              <Chip className="border-sky-300/80 bg-white/70 text-sky-800 dark:border-sky-500/30 dark:bg-sky-950/40 dark:text-sky-100">
                Python SDK
              </Chip>
              <Chip className="border-sky-300/80 bg-white/70 text-sky-800 dark:border-sky-500/30 dark:bg-sky-950/40 dark:text-sky-100">
                CLI
              </Chip>
            </div>
          </Layer>

          <div className="flex justify-center text-indigo-400 dark:text-indigo-400/80">
            <ArrowRight className="h-4 w-4 rotate-90" />
          </div>

          <Layer
            n="02"
            title="Orchestrator"
            subtitle="CugaEntryGraph on the server; CugaAgent / CugaSupervisor in the SDK"
            icon={GitBranch}
            accent={{
              wrap: 'border-indigo-400/50 bg-indigo-50/80 dark:border-indigo-500/40 dark:bg-[#1e1b4b]/85',
              bar: 'bg-indigo-500',
              icon: 'bg-indigo-500/15 text-indigo-700 dark:text-indigo-300',
              title: 'text-indigo-950 dark:text-indigo-100',
              muted: 'text-indigo-700/70 dark:text-indigo-300/70',
            }}
          >
            <div className="rounded-lg border border-indigo-300/50 bg-white/60 p-3 dark:border-indigo-500/25 dark:bg-[#0f0d2e]/70">
              <div className="mb-2 text-center">
                <Chip className="border-indigo-400/60 bg-indigo-600 text-white dark:border-indigo-400/40 dark:bg-indigo-500/90">
                  CugaEntryGraph
                </Chip>
              </div>
              <p className="mb-2 text-center font-mono text-[10px] font-semibold uppercase tracking-widest text-indigo-500 dark:text-indigo-300/80">
                server graph only
              </p>
              <div className="flex flex-col items-center gap-1.5">
                <div className="flex flex-wrap items-center justify-center gap-1">
                  <span className="rounded-md bg-indigo-100 px-2 py-1 text-[11px] font-semibold text-indigo-900 dark:bg-indigo-200 dark:text-indigo-950">
                    ChatAgent
                  </span>
                  <ArrowRight className="h-3 w-3 text-indigo-400" />
                  <span className="rounded-md bg-indigo-100 px-2 py-1 text-[11px] font-semibold text-indigo-900 dark:bg-indigo-200 dark:text-indigo-950">
                    EntryRouter
                  </span>
                </div>
                <ArrowRight className="h-3 w-3 rotate-90 text-indigo-400" />
                <div
                  className="flex flex-wrap items-center justify-center gap-1"
                  role="group"
                  aria-label="CugaLite, CugaSupervisor, or CugaBrowser"
                >
                  {SERVER_RUNTIMES.map((name, i) => (
                    <span key={name} className="flex items-center gap-1">
                      {i > 0 ? (
                        <span
                          aria-hidden
                          className="px-0.5 font-mono text-[11px] font-semibold text-indigo-400"
                        >
                          |
                        </span>
                      ) : null}
                      <span className="rounded-md border border-indigo-300/70 bg-white px-2 py-1 text-[11px] font-semibold text-indigo-900 dark:border-indigo-400/40 dark:bg-indigo-950/60 dark:text-indigo-100">
                        {name}
                      </span>
                    </span>
                  ))}
                </div>
                <ArrowRight className="h-3 w-3 rotate-90 text-indigo-400" />
                <span className="rounded-md bg-indigo-100 px-2 py-1 text-[11px] font-semibold text-indigo-900 dark:bg-indigo-200 dark:text-indigo-950">
                  FinalAnswerAgent
                </span>
              </div>
            </div>
            <p className="mt-2.5 text-center text-[11px] leading-snug text-indigo-700/80 dark:text-indigo-200/70">
              SDK: <span className="font-semibold">CugaAgent</span> (CugaLite + HITL) ·{' '}
              <span className="font-semibold">CugaSupervisor</span>
            </p>
            <div className="mt-2.5 flex flex-wrap gap-1.5">
              <Chip className="border-violet-300/80 bg-white/70 text-violet-800 dark:border-violet-400/30 dark:bg-violet-950/50 dark:text-violet-100">
                <Shield className="mr-1 h-3 w-3" />
                Policies
              </Chip>
              <Chip className="border-violet-300/80 bg-white/70 text-violet-800 dark:border-violet-400/30 dark:bg-violet-950/50 dark:text-violet-100">
                Human-in-the-loop
              </Chip>
              <Chip className="border-violet-300/80 bg-white/70 text-violet-800 dark:border-violet-400/30 dark:bg-violet-950/50 dark:text-violet-100">
                Reflection
              </Chip>
              <Chip className="border-violet-300/80 bg-white/70 text-violet-800 dark:border-violet-400/30 dark:bg-violet-950/50 dark:text-violet-100">
                Spawn
              </Chip>
            </div>
          </Layer>

          <div className="flex justify-center text-teal-500/80">
            <ArrowRight className="h-4 w-4 rotate-90" />
          </div>

          <Layer
            n="03"
            title="Capability layer"
            subtitle="Runtime the orchestrator calls into"
            icon={Cpu}
            accent={{
              wrap: 'border-teal-400/50 bg-teal-50/80 dark:border-teal-500/40 dark:bg-[#0c2e2b]/85',
              bar: 'bg-teal-500',
              icon: 'bg-teal-500/15 text-teal-700 dark:text-teal-300',
              title: 'text-teal-950 dark:text-teal-100',
              muted: 'text-teal-700/70 dark:text-teal-300/70',
            }}
          >
            <div className="grid grid-cols-2 gap-1.5 sm:grid-cols-4">
              {[
                'LLM Client',
                'Browser',
                'Tools',
                'Knowledge',
                'Memory',
                'Skills',
                'Sandbox',
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-md border border-teal-300/70 bg-white/70 px-2 py-1.5 text-center text-[11px] font-medium text-teal-900 dark:border-teal-500/25 dark:bg-teal-950/40 dark:text-teal-100"
                >
                  {item}
                </span>
              ))}
            </div>
          </Layer>

          <div className="flex justify-center text-fd-muted-foreground/70">
            <ArrowRight className="h-4 w-4 rotate-90" />
          </div>

          <div className="grid gap-2.5 sm:grid-cols-2">
            <Layer
              n="04"
              title="Persistence"
              subtitle="What CUGA remembers"
              icon={Database}
              accent={{
                wrap: 'border-amber-400/50 bg-amber-50/80 dark:border-amber-500/40 dark:bg-[#2d1a08]/85',
                bar: 'bg-amber-500',
                icon: 'bg-amber-500/15 text-amber-800 dark:text-amber-300',
                title: 'text-amber-950 dark:text-amber-100',
                muted: 'text-amber-800/70 dark:text-amber-300/70',
              }}
            >
              <div className="flex flex-wrap gap-1.5">
                <Chip className="border-amber-300/80 bg-white/70 text-amber-900 dark:border-amber-500/30 dark:bg-amber-950/40 dark:text-amber-100">
                  Vector DB
                </Chip>
                <Chip className="border-amber-300/80 bg-white/70 text-amber-900 dark:border-amber-500/30 dark:bg-amber-950/40 dark:text-amber-100">
                  Conversations
                </Chip>
              </div>
            </Layer>
            <Layer
              n="05"
              title="External services"
              subtitle="Outside the process"
              icon={Cloud}
              accent={{
                wrap: 'border-slate-300 bg-slate-50/90 dark:border-slate-500/40 dark:bg-[#1f1d1d]/85',
                bar: 'bg-slate-400 dark:bg-slate-500',
                icon: 'bg-slate-500/15 text-slate-700 dark:text-slate-300',
                title: 'text-slate-900 dark:text-slate-100',
                muted: 'text-slate-600 dark:text-slate-400',
              }}
            >
              <div className="flex flex-wrap gap-1.5">
                <Chip className="border-slate-300 bg-white/70 text-slate-800 dark:border-slate-500/30 dark:bg-slate-900/50 dark:text-slate-100">
                  LLM providers
                </Chip>
                <Chip className="border-slate-300 bg-white/70 text-slate-800 dark:border-slate-500/30 dark:bg-slate-900/50 dark:text-slate-100">
                  MCP / OpenAPI
                </Chip>
                <Chip className="border-slate-300 bg-white/70 text-slate-800 dark:border-slate-500/30 dark:bg-slate-900/50 dark:text-slate-100">
                  Secrets
                </Chip>
                <Chip className="border-slate-300 bg-white/70 text-slate-800 dark:border-slate-500/30 dark:bg-slate-900/50 dark:text-slate-100">
                  Observability
                </Chip>
              </div>
            </Layer>
          </div>
        </div>
      </div>
      <figcaption className="mt-3 text-center text-sm text-fd-muted-foreground">
        Five layers — clients hit the orchestrator (CugaEntryGraph on the server; CugaAgent or
        CugaSupervisor in the SDK), which calls capabilities, stores, and external services.
      </figcaption>
    </figure>
  );
}

export function SupervisorFlow() {
  const box =
    'rounded-xl border px-3 py-2.5 text-center text-sm font-medium shadow-sm';
  return (
    <figure className="not-prose my-6">
      <div className="overflow-x-auto rounded-2xl border border-fd-border bg-gradient-to-br from-indigo-50/60 via-transparent to-teal-50/40 p-4 dark:from-indigo-950/40 dark:to-teal-950/20">
        <div className="mx-auto flex min-w-[32rem] max-w-3xl flex-col items-center gap-3">
          <div className={`${box} border-sky-300 bg-sky-50 text-sky-900 dark:border-sky-500/40 dark:bg-sky-950/60 dark:text-sky-100`}>
            User task
          </div>
          <ArrowRight className="h-4 w-4 rotate-90 text-indigo-400" />
          <div className={`${box} border-indigo-400 bg-indigo-600 text-white dark:bg-indigo-500`}>
            CugaSupervisor
          </div>
          <div className="flex w-full items-start justify-center gap-6">
            <div className="flex flex-1 flex-col items-center gap-2">
              <ArrowRight className="h-4 w-4 rotate-90 text-teal-500" />
              <div className={`${box} w-full border-teal-300 bg-teal-50 text-teal-900 dark:border-teal-500/40 dark:bg-teal-950/50 dark:text-teal-100`}>
                crm CugaAgent
              </div>
              <span className="text-[10px] font-medium uppercase tracking-wider text-fd-muted-foreground">
                optional spawn
              </span>
              <div className={`${box} w-full border-dashed border-teal-400/70 bg-transparent text-teal-800 dark:text-teal-200`}>
                Nested CugaAgent
              </div>
            </div>
            <div className="flex flex-1 flex-col items-center gap-2">
              <ArrowRight className="h-4 w-4 rotate-90 text-teal-500" />
              <div className={`${box} w-full border-teal-300 bg-teal-50 text-teal-900 dark:border-teal-500/40 dark:bg-teal-950/50 dark:text-teal-100`}>
                email CugaAgent
              </div>
            </div>
          </div>
          <ArrowRight className="h-4 w-4 rotate-90 text-emerald-500" />
          <div className={`${box} border-emerald-400 bg-emerald-100 text-emerald-900 dark:border-emerald-500/40 dark:bg-emerald-950/50 dark:text-emerald-100`}>
            Final answer
          </div>
        </div>
      </div>
      <figcaption className="mt-3 text-center text-sm text-fd-muted-foreground">
        Supervisor delegates to named agents; any agent can optionally spawn a nested helper.
      </figcaption>
    </figure>
  );
}
