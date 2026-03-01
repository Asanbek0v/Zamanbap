"use client";
import "./Contact.scss";
import { useEffect, useState } from "react";

interface FormState {
  name: string;
  phone: string;
  topic: string;
  message: string;
}

const KG_PREFIX = "+996";
const PHONE_MAX_LEN = 13;

const Contact = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    topic: "",
    message: "",
  });

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    if (name === "phone") {
      let v = value.replace(/[^0-9+]/g, "");

      if (!v.startsWith(KG_PREFIX)) {
        const digits = v.replace(/\D/g, "");
        const afterPrefix = digits.startsWith("996") ? digits.slice(3) : digits;
        v = KG_PREFIX + afterPrefix;
      }

      const after = v.slice(KG_PREFIX.length).replace(/\D/g, "");
      v = (KG_PREFIX + after).slice(0, PHONE_MAX_LEN);

      setForm((prev) => ({ ...prev, phone: v }));
      return;
    }

    if (name === "name" || name === "topic") {
      const cleaned = value.replace(/[^a-zA-Zа-яА-ЯёЁ\s-]/g, "");
      setForm((prev) => ({ ...prev, [name]: cleaned }));
      return;
    }

    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleWhatsApp = () => {
    const phoneNumber = "996704210706";

    if (!form.name.trim()) return alert("Введите имя");
    if (!form.phone.trim()) return alert("Введите телефон");
    if (!form.message.trim()) return alert("Введите сообщение");

    if (
      !form.phone.startsWith(KG_PREFIX) ||
      form.phone.length !== PHONE_MAX_LEN
    ) {
      return alert(
        "Телефон должен быть в формате +996XXXXXXXXX (9 цифр после +996)",
      );
    }

    const text = `Здравствуйте! 👋
Хочу оставить заявку.

Имя: ${form.name}
Телефон: ${form.phone}
Тема: ${form.topic || "-"}
Сообщение: ${form.message}`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");

    setForm({ name: "", phone: "", topic: "", message: "" });
  };

  return (
    <section id="Contacts">
      <div className="container">
        <div className="Contacts" data-aos="fade-up">
          <span>СВЯЖИТЕСЬ С НАМИ</span>

          <h2 data-aos="fade-up" data-aos-delay="100">
            Контакты
          </h2>

          <p data-aos="fade-up" data-aos-delay="200">
            Мы на связи каждый день. Напишите нам — поможем с выбором, заказом и
            доставкой.
          </p>

          <div className="Contacts__line" />
        </div>

        <div className="ContactsGrid">
          <div className="ContactsInfo" data-aos="fade-right">
            <div className="ContactsInfo__card" data-aos="fade-right">
              <h3>Магазин</h3>

              <div className="ContactsInfo__card--item">
                <span>АДРЕС</span>
                <a href="#">Бишкек, пр. Чуй 123</a>
              </div>

              <div className="ContactsInfo__card--item">
                <span>ТЕЛЕФОН</span>
                <a href="tel:+996700000000">+996 (700) 00-00-00</a>
              </div>

              <div className="ContactsInfo__card--item">
                <span>WHATSAPP</span>
                <a
                  href="https://wa.me/996700000000"
                  target="_blank"
                  rel="noreferrer"
                >
                  Написать в WhatsApp
                </a>
              </div>

              <div className="ContactsInfo__card--item">
                <span>EMAIL</span>
                <a href="mailto:info@zamanbap.com">info@zamanbap.com</a>
              </div>

              <div className="ContactsInfo__card--item">
                <span>ГРАФИК</span>
                <p>Пн–Вс: 10:00–20:00</p>
              </div>

              <div className="ContactsInfo__card--social">
                <a
                  href="https://www.instagram.com/zamanbap.jewelry/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </a>
                <a href="#" target="_blank" rel="noreferrer">
                  TikTok
                </a>
                <a href="#" target="_blank" rel="noreferrer">
                  Telegram
                </a>
              </div>
            </div>

            <div className="ContactsInfo__mini" data-aos="fade-up">
              <h4>Быстрые действия</h4>
              <div className="ContactsInfo__mini--miniBtns">
                <a href="tel:+996704210706">Позвонить</a>
                <a
                  href="https://wa.me/996704210706"
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          <div className="ContactsGrid__Form" data-aos="fade-left">
            <div className="ContactsGrid__Form--top">
              <span>ЗАЯВКА</span>
              <h3>Напишите нам</h3>
              <p>Оставьте контакты — мы ответим в ближайшее время.</p>
            </div>

            <form
              className="ContactsGrid__Form--form"
              onSubmit={(e) => e.preventDefault()}
            >
              <label className="ContactsGrid__Form--form__field">
                <span>ВАШЕ ИМЯ</span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Айгерим"
                />
              </label>

              <label className="ContactsGrid__Form--form__field">
                <span>ТЕЛЕФОН</span>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+996555000992"
                  inputMode="numeric"
                  maxLength={PHONE_MAX_LEN}
                  onFocus={() => {
                    if (!form.phone)
                      setForm((p) => ({ ...p, phone: KG_PREFIX }));
                  }}
                />
              </label>

              <label className="ContactsGrid__Form--form__full">
                <span>ТЕМА</span>
                <input
                  type="text"
                  name="topic"
                  value={form.topic}
                  onChange={handleChange}
                  placeholder="Консультация / Заказ / Доставка"
                />
              </label>

              <label className="ContactsGrid__Form--form__full">
                <span>СООБЩЕНИЕ</span>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Напишите ваш вопрос..."
                />
              </label>

              <div className="ContactsGrid__Form--bottom">
                <button type="button" onClick={handleWhatsApp}>
                  ОТПРАВИТЬ
                </button>
                <p>Нажимая “Отправить”, вы соглашаетесь на обработку данных.</p>
              </div>
            </form>
          </div>
        </div>

        <div className="ContactsMap" data-aos="fade-up">
          <div className="ContactsMap__block">
            <h3>Мы на карте</h3>
            <span>Бишкек</span>
          </div>

          <div className="ContactsMap__frame">
            <iframe
              src="https://www.google.com/maps?q=42.854023,74.607177&hl=ru&z=16&output=embed"
              width="100%"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
            />
          </div>

          <div className="ContactsMap__buttons">
            <a
              href="https://go.2gis.com/b5XEm"
              target="_blank"
              rel="noreferrer"
            >
              Открыть в 2GIS
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
