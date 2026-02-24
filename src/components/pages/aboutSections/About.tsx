"use client";

import React from "react";
import "./About.scss";

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="catalog--wrapper" data-aos="zoom-in">
          <span className="line" />
          <h1>О нас</h1>
          <span className="line" />
        </div>

        <div className="about">
          <h2 data-aos="zoom-in" data-aos-delay="100">
            Кто мы <br /> и что мы делаем
          </h2>

          <p data-aos="zoom-in" data-aos-delay="200">
            Мы — Zamanbap Jewelry — бренд современного ювелирного искусства, где
            качество, стиль и изысканность идут рука об руку. Наша команда
            создаёт украшения, сочетающие минимализм, элегантность и премиальное
            качество исполнения. Мы работаем с золотом и серебром высшей пробы,
            уделяя внимание каждой детали — от идеи до финальной полировки.
            Каждое украшение создаётся с любовью, чтобы подчеркнуть
            индивидуальность и вкус наших клиентов.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;