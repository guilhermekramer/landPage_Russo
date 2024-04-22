import React from "react";
import style from "./style.module.css";
import russo1teste from "../../assets/russo1teste.jpeg";
const Feed = () => {
  return (
    <>
      <div className={style.container}>
        <div className={style.main}>
          <div className={style.imageContainer}>
            <img src={russo1teste} className={style.image1} />
          </div>

          <div className={style.titleContainer}>
            <h1 className={style.titleMain}>
              Aprenda Russo com quem viveu a Experiência
            </h1>
            <p className={style.paragraph}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>

        <div className={style.sectionContainer}>
          <section className={style.section1}>
            <h1>Feed2</h1>
          </section>

          <section className={style.section2}>
            <h1>Feed2</h1>
          </section>
        </div>
      </div>
    </>
  );
};

export default Feed;
