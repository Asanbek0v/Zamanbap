import type { Metadata } from "next";
import HomePage from "@/components/pages/HomePage";

export const metadata: Metadata = {
  title: "Главная",
  description:
    "ZAMANBAP Jewelry — премиальный ювелирный бренд. Авторские украшения из золота с современным дизайном и высоким качеством.",
};

const page = () => {
  return (
    <div>
      <HomePage />
    </div>
  );
};

export default page;
