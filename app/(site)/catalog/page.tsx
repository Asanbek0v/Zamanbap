import CatalogPage from "@/components/pages/CatalogPage";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Каталог",
  description:
    "Каталог украшений ZAMANBAP Jewelry: кольца, браслеты, цепочки и эксклюзивные модели из золота.",
};

const page = () => {
  return (
    <div>
      <CatalogPage />
    </div>
  );
};

export default page;
