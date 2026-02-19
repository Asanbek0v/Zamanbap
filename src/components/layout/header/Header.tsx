import { FC } from "react";
import "./Header.scss";
import logo from "@/assets/LogoZamanbap.png";
import Image from "next/image";
import Link from "next/link";

const Header: FC = () => {
  return (
    <section id="Header">
      <div className="container">
        <div className="Header">
          <Image src={logo} alt="logo" width={210} />
          <nav>
            <Link href="/">Главная</Link>
            <Link href="/catalog">Каталог</Link>
            <Link href="/about">О бренде</Link>
            <Link href="/blog">Блог</Link>
            <Link href="/reviews">Отзывы</Link>
            <Link href="/contact">Контакты</Link>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default Header;
