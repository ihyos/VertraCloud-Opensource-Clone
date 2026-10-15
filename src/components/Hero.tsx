import React from "react";
import Link from "next/link";
import { BadgeCheck, Rocket, Tag } from "lucide-react";

export function Hero() {
  return (
    <>
      <section className="relative isolate flex min-h-[85vh] w-full flex-col justify-center overflow-hidden">
        {/* Official Hero Pillar Artwork */}
        <div aria-hidden="true" className="vc-hero-pillar">
          <img
            alt="Pilar Vertra"
            fetchPriority="high"
            decoding="async"
            className="select-none object-cover object-[88%_62%] sm:object-[82%_48%] w-full h-full absolute inset-0"
            src="/artifacts/pillar.webp"
          />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[75rem] px-4 py-24 text-center sm:px-6">
          <p className="inline-flex items-center justify-center gap-1.5 font-mono text-xs text-muted">
            <BadgeCheck className="size-3.5 text-muted" />
            <span>Sem cartão · deploy do GitHub ou de um zip</span>
          </p>

          <h1 className="mt-5 text-balance text-[clamp(1.85rem,1rem+3.4vw,4.25rem)] font-semibold leading-[1.02] tracking-[-0.045em] text-ink">
            O pilar da sua ideia.
          </h1>

          <p className="mx-auto mt-5 max-w-[42ch] text-pretty text-base leading-relaxed text-ink-2 sm:text-lg">
            Hospedagem de aplicações, bots e bancos de dados, em containers isolados.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/register"
              className="vc-sheen group relative inline-flex items-center justify-center gap-2 overflow-hidden isolate rounded-md border-[1.5px] border-transparent font-sans font-medium tracking-tight whitespace-nowrap transition-[transform,box-shadow,background-color,color,border-color] duration-200 active:scale-[.98] bg-ink text-paper shadow-sm hover:bg-ink-2 h-9 px-5 text-sm"
            >
              <Rocket className="size-4" />
              <span>Deploy agora</span>
            </Link>

            <Link
              href="/pricing"
              className="vc-sheen group relative inline-flex items-center justify-center gap-2 overflow-hidden isolate rounded-md border-[1.5px] border-transparent font-sans font-medium tracking-tight whitespace-nowrap transition-[transform,box-shadow,background-color,color,border-color] duration-200 active:scale-[.98] bg-line text-ink hover:bg-line-2 h-9 px-5 text-sm"
            >
              <Tag className="size-4" />
              <span>Ver preços</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Official Hero Divider with Hatch & Diamonds */}
      <div aria-hidden="true" className="vc-hero-divider vc-hatch">
        <i className="vc-hero-divider-dia vc-hero-divider-dia--left" />
        <i className="vc-hero-divider-dia vc-hero-divider-dia--right" />
      </div>

      {/* Official Trio (01 Envie, 02 Construa, 03 Escale) */}
      <div className="mx-auto w-full max-w-[75rem]">
        <section className="vc-section vc-section--flush vc-section--no-divider">
          <div data-reveal="" className="vc-reveal vc-trio">
            <div className="grid content-start gap-2 p-6 sm:p-8 md:p-11">
              <h2 className="text-xl font-semibold tracking-tight text-ink">
                <span className="mr-2 font-mono text-xs text-muted">01</span>
                Envie.
              </h2>
              <p className="max-w-[34ch] text-sm leading-relaxed text-muted">
                Git, upload direto ou ZIP. A plataforma detecta a linguagem e a configuração sozinha.
              </p>
            </div>

            <div className="grid content-start gap-2 p-6 sm:p-8 md:p-11">
              <h2 className="text-xl font-semibold tracking-tight text-ink">
                <span className="mr-2 font-mono text-xs text-muted">02</span>
                Construa.
              </h2>
              <p className="max-w-[34ch] text-sm leading-relaxed text-muted">
                Pipelines multiestágio com build cache inteligente derrubam o tempo de build.
              </p>
            </div>

            <div className="grid content-start gap-2 p-6 sm:p-8 md:p-11">
              <h2 className="text-xl font-semibold tracking-tight text-ink">
                <span className="mr-2 font-mono text-xs text-muted">03</span>
                Escale.
              </h2>
              <p className="max-w-[34ch] text-sm leading-relaxed text-muted">
                CPU e RAM ajustados por demanda, com logs e métricas ao vivo no dashboard.
              </p>
            </div>
          </div>
        </section>

        {/* Official Stats Strip (4.2s, 2.8s, 99.99%, R$1,99) */}
        <section className="vc-section vc-section--flush">
          <i aria-hidden="true" className="vc-dia" />
          <div data-reveal="" className="vc-reveal vc-stats">
            <div className="grid justify-items-center gap-0.5 px-4 py-6 text-center sm:py-8 md:py-10">
              <span className="font-mono text-[clamp(1.5rem,1rem+2.2vw,2.5rem)] font-medium tracking-tight tabular-nums text-ink">
                4.2s
              </span>
              <span className="text-sm text-muted">build com cache</span>
            </div>

            <div className="grid justify-items-center gap-0.5 px-4 py-6 text-center sm:py-8 md:py-10">
              <span className="font-mono text-[clamp(1.5rem,1rem+2.2vw,2.5rem)] font-medium tracking-tight tabular-nums text-ink">
                2.8s
              </span>
              <span className="text-sm text-muted">deploy em nyc1</span>
            </div>

            <div className="grid justify-items-center gap-0.5 px-4 py-6 text-center sm:py-8 md:py-10">
              <span className="font-mono text-[clamp(1.5rem,1rem+2.2vw,2.5rem)] font-medium tracking-tight tabular-nums text-ink">
                99,99%
              </span>
              <span className="text-sm text-muted">SLA de uptime</span>
            </div>

            <div className="grid justify-items-center gap-0.5 px-4 py-6 text-center sm:py-8 md:py-10">
              <span className="font-mono text-[clamp(1.5rem,1rem+2.2vw,2.5rem)] font-medium tracking-tight tabular-nums text-ink">
                R$1,99
              </span>
              <span className="text-sm text-muted">por mês, ponto de entrada</span>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
