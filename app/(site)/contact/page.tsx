import ContactPage from "@/components/main/ContactPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Контакты",
  description:
    "Свяжитесь с ZAMANBAP Jewelry. Контактная информация, адрес и социальные сети бренда.",
};

const page = () => {
  return (
    <div>
      <ContactPage />
    </div>
  );
};

export default page;
