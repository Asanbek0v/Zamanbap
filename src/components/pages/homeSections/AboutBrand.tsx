import { FC } from "react";
import "./AboutBrand.scss";
import Link from "next/link";

const AboutBrand: FC = () => {
  return (
    <section id="AboutBrand" aria-label="О бренде">
      <div className="container">
        {/* HEADER */}
        <div
          className="AboutBrand__head"
          data-aos="zoom-in"
          data-aos-duration="900"
          data-aos-once="true"
        >
          <h2>О бренде</h2>
          <p>Минимализм, качество и характер — в каждой детали</p>
        </div>

        <div className="AboutBrand__grid">
          {/* LEFT */}
          <div
            className="AboutBrand__card"
            data-aos="zoom-in-right"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            <p className="AboutBrand__kicker">ZAMANBAP JEWELRY</p>

            <h3
              className="AboutBrand__title"
              data-aos="zoom-in"
              data-aos-delay="100"
              data-aos-duration="900"
            >
              Украшения, которые подчеркивают стиль
            </h3>

            <p
              className="AboutBrand__desc"
              data-aos="zoom-in"
              data-aos-delay="180"
              data-aos-duration="900"
            >
              Мы создаём браслеты в luxury-минимализме: чистые линии, премиальные
              материалы и аккуратная ручная обработка. Каждая модель проходит
              контроль качества, чтобы вы получали идеальный результат.
            </p>

            {/* FACTS */}
            <div className="AboutBrand__facts">
              <div
                className="AboutBrand__fact"
                data-aos="zoom-in"
                data-aos-delay="250"
              >
                <div className="AboutBrand__factNum">925</div>
                <div className="AboutBrand__factText">серебро</div>
              </div>

              <div
                className="AboutBrand__fact"
                data-aos="zoom-in"
                data-aos-delay="350"
              >
                <div className="AboutBrand__factNum">Handmade</div>
                <div className="AboutBrand__factText">полировка</div>
              </div>

              <div
                className="AboutBrand__fact"
                data-aos="zoom-in"
                data-aos-delay="450"
              >
                <div className="AboutBrand__factNum">Gift</div>
                <div className="AboutBrand__factText">упаковка</div>
              </div>
            </div>

            {/* ACTIONS */}
            <div
              className="AboutBrand__actions"
              data-aos="zoom-in-up"
              data-aos-delay="550"
              data-aos-duration="900"
              data-aos-once="true"
            >
              <Link href="/catalog" className="AboutBrand__btn AboutBrand__btn--gold">
                В каталог <span aria-hidden="true">›</span>
              </Link>

              <Link href="/contact" className="AboutBrand__btn AboutBrand__btn--ghost">
                Связаться
              </Link>
            </div>
          </div>

          {/* RIGHT */}
          <div
            className="AboutBrand__side"
            data-aos="zoom-in-left"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            <div className="AboutBrand__sideGrid">
              <div
                className="AboutBrand__feature"
                data-aos="zoom-in"
                data-aos-delay="150"
              >
                <h6>Почему выбирают нас</h6>
                <p>Точность в деталях, долговечность и чистый premium стиль.</p>
              </div>

              <div
                className="AboutBrand__feature"
                data-aos="zoom-in"
                data-aos-delay="250"
              >
                <h6>Индивидуальный размер</h6>
                <p>Подбираем размер под вас. Есть регулируемые модели.</p>
              </div>

              <div
                className="AboutBrand__feature"
                data-aos="zoom-in"
                data-aos-delay="350"
              >
                <h6>Быстрая доставка</h6>
                <p>Оперативно собираем заказ и отправляем в удобное время.</p>
              </div>
            </div>

            {/* mini CTA */}
            <div className="AboutBrand__miniCta">
              <span>Нужен подбор размера?</span>
              <Link href="/contact">Написать нам</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBrand;