import React from "react";

const STACKS = [
  { name: "JavaScript", icon: "/icons/languages/javascript.svg" },
  { name: "Python", icon: "/icons/languages/python.svg" },
  { name: "React", icon: "/icons/languages/react.svg" },
  { name: "Go", icon: "/icons/languages/golang.svg" },
  { name: "PHP", icon: "/icons/languages/php.svg" },
  { name: "Vite", icon: "/icons/languages/vitejs.svg" },
  { name: "Next.js", icon: "/icons/languages/nextjs.svg" },
  { name: "Bun", icon: "/icons/languages/bun.svg" },
  { name: "n8n", icon: "/icons/languages/n8n.svg" },
  { name: "Redis", icon: "/icons/databases/redis.png" },
  { name: "MongoDB", icon: "/icons/databases/mongodb.png" },
  { name: "PostgreSQL", icon: "/icons/databases/postgresql.png" },
  { name: "MySQL", icon: "/icons/databases/mysql.png" },
];

export function TechMarquee() {
  return (
    <section className="vc-section flex flex-col gap-6 py-8 border-y border-line overflow-hidden">
      <i aria-hidden="true" className="vc-dia" />
      <p className="vc-eyebrow text-center">Roda o que você já usa</p>

      <div
        className="w-full overflow-hidden"
        style={{
          WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
        aria-label="Linguagens e bancos de dados suportados"
      >
        <div className="flex animate-marquee whitespace-nowrap gap-8 items-center">
          {STACKS.concat(STACKS).map((item, i) => (
            <span key={i} className="inline-flex items-center gap-2 font-mono text-sm text-ink-2 shrink-0">
              <img
                alt={item.name}
                loading="lazy"
                width="22"
                height="22"
                className="size-[22px] object-contain"
                src={item.icon}
              />
              <span>{item.name}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
