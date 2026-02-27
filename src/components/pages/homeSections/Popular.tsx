"use client";

import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import "./Popular.scss";

import popularBg from "@/assets/popularbg.png";
import popular1 from "@/assets/popularImage1.jpg";
import popular2 from "@/assets/popularImage2.jpg";
import popular3 from "@/assets/popularImage3.jpg";
import popular4 from "@/assets/popularImage4.jpg";

type PopularItem = {
  img: StaticImageData;
  title: string;
  tag?: string;
};

const items: PopularItem[] = [
  { img: popular1, title: "Золотой Минимальный", tag: "Хит сезона" },
  { img: popular2, title: "Классическая линия", tag: "Хит продаж" },
  { img: popular3, title: "Современное прикосновение", tag: "Новый стиль" },
  { img: popular4, title: "Премиум блеск", tag: "Премиум" },
];

export default function Popular() {
  return (
    <section
      id="popular"
      className="popularSection"
      style={{ ["--popular-bg" as any]: `url(${popularBg.src})` }}
      aria-label="Популярные браслеты"
    >
      <div className="container popular">
        {/* TOP */}
        <div
          className="popular__top"
          data-aos="zoom-in"
          data-aos-duration="900"
          data-aos-once="true"
        >
          <h2>Популярные браслеты</h2>
          <p>Самые востребованные модели этого сезона.</p>
        </div>

        {/* GRID */}
        <div className="popular__grid">
          {items.map((el, idx) => (
            <article
              className="popularCard"
              key={idx}
              data-aos="zoom-in"
              data-aos-delay={150 + idx * 120}
              data-aos-duration="900"
              data-aos-once="true"
            >
              <div className="popularCard__media">
                <Image
                  src={el.img}
                  alt={el.title}
                  fill
                  sizes="(max-width: 600px) 92vw, (max-width: 1100px) 45vw, 320px"
                  className="popularCard__img"
                  priority={idx === 0}
                />

                <div className="popularCard__shade" />

                {el.tag && <span className="popularCard__tag">{el.tag}</span>}

                <div className="popularCard__content">
                  <h3 className="popularCard__title">{el.title}</h3>

                  <Link href="/catalog" className="popularCard__cta">
                    Смотреть <span aria-hidden="true">›</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* BOTTOM */}
        <div
          className="popular__bottom"
          data-aos="zoom-in-up"
          data-aos-delay="200"
          data-aos-duration="900"
          data-aos-once="true"
        >
          <Link href="/catalog" className="popular__btn">
            Смотреть каталог
          </Link>
        </div>
      </div>
    </section>
  );
}