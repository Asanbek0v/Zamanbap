import { FC } from "react";
import "./AboutBrand.scss";
import Link from "next/link";

const AboutBrand: FC = () => {
  return (
    <section id="AboutBrand">
      <div className="container">
        <div className="AboutBrand">
          <h2>О бренде</h2>
          <p>Минимализм, качество и характер — в каждой детали</p>
        </div>

        <div className="About__card">
          <div className="About__card--text">
            <p>ZAMANBAP JEWELRY</p>
            <h3>Украшения, которые подчеркивают стиль</h3>
            <p>
              Мы создаём браслеты в luxury-минимализме: чистые линии,
              премиальные материалы и аккуратная ручная обработка. Каждая модель
              проходит контроль качества, чтобы вы получали идеальный результат.
            </p>

            <div className="About__card--text__facts">
              <div className="About__card--text__facts--fact">
                <h6>925</h6>
                <span>серебро</span>
              </div>
              <div className="About__card--text__facts--fact">
                <h6>Handmade</h6>
                <span>полировка</span>
              </div>
              <div className="About__card--text__facts--fact">
                <h6>Gift</h6>
                <span>упаковка</span>
              </div>
            </div>

            <div className="About__card--text__actions">
              <Link href="/catalog" className="btn">
                В каталог
              </Link>
              <Link href="/contact" className="btn2">
                Связаться
              </Link>
            </div>
          </div>

          <div className="About__card--cards">
            <div className="About__card--cards__block">
              <h6>Почему выбирают нас</h6>
              <p>Точность в деталях, долговечность и чистый premium стиль.</p>
            </div>

            <div className="About__card--cards__block">
              <h6>Индивидуальный размер</h6>
              <p>Подбираем размер под вас. Есть регулируемые модели.</p>
            </div>

            <div className="About__card--cards__block">
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
