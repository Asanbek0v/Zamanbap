"use client";
import { FC, useEffect, useMemo, useState } from "react";
import "./Process.scss";

interface Step {
  id: string;
  title: string;
  text: string;
  video: string;
}

const ProcessVideo: FC = () => {
  const steps: Step[] = useMemo(
    () => [
      {
        id: "01",
        title: "Заявка",
        text: "Выбираете модель и пишете нам в WhatsApp.",
        video: "/videos/step1.mp4",
      },
      {
        id: "02",
        title: "Подбор",
        text: "Уточняем размер, материал и детали.",
        video: "/videos/step2.mp4",
      },
      {
        id: "03",
        title: "Изготовление",
        text: "Ручная обработка, полировка и контроль.",
        video: "/videos/step3.mp4",
      },
      {
        id: "04",
        title: "Упаковка и доставка",
        text: "Премиальная упаковка и быстрая доставка.",
        video: "/videos/step4.mp4",
      },
    ],
    [],
  );

  const [i, setI] = useState(0);

  const next = () => setI((p) => (p + 1) % steps.length);
  const prev = () => setI((p) => (p - 1 + steps.length) % steps.length);

  useEffect(() => {
    const t = setInterval(next, 6000);
    return () => clearInterval(t);
  }, [steps.length]);

  const step = steps[i];

  return (
    <section id="ProcessVideo">
      <div className="container">
        {/* HEAD */}
        <div
          className="PV__head"
          data-aos="zoom-in"
          data-aos-duration="900"
          data-aos-once="true"
        >
          <h2>Наш процесс</h2>
          <p>Коротко и наглядно: как мы создаём браслеты</p>
        </div>

        {/* WRAP */}
        <div
          className="PV__wrap"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          {/* VIDEO */}
          <div
            className="PV__video"
            data-aos="zoom-in-right"
            data-aos-duration="900"
            data-aos-delay="120"
            data-aos-once="true"
          >
            <video
              key={step.video}
              src={step.video}
              autoPlay
              muted
              loop
              playsInline
            />
          </div>

          {/* INFO */}
          <div
            className="PV__info"
            data-aos="zoom-in-left"
            data-aos-duration="900"
            data-aos-delay="160"
            data-aos-once="true"
          >
            <span
              className="PV__num"
              data-aos="zoom-in"
              data-aos-delay="220"
              data-aos-duration="800"
            >
              {step.id}
            </span>

            <h3
              data-aos="zoom-in"
              data-aos-delay="300"
              data-aos-duration="800"
            >
              {step.title}
            </h3>

            <p
              data-aos="zoom-in"
              data-aos-delay="380"
              data-aos-duration="800"
            >
              {step.text}
            </p>

            <div
              className="PV__controls"
              data-aos="zoom-in-up"
              data-aos-delay="460"
              data-aos-duration="800"
            >
              <button onClick={prev} aria-label="Назад">
                ←
              </button>

              <div className="PV__dots">
                {steps.map((_, idx) => (
                  <span
                    key={idx}
                    className={idx === i ? "active" : ""}
                    onClick={() => setI(idx)}
                    // доттор да жумшак анимация менен
                    data-aos="zoom-in"
                    data-aos-delay={520 + idx * 90}
                    data-aos-duration="650"
                    data-aos-once="true"
                  />
                ))}
              </div>

              <button onClick={next} aria-label="Вперёд">
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessVideo;