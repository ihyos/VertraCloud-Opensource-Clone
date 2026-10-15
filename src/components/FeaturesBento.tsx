import React from "react";
import { ShieldCheck } from "lucide-react";

export function FeaturesBento() {
  return (
    <div className="mx-auto w-full max-w-[75rem] px-4 sm:px-6">
      <section id="recursos" className="vc-section flex flex-col gap-10 py-16">
        <i aria-hidden="true" className="vc-dia" />
        <div data-reveal="" className="vc-reveal">
          <div className="flex flex-col gap-3 items-center text-center">
            <span className="inline-flex items-center gap-2">
              <span className="vc-eyebrow">Recursos</span>
            </span>
            <h2 className="text-balance text-2xl font-semibold tracking-tight text-ink sm:text-3xl md:text-4xl">
              Tudo que o seu deploy precisa
            </h2>
            <p className="text-pretty text-base leading-relaxed text-muted max-w-2xl">
              Infraestrutura de gente grande, sem você tocar em servidor.
            </p>
          </div>
        </div>

        {/* Official Bento Grid */}
        <div data-reveal="" className="vc-reveal vc-bento">
          
          {/* Bento Cell 1: Build Cache */}
          <article className="vc-bcell flex flex-col gap-2 p-6 col-span-4">
            <h3 className="text-lg font-semibold tracking-tight text-ink">
              Build cache avançado
            </h3>
            <p className="max-w-[44ch] text-sm leading-relaxed text-muted">
              Pipelines multiestágio e caching inteligente derrubam o tempo de build a cada deploy.
            </p>
            <div className="mt-auto pt-4">
              <div className="vc-fbars" aria-hidden="true">
                <i /><i /><i /><i /><i /><i />
              </div>
              <span className="mt-3 block font-mono text-xs text-muted">
                tempo de build por deploy
              </span>
            </div>
          </article>

          {/* Bento Cell 2: Webhook Git */}
          <article className="vc-bcell flex flex-col gap-2 p-6 col-span-2">
            <i aria-hidden="true" className="vc-bcell-dia vc-bcell-dia--bottom-left" />
            <h3 className="text-lg font-semibold tracking-tight text-ink">
              Redeploy via webhook Git
            </h3>
            <p className="max-w-[44ch] text-sm leading-relaxed text-muted">
              Cada push dispara um redeploy limpo, sem travar seu fluxo.
            </p>
            <div className="mt-auto pt-4">
              <div className="vc-commit py-1" aria-hidden="true">
                <i className="c-dot" />
                <i className="c-line" />
                <i className="c-dot" />
                <i className="c-line" />
                <span className="inline-block size-2 rounded-full bg-accent" />
              </div>
              <span className="mt-3 block font-mono text-xs text-muted">
                do push ao live
              </span>
            </div>
          </article>

          {/* Bento Cell 3: Auto-scaling */}
          <article className="vc-bcell flex flex-col gap-2 p-6 col-span-2">
            <h3 className="text-lg font-semibold tracking-tight text-ink">
              Auto-scaling
            </h3>
            <p className="max-w-[44ch] text-sm leading-relaxed text-muted">
              CPU e RAM ajustados automaticamente: sem queda, sem desperdício.
            </p>
            <div className="mt-auto pt-4">
              <div className="flex gap-6" aria-hidden="true">
                <div className="flex flex-1 flex-col gap-1.5">
                  <div className="vc-scalebars">
                    <i /><i /><i /><i />
                  </div>
                  <span className="font-mono text-xs text-muted">RAM</span>
                </div>
                <div className="flex flex-1 flex-col gap-1.5">
                  <div className="vc-scalebars">
                    <i /><i /><i /><i />
                  </div>
                  <span className="font-mono text-xs text-muted">CPU</span>
                </div>
              </div>
            </div>
          </article>

          {/* Bento Cell 4: Monitoramento em tempo real */}
          <article className="vc-bcell flex flex-col gap-2 p-6 col-span-4">
            <h3 className="text-lg font-semibold tracking-tight text-ink">
              Monitoramento em tempo real
            </h3>
            <p className="max-w-[44ch] text-sm leading-relaxed text-muted">
              Logs, métricas e eventos ao vivo, direto no dashboard.
            </p>
            <div className="mt-auto pt-4">
              <div className="grid gap-3">
                <svg viewBox="0 0 200 72" preserveAspectRatio="none" className="h-[72px] w-full" aria-hidden="true">
                  <path className="vc-chart-grid" d="M0 24H200M0 48H200" />
                  <path className="vc-chart-line stroke-accent" pathLength="1" d="M0 58 C 20 56, 30 44, 48 46 S 78 30, 96 34 S 128 20, 146 22 S 182 10, 200 12" />
                </svg>
                <div className="grid gap-1 font-mono text-xs text-muted" aria-hidden="true">
                  <span>INFO&nbsp;&nbsp;build concluído · cache hit</span>
                  <span>INFO&nbsp;&nbsp;instância nyc1 online</span>
                </div>
              </div>
            </div>
          </article>

          {/* Bento Cell 5: Vertra Shield */}
          <article className="vc-bcell flex flex-col gap-2 p-6 col-span-3">
            <h3 className="text-lg font-semibold tracking-tight text-ink">
              Vertra Shield
            </h3>
            <p className="max-w-[44ch] text-sm leading-relaxed text-muted">
              Proteção incluída em todos os planos, do Free ao Enterprise.
            </p>
            <div className="mt-auto pt-4">
              <ShieldCheck className="size-16 text-muted" />
            </div>
          </article>

          {/* Bento Cell 6: SLA 99,99% */}
          <article className="vc-bcell flex flex-col gap-2 p-6 col-span-3">
            <h3 className="text-lg font-semibold tracking-tight text-ink">
              SLA 99,99%
            </h3>
            <p className="max-w-[44ch] text-sm leading-relaxed text-muted">
              Uptime garantido por contrato em todos os planos.
            </p>
            <div className="mt-auto pt-4">
              <span className="font-mono text-[clamp(2.2rem,1.6rem+2vw,3.2rem)] font-medium tracking-tight text-ink">
                99,99<small className="ml-1 text-sm font-normal text-muted">% uptime</small>
              </span>
            </div>
          </article>

        </div>
      </section>
    </div>
  );
}
