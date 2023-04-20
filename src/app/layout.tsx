import "@/styles/global.scss";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Frases Desmotivacionais para Desenvolvedores",
  description: 'Frases "desmotivacionais" para desenvolvedores',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <Head>
        <title>Frases Desmotivacionais para Desenvolvedores - Gerador de Frases</title>
        <meta
          name="description"
          content="O Gerador de Frases Desmotivacionais para Desenvolvedores é a ferramenta perfeita para dar uma pausa no seu trabalho de programação. Divirta-se com as nossas frases engraçadas e desmotivadoras!"
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="frases desmotivacionais, desenvolvedores, gerador de frases, humor para programadores"
        />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
