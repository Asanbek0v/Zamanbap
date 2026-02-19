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
        <div className="Reviews">
          <h2>Отзывы клиентов</h2>
          <p>Что говорят о Zamanbap Jewelry</p>
        </div>
        <div className="Reviews--head">
          {rewiews.map((el) => (
            <article className="Reviews--head__card" key={el.id}>
              <p>{el.text}</p>
              <span>{el.name}</span>
            </article>
          ))}
        </div>
        <div className="Reviews--blog">
          <p>Присоединяйтесь к нашим клиентам</p>
          <a href="/catalog">Выбрать браслет</a>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
