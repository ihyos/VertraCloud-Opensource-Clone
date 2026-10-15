"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Check, ArrowRight, Zap, Leaf, Layers } from "lucide-react";
import { CapacitySlider } from "./CapacitySlider";

export function PricingSection() {
  const [cycle, setCycle] = useState<"monthly" | "quarterly" | "yearly">("monthly");

  // Discount multipliers
  const multiplier = cycle === "yearly" ? 0.85 : cycle === "quarterly" ? 0.95 : 1.0;

  const getPrice = (base: number) => {
    return (base * multiplier).toFixed(2).replace(".", ",");
  };

  return (
    <section id="planos" className="vc-section vc-plans-funnel flex flex-col gap-10 py-20 md:py-28">
      <div className="mx-auto w-full max-w-[75rem] px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mx-auto flex w-full flex-col items-center gap-5 text-center mb-12">
          <div className="flex max-w-[660px] flex-col items-center gap-3">
            <p className="vc-eyebrow">Planos</p>
            <h2 className="text-balance text-2xl font-semibold tracking-tight text-ink sm:text-3xl md:text-4xl">
              Planos a partir de R$ 1,99/mês. Escale quando precisar.
            </h2>
            <p className="max-w-[60ch] text-sm leading-relaxed text-muted">
              Teste gratuito: 1 projeto com 0,25 vCPU e 1.000 chamadas de API por dia, para testar e avaliar a plataforma antes de usar em produção.
            </p>
          </div>

          {/* Billing Cycle Tabs (Official segmented track) */}
          <div className="bg-segmented-track p-px rounded-full grid grid-cols-3 gap-0 w-full sm:w-fit mx-auto justify-center">
            <button
              type="button"
              onClick={() => setCycle("monthly")}
              className={`group relative flex cursor-pointer select-none items-center justify-center whitespace-nowrap font-bold outline-none transition-all duration-200 px-3 py-2 text-xs gap-2 h-9 rounded-full sm:px-5 ${
                cycle === "monthly" ? "text-ink" : "text-muted hover:text-ink"
              }`}
            >
              {cycle === "monthly" && (
                <div className="absolute inset-0 z-0 bg-segmented-thumb ring-1 ring-inset ring-segmented-line rounded-full" />
              )}
              <span className="z-10 flex items-center gap-2">Mensal</span>
            </button>

            <button
              type="button"
              onClick={() => setCycle("quarterly")}
              className={`group relative flex cursor-pointer select-none items-center justify-center whitespace-nowrap font-bold outline-none transition-all duration-200 px-3 py-2 text-xs gap-2 h-9 rounded-full sm:px-5 ${
                cycle === "quarterly" ? "text-ink" : "text-muted hover:text-ink"
              }`}
            >
              {cycle === "quarterly" && (
                <div className="absolute inset-0 z-0 bg-segmented-thumb ring-1 ring-inset ring-segmented-line rounded-full" />
              )}
              <span className="z-10 flex items-center gap-2">Trimestral −5%</span>
            </button>

            <button
              type="button"
              onClick={() => setCycle("yearly")}
              className={`group relative flex cursor-pointer select-none items-center justify-center whitespace-nowrap font-bold outline-none transition-all duration-200 px-3 py-2 text-xs gap-2 h-9 rounded-full sm:px-5 ${
                cycle === "yearly" ? "text-ink" : "text-muted hover:text-ink"
              }`}
            >
              {cycle === "yearly" && (
                <div className="absolute inset-0 z-0 bg-segmented-thumb ring-1 ring-inset ring-segmented-line rounded-full" />
              )}
              <span className="z-10 flex items-center gap-2">Anual −15%</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid (Official styling) */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 mb-12">
          
          {/* Economy */}
          <div className="rounded-lg border transition-[transform,box-shadow,border-color] duration-200 bg-surface border-line p-8 relative flex h-full flex-col gap-6">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="flex items-center gap-2.5 font-display text-2xl font-normal tracking-tight sm:text-3xl">
                    <span className="inline-flex size-8 shrink-0 items-center justify-center text-ink">
                      <Leaf className="size-5" />
                    </span>
                    Economy
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-muted">
                  Ideal para projetos pessoais com mais recursos e suporte especializado.
                </p>
              </div>

              <div className="flex flex-wrap items-end gap-2">
                <span className="inline-flex items-baseline gap-1 tabular-nums text-3xl font-semibold tracking-tight text-ink font-mono">
                  <span>R$</span>
                  <span>{getPrice(1.99)}</span>
                </span>
                <span className="pb-1 text-sm text-muted">/mês</span>
                {cycle !== "monthly" && (
                  <span className="pb-1 text-sm line-through text-muted">R$ 2,29</span>
                )}
              </div>

              <Link
                href="/register?plan=economy"
                className="vc-sheen group relative inline-flex items-center justify-center gap-2 overflow-hidden isolate rounded-md border-[1.5px] border-transparent font-sans font-medium tracking-tight whitespace-nowrap transition-[transform,box-shadow,background-color,color,border-color] duration-200 active:scale-[.98] bg-line text-ink hover:bg-line-2 h-8 w-full px-4 text-sm"
              >
                Escolher Economy
              </Link>
            </div>

            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-2.5 text-sm text-ink"><Check className="mt-0.5 size-4 shrink-0 text-ink" /><span>256 MB de RAM</span></li>
              <li className="flex items-start gap-2.5 text-sm text-ink"><Check className="mt-0.5 size-4 shrink-0 text-ink" /><span>0,3 vCPU</span></li>
              <li className="flex items-start gap-2.5 text-sm text-ink"><Check className="mt-0.5 size-4 shrink-0 text-ink" /><span>Espaço para 2 apps de 100 MB</span></li>
              <li className="flex items-start gap-2.5 text-sm text-ink"><Check className="mt-0.5 size-4 shrink-0 text-ink" /><span>5.000 chamadas de API/dia</span></li>
              <li className="flex items-start gap-2.5 text-sm text-ink"><Check className="mt-0.5 size-4 shrink-0 text-ink" /><span>Suporte especializado</span></li>
              <li className="flex items-start gap-2.5 text-sm text-ink"><Check className="mt-0.5 size-4 shrink-0 text-ink" /><span>Reinício automático</span></li>
              <li className="flex items-start gap-2.5 text-sm text-ink"><Check className="mt-0.5 size-4 shrink-0 text-ink" /><span>Vertra Shield</span></li>
              <li className="flex items-start gap-2.5 text-sm text-ink"><Check className="mt-0.5 size-4 shrink-0 text-ink" /><span>SLA de 99,99%</span></li>
            </ul>
          </div>

          {/* Pro (Mais popular) */}
          <div className="rounded-lg border transition-[transform,box-shadow,border-color] duration-200 bg-surface border-line p-8 relative flex h-full flex-col gap-6">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="flex items-center gap-2.5 font-display text-2xl font-normal tracking-tight sm:text-3xl">
                    <span className="inline-flex size-8 shrink-0 items-center justify-center text-ink">
                      <Zap className="size-5" />
                    </span>
                    Pro
                  </h3>
                  <span className="inline-flex items-center gap-1 rounded-md px-2.5 py-1 text-xs font-semibold tracking-wide border-[1.5px] border-line-2 bg-transparent text-ink font-sans">
                    Mais popular
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-muted">
                  Para projetos em crescimento com recursos avançados e monitoramento.
                </p>
              </div>

              <div className="flex flex-wrap items-end gap-2">
                <span className="inline-flex items-baseline gap-1 tabular-nums text-3xl font-semibold tracking-tight text-ink font-mono">
                  <span>R$</span>
                  <span>{getPrice(5.99)}</span>
                </span>
                <span className="pb-1 text-sm text-muted">/mês</span>
                {cycle !== "monthly" && (
                  <span className="pb-1 text-sm line-through text-muted">R$ 6,99</span>
                )}
              </div>

              <Link
                href="/register?plan=pro"
                className="vc-sheen group relative inline-flex items-center justify-center gap-2 overflow-hidden isolate rounded-md border-[1.5px] border-transparent font-sans font-medium tracking-tight whitespace-nowrap transition-[transform,box-shadow,background-color,color,border-color] duration-200 active:scale-[.98] bg-ink text-paper shadow-sm hover:bg-ink-2 h-8 w-full px-4 text-sm"
              >
                Escolher Pro
              </Link>
            </div>

            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-2.5 text-sm text-ink"><Check className="mt-0.5 size-4 shrink-0 text-ink" /><span>1 GB de RAM</span></li>
              <li className="flex items-start gap-2.5 text-sm text-ink"><Check className="mt-0.5 size-4 shrink-0 text-ink" /><span>0,5 vCPU</span></li>
              <li className="flex items-start gap-2.5 text-sm text-ink"><Check className="mt-0.5 size-4 shrink-0 text-ink" /><span>Espaço para 10 apps de 100 MB</span></li>
              <li className="flex items-start gap-2.5 text-sm text-ink"><Check className="mt-0.5 size-4 shrink-0 text-ink" /><span>20.000 chamadas de API/dia</span></li>
              <li className="flex items-start gap-2.5 text-sm text-ink"><Check className="mt-0.5 size-4 shrink-0 text-ink" /><span>Suporte prioritário 24/7</span></li>
              <li className="flex items-start gap-2.5 text-sm text-ink"><Check className="mt-0.5 size-4 shrink-0 text-ink" /><span>Hospedagem de sites</span></li>
              <li className="flex items-start gap-2.5 text-sm text-ink"><Check className="mt-0.5 size-4 shrink-0 text-ink" /><span>Métricas avançadas</span></li>
              <li className="flex items-start gap-2.5 text-sm text-ink"><Check className="mt-0.5 size-4 shrink-0 text-ink" /><span>Gerenciador de arquivos</span></li>
              <li className="flex items-start gap-2.5 text-sm text-ink"><Check className="mt-0.5 size-4 shrink-0 text-ink" /><span>Reinício automático</span></li>
              <li className="flex items-start gap-2.5 text-sm text-ink"><Check className="mt-0.5 size-4 shrink-0 text-ink" /><span>Vertra Shield &amp; SLA 99,99%</span></li>
            </ul>
          </div>

          {/* Scale */}
          <div className="rounded-lg border transition-[transform,box-shadow,border-color] duration-200 bg-surface border-line p-8 relative flex h-full flex-col gap-6">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="flex items-center gap-2.5 font-display text-2xl font-normal tracking-tight sm:text-3xl">
                    <span className="inline-flex size-8 shrink-0 items-center justify-center text-ink">
                      <Layers className="size-5" />
                    </span>
                    Scale
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-muted">
                  Projetado para negócios em crescimento com alta disponibilidade.
                </p>
              </div>

              <div className="flex flex-wrap items-end gap-2">
                <span className="inline-flex items-baseline gap-1 tabular-nums text-3xl font-semibold tracking-tight text-ink font-mono">
                  <span>R$</span>
                  <span>{getPrice(10.99)}</span>
                </span>
                <span className="pb-1 text-sm text-muted">/mês</span>
                {cycle !== "monthly" && (
                  <span className="pb-1 text-sm line-through text-muted">R$ 12,99</span>
                )}
              </div>

              <Link
                href="/register?plan=scale"
                className="vc-sheen group relative inline-flex items-center justify-center gap-2 overflow-hidden isolate rounded-md border-[1.5px] border-transparent font-sans font-medium tracking-tight whitespace-nowrap transition-[transform,box-shadow,background-color,color,border-color] duration-200 active:scale-[.98] bg-line text-ink hover:bg-line-2 h-8 w-full px-4 text-sm"
              >
                Escolher Scale
              </Link>
            </div>

            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-2.5 text-sm text-ink"><Check className="mt-0.5 size-4 shrink-0 text-ink" /><span>2 GB de RAM</span></li>
              <li className="flex items-start gap-2.5 text-sm text-ink"><Check className="mt-0.5 size-4 shrink-0 text-ink" /><span>1 vCPU</span></li>
              <li className="flex items-start gap-2.5 text-sm text-ink"><Check className="mt-0.5 size-4 shrink-0 text-ink" /><span>Espaço para 20 apps de 100 MB</span></li>
              <li className="flex items-start gap-2.5 text-sm text-ink"><Check className="mt-0.5 size-4 shrink-0 text-ink" /><span>86.400 chamadas de API/dia</span></li>
              <li className="flex items-start gap-2.5 text-sm text-ink"><Check className="mt-0.5 size-4 shrink-0 text-ink" /><span>Backups diários</span></li>
              <li className="flex items-start gap-2.5 text-sm text-ink"><Check className="mt-0.5 size-4 shrink-0 text-ink" /><span>Subdomínio *.vertraweb.app</span></li>
              <li className="flex items-start gap-2.5 text-sm text-ink"><Check className="mt-0.5 size-4 shrink-0 text-ink" /><span>Hospedagem de sites &amp; Gerenciador</span></li>
              <li className="flex items-start gap-2.5 text-sm text-ink"><Check className="mt-0.5 size-4 shrink-0 text-ink" /><span>Reinício automático &amp; Vertra Shield</span></li>
              <li className="flex items-start gap-2.5 text-sm text-ink"><Check className="mt-0.5 size-4 shrink-0 text-ink" /><span>SLA de 99,99%</span></li>
            </ul>
          </div>

        </div>

        {/* Links below cards */}
        <p className="text-center text-sm mb-2">
          <Link href="/pricing" className="inline-flex items-center gap-1.5 font-medium text-ink transition-colors hover:text-ink-2">
            Comparar todos os planos
            <ArrowRight className="size-4" />
          </Link>
        </p>
        <p className="text-center font-mono text-xs text-muted mb-10">
          Mínimo de 100 MB de RAM por projeto&nbsp;&nbsp;|&nbsp;&nbsp;Bancos de dados usam a RAM do seu plano&nbsp;&nbsp;|&nbsp;&nbsp;Cancele quando quiser.
        </p>

        {/* Dynamic Professional Scale Slider Requested by User */}
        <CapacitySlider />

      </div>
    </section>
  );
}
