import { FC } from "react";
import "./Footer.scss";
import Link from "next/link";

const Footer: FC = () => {
  return (
    <footer id="Footer" data-aos="fade-up">
      <div className="container">
        <div className="Footer">
          <div
            className="Footer__brand"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h3>ZAMANBAP</h3>
            <p>Минимализм. Качество. Характер.</p>
          </div>

          <div className="Footer__nav" data-aos="fade-up" data-aos-delay="200">
            <Link href="/">Главная</Link>
            <Link href="/catalog">Каталог</Link>
            <Link href="/about">О бренде</Link>
            <Link href="/faq">FAQ</Link>
          </div>

          <div
            className="Footer__contact"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <a
              href="https://wa.me/996704210706"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>

            <a
              href="https://www.instagram.com/zamanbap.jewelry/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>

            <span>Бишкек, Кыргызстан</span>
          </div>

          <Link
            href="/catalog"
            className="Footer__btn"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            Сделать заказ
          </Link>
        </div>

        <div className="Footer__bottom" data-aos="fade-up" data-aos-delay="500">
          © {new Date().getFullYear()} Zamanbap Jewelry
        </div>
      </div>
    </footer>
  );
};

export default Footer;
