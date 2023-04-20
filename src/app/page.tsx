"use client";
import { ThemeProvider, useThemeContext } from "@/context/ThemeContext";
import { PHRASES } from "@/helpers/phrases";
import { Noto_Serif } from "next/font/google";
import { useEffect, useState } from "react";
import * as Icon from "react-feather";

import { TostProvider } from "@/context/ToastContext";
import { toast } from "react-toastify";
import styles from "./page.module.scss";

const notoSerif = Noto_Serif({ weight: "400", subsets: ["latin"] });

const getRandomPhrase = () => {
  const index = Math.floor(Math.random() * PHRASES.length);
  return PHRASES[index];
};

const HomePage = () => {
  const [phrase, setPhrase] = useState("");
  const { theme, setTheme } = useThemeContext();

  const handleClickOrPressSpace = (event: { type: string; code?: string }) => {
    if (event.type === "click" || event?.code == "Space") {
      setPhrase(getRandomPhrase());
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleClickOrPressSpace);
    setPhrase(getRandomPhrase());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleToggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const handleCopy = () => {
    navigator.clipboard
      .writeText(phrase)
      .then(() => {
        toast.info("Copiado!", {
          toastId: "copy",
        });
      })
      .catch((_) => {});
  };

  if (!phrase) {
    return <div></div>;
  }

  return (
    <main className={styles.main} onKeyDown={handleClickOrPressSpace}>
      <button className={styles["toggle-theme"]} onClick={handleToggleTheme}>
        {theme === "dark" ? <Icon.Sun stroke="#ffb200" /> : <Icon.Moon />}
      </button>
      <div className={styles.content}>
        <h3 className={styles.title}>Frase desmotivacional do dia:</h3>
        <h2 className={[styles.phrase, notoSerif.className].join(" ")}>
          {phrase}
          <button className={styles.copy} onClick={handleCopy}>
            <Icon.Copy />
          </button>
        </h2>
        <div className={styles.widget}>
          <span>Clique aqui ou pressione</span>
          <button className={styles.space} onClick={handleClickOrPressSpace}>
            Espaço
          </button>
          <span>para gerar uma nova frase</span>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles["footer-item"]}>
          <span>Compartilhar:</span>
          <a
            href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdesmotivacional.dev&t=Frase%20desmotivacional%20do%20dia"
            target="_blank"
            rel="noopener noreferrer"
            title="Share on Facebook"
            className={styles.facebook}
          >
            <Icon.Facebook />
          </a>
          <a
            href="https://twitter.com/intent/tweet?source=https%3A%2F%2Fdesmotivacional.dev&text=Frase%20desmotivacional%20do%20dia%3A%20https%3A%2F%2Fdesmotivacional.dev"
            target="_blank"
            rel="noopener noreferrer"
            title="Tweet"
            className={styles.twitter}
          >
            <Icon.Twitter />
          </a>
        </div>
        <div className={styles["footer-item"]}>
          <span>Source:</span>
          <a href="" target="_blank" rel="noopener noreferrer" title="View source on Github" className={styles.github}>
            <Icon.GitHub />
          </a>
        </div>
      </div>
    </main>
  );
};

export default function Home() {
  return (
    <ThemeProvider>
      <TostProvider>
        <HomePage />
      </TostProvider>
    </ThemeProvider>
  );
}
