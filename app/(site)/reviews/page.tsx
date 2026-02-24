import ReviewsPage from "@/components/pages/ReviewsPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Отзывы",
  description:
    "Отзывы клиентов о ZAMANBAP Jewelry. Реальные впечатления покупателей о качестве и дизайне украшений.",
};

const page = () => {
  return (
    <div>
      <ReviewsPage />
    </div>
  );
};

export default page;
