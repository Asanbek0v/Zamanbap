import "./Contact.scss";

const Contact = () => {
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
            <div
              className="ContactsInfo__card"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <h3>Магазин</h3>

              <div
                className="ContactsInfo__card--item"
                data-aos="fade-right"
                data-aos-delay="150"
              >
                <span>АДРЕС</span>
                <a href="#">Бишкек, пр. Чуй 123</a>
              </div>

              <div
                className="ContactsInfo__card--item"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                <span>ТЕЛЕФОН</span>
                <a href="tel:+996700000000">+996 (700) 00-00-00</a>
              </div>

              <div
                className="ContactsInfo__card--item"
                data-aos="fade-right"
                data-aos-delay="250"
              >
                <span>WHATSAPP</span>
                <a
                  href="https://wa.me/996700000000"
                  target="_blank"
                  rel="noreferrer"
                >
                  Написать в WhatsApp
                </a>
              </div>

              <div
                className="ContactsInfo__card--item"
                data-aos="fade-right"
                data-aos-delay="300"
              >
                <span>EMAIL</span>
                <a href="mailto:info@zamanbap.com">info@zamanbap.com</a>
              </div>

              <div
                className="ContactsInfo__card--item"
                data-aos="fade-right"
                data-aos-delay="350"
              >
                <span>ГРАФИК</span>
                <p>Пн–Вс: 10:00–20:00</p>
              </div>

              <div
                className="ContactsInfo__card--social"
                data-aos="fade-up"
                data-aos-delay="400"
              >
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

            <div
              className="ContactsInfo__mini"
              data-aos="fade-up"
              data-aos-delay="200"
            >
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
            <div
              className="ContactsGrid__Form--top"
              data-aos="fade-left"
              data-aos-delay="100"
            >
              <span>ЗАЯВКА</span>
              <h3>Напишите нам</h3>
              <p>Оставьте контакты — мы ответим в ближайшее время.</p>
            </div>

            <form
              className="ContactsGrid__Form--form"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <label className="ContactsGrid__Form--form__field">
                <span>ВАШЕ ИМЯ</span>
                <input type="text" placeholder="Айгерим" />
              </label>

              <label className="ContactsGrid__Form--form__field">
                <span>ТЕЛЕФОН</span>
                <input
                  type="tel"
                  placeholder="+996 ___ __ __ __ ___ __ __ __"
                />
              </label>

              <label className="ContactsGrid__Form--form__full">
                <span>ТЕМА</span>
                <input
                  type="text"
                  placeholder="Консультация / Заказ / Доставка"
                />
              </label>

              <label className="ContactsGrid__Form--form__full">
                <span>СООБЩЕНИЕ</span>
                <textarea placeholder="Напишите ваш вопрос..." />
              </label>

              <div className="ContactsGrid__Form--bottom">
                <button type="button">ОТПРАВИТЬ</button>
                <p>Нажимая “Отправить”, вы соглашаетесь на обработку данных.</p>
              </div>
            </form>
          </div>
        </div>

        <div className="ContactsMap" data-aos="fade-up">
          <div
            className="ContactsMap__block"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h3>Мы на карте</h3>
            <span>Бишкек</span>
          </div>

          <div
            className="ContactsMap__frame"
            data-aos="zoom-in"
            data-aos-delay="150"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2924.8915354426135!2d74.60717737595805!3d42.8540233711512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb63127172f3b%3A0xbcfd86c5bfe89cd8!2zMSwgNjYg0YPQuy4g0JHQsNC50YLQuNC6INCx0LDQsNGC0YvRgNCwLCDQkdC40YjQutC10Lo!5e0!3m2!1sru!2skg!4v1772183111003!5m2!1sru!2skg"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
