"use client";

import React from "react";
import "./Liders.scss";
import Image from "next/image";
import lider1 from "@/assets/1lider.jpg";

const Liders = () => {
  return (
    <section id="liders">
      <div className="container">
        <div className="liders">
          <div className="liders__top" data-aos="zoom-in">
            <h2>Наши лидеры</h2>
            <p>
              Познакомьтесь с людьми, которые руководят <br /> нашей командой.
            </p>
          </div>

          <div className="liders__grid">
            <div
              className="liders__card"
              data-aos="zoom-in"
              data-aos-delay="150"
            >
              <div className="liders__image">
                <Image
                  src={lider1}
                  alt="Эгембердиев Манас"
                  fill
                  sizes="280px"
                  style={{ objectFit: "cover" }}
                  priority
                />
              </div>

              <h3>Эгембердиев Манас Эгембердиевич</h3>
              <span>Генеральный директор</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Liders;
