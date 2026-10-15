"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Eye, EyeOff } from "lucide-react";
import { VertraLogo } from "@/components/VertraLogo";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setMessage("Autenticado com sucesso! Redirecionando para o painel...");
    }, 800);
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

      {/* Main Form */}
      <div className="max-w-md w-full mx-auto my-12 rounded-xl border border-line bg-surface p-8 relative z-10 shadow-2xl">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-ink tracking-tight mb-2">
            Entrar na Vertra Cloud
          </h1>
          <p className="text-xs sm:text-sm text-muted">
            Acesse seu painel para gerenciar aplicações, bots e bancos.
          </p>
        </div>

        {/* OAuth Buttons */}
        <div className="space-y-3 mb-6">
          <button
            type="button"
            onClick={() => {
              setMessage("Autenticado via GitHub! Conectando...");
            }}
            className="w-full flex items-center justify-center gap-3 rounded-lg border border-line bg-surface py-2.5 px-4 text-xs font-medium text-ink hover:bg-surface-2 hover:border-line-2 transition-all"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            <span>Continuar com o GitHub</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setMessage("Autenticado via Discord! Conectando...");
            }}
            className="w-full flex items-center justify-center gap-3 rounded-lg border border-line bg-surface py-2.5 px-4 text-xs font-medium text-ink hover:bg-surface-2 hover:border-line-2 transition-all"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#5865F2">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.893.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028z" />
            </svg>
            <span>Continuar com o Discord</span>
          </button>
        </div>

        <div className="relative flex items-center justify-center my-6">
          <div className="border-t border-line w-full" />
          <span className="bg-surface px-3 text-[11px] font-mono uppercase text-muted absolute">
            ou com email
          </span>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-mono text-ink-2 mb-1.5">
              Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="dev@exemplo.com"
              className="w-full rounded-lg border border-line bg-paper px-3 py-2 text-sm text-ink outline-none focus:border-accent transition-colors"
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="text-xs font-mono text-ink-2">Senha</label>
              <Link href="#" className="text-xs text-muted hover:text-ink">
                Esqueceu a senha?
              </Link>
            </div>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                className="w-full rounded-lg border border-line bg-paper px-3 py-2 text-sm text-ink outline-none focus:border-accent transition-colors pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2.5 text-muted hover:text-ink"
              >
                {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
              </button>
            </div>
          </div>

          {message && (
            <div className="p-3 rounded-lg bg-ok/10 border border-ok/20 text-xs font-mono text-ok">
              {message}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="vc-sheen w-full mt-2 rounded-lg bg-ink py-2.5 text-sm font-semibold text-paper hover:bg-ink-2 transition-all active:scale-[0.99] disabled:opacity-50"
          >
            {loading ? "Entrando..." : "Entrar no painel"}
          </button>
        </form>

        <div className="mt-6 text-center text-xs text-ink-2">
          Não tem uma conta?{" "}
          <Link href="/register" className="font-semibold text-accent hover:underline">
            Cadastre-se
          </Link>
        </div>
      </div>

      <div className="text-center text-xs text-muted relative z-10">
        © 2026 Vertra Cloud LTDA · CNPJ 69.320.419/0001-27
      </div>
    </div>
  );
}
