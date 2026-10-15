import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const DATABASES = [
  {
    name: "PostgreSQL",
    icon: "/icons/databases/postgresql.png",
    desc: "SQL robusto para quem precisa de consistência e extensões.",
    spec: "min 1024 MB · NVMe",
  },
  {
    name: "MongoDB",
    icon: "/icons/databases/mongodb.png",
    desc: "Documentos flexíveis que acompanham a forma dos seus dados.",
    spec: "min 1024 MB · NVMe",
  },
  {
    name: "Redis",
    icon: "/icons/databases/redis.png",
    desc: "Cache e filas em memória para respostas em microssegundos.",
    spec: "min 512 MB · NVMe",
  },
  {
    name: "MySQL",
    icon: "/icons/databases/mysql.png",
    desc: "O clássico confiável que roda em todo lugar.",
    spec: "min 1024 MB · NVMe",
  },
];

export function Databases() {
  return (
    <div className="mx-auto w-full max-w-[75rem] px-4 sm:px-6">
      <section id="databases" className="vc-section vc-gutter vc-gutter--lines flex flex-col gap-10 py-16">
        <i aria-hidden="true" className="vc-dia" />
        
        <div data-reveal="" className="vc-reveal flex max-w-[640px] flex-col gap-4">
          <p className="vc-eyebrow">Bancos de dados</p>
          <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl md:text-4xl">
            Crie um banco em segundos.<br />
            A Vertra cuida do resto.
          </h2>
          <p className="max-w-[52ch] text-base leading-relaxed text-muted">
            Escolha o motor e a RAM - credenciais prontas na hora, snapshots e backups automáticos, e métricas no mesmo dashboard dos seus apps.
          </p>
        </div>

        <div data-reveal="" className="vc-reveal">
          <ul className="vc-mesh-list">
            {DATABASES.map((db, i) => (
              <li key={i}>
                <Link
                  href="/databases"
                  className="vc-db-row group grid grid-cols-[var(--db-icon-col,80px)_1fr_auto] items-center gap-4 py-5 pr-[var(--vc-pad-x,16px)] outline-none sm:gap-7"
                >
                  <img
                    alt={db.name}
                    className="size-[30px] justify-self-center object-contain"
                    src={db.icon}
                  />
                  <span className="grid min-w-0 gap-0.5">
                    <span className="text-xl font-semibold tracking-tight text-ink">
                      {db.name}
                    </span>
                    <span className="text-sm text-muted">
                      {db.desc}
                    </span>
                    <span className="font-mono text-xs text-muted">
                      {db.spec}
                    </span>
                  </span>
                  <ArrowRight className="size-5 shrink-0 text-muted transition-transform group-hover:translate-x-1 group-hover:text-ink" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
