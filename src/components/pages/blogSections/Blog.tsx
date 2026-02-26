"use client";
import { useMemo, useState } from "react";
import "./Blog.scss";
import { BlogCategory, categories, posts } from "@/data/dataBlog";
import Link from "next/link";
import Image from "next/image";

const Blog = () => {
  const [active, setActive] = useState<"all" | BlogCategory>("all");

  const filtred = useMemo(() => {
    if (active === "all") return posts;
    return posts.filter((el) => el.category === active);
  }, [active]);

  return (
    <section id="blog">
      <div className="container">
        <div className="catalog--wrapper">
          <span className="line" data-aos="fade-right" />
          <h1 data-aos="zoom-in">Журнал Zamanbap</h1>
          <span className="line" data-aos="fade-left" />
          <p data-aos="zoom-in">
            Истории украшений, символика, традиции и уход
          </p>
        </div>

        <div className="blog">
          <div className="blog__tabs" data-aos="fade-up">
            {categories.map((el) => (
              <button
                key={el.slug}
                className={`tab ${active === el.slug ? "isActive" : ""}`}
                onClick={() => setActive(el.slug as any)}
                type="button"
                data-aos="zoom-in"
                data-aos-delay="80"
              >
                {el.title}
              </button>
            ))}
          </div>

          <div className="blog--product">
            {filtred.map((prod, idx) => (
              <Link
                key={prod.id}
                href={`/blog/${prod.slug}`}
                className="card"
                data-aos="fade-up"
                data-aos-delay={String(80 + idx * 80)}
              >
                <div className="blog--product__img">
                  <Image
                    src={prod.image}
                    alt={prod.title}
                    fill
                    sizes="(max-width: 900px) 100vw, 33vw"
                  />
                </div>

                <div className="card--product__body">
                  <div className="card--product__body--meta">
                    <span className="badge">
                      {categories.find((x) => x.slug === prod.category)?.title}
                    </span>
                    <span className="dot">•</span>
                    <span>{prod.readTime}</span>
                  </div>
                  <h2>{prod.title}</h2>
                  <p>{prod.excerpt}</p>
                  <span className="read">Читать статью →</span>
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