import React from "react";
import { Check } from "lucide-react";

export function LiveObservability() {
  return (
    <div className="mx-auto w-full max-w-[75rem] px-4 sm:px-6">
      <section className="vc-section py-16">
        <i aria-hidden="true" className="vc-dia" />
        <div data-reveal="" className="vc-reveal grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          
          {/* Dashboard Preview */}
          <div className="overflow-hidden rounded-xl border border-line bg-surface shadow">
            <div className="flex items-center gap-3 border-b border-line bg-paper px-4 py-2">
              <span className="inline-flex shrink-0 gap-1.5" aria-hidden="true">
                <i className="size-2.5 rounded-full bg-line-2" />
                <i className="size-2.5 rounded-full bg-line-2" />
                <i className="size-2.5 rounded-full bg-line-2" />
              </span>
              <span className="truncate font-mono text-xs text-muted mx-auto">
                vertracloud.app/dashboard
              </span>
              <span className="w-11 shrink-0" aria-hidden="true" />
            </div>

            <div className="flex flex-col gap-4 p-5">
              <svg viewBox="0 0 400 110" preserveAspectRatio="none" className="h-[110px] w-full" aria-hidden="true">
                <path className="vc-chart-grid stroke-line" d="M0 28H400M0 56H400M0 84H400" />
                <path className="vc-chart-line stroke-accent" pathLength="1" d="M0 88 C 30 84, 50 68, 80 70 S 130 48, 160 52 S 220 30, 260 34 S 330 14, 400 18" />
              </svg>

              <div className="flex flex-col gap-1.5 font-mono text-xs text-ink-2" aria-hidden="true">
                <span className="flex items-center gap-2">
                  <Check className="size-3.5 text-ok" />
                  build concluído · cache hit · 4.2s
                </span>
                <span className="flex items-center gap-2">
                  <Check className="size-3.5 text-ok" />
                  deploy em nyc1 · 2.8s
                </span>
                <span className="text-muted">
                  INFO&nbsp;&nbsp;1 GB RAM · 0.5 vCPU · rede ok
                </span>
              </div>

              <div className="flex items-center gap-2 border-t border-line pt-3 font-mono text-xs text-ink-2">
                <span className="inline-block size-2 rounded-full bg-accent" />
                <span>vexor-bot está no ar</span>
              </div>
            </div>
          </div>

          {/* Right Column Text */}
          <div className="flex flex-col gap-4">
            <p className="vc-eyebrow">Observabilidade</p>
            <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
              Veja cada deploy acontecer
            </h2>
            <p className="text-base leading-relaxed text-muted">
              Logs em tempo real, métricas de CPU e RAM e eventos de cada build — tudo ao vivo no dashboard, sem ferramenta externa.
            </p>
            <ul className="flex flex-col gap-2.5">
              <li className="flex items-start gap-2.5 text-sm text-ink-2">
                <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                <span>Logs ao vivo por projeto</span>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-ink-2">
                <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                <span>Métricas de CPU, RAM e rede</span>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-ink-2">
                <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                <span>Eventos de build e deploy</span>
              </li>
            </ul>
          </div>

        </div>
      </section>
    </div>
  );
}
