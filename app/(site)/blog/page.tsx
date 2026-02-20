import BlogPage from "@/components/main/BlogPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Блог",
  description:
    "Блог ZAMANBAP Jewelry: тренды ювелирной моды, советы по уходу за украшениями и стильные образы.",
};

const page = () => {
  return (
    <div>
      <BlogPage />
    </div>
  );
};

export default page;
