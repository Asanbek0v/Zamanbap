import { FC } from "react";
import "./Reviews.scss";

const rewiews = [
  {
    id: 1,
    name: "Айбек",
    text: "Очень аккуратная работа. Браслет выглядит дорого и минималистично.",
  },
  {
    id: 2,
    name: "Бекмырза",
    text: "Отличное качество. Ношу каждый день — ничего не стирается.",
  },
  {
    id: 3,
    name: "Дастан",
    text: "Идеальный подарок. Упаковка — отдельный уровень ",
  },
];

const Reviews: FC = () => {
  return (
    <section id="Reviews">
      <div className="container">
        {/* TOP */}
        <div
          className="Reviews"
          data-aos="zoom-in"
          data-aos-duration="900"
          data-aos-once="true"
        >
          <h2>Отзывы клиентов</h2>
          <p>Что говорят о Zamanbap Jewelry</p>
        </div>

        {/* CARDS */}
        <div className="Reviews--head">
          {rewiews.map((el, idx) => (
            <article
              className="Reviews--head__card"
              key={el.id}
              data-aos="zoom-in"
              data-aos-delay={150 + idx * 140}
              data-aos-duration="900"
              data-aos-once="true"
            >
              <p>{el.text}</p>
              <span>{el.name}</span>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div
          className="Reviews--blog"
          data-aos="zoom-in-up"
          data-aos-delay="200"
          data-aos-duration="900"
          data-aos-once="true"
        >
          <p>Присоединяйтесь к нашим клиентам</p>
          <a href="/catalog">Выбрать браслет</a>
        </div>
      </div>
    </section>
  );
};

export default Reviews;