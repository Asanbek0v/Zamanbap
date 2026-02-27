import { FC } from "react";
import "./Reviews.scss";
import Link from "next/link";

type Review = {
  id: number;
  name: string;
  text: string;
  rate?: number; // 1..5
};

const reviews: Review[] = [
  {
    id: 1,
    name: "Айбек",
    text: "Очень аккуратная работа. Браслет выглядит дорого и минималистично.",
    rate: 5,
  },
  {
    id: 2,
    name: "Бекмырза",
    text: "Отличное качество. Ношу каждый день — ничего не стирается.",
    rate: 5,
  },
  {
    id: 3,
    name: "Дастан",
    text: "Идеальный подарок. Упаковка — отдельный уровень.",
    rate: 5,
  },
];

const Stars = ({ value = 5 }: { value?: number }) => {
  const n = Math.max(0, Math.min(5, value));
  return (
    <div className="Reviews__stars" aria-label={`Рейтинг ${n} из 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={`Reviews__star ${i < n ? "is-on" : ""}`}>
          ★
        </span>
      ))}
    </div>
  );
};

const Reviews: FC = () => {
  return (
    <section id="Reviews" aria-label="Отзывы клиентов">
      <div className="container">
        {/* TOP */}
        <div
          className="Reviews__top"
          data-aos="zoom-in"
          data-aos-duration="900"
          data-aos-once="true"
        >
          <h2>Отзывы клиентов</h2>
          <p>Что говорят о Zamanbap Jewelry</p>
        </div>

        {/* GRID */}
        <div className="Reviews__grid">
          {reviews.map((el, idx) => {
            const initial = el.name?.trim()?.[0]?.toUpperCase() || "Z";
            return (
              <article
                className="ReviewsCard"
                key={el.id}
                data-aos="zoom-in"
                data-aos-delay={150 + idx * 140}
                data-aos-duration="900"
                data-aos-once="true"
              >
                <div className="ReviewsCard__head">
                  <div className="ReviewsCard__avatar" aria-hidden="true">
                    {initial}
                  </div>
                  <div className="ReviewsCard__meta">
                    <div className="ReviewsCard__name">{el.name}</div>
                    <Stars value={el.rate ?? 5} />
                  </div>
                  <div className="ReviewsCard__quote" aria-hidden="true">
                    “”
                  </div>
                </div>

                <p className="ReviewsCard__text">{el.text}</p>
              </article>
            );
          })}
        </div>

        {/* CTA */}
        <div
          className="Reviews__cta"
          data-aos="zoom-in-up"
          data-aos-delay="200"
          data-aos-duration="900"
          data-aos-once="true"
        >
          <div className="Reviews__ctaText">
            <h3>Присоединяйтесь к нашим клиентам</h3>
            <p>Выберите браслет и мы поможем с размером и доставкой.</p>
          </div>

          <div className="Reviews__ctaActions">
            <Link href="/catalog" className="Reviews__btn Reviews__btn--gold">
              Выбрать браслет <span aria-hidden="true">›</span>
            </Link>
            <Link href="/contact" className="Reviews__btn Reviews__btn--ghost">
              Задать вопрос
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;