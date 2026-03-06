"use client";

import "./Catalog.scss";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import catalogPhoto from "@/assets/5photocatalog.png";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useMemo } from "react";

type CatalogItem = {
  id: number;
  title: string;
  badge: string;
  desc: string;
  img: any;
};

const Catalog = () => {
  const phone = "996555000992";
  const message = encodeURIComponent(
    "Здравствуйте! Хочу узнать цену и сроки. Интересует изделие: Каталог ювелирных изделий. Подскажите, пожалуйста.\n\n" +
      "Саламатсызбы! Баасын жана даярдоо мөөнөтүн билгим келет. Мени «Зер буюмдардын каталогу» кызыктырат. Сураныч, маалымат бериңиз.",
  );

  const url = `https://wa.me/${phone}?text=${message}`;

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out",
      once: true,
      offset: 80,
    });
    AOS.refresh();
  }, []);

  const items: CatalogItem[] = useMemo(
    () => [
      {
        id: 1,
        title: "Серебро 925",
        badge: "Женский",
        desc: "Авторское украшение, выполненное вручную. Можно уточнить цену, размеры и сроки изготовления — просто напишите нам в WhatsApp.",
        img: catalogPhoto,
      },
      {
        id: 2,
        title: "Серебро 925",
        badge: "Женский",
        desc: "Авторское украшение, выполненное вручную. Можно уточнить цену, размеры и сроки изготовления — просто напишите нам в WhatsApp.",
        img: catalogPhoto,
      },
      {
        id: 3,
        title: "Серебро 925",
        badge: "Женский",
        desc: "Авторское украшение, выполненное вручную. Можно уточнить цену, размеры и сроки изготовления — просто напишите нам в WhatsApp.",
        img: catalogPhoto,
      },
      {
        id: 4,
        title: "Серебро 925",
        badge: "Женский",
        desc: "Авторское украшение, выполненное вручную. Можно уточнить цену, размеры и сроки изготовления — просто напишите нам в WhatsApp.",
        img: catalogPhoto,
      },
      {
        id: 5,
        title: "Серебро 925",
        badge: "Женский",
        desc: "Авторское украшение, выполненное вручную. Можно уточнить цену, размеры и сроки изготовления — просто напишите нам в WhatsApp.",
        img: catalogPhoto,
      },
      {
        id: 6,
        title: "Серебро 925",
        badge: "Женский",
        desc: "Авторское украшение, выполненное вручную. Можно уточнить цену, размеры и сроки изготовления — просто напишите нам в WhatsApp.",
        img: catalogPhoto,
      },
      {
        id: 7,
        title: "Серебро 925",
        badge: "Женский",
        desc: "Авторское украшение, выполненное вручную. Можно уточнить цену, размеры и сроки изготовления — просто напишите нам в WhatsApp.",
        img: catalogPhoto,
      },
      {
        id: 8,
        title: "Серебро 925",
        badge: "Женский",
        desc: "Авторское украшение, выполненное вручную. Можно уточнить цену, размеры и сроки изготовления — просто напишите нам в WhatsApp.",
        img: catalogPhoto,
      },
    ],
    [],
  );

  return (
    <section id="catalog" data-aos="fade-up">
      <div className="container">
        <div className="catalog--wrapper">
          <span className="line" data-aos="fade-right" />
          <h1 data-aos="zoom-in">Каталог ювелирных изделий</h1>
          <span className="line" data-aos="fade-left" />
        </div>

        <div className="catalog">
          <div className="catalog--left">
            <div className="catalog--left__top" data-aos="fade-up">
              <p>
                Перед вами коллекция авторских украшений кыргызских мастеров. Мы
                работаем с серебром, золотом и другими благородными металлами,
                сочетая традиционные орнаменты с современным дизайном. Каждое
                изделие создаётся вручную с вниманием к деталям, сохраняя
                национальный характер и культурное наследие. Мы стремимся
                передать в металле силу традиций, глубину символов и
                индивидуальность каждого украшения.
              </p>
            </div>

            {items.map((item, i) => (
              <div
                key={item.id}
                className="catalog--left__card"
                data-aos="fade-up"
                data-aos-delay={i * 90} // ✅ автомат delay
              >
                <div className="catalog--left__cardImage">
                  <Image
                    src={item.img}
                    alt="Ювелирное изделие"
                    width={420}
                    height={320}
                  />
                </div>

                <div className="catalog--left__cardBody">
                  <div className="catalog--left__cardHead">
                    <h2>{item.title}</h2>
                    <span className="badge">{item.badge}</span>
                  </div>

                  <p>{item.desc}</p>

                  <a
                    className="waMini"
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaWhatsapp />
                    Узнать цену в WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT */}
          <aside className="catalog--right" data-aos="fade-left">
            <h2>Как заказать?</h2>
            <span>1. Выбираем изделие из каталога</span>
            <span>2. Пишем нам в WhatsApp</span>
            <h3>* Задать вопрос, узнать цену, сделать заказ...</h3>

            <a href={url} target="_blank" rel="noopener noreferrer">
              <FaWhatsapp /> Заказать в WhatsApp
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Catalog;
