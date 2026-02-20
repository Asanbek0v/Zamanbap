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
        <div className="PV__head">
          <h2>Наш процесс</h2>
          <p>Коротко и наглядно: как мы создаём браслеты</p>
        </div>

        <div className="PV__wrap">
          <div className="PV__video">
            <video
              key={step.video}
              src={step.video}
              autoPlay
              muted
              loop
              playsInline
            />
          </div>

          <div className="PV__info">
            <span className="PV__num">{step.id}</span>
            <h3>{step.title}</h3>
            <p>{step.text}</p>

            <div className="PV__controls">
              <button onClick={prev}>←</button>

              <div className="PV__dots">
                {steps.map((_, idx) => (
                  <span
                    key={idx}
                    className={idx === i ? "active" : ""}
                    onClick={() => setI(idx)}
                  />
                ))}
              </div>

              <button onClick={next}>→</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessVideo;
