"use client";

import "./BlogDetailPage.scss";
import Image from "next/image";
import Link from "next/link";
import { posts, categories } from "@/data/dataBlog";
import { useEffect } from "react";

import AOS from "aos";

export default function BlogDetailPage({ slug }: { slug: string }) {
  // ✅ 1 жолу init (деталь бетте да керек)
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
    });
    AOS.refresh();
  }, []);

  const normalizedSlug = decodeURIComponent(slug).trim().toLowerCase();
  const post = posts.find(
    (p) => p.slug?.trim().toLowerCase() === normalizedSlug,
  );

  if (!post) {
    return (
      <div style={{ color: "white", padding: 80 }}>
        <h2>Статья не найдена</h2>
        <p>slug: {slug}</p>
      </div>
    );
  }

  const catTitle =
    categories.find((c) => c.slug === post.category)?.title ?? "Статья";

  return (
    <section id="blogPost">
      <div className="container">
        <div className="blogPost__top">
          <Link
            className="back"
            href="/blog"
            data-aos="fade-right"
            data-aos-duration="850"
          >
            ← Назад в блог
          </Link>

          <span
            className="meta"
            data-aos="fade-up"
            data-aos-delay="120"
            data-aos-duration="900"
          >
            {catTitle} • {post.readTime}
          </span>

          <h1 data-aos="fade-up" data-aos-delay="180" data-aos-duration="950">
            {post.title}
          </h1>

          <p
            className="excerpt"
            data-aos="fade-up"
            data-aos-delay="240"
            data-aos-duration="950"
          >
            {post.excerpt}
          </p>
        </div>

        <div
          className="cover"
          data-aos="fade-up"
          data-aos-delay="160"
          data-aos-duration="1100"
          data-aos-easing="ease-out-cubic"
        >
          <Image src={post.image} alt={post.title} fill sizes="100vw" />
        </div>

        <div
          className="content"
          data-aos="fade-up"
          data-aos-delay="160"
          data-aos-duration="950"
        >
          <p>{post.content}</p>
        </div>
      </div>
    </section>
  );
}
