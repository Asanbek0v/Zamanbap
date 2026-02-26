"use client";

import "./Catalog.scss";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import catalogPhoto from "@/assets/5photocatalog.png";

const Catalog = () => {
  const phone = "996222822620";
  const message = encodeURIComponent(
    "Здравствуйте! Хочу узнать цену и сроки. Интересует изделие: Каталог ювелирных изделий. Подскажите, пожалуйста.",
  );
  const url = `https://wa.me/${phone}?text=${message}`;

  return (
    <section id="catalog">
      <div className="container">
        <div className="catalog--wrapper">
          <span className="line" />
          <h1>Каталог ювелирных изделий</h1>
          <span className="line" />
        </div>

        <div className="catalog">
          {/* LEFT */}
          <div className="catalog--left">
            <div className="catalog--left__top">
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

            <div className="catalog--left__card">
              <div className="catalog--left__cardImage">
                <Image
                  src={catalogPhoto}
                  alt="Ювелирное изделие"
                  width={420}
                  height={320}
                  priority
                />
              </div>

              <div className="catalog--left__cardBody">
                <div className="catalog--left__cardHead">
                  <h2>Серебро 925</h2>
                  <span className="badge">Женский</span>
                </div>

                <p>
                  Авторское украшение, выполненное вручную. Можно уточнить цену,
                  размеры и сроки изготовления — просто напишите нам в WhatsApp.
                </p>

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
            <div className="catalog--left__card">
              <div className="catalog--left__cardImage">
                <Image
                  src={catalogPhoto}
                  alt="Ювелирное изделие"
                  width={420}
                  height={320}
                  priority
                />
              </div>

              <div className="catalog--left__cardBody">
                <div className="catalog--left__cardHead">
                  <h2>Серебро 925</h2>
                  <span className="badge">Женский</span>
                </div>

                <p>
                  Авторское украшение, выполненное вручную. Можно уточнить цену,
                  размеры и сроки изготовления — просто напишите нам в WhatsApp.
                </p>

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
            <div className="catalog--left__card">
              <div className="catalog--left__cardImage">
                <Image
                  src={catalogPhoto}
                  alt="Ювелирное изделие"
                  width={420}
                  height={320}
                  priority
                />
              </div>

              <div className="catalog--left__cardBody">
                <div className="catalog--left__cardHead">
                  <h2>Серебро 925</h2>
                  <span className="badge">Женский</span>
                </div>

                <p>
                  Авторское украшение, выполненное вручную. Можно уточнить цену,
                  размеры и сроки изготовления — просто напишите нам в WhatsApp.
                </p>

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
            <div className="catalog--left__card">
              <div className="catalog--left__cardImage">
                <Image
                  src={catalogPhoto}
                  alt="Ювелирное изделие"
                  width={420}
                  height={320}
                  priority
                />
              </div>

              <div className="catalog--left__cardBody">
                <div className="catalog--left__cardHead">
                  <h2>Серебро 925</h2>
                  <span className="badge">Женский</span>
                </div>

                <p>
                  Авторское украшение, выполненное вручную. Можно уточнить цену,
                  размеры и сроки изготовления — просто напишите нам в WhatsApp.
                </p>

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
            <div className="catalog--left__card">
              <div className="catalog--left__cardImage">
                <Image
                  src={catalogPhoto}
                  alt="Ювелирное изделие"
                  width={420}
                  height={320}
                  priority
                />
              </div>

              <div className="catalog--left__cardBody">
                <div className="catalog--left__cardHead">
                  <h2>Серебро 925</h2>
                  <span className="badge">Женский</span>
                </div>

                <p>
                  Авторское украшение, выполненное вручную. Можно уточнить цену,
                  размеры и сроки изготовления — просто напишите нам в WhatsApp.
                </p>

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
            <div className="catalog--left__card">
              <div className="catalog--left__cardImage">
                <Image
                  src={catalogPhoto}
                  alt="Ювелирное изделие"
                  width={420}
                  height={320}
                  priority
                />
              </div>

              <div className="catalog--left__cardBody">
                <div className="catalog--left__cardHead">
                  <h2>Серебро 925</h2>
                  <span className="badge">Женский</span>
                </div>

                <p>
                  Авторское украшение, выполненное вручную. Можно уточнить цену,
                  размеры и сроки изготовления — просто напишите нам в WhatsApp.
                </p>

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
            <div className="catalog--left__card">
              <div className="catalog--left__cardImage">
                <Image
                  src={catalogPhoto}
                  alt="Ювелирное изделие"
                  width={420}
                  height={320}
                  priority
                />
              </div>

              <div className="catalog--left__cardBody">
                <div className="catalog--left__cardHead">
                  <h2>Серебро 925</h2>
                  <span className="badge">Женский</span>
                </div>

                <p>
                  Авторское украшение, выполненное вручную. Можно уточнить цену,
                  размеры и сроки изготовления — просто напишите нам в WhatsApp.
                </p>

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
            <div className="catalog--left__card">
              <div className="catalog--left__cardImage">
                <Image
                  src={catalogPhoto}
                  alt="Ювелирное изделие"
                  width={420}
                  height={320}
                  priority
                />
              </div>

              <div className="catalog--left__cardBody">
                <div className="catalog--left__cardHead">
                  <h2>Серебро 925</h2>
                  <span className="badge">Женский</span>
                </div>

                <p>
                  Авторское украшение, выполненное вручную. Можно уточнить цену,
                  размеры и сроки изготовления — просто напишите нам в WhatsApp.
                </p>

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
          </div>

          {/* RIGHT */}
          <aside className="catalog--right">
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
