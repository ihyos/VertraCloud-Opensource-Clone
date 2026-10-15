"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, QrCode } from "lucide-react";
import { VertraLogo } from "@/components/VertraLogo";

export default function RegisterPage() {
  const [selectedPlan, setSelectedPlan] = useState<"economy" | "pro" | "scale">("pro");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [created, setCreated] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCreated(true);
  };

  return (
    <div className="min-h-screen bg-paper flex flex-col justify-between p-6 relative">
      {/* Top Header */}
      <div className="flex items-center justify-between max-w-6xl w-full mx-auto relative z-10">
        <Link href="/" className="flex items-center gap-2 group text-sm text-ink-2 hover:text-ink transition-colors">
          <ArrowLeft className="size-4" />
          <span>Voltar para a página inicial</span>
        </Link>
        <Link href="/" className="flex items-center gap-2">
          <VertraLogo className="h-6 w-auto text-ink" />
        </Link>
      </div>

      {/* Main Registration Card */}
      <div className="max-w-xl w-full mx-auto my-10 rounded-xl border border-line bg-surface p-8 relative z-10 shadow-2xl">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-ink tracking-tight mb-2">
            Crie sua conta na Vertra Cloud
          </h1>
          <p className="text-xs sm:text-sm text-muted">
            Containers isolados, rede ultra veloz e bancos gerenciados em minutos.
          </p>
        </div>

        {/* Plan Selector Pills */}
        <div className="grid grid-cols-3 gap-2 p-1.5 rounded-xl border border-line bg-paper mb-6">
          <button
            type="button"
            onClick={() => setSelectedPlan("economy")}
            className={`p-2.5 rounded-lg text-xs font-mono transition-all text-center ${
              selectedPlan === "economy"
                ? "bg-ink text-paper font-bold shadow-sm"
                : "text-ink-2 hover:text-ink"
            }`}
          >
            <div>Economy</div>
            <div className="text-[10px] opacity-80">R$ 1,99/mês</div>
          </button>

          <button
            type="button"
            onClick={() => setSelectedPlan("pro")}
            className={`p-2.5 rounded-lg text-xs font-mono transition-all text-center relative ${
              selectedPlan === "pro"
                ? "bg-ink text-paper font-bold shadow-sm"
                : "text-ink-2 hover:text-ink"
            }`}
          >
            <div>Pro (Popular)</div>
            <div className="text-[10px] opacity-80">R$ 5,99/mês</div>
          </button>

          <button
            type="button"
            onClick={() => setSelectedPlan("scale")}
            className={`p-2.5 rounded-lg text-xs font-mono transition-all text-center ${
              selectedPlan === "scale"
                ? "bg-ink text-paper font-bold shadow-sm"
                : "text-ink-2 hover:text-ink"
            }`}
          >
            <div>Scale</div>
            <div className="text-[10px] opacity-80">R$ 10,99/mês</div>
          </button>
        </div>

        {!created ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-mono text-ink-2 mb-1.5">
                Seu Nome Completo
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Alexandre Silva"
                className="w-full rounded-lg border border-line bg-paper px-3 py-2 text-sm text-ink outline-none focus:border-accent transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-ink-2 mb-1.5">
                Endereço de Email
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="dev@empresa.com"
                className="w-full rounded-lg border border-line bg-paper px-3 py-2 text-sm text-ink outline-none focus:border-accent transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-ink-2 mb-1.5">
                Crie uma Senha Forte
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                className="w-full rounded-lg border border-line bg-paper px-3 py-2 text-sm text-ink outline-none focus:border-accent transition-colors"
              />
            </div>

            <button
              type="submit"
              className="vc-sheen w-full mt-3 rounded-lg bg-ink py-2.5 text-sm font-semibold text-paper hover:bg-ink-2 transition-all active:scale-[0.99]"
            >
              Criar Conta e Avançar
            </button>
          </form>
        ) : (
          <div className="space-y-4 text-center">
            <div className="p-4 rounded-xl bg-ok/10 border border-ok/20 text-ok font-mono text-xs">
              <div className="font-bold text-sm mb-1">✓ Conta criada com sucesso!</div>
              <div>Plano selecionado: <strong className="uppercase">{selectedPlan}</strong></div>
            </div>

            <div className="p-6 rounded-xl border border-line bg-paper space-y-3">
              <div className="flex items-center justify-center gap-2 text-xs font-mono text-muted">
                <QrCode className="size-4 text-accent" />
                <span>Pague via Pix instantâneo para ativação</span>
              </div>
              <div className="text-lg font-bold font-mono text-ink">
                R$ {selectedPlan === "economy" ? "1,99" : selectedPlan === "pro" ? "5,99" : "10,99"}
              </div>
              <div className="text-xs text-muted font-mono break-all p-3 bg-shade rounded border border-line">
                00020126580014br.gov.bcb.pix0136vertra-pix-key-f48209...
              </div>
              <Link
                href="/"
                className="block w-full py-2.5 rounded-lg bg-accent text-white font-semibold text-xs hover:bg-accent-strong transition-colors"
              >
                Acessar o Painel Agora
              </Link>
            </div>
          </div>
        )}

        <div className="mt-6 text-center text-xs text-ink-2">
          Já possui conta?{" "}
          <Link href="/login" className="font-semibold text-accent hover:underline">
            Entrar
          </Link>
        </div>
      </div>

      <div className="text-center text-xs text-muted relative z-10">
        © 2026 Vertra Cloud LTDA · CNPJ 69.320.419/0001-27
      </div>
    </div>
  );
}
