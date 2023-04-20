import "@/styles/global.scss";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Frases Desmotivacionais para Desenvolvedores",
  description: 'Frases "desmotivacionais" para desenvolvedores',
  keywords: "frases desmotivacionais, desenvolvedores, gerador de frases, humor para programadores",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <Head>
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content="A friendly reminder to all Developers, Designers, CEO's" />
        <meta property="og:url" content="https://desmotivacional.com" />
        <meta property="og:site_name" content="Frases Desmotivacionais para Desenvolvedores" />
        <meta property="og:type" content="website" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
