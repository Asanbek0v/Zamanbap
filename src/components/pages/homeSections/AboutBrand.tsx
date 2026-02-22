import { FC } from "react";
import "./AboutBrand.scss";
import Link from "next/link";

const AboutBrand: FC = () => {
  return (
    <section id="AboutBrand">
      <div className="container">
        {/* HEADER */}
        <div
          className="AboutBrand"
          data-aos="zoom-in"
          data-aos-duration="900"
          data-aos-once="true"
        >
          <h2>О бренде</h2>
          <p>Минимализм, качество и характер — в каждой детали</p>
        </div>

        <div className="About__card">
          {/* LEFT TEXT */}
          <div
            className="About__card--text"
            data-aos="zoom-in-right"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            <p>ZAMANBAP JEWELRY</p>

            <h3
              data-aos="zoom-in"
              data-aos-delay="100"
              data-aos-duration="900"
            >
              Украшения, которые подчеркивают стиль
            </h3>

            <p
              data-aos="zoom-in"
              data-aos-delay="180"
              data-aos-duration="900"
            >
              Мы создаём браслеты в luxury-минимализме: чистые линии,
              премиальные материалы и аккуратная ручная обработка. Каждая модель
              проходит контроль качества, чтобы вы получали идеальный результат.
            </p>

            {/* FACTS */}
            <div className="About__card--text__facts">
              <div
                className="About__card--text__facts--fact"
                data-aos="zoom-in"
                data-aos-delay="250"
              >
                <h6>925</h6>
                <span>серебро</span>
              </div>

              <div
                className="About__card--text__facts--fact"
                data-aos="zoom-in"
                data-aos-delay="350"
              >
                <h6>Handmade</h6>
                <span>полировка</span>
              </div>

              <div
                className="About__card--text__facts--fact"
                data-aos="zoom-in"
                data-aos-delay="450"
              >
                <h6>Gift</h6>
                <span>упаковка</span>
              </div>
            </div>

            {/* BUTTONS */}
            <div
              className="About__card--text__actions"
              data-aos="zoom-in-up"
              data-aos-delay="550"
              data-aos-duration="900"
            >
              <Link href="/catalog" className="btn">
                В каталог
              </Link>
              <Link href="/contact" className="btn2">
                Связаться
              </Link>
            </div>
          </div>

          {/* RIGHT CARDS */}
          <div
            className="About__card--cards"
            data-aos="zoom-in-left"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            <div
              className="About__card--cards__block"
              data-aos="zoom-in"
              data-aos-delay="150"
            >
              <h6>Почему выбирают нас</h6>
              <p>Точность в деталях, долговечность и чистый premium стиль.</p>
            </div>

            <div
              className="About__card--cards__block"
              data-aos="zoom-in"
              data-aos-delay="250"
            >
              <h6>Индивидуальный размер</h6>
              <p>Подбираем размер под вас. Есть регулируемые модели.</p>
            </div>

            <div
              className="About__card--cards__block"
              data-aos="zoom-in"
              data-aos-delay="350"
            >
              <h6>Быстрая доставка</h6>
              <p>Оперативно собираем заказ и отправляем в удобное время.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBrand;