"use client";

import Image from "next/image";
import React from "react";
import photo1 from "@/assets/zamanlogo.png";
import photo2 from "@/assets/zamanphoto2.png";
import "./CompanyPhilosophy.scss";

const CompanyPhilosophy = () => {
  return (
    <section id="companyPhilosophy">
      <div className="container">
        <div className="companyPhilosophy">
          <div className="cpRow cpRow--right" data-aos="zoom-in-up">
            <div className="cpMedia" data-aos="zoom-in" data-aos-delay="100">
              <Image src={photo1} alt="Zamanbap" priority />
            </div>

            <div className="cpCard" data-aos="zoom-in" data-aos-delay="200">
              <h3>Философия</h3>
              <p>
                Мы создаём украшения, в которых традиции мастерства встречаются с
                современным стилем. Для нас важна каждая деталь — от идеи до
                финального блеска золота. Выбирая Zamanbap, вы выбираете
                уверенность, статус и эстетику, которые остаются с вами на годы.
              </p>
            </div>
          </div>

          <div className="cpRow cpRow--left" data-aos="zoom-in-up" data-aos-delay="150">
            <div className="cpMedia" data-aos="zoom-in" data-aos-delay="250">
              <Image src={photo2} alt="Zamanbap mission" />
            </div>

            <div className="cpCard" data-aos="zoom-in" data-aos-delay="350">
              <h3>Миссия</h3>
              <p>
                Создавать украшения, которые выходят за пределы моды и становятся
                частью личной истории. Мы соединяем традиции ювелирного
                искусства и современные технологии, чтобы каждое изделие
                отражало статус, вкус и характер своего владельца.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyPhilosophy;