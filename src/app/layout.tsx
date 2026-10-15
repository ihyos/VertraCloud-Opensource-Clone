import type { Metadata } from "next";
import "./vertra.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Deploy de aplicações e bancos de dados | Vertra Cloud",
  description:
    "Plataforma brasileira de hospedagem de aplicações (PaaS): deploy do GitHub ou de um zip, containers isolados, bancos gerenciados e bots 24/7.",
  openGraph: {
    title: "Deploy de aplicações e bancos de dados | Vertra Cloud",
    description:
      "Hospede aplicações, APIs, sites e bots em containers isolados, com bancos gerenciados e snapshots. Planos a partir de R$ 1,99/mês, pagos por Pix.",
    url: "https://vertracloud.app/pt-br",
    siteName: "Vertra Cloud",
    locale: "pt_BR",
    type: "website",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="dark">
      <body className="antialiased bg-paper text-ink min-h-screen relative selection:bg-accent/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
