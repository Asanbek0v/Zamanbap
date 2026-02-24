"use client";

import { useRef, useState } from "react";
import "./VideoProccess.scss";

export default function VideoProccess() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggleVideo = () => {
    if (!videoRef.current) return;

    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <section id="video">
      <div className="container">
        <div className="video">
          <div className="video__content" data-aos="zoom-in-right">
            <h2>Процесс создания украшений</h2>
            <p>
              Мы объединяем традиции ювелирного мастерства и современные
              технологии, создавая украшения, в которых стиль, утончённость и
              долговечность идут рука об руку.
            </p>
          </div>

          <div className="video__card" data-aos="zoom-in-left" data-aos-delay="150">
            <video
              ref={videoRef}
              src="/videos/aboutVideo.mp4"
              preload="metadata"
              playsInline
            />

            <button className="playButton" onClick={toggleVideo}>
              {playing ? "❚❚" : "▶"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}