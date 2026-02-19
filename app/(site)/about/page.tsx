import AboutPage from "@/components/main/AboutPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "О бренде",
  description:
    "История и философия ZAMANBAP Jewelry. Современный ювелирный бренд с акцентом на стиль, качество и уникальный дизайн.",
};

const page = () => {
  return (
    <div>
      <AboutPage />
    </div>
  );
};

export default page;
