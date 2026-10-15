import React from "react";

export function GlobalInfra() {
  return (
    <div className="mx-auto w-full max-w-[75rem] px-4 sm:px-6">
      <section id="infra" className="vc-section flex flex-col gap-10 py-16">
        <i aria-hidden="true" className="vc-dia" />
        
        <div data-reveal="" className="vc-reveal">
          <div className="flex flex-col gap-3 items-center text-center">
            <span className="inline-flex items-center gap-2">
              <span className="vc-eyebrow">Infra global</span>
            </span>
            <h2 className="text-balance text-2xl font-semibold tracking-tight text-ink sm:text-3xl md:text-4xl">
              Perto de onde seus usuários estão
            </h2>
            <p className="text-pretty text-base leading-relaxed text-muted max-w-2xl">
              Sua aplicação sobe em nyc1 e responde ao mundo com rotas otimizadas - do Brasil à Ásia, sem você configurar rede.
            </p>
          </div>
        </div>

        {/* Official Interactive World Map with Pulsing Arcs */}
        <div data-reveal="" className="vc-reveal overflow-hidden">
          <div className="vc-map relative aspect-[2/1] w-full">
            <div aria-hidden="true" className="vc-map-dots" />
            <svg
              viewBox="0 0 800 400"
              className="pointer-events-none absolute inset-0 h-full w-full"
              aria-hidden="true"
            >
              <path
                d="M 296.3777777777778 252.33333333333334 Q 265.9666666666667 49.53333333333333 235.55555555555557 109.53333333333333"
                pathLength={1}
                fill="none"
                className="vc-map-arc stroke-accent"
                strokeWidth="1"
                strokeLinecap="round"
                style={{ "--i": "0" } as React.CSSProperties}
              />
              <path
                d="M 379.6888888888889 113.95555555555556 Q 307.62222222222226 49.53333333333333 235.55555555555557 109.53333333333333"
                pathLength={1}
                fill="none"
                className="vc-map-arc stroke-accent"
                strokeWidth="1"
                strokeLinecap="round"
                style={{ "--i": "1" } as React.CSSProperties}
              />
              <path
                d="M 399.73333333333335 85.55555555555556 Q 317.64444444444445 25.555555555555557 235.55555555555557 109.53333333333333"
                pathLength={1}
                fill="none"
                className="vc-map-arc stroke-accent"
                strokeWidth="1"
                strokeLinecap="round"
                style={{ "--i": "2" } as React.CSSProperties}
              />
              <path
                d="M 710.4222222222222 120.71111111111112 Q 472.9888888888889 49.53333333333333 235.55555555555557 109.53333333333333"
                pathLength={1}
                fill="none"
                className="vc-map-arc stroke-accent"
                strokeWidth="1"
                strokeLinecap="round"
                style={{ "--i": "3" } as React.CSSProperties}
              />
              <path
                d="M 736 275.24444444444447 Q 485.77777777777777 49.53333333333333 235.55555555555557 109.53333333333333"
                pathLength={1}
                fill="none"
                className="vc-map-arc stroke-accent"
                strokeWidth="1"
                strokeLinecap="round"
                style={{ "--i": "4" } as React.CSSProperties}
              />
              <g>
                <circle cx="296.3777777777778" cy="252.33333333333334" r="2.5" className="fill-accent" />
                <circle cx="296.3777777777778" cy="252.33333333333334" r="2.5" className="vc-map-pulse fill-accent" />
              </g>
              <g>
                <circle cx="235.55555555555557" cy="109.53333333333333" r="2.5" className="fill-accent" />
                <circle cx="235.55555555555557" cy="109.53333333333333" r="2.5" className="vc-map-pulse fill-accent" />
              </g>
              <g>
                <circle cx="379.6888888888889" cy="113.95555555555556" r="2.5" className="fill-accent" />
                <circle cx="379.6888888888889" cy="113.95555555555556" r="2.5" className="vc-map-pulse fill-accent" />
              </g>
              <g>
                <circle cx="399.73333333333335" cy="85.55555555555556" r="2.5" className="fill-accent" />
                <circle cx="399.73333333333335" cy="85.55555555555556" r="2.5" className="vc-map-pulse fill-accent" />
              </g>
              <g>
                <circle cx="710.4222222222222" cy="120.71111111111112" r="2.5" className="fill-accent" />
                <circle cx="710.4222222222222" cy="120.71111111111112" r="2.5" className="vc-map-pulse fill-accent" />
              </g>
              <g>
                <circle cx="736" cy="275.24444444444447" r="2.5" className="fill-accent" />
                <circle cx="736" cy="275.24444444444447" r="2.5" className="vc-map-pulse fill-accent" />
              </g>
            </svg>
          </div>
        </div>

        {/* 3 Region Stats Strip */}
        <div data-reveal="" className="vc-reveal grid grid-cols-1 divide-y divide-line border-y border-line sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          <div className="flex flex-col items-center gap-1 p-6 text-center">
            <span className="font-mono text-2xl font-medium tracking-tight text-ink">nyc1</span>
            <span className="font-mono text-xs text-muted">região principal · Nova York</span>
          </div>
          <div className="flex flex-col items-center gap-1 p-6 text-center">
            <span className="font-mono text-2xl font-medium tracking-tight text-ink">5</span>
            <span className="font-mono text-xs text-muted">continentes atendidos</span>
          </div>
          <div className="flex flex-col items-center gap-1 p-6 text-center">
            <span className="font-mono text-2xl font-medium tracking-tight text-ink">&lt; 120ms</span>
            <span className="font-mono text-xs text-muted">latência típica no Brasil</span>
          </div>
        </div>
      </section>
    </div>
  );
}
