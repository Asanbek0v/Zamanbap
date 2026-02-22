"use client";
import Image from "next/image";
import "./Popular.scss";
import Link from "next/link";

import popularBg from "@/assets/popularbg.png";
import popular1 from "@/assets/popularImage1.jpg";
import popular2 from "@/assets/popularImage2.jpg";
import popular3 from "@/assets/popularImage3.jpg";
import popular4 from "@/assets/popularImage4.jpg";

const items = [
  { img: popular1, title: "Gold Minimal" },
  { img: popular2, title: "Classic Line" },
  { img: popular3, title: "Modern Touch" },
  { img: popular4, title: "Premium Shine" },
];

const Popular = () => {
  return (
    <section id="popular" style={{ backgroundImage: `url(${popularBg.src})` }}>
      <div className="container">
        <div className="popular">
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
                <div className="popularCard__img">
                  <Image
                    src={el.img}
                    alt={el.title}
                    fill
                    style={{ objectFit: "cover" }}
                  />

                  {/* 🔥 ТЕКСТ СҮРӨТТҮН ИЧИНДЕ */}
                  <div className="popularCard__overlay">
                    <h3>{el.title}</h3>
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
      </div>
    </section>
  );
};

export default Popular;