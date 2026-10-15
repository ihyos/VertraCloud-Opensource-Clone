"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X, Rocket, Database, HardDrive, Cpu, Terminal, Sparkles, BookOpen, Layers, GitBranch } from "lucide-react";
import { VertraLogo } from "@/components/VertraLogo";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);
  const [devsOpen, setDevsOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-line bg-paper/80 backdrop-blur-md transition-colors">
      <div className="mx-auto flex h-16 w-full max-w-[80rem] items-center justify-between gap-2 px-4 sm:gap-4 sm:px-8">
        
        {/* Brand Logo - Official (Without any PaaS tag) */}
        <Link href="/" aria-label="Vertra Cloud" className="flex items-center">
          <VertraLogo className="h-6 sm:h-7 w-auto text-ink" />
        </Link>

        {/* Desktop Navigation */}
        <nav aria-label="Principal" className="hidden items-center gap-0.5 lg:flex text-sm font-medium text-ink-2">
          <Link
            href="/pricing"
            className="rounded-md px-3 py-1.5 transition-colors hover:text-ink focus-visible:text-ink outline-none"
          >
            Preços
          </Link>

          {/* Produto Mega Dropdown */}
          <div className="relative" onMouseLeave={() => setProductOpen(false)}>
            <button
              type="button"
              onMouseEnter={() => setProductOpen(true)}
              onClick={() => setProductOpen(!productOpen)}
              className="inline-flex items-center gap-1 rounded-md px-3 py-1.5 transition-colors hover:text-ink focus-visible:text-ink outline-none"
            >
              <span>Produto</span>
              <ChevronDown className={`size-3.5 transition-transform duration-200 ${productOpen ? "rotate-180" : ""}`} />
            </button>

            {productOpen && (
              <div className="absolute top-full left-0 w-80 rounded-xl border border-line bg-surface p-2 shadow-2xl shadow-black/80">
                <Link
                  href="#features"
                  className="flex items-start gap-3 rounded-lg p-2.5 hover:bg-surface-2 transition-colors"
                >
                  <Rocket className="size-4.5 text-accent mt-0.5 shrink-0" />
                  <div>
                    <div className="text-sm font-medium text-ink">Aplicações</div>
                    <div className="text-xs text-muted leading-relaxed">ZIP ou GitHub. Container isolado, logs e domínio próprio.</div>
                  </div>
                </Link>
                <Link
                  href="#databases"
                  className="flex items-start gap-3 rounded-lg p-2.5 hover:bg-surface-2 transition-colors"
                >
                  <Database className="size-4.5 text-accent mt-0.5 shrink-0" />
                  <div>
                    <div className="text-sm font-medium text-ink">Bancos de dados</div>
                    <div className="text-xs text-muted leading-relaxed">PostgreSQL, MySQL, MongoDB e Redis gerenciados, com snapshot.</div>
                  </div>
                </Link>
                <Link
                  href="#features"
                  className="flex items-start gap-3 rounded-lg p-2.5 hover:bg-surface-2 transition-colors"
                >
                  <HardDrive className="size-4.5 text-accent mt-0.5 shrink-0" />
                  <div>
                    <div className="text-sm font-medium text-ink">Blob Storage</div>
                    <div className="text-xs text-muted leading-relaxed">Objetos no mesmo painel do app, com a quota do plano.</div>
                  </div>
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/enterprise"
            className="rounded-md px-3 py-1.5 transition-colors hover:text-ink focus-visible:text-ink outline-none"
          >
            Enterprise
          </Link>

          {/* Desenvolvedores Dropdown */}
          <div className="relative" onMouseLeave={() => setDevsOpen(false)}>
            <button
              type="button"
              onMouseEnter={() => setDevsOpen(true)}
              onClick={() => setDevsOpen(!devsOpen)}
              className="inline-flex items-center gap-1 rounded-md px-3 py-1.5 transition-colors hover:text-ink focus-visible:text-ink outline-none"
            >
              <span>Desenvolvedores</span>
              <ChevronDown className={`size-3.5 transition-transform duration-200 ${devsOpen ? "rotate-180" : ""}`} />
            </button>

            {devsOpen && (
              <div className="absolute top-full left-0 w-80 rounded-xl border border-line bg-surface p-2 shadow-2xl shadow-black/80">
                <a
                  href="https://docs.vertracloud.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 rounded-lg p-2.5 hover:bg-surface-2 transition-colors"
                >
                  <BookOpen className="size-4.5 text-accent mt-0.5 shrink-0" />
                  <div>
                    <div className="text-sm font-medium text-ink">Documentação</div>
                    <div className="text-xs text-muted leading-relaxed">Como hospedar, limites do plano e visão da plataforma.</div>
                  </div>
                </a>
                <a
                  href="https://docs.vertracloud.app/api-reference"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 rounded-lg p-2.5 hover:bg-surface-2 transition-colors"
                >
                  <Terminal className="size-4.5 text-accent mt-0.5 shrink-0" />
                  <div>
                    <div className="text-sm font-medium text-ink">Referência da API</div>
                    <div className="text-xs text-muted leading-relaxed">Endpoints, envelope e códigos de erro.</div>
                  </div>
                </a>
                <a
                  href="https://discord.gg/vertracloud"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 rounded-lg p-2.5 hover:bg-surface-2 transition-colors"
                >
                  <Sparkles className="size-4.5 text-accent mt-0.5 shrink-0" />
                  <div>
                    <div className="text-sm font-medium text-ink">Discord</div>
                    <div className="text-xs text-muted leading-relaxed">Dúvidas rápidas, status e quem já opera na Vertra.</div>
                  </div>
                </a>
              </div>
            )}
          </div>

          {/* Recursos Dropdown */}
          <div className="relative" onMouseLeave={() => setResourcesOpen(false)}>
            <button
              type="button"
              onMouseEnter={() => setResourcesOpen(true)}
              onClick={() => setResourcesOpen(!resourcesOpen)}
              className="inline-flex items-center gap-1 rounded-md px-3 py-1.5 transition-colors hover:text-ink focus-visible:text-ink outline-none"
            >
              <span>Recursos</span>
              <ChevronDown className={`size-3.5 transition-transform duration-200 ${resourcesOpen ? "rotate-180" : ""}`} />
            </button>

            {resourcesOpen && (
              <div className="absolute top-full left-0 w-80 rounded-xl border border-line bg-surface p-2 shadow-2xl shadow-black/80">
                <Link
                  href="#features"
                  className="flex items-start gap-3 rounded-lg p-2.5 hover:bg-surface-2 transition-colors"
                >
                  <Layers className="size-4.5 text-accent mt-0.5 shrink-0" />
                  <div>
                    <div className="text-sm font-medium text-ink">SDKs &amp; CLI</div>
                    <div className="text-xs text-muted leading-relaxed">A Vertra no seu código JavaScript e Python, ou no terminal.</div>
                  </div>
                </Link>
                <Link
                  href="#features"
                  className="flex items-start gap-3 rounded-lg p-2.5 hover:bg-surface-2 transition-colors"
                >
                  <GitBranch className="size-4.5 text-accent mt-0.5 shrink-0" />
                  <div>
                    <div className="text-sm font-medium text-ink">GitHub Actions</div>
                    <div className="text-xs text-muted leading-relaxed">Atualize sua aplicação a cada push no GitHub.</div>
                  </div>
                </Link>
              </div>
            )}
          </div>
        </nav>

        {/* Right Action: Entrar button (Official match) */}
        <div className="flex items-center gap-2">
          <Link
            href="/login"
            className="vc-sheen group relative items-center justify-center overflow-hidden isolate rounded-md border-[1.5px] border-transparent font-sans font-medium tracking-tight whitespace-nowrap transition-[transform,box-shadow,background-color,color,border-color] duration-200 active:scale-[.98] bg-ink text-paper shadow-sm hover:bg-ink-2 h-7 gap-1.5 px-3 text-sm hidden sm:inline-flex"
          >
            Entrar
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Abrir menu"
            className="flex size-8 flex-col items-center justify-center gap-1 rounded-md transition-colors hover:bg-line lg:hidden text-ink"
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Drawer */}
      {mobileOpen && (
        <div className="lg:hidden border-b border-line bg-surface px-6 py-4 space-y-3">
          <Link href="/pricing" onClick={() => setMobileOpen(false)} className="block text-sm font-medium text-ink py-1">
            Preços
          </Link>
          <Link href="#features" onClick={() => setMobileOpen(false)} className="block text-sm font-medium text-ink py-1">
            Produto &amp; Aplicações
          </Link>
          <Link href="#databases" onClick={() => setMobileOpen(false)} className="block text-sm font-medium text-ink py-1">
            Bancos de dados
          </Link>
          <Link href="/enterprise" onClick={() => setMobileOpen(false)} className="block text-sm font-medium text-ink py-1">
            Enterprise
          </Link>
          <a href="https://docs.vertracloud.app" target="_blank" rel="noopener noreferrer" className="block text-sm font-medium text-ink py-1">
            Documentação
          </a>
          <div className="pt-3 border-t border-line flex flex-col gap-2">
            <Link
              href="/login"
              onClick={() => setMobileOpen(false)}
              className="w-full text-center py-2 text-sm font-medium bg-ink text-paper rounded-md hover:bg-ink-2"
            >
              Entrar
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
