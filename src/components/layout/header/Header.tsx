"use client";

import { FC, useEffect, useState } from "react";
import "./Header.scss";
import logo from "@/assets/LogoZamanbap.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";

const Header: FC = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const phone = "996555000992";
  const message = encodeURIComponent(
    "Здравствуйте! Хочу узнать подробнее о браслетах Zamanbap."
  );
  const waUrl = `https://wa.me/${phone}?text=${message}`;

  const navLinks = [
    { href: "/", label: "Главная" },
    { href: "/catalog", label: "Каталог" },
    { href: "/about", label: "О нас" },
    { href: "/blog", label: "Журнал" },
    { href: "/reviews", label: "Отзывы" },
    { href: "/contact", label: "Контакты" },
  ];

  return (
    <header id="Header" className={isScrolled ? "isScrolled" : ""}>
      <div className="container">
        <div className="Header">
          <Link href="/" className="Header__logo">
            <Image src={logo} alt="Zamanbap logo" width={190} priority />
          </Link>

          <nav className={`Header__nav ${isOpen ? "isOpen" : ""}`}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`Header__link ${
                  pathname === link.href ? "active" : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <Link
              href={waUrl}
              target="_blank"
              rel="noreferrer"
              className="Header__cta"
            >
              Заказать
            </Link>
          </nav>

          <button
            className="Header__burger"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;