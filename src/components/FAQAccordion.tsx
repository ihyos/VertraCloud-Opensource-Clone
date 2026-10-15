import React from "react";
import { ChevronDown } from "lucide-react";

const FAQS = [
  {
    q: "O que é a Vertra Cloud?",
    a: "A Vertra Cloud é uma plataforma brasileira de hospedagem de aplicações (PaaS): deploy a partir do GitHub ou de um arquivo zip, containers isolados, bancos de dados gerenciados, armazenamento de arquivos, snapshots, CLI e extensão para VS Code.",
  },
  {
    q: "Que tipos de projetos posso hospedar?",
    a: "APIs, sites, workers e bots de Discord, WhatsApp e Telegram em JavaScript, Python, Go, PHP, Bun e mais — além de bancos Redis, MongoDB, MySQL e PostgreSQL gerenciados.",
  },
  {
    q: "Preciso configurar VPS ou Docker manualmente?",
    a: "Não! Toda a configuração é automática. Você só envia o projeto ou conecta o repositório e a plataforma faz o resto.",
  },
  {
    q: "Vocês têm plano gratuito?",
    a: "O plano Free (\"suspenso\") não está disponível no momento. Enquanto existia, dava 1 projeto com 0,25 vCPU e 1.000 chamadas de API por dia, para testar a plataforma. Hoje o primeiro degrau é o Economy.",
  },
  {
    q: "Como funcionam os preços?",
    a: "Planos mensais a partir de R$1,99, com desconto de até 15% no ciclo anual. Cada plano tem RAM, vCPU e limite de API fixos — o valor não varia com o uso.",
  },
  {
    q: "Como posso obter suporte?",
    a: "Você pode entrar em contato conosco a qualquer momento através do nosso servidor oficial no Discord ou abrindo um ticket de suporte em nosso painel.",
  },
];

export function FAQAccordion() {
  return (
    <div className="mx-auto w-full max-w-[75rem] px-4 sm:px-6">
      <section
        id="faq"
        className="vc-section vc-section--no-divider vc-gutter flex flex-col gap-10 !border-b !border-line !pb-0 [&_.vc-mesh-list>:last-child]:!border-b-0 py-16"
      >
        <div data-reveal="" className="vc-reveal">
          <div className="flex flex-col gap-3 items-center text-center">
            <span className="inline-flex items-center gap-2">
              <span className="vc-eyebrow">FAQ</span>
            </span>
            <h2 className="text-balance text-2xl font-semibold tracking-tight text-ink sm:text-3xl md:text-4xl">
              Perguntas Frequentes
            </h2>
          </div>
        </div>

        <div data-reveal="" className="vc-reveal vc-mesh-list">
          {FAQS.map((faq, i) => (
            <details key={i} className="group">
              <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 px-[var(--vc-pad-x,16px)] py-[18px] font-medium tracking-tight text-ink transition-colors hover:bg-line [&::-webkit-details-marker]:hidden">
                <span>{faq.q}</span>
                <ChevronDown className="size-4 shrink-0 text-muted transition-transform duration-300 group-open:rotate-180" />
              </summary>
              <p className="px-[var(--vc-pad-x,16px)] pb-5 text-base leading-relaxed text-ink-2">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
