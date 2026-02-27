"use client";

import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import "./Hero.scss";

import bg1 from "@/assets/1photohero.png";
import bg2 from "@/assets/2photohero.png";
import bg3 from "@/assets/3photohero.png";
import bg4 from "@/assets/4photohero.png";
import bg5 from "@/assets/5photohero.png";

import heroImg1 from "@/assets/heroImg1.jpg";
import heroImg2 from "@/assets/heroImg2.jpg";
import heroImg4 from "@/assets/heroImg4.jpg";
import heroPhoto3 from "@/assets/herophoto3.jpg";
import heroPhoto5 from "@/assets/photo.jpg";

type HeroItem = {
  bg: StaticImageData;
  card: StaticImageData;
  title: string;
};

const AUTOPLAY_MS = 5200;

export default function Hero() {
  const items = useMemo<HeroItem[]>(
    () => [
      { card: heroImg2, bg: bg1, title: "" },
      { card: heroImg1, bg: bg5, title: "" },
      { card: heroImg4, bg: bg2, title: "" },
      { card: heroPhoto3, bg: bg3, title: "" },
      { card: heroPhoto5, bg: bg4, title: "" },
    ],
    [],
  );

  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const timerRef = useRef<number | null>(null);

  const goTo = useCallback(
    (index: number) => {
      setActive((prev) => {
        const next = ((index % items.length) + items.length) % items.length;
        return prev === next ? prev : next;
      });
    },
    [items.length],
  );

  const next = useCallback(() => {
    setActive((p) => (p + 1) % items.length);
  }, [items.length]);

  const prev = useCallback(() => {
    setActive((p) => (p - 1 + items.length) % items.length);
  }, [items.length]);

  // autoplay + respect reduced motion
  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

    if (prefersReduced || isPaused) return;

    timerRef.current = window.setInterval(next, AUTOPLAY_MS);

    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
      timerRef.current = null;
    };
  }, [isPaused, next]);

  // keyboard support
  const onKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLElement>) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    },
    [next, prev],
  );

  // WhatsApp CTA (конверсия)
  const phone = "996555000992"; // <-- өзүңдүкүн кой
  const message = encodeURIComponent(
    "Здравствуйте! Хочу узнать цену и сроки. Интересует браслет/коллекция Zamanbap. Подскажите, пожалуйста.",
  );
  const waUrl = `https://wa.me/${phone}?text=${message}`;

  const current = items[active];

  return (
    <section
      id="hero"
      className="hero"
      aria-label="Главный блок"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={() => setIsPaused(false)}
      onKeyDown={onKeyDown}
      tabIndex={-1}
    >
      {/* BG (only active, performance) */}
      <div className="hero__bg" aria-hidden="true">
        <Image
          key={active}
          src={current.bg}
          alt=""
          fill
          priority
          sizes="100vw"
          quality={90}
          className="hero__bg-img"
        />
        <div className="hero__bg-overlay" />
      </div>

      <div className="container hero__layout">
        {/* LEFT */}
        <header className="hero__left">
          <div className="hero__pill">ZAMANBAP Jewelry</div>

          <h1 className="hero__title">
            ZAMANBAP <span className="hero__title-accent">Коллекция</span>
          </h1>

          <p className="hero__desc">
            Премиальные украшения: орнамент, стиль и качество. Каждая коллекция —
            со своим характером и историей.
          </p>

          <div className="hero__actions">
            <Link
              className="hero__btn hero__btn--gold"
              href={waUrl}
              target="_blank"
              rel="noreferrer"
            >
              Написать в WhatsApp <span aria-hidden="true">›</span>
            </Link>

            <Link className="hero__btn hero__btn--ghost" href="/catalog">
              Смотреть каталог
            </Link>
          </div>

          <div className="hero__meta">
            <span className="hero__badge">925 серебро / золото</span>
            <span className="hero__badge">Ручная работа</span>
            <span className="hero__badge">Упаковка в подарок</span>
          </div>

          {/* Optional: show current selection */}
          {/* <div className="hero__current" aria-live="polite">
            Сейчас: <span>{current.title}</span>
          </div> */}
        </header>

        {/* RIGHT */}
        <div className="hero__right">
          <div className="hero__top">
            <div className="hero__dots" role="tablist" aria-label="Слайды">
              {items.map((it, i) => (
                <button
                  key={i}
                  type="button"
                  className={`hero__dot ${active === i ? "is-active" : ""}`}
                  onClick={() => goTo(i)}
                  aria-label={`Слайд ${i + 1}: ${it.title}`}
                  aria-current={active === i ? "true" : "false"}
                />
              ))}
            </div>

            <div className="hero__nav">
              <button
                type="button"
                className="hero__navbtn"
                onClick={prev}
                aria-label="Предыдущий слайд"
              >
                ‹
              </button>
              <button
                type="button"
                className="hero__navbtn"
                onClick={next}
                aria-label="Следующий слайд"
              >
                ›
              </button>
            </div>
          </div>

          <div className="hero__grid" aria-label="Коллекции">
            {items.map((it, idx) => (
              <button
                key={idx}
                type="button"
                className={`hero__tile ${active === idx ? "is-active" : ""}`}
                onClick={() => goTo(idx)}
                aria-label={`Открыть: ${it.title}`}
              >
                <div className="hero__tile-media">
                  <Image
                    src={it.card}
                    alt={it.title}
                    fill
                    sizes="(max-width: 960px) 44vw, 260px"
                    quality={90}
                    className="hero__tile-img"
                  />
                  <div className="hero__tile-shade" />

                  {/* ACTIVE BADGE */}
                  {/* {active === idx && (
                    <span className="hero__active-badge">Сейчас</span>
                  )} */}

                  <div className="hero__tile-cta">Смотреть</div>
                </div>

                <div className="hero__tile-title">{it.title}</div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}