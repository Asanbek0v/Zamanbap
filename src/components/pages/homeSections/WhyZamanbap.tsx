"use client";

import React from "react";
import { Crown, Sparkles, Headset, Award } from "lucide-react";
import "./WhyZamanbap.scss";

const WhyZamanbap = () => {
  const items = [
    {
      icon: <Crown size={34} />,
      text: "Эксклюзивный дизайн. Украшения выглядят дорого и минималистично.",
    },
    {
      icon: <Award size={34} />,
      text: "8+ лет на рынке. Нам доверяют сотни клиентов.",
    },
    {
      icon: <Sparkles size={34} />,
      text: "Современный стиль. Традиции в сочетании с трендами.",
    },
    {
      icon: <Headset size={34} />,
      text: "Идеальный сервис. Индивидуальный подход к каждому клиенту.",
    },
  ];

  return (
    <section id="whyZamanbap">
      <div className="container">
        <div className="why">
          {/* TOP */}
          <div
            className="why__top"
            data-aos="zoom-in"
            data-aos-duration="900"
            data-aos-once="true"
          >
            <h2>Почему выбирают Zamanbap</h2>
            <p>Мы создаем украшения с характером</p>
          </div>

          {/* GRID */}
          <div className="why__grid">
            {items.map((item, index) => (
              <div
                key={index}
                className="why__card"
                data-aos="zoom-in"
                data-aos-delay={150 + index * 140}
                data-aos-duration="900"
                data-aos-once="true"
              >
                <div
                  className="why__icon"
                  data-aos="zoom-in"
                  data-aos-delay={220 + index * 140}
                  data-aos-duration="700"
                  data-aos-once="true"
                >
                  {item.icon}
                </div>

                <p
                  data-aos="zoom-in"
                  data-aos-delay={280 + index * 140}
                  data-aos-duration="750"
                  data-aos-once="true"
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyZamanbap;