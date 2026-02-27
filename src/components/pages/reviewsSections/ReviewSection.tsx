import { FC } from "react";
import "./ReviewSection.scss";
interface Review {
  id: number;
  name: string;
  initial: string;
  product: string;
  date: string;
  rating: number;
  text: string;
}

const REVIEWS: Review[] = [
  {
    id: 1,
    name: "Назгүл А.",
    initial: "Н",
    product: "Серьги Altyn Drop",
    date: "Янв 2025",
    rating: 5,
    text: "Заказала серьги в подарок маме — она была в слезах от радости. Упаковка роскошная, золото настоящее, работа безупречная!",
  },
  {
    id: 2,
    name: "Мадина Т.",
    initial: "М",
    product: "Браслет Royal",
    date: "Дек 2024",
    rating: 5,
    text: "Муж подарил браслет на годовщину. Носить невозможно снять — настолько удобно сидит. Буду покупать ещё!",
  },
  {
    id: 3,
    name: "Зарина К.",
    initial: "З",
    product: "Колье Wedding",
    date: "Ноя 2024",
    rating: 5,
    text: "Колье на свадьбу — все гости спрашивали откуда. Доставка быстрая, консультант очень помог с выбором.",
  },
  {
    id: 4,
    name: "Гульнара И.",
    initial: "Г",
    product: "Кольцо Tender",
    date: "Окт 2024",
    rating: 4,
    text: "Кольцо прекрасное, очень нежный дизайн. Немного долго ждала доставку, но результат того стоил.",
  },
  {
    id: 5,
    name: "Салтанат Б.",
    initial: "С",
    product: "Серьги Classic",
    date: "Сен 2024",
    rating: 5,
    text: "Покупаю уже третий раз. Качество стабильно высокое, сертификаты подлинности прилагаются.",
  },
  {
    id: 6,
    name: "Асель Ж.",
    initial: "А",
    product: "Набор Grad Set",
    date: "Июн 2024",
    rating: 5,
    text: "Купила набор для дочери на выпускной. Украшения выглядят намного дороже своей цены!",
  },
];
const ReviewSection: FC = () => {
  return (
    <section id="Reviews">
      <div className="container">
        <div className="Reviews" data-aos="fade-up">
          <span>ГОЛОСА НАШИХ КЛИЕНТОВ</span>

          <h2 data-aos="fade-up" data-aos-delay="100">
            Отзывы
          </h2>

          <h3 data-aos="fade-up" data-aos-delay="200">
            Каждое украшение несёт историю. Делитесь своей - нам важно <br />
            каждое мнение!
          </h3>

          <div className="Reviews__linet"></div>

          <div
            className="Reviews__list"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <h4>
              4.9 <br />
              <span>средняя оценка</span>
            </h4>

            <h4>
              847 <br />
              <span>отзывов</span>
            </h4>

            <h4>
              98% <br />
              <span>рекомендуют</span>
            </h4>
          </div>

          <div className="Reviews__linet"></div>
        </div>

        <div className="Review" data-aos="zoom-in" data-aos-delay="200">
          <span>FEATURED</span>

          <div>★ ★ ★ ★ ★</div>

          <p>Кольцо из коллекции Altun превзошло все мои ожидания...</p>

          <p>АЙГЕРИМ КАСЫМОВА – БИШКЕК</p>
        </div>

        <div className="ReviewsGrid">
          {REVIEWS.map((item, index) => (
            <div
              className="ReviewsGrid__Card"
              key={item.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="ReviewsGrid__Card--stars">
                {"★ ".repeat(item.rating)}
              </div>

              <p className="ReviewsGrid__Card--text">{item.text}</p>

              <div className="ReviewsGrid__Card--line" />

              <div className="ReviewsGrid__Card--bottom">
                <div className="ReviewsGrid__Card--bottom__user">
                  <div className="ReviewsGrid__Card--bottom__user--avatar">
                    {item.initial}
                  </div>

                  <div className="ReviewsGrid__Card--bottom__user__info">
                    <h4>{item.name}</h4>
                    <span>{item.product}</span>
                  </div>
                </div>

                <div className="ReviewsGrid__Card--bottom__date">
                  {item.date}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="ReviewForm" data-aos="fade-up" data-aos-delay="200">
          <p>ПОДЕЛИТЕСЬ ОПЫТОМ</p>

          <h2>Оставить отзыв</h2>

          <h3>Ваше мнение помогает нам становиться лучше</h3>

          <form
            className="ReviewForm__form"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="ReviewForm__form--grid">
              <label className="ReviewForm__form--grid__field">
                <span>ВАШЕ ИМЯ</span>
                <input type="text" placeholder="Айгерим" />
              </label>

              <label className="ReviewForm__form--grid__field">
                <span>ГОРОД</span>
                <input type="text" placeholder="Бишкек" />
              </label>

              <label className="ReviewForm__form--grid__full">
                <span>УКРАШЕНИЕ</span>
                <input type="text" placeholder="Название изделия" />
              </label>

              <div className="ReviewForm__form--grid__full">
                <span>ОЦЕНКА</span>

                <div className="ReviewForm__form--grid__full--stars">
                  <button type="button">★</button>
                  <button type="button">★</button>
                  <button type="button">★</button>
                  <button type="button">★</button>
                  <button type="button">★</button>
                </div>
              </div>

              <label className="ReviewForm__form--grid__full">
                <span>ОТЗЫВ</span>
                <textarea placeholder="Расскажите о вашем впечатлении..." />
              </label>
            </div>

            <div className="ReviewForm__form--bottom">
              <button type="button">ОТПРАВИТЬ ОТЗЫВ</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
