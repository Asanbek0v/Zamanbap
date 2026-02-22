"use client";
import { FC, useState } from "react";
import "./Faq.scss";
import { FiMinus, FiPlus } from "react-icons/fi";

const data = [
  {
    title: "Из какого материала изготовлены браслеты?",
    content:
      "Мы используем серебро 925 пробы и качественные гипоаллергенные материалы.",
  },
  {
    title: "Как выбрать размер?",
    content:
      "У нас есть универсальные модели, а также возможность изготовления по индивидуальному размеру.",
  },
  {
    title: "Сколько времени занимает доставка?",
    content: "По Бишкеку доставка занимает 1 день, в другие города — 2–3 дня.",
  },
  {
    title: "Можно ли заказать в качестве подарка?",
    content:
      "Да, каждый заказ упаковывается в премиальную подарочную упаковку.",
  },
];

const Faq: FC = () => {
  const [open, setOpen] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpen(open === index ? null : index);
  };

  return (
    <section id="Faq">
      <div className="container">
        {/* HEADER */}
        <div
          className="Faq"
          data-aos="zoom-in"
          data-aos-duration="900"
          data-aos-once="true"
        >
          <h2>Часто задаваемые вопросы</h2>
          <p>Информация, которую стоит знать перед оформлением заказа</p>
        </div>

        {/* LIST */}
        <div className="Faq__list">
          {data.map((el, index) => (
            <div
              key={index}
              className="Faq__list--card"
              data-aos="zoom-in"
              data-aos-delay={150 + index * 120}
              data-aos-duration="900"
              data-aos-once="true"
            >
              <div
                className="Faq__list--card__block"
                onClick={() => toggle(index)}
              >
                <h4>{el.title}</h4>
                <span>
                  {open === index ? <FiMinus /> : <FiPlus />}
                </span>
              </div>

              <div
                className={`accordion__body ${
                  open === index ? "show" : ""
                }`}
              >
                <p>{el.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;