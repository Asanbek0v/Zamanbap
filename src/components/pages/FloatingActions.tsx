"use client";

import { useEffect, useRef, useState } from "react";
import { FaWhatsapp, FaRegCommentDots } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";
import "./FloatingActions.scss";

export default function FloatingActions() {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement | null>(null);

  // outside click -> close
  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (!wrapRef.current) return;
      if (!wrapRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, []);

  // ESC -> close
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const phone = "996555000992";
  const message = encodeURIComponent(
    "Здравствуйте! Хочу узнать цену и сроки. Подскажите, пожалуйста.",
  );
  const waUrl = `https://wa.me/${phone}?text=${message}`;

  return (
    <div className={`fab ${open ? "is-open" : ""}`} ref={wrapRef}>
      {/* small actions */}
      <div className="fab__stack" aria-hidden={!open}>
        <a
          className="fab__btn fab__btn--wa"
          href={waUrl}
          target="_blank"
          rel="noreferrer"
          title="WhatsApp"
        >
          <FaWhatsapp />
        </a>

        <Link
          className="fab__btn fab__btn--msg"
          href="/contact"
          title="Оставить заявку"
          onClick={() => setOpen(false)}
        >
          <FaRegCommentDots />
        </Link>
      </div>

      {/* main button */}
      <button
        type="button"
        className="fab__main"
        onClick={() => setOpen((v) => !v)}
        aria-label="Открыть меню"
        aria-expanded={open}
      >
        <span className="fab__icon">{open ? <FiX /> : <FiMenu />}</span>
      </button>
    </div>
  );
}