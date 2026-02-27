"use client";

import { useMemo, useState, useEffect } from "react";
import "./Blog.scss";
import { BlogCategory, categories, posts } from "@/data/dataBlog";
import Link from "next/link";
import Image from "next/image";

import AOS from "aos";

const Blog = () => {
  const [active, setActive] = useState<"all" | BlogCategory>("all");

  // ✅ 1 жолу init
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
    });
    AOS.refresh();
  }, []);

  // ✅ таб алмашканда жаңы карточкаларга AOS кайра эсептесин
  useEffect(() => {
    requestAnimationFrame(() => {
      AOS.refreshHard();
    });
  }, [active]);

  const filtred = useMemo(() => {
    if (active === "all") return posts;
    return posts.filter((el) => el.category === active);
  }, [active]);

  return (
    <section id="blog">
      <div className="container">
        <div className="catalog--wrapper">
          <span className="line" data-aos="fade-right" />
          <h1 data-aos="fade-up" data-aos-duration="1100">
            Журнал Zamanbap
          </h1>
          <span className="line" data-aos="fade-left" />
          <p data-aos="fade-up" data-aos-delay="120" data-aos-duration="1100">
            Истории украшений, символика, традиции и уход
          </p>
        </div>

        <div className="blog">
          <div className="blog__tabs" data-aos="fade-up" data-aos-duration="1000">
            {categories.map((el, i) => (
              <button
                key={el.slug}
                className={`tab ${active === el.slug ? "isActive" : ""}`}
                onClick={() => setActive(el.slug as any)}
                type="button"
                data-aos="fade-up"
                data-aos-delay={String(40 + i * 60)}
                data-aos-duration="1000"
                data-aos-easing="ease-out-cubic"
              >
                {el.title}
              </button>
            ))}
          </div>

          <div className="blog--product">
            {filtred.map((prod, idx) => (
              <Link
                key={`${active}-${prod.id}`} // ✅ таб алмашса жаңы DOM болуп чыгат
                href={`/blog/${prod.slug}`}
                className="card"
                data-aos="fade-up"
                data-aos-delay={String(idx * 110)} // Catalogдай "автомат delay"
                data-aos-duration="1050"
                data-aos-easing="ease-out-cubic"
              >
                <div className="card__inner">
                  <div className="blog--product__img">
                    <Image
                      src={prod.image}
                      alt={prod.title}
                      fill
                      sizes="(max-width: 900px) 100vw, 33vw"
                      priority={idx < 2}
                    />
                  </div>

                  <div className="card--product__body">
                    <div className="card--product__body--meta">
                      <span className="badge">
                        {categories.find((x) => x.slug === prod.category)?.title}
                      </span>
                      <span className="dot">•</span>
                      <span className="time">{prod.readTime}</span>
                    </div>

                    <h2>{prod.title}</h2>
                    <p>{prod.excerpt}</p>
                    <span className="read">Читать статью →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;