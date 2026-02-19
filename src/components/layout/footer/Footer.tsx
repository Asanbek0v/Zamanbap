import { FC } from "react";
import "./Footer.scss";
import Link from "next/link";

const Footer: FC = () => {
  return (
    <footer id="Footer">
      <div className="container">
        <div className="Footer">
          <div className="Footer__brand">
            <h3>ZAMANBAP</h3>
            <p>Минимализм. Качество. Характер.</p>
          </div>

          <div className="Footer__nav">
            <Link href="/">Главная</Link>
            <Link href="/catalog">Каталог</Link>
            <Link href="/about">О бренде</Link>
            <Link href="/faq">FAQ</Link>
          </div>

          <div className="Footer__contact">
            <a href="https://wa.me/996704210706" target="_blank">
              WhatsApp
            </a>
            <a
              href="https://www.instagram.com/zamanbap.jewelry/"
              target="_blank"
            >
              Instagram
            </a>
            <span>Бишкек, Кыргызстан</span>
          </div>

          <Link href={"/catalog"} className="Footer__btn">
            Сделать заказ
          </Link>
        </div>

        <div className="Footer__bottom">
          © {new Date().getFullYear()} Zamanbap Jewelry
        </div>
      </div>
    </footer>
  );
};

export default Footer;
