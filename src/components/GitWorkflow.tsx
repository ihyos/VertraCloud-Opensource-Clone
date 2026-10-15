import React from "react";
import { Check } from "lucide-react";

export function GitWorkflow() {
  return (
    <div className="mx-auto w-full max-w-[75rem] px-4 sm:px-6">
      {/* 3 Step Workflow */}
      <section id="produto" className="vc-section flex flex-col gap-10 py-16">
        <i aria-hidden="true" className="vc-dia" />
        <div data-reveal="" className="vc-reveal">
          <div className="flex flex-col gap-3 items-start text-left">
            <span className="inline-flex items-center gap-2">
              <span className="vc-eyebrow">Como funciona</span>
            </span>
            <h2 className="text-balance text-2xl font-semibold tracking-tight text-ink sm:text-3xl md:text-4xl">
              Do repositório à produção
            </h2>
            <p className="text-pretty text-base leading-relaxed text-muted max-w-xl">
              Três estágios, zero configuração. Você faz o push; o resto é automático.
            </p>
          </div>
        </div>

        <div data-reveal="" className="vc-reveal grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-6">
          <div className="relative grid justify-items-center gap-2 text-center">
            <span
              aria-hidden="true"
              className="absolute top-5 left-[calc(50%+1.25rem)] z-0 hidden h-px w-[calc(100%-1rem)] bg-line-2 sm:block"
            />
            <span className="relative z-[1] grid size-10 place-items-center rounded-sm border border-line-2 bg-paper font-mono text-xs text-ink-2">
              01
            </span>
            <h3 className="mt-2 text-lg font-semibold tracking-tight text-ink">Push</h3>
            <p className="max-w-[30ch] text-sm leading-relaxed text-muted">
              Git, upload direto ou ZIP — cada push dispara um redeploy limpo via webhook.
            </p>
          </div>

          <div className="relative grid justify-items-center gap-2 text-center">
            <span
              aria-hidden="true"
              className="absolute top-5 left-[calc(50%+1.25rem)] z-0 hidden h-px w-[calc(100%-1rem)] bg-line-2 sm:block"
            />
            <span className="relative z-[1] grid size-10 place-items-center rounded-sm border border-line-2 bg-paper font-mono text-xs text-ink-2">
              02
            </span>
            <h3 className="mt-2 text-lg font-semibold tracking-tight text-ink">Build</h3>
            <p className="max-w-[30ch] text-sm leading-relaxed text-muted">
              Detecção automática de linguagem e build cache que derruba o tempo de build.
            </p>
          </div>

          <div className="relative grid justify-items-center gap-2 text-center">
            <span className="relative z-[1] grid size-10 place-items-center rounded-sm border border-line-2 bg-paper font-mono text-xs text-ink-2">
              03
            </span>
            <h3 className="mt-2 text-lg font-semibold tracking-tight text-ink">Live</h3>
            <p className="max-w-[30ch] text-sm leading-relaxed text-muted">
              No ar em um subdomínio *.vertraweb.app, com logs e métricas em tempo real.
            </p>
          </div>
        </div>
      </section>

      {/* Git Connected + Terminal Box */}
      <section className="vc-section py-16">
        <i aria-hidden="true" className="vc-dia" />
        <div data-reveal="" className="vc-reveal grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div className="flex flex-col gap-4">
            <p className="vc-eyebrow">Git conectado</p>
            <h2 className="max-w-[16ch] text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
              Deploys conectados ao Git
            </h2>
            <p className="max-w-[44ch] text-base leading-relaxed text-muted">
              Conecte o repositório uma vez. Cada push dispara um redeploy limpo, sem travar seu fluxo — do localhost ao https em segundos.
            </p>
            <ul className="flex flex-col gap-2.5">
              <li className="flex items-center gap-2.5 text-sm text-ink-2">
                <Check className="size-3.5 shrink-0 text-muted" />
                <span>Redeploy automático via webhook Git</span>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-ink-2">
                <Check className="size-3.5 shrink-0 text-muted" />
                <span>Build cache inteligente entre deploys</span>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-ink-2">
                <Check className="size-3.5 shrink-0 text-muted" />
                <span>Também aceita upload direto ou ZIP</span>
              </li>
            </ul>
          </div>

          <div
            role="img"
            aria-label="Terminal: git push vertra main, build com cache em 4.2s, aplicação no ar em vexor-bot.vertraweb.app"
            className="overflow-x-auto rounded-lg border border-line bg-shade px-6 py-5 font-mono text-xs leading-[1.9] text-ink"
          >
            <p className="vc-term-line">
              git push vertra main
              <span className="vc-caret" aria-hidden="true" />
            </p>
            <p className="vc-term-line">
              <span className="text-muted">→ build&nbsp;&nbsp;&nbsp;</span>
              cache hit · <span className="text-ok font-semibold">4.2s</span>
            </p>
            <p className="vc-term-line flex items-center">
              <span className="inline-block size-2 rounded-full bg-accent" />
              <span className="ml-1.5 text-accent-soft font-medium">live</span>
              <span className="text-muted">&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span className="text-ink">https://vexor-bot.vertraweb.app</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
