"use client";

import { useParams } from "next/navigation";
import BlogDetailPage from "@/components/pages/blogSections/BlogDetailPage";

export default function Page() {
  const params = useParams<{ slug: string }>();
  return <BlogDetailPage slug={params.slug} />;
}