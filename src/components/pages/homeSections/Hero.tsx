"use client";

import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
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

export default function Hero() {
  const items: HeroItem[] = useMemo(
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

  useEffect(() => {
    const id = window.setInterval(() => {
      setActive((p) => (p + 1) % items.length);
    }, 4500);
    return () => window.clearInterval(id);
  }, [items.length]);

  return (
    <section id="hero" className="hero" aria-label="Главный блок">
      {/* BG */}
      <div className="hero__bg">
        {items.map((it, idx) => (
          <div
            key={idx}
            className={`hero__bg-slide ${active === idx ? "is-active" : ""}`}
          >
            <Image
              src={it.bg}
              alt=""
              fill
              priority={idx === 0}
              sizes="100vw"
              quality={90}
              className="hero__bg-img"
            />
          </div>
        ))}
        <div className="hero__bg-overlay" />
      </div>

      <div className="container hero__layout">
        {/* LEFT */}
        <header className="hero__left heroPop heroPop--1">
          <div className="hero__pill heroPop heroPop--2">ZAMANBAP Jewelry</div>

          <h1 className="hero__title heroPop heroPop--3">
            ZAMANBAP <span className="hero__title-accent">Коллекция</span>
          </h1>

          <p className="hero__desc heroPop heroPop--4">
            Премиальные украшения: орнамент, стиль и качество. Каждая коллекция
            — со своим характером и историей.
          </p>

          <div className="hero__actions heroPop heroPop--5">
            <Link className="hero__btn hero__btn--gold" href="/catalog">
              Каталог <span aria-hidden="true">›</span>
            </Link>
            <Link className="hero__btn hero__btn--ghost" href="/contact">
              Контакты
            </Link>
          </div>
        </header>

        {/* RIGHT */}
        <div className="hero__right heroPop heroPop--2">
          <div className="hero__dots heroPop heroPop--3">
            {items.map((_, i) => (
              <button
                key={i}
                className={`hero__dot ${active === i ? "is-active" : ""}`}
                onClick={() => setActive(i)}
                aria-label={`Слайд ${i + 1}`}
              />
            ))}
          </div>

          <div className="hero__grid">
            {items.map((it, idx) => (
              <button
                key={idx}
                className={`hero__tile heroPop heroPop--tile ${
                  active === idx ? "is-active" : ""
                }`}
                style={{ animationDelay: `${180 + idx * 120}ms` }}
                onClick={() => setActive(idx)}
                aria-label={`Карточка ${idx + 1}`}
              >
                <div className="hero__tile-media">
                  <Image
                    src={it.card}
                    alt={it.title || `card-${idx + 1}`}
                    fill
                    sizes="(max-width: 900px) 44vw, 260px"
                    quality={90}
                    className="hero__tile-img"
                  />
                  <div className="hero__tile-shade" />
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