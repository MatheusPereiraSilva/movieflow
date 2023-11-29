import React from "react";
import styles from "./Categories.module.css";
import Banner from "../pagesComponensts/Banner/Banner";
import Movie from "../pagesComponensts/Movies/Movie";

const Categories = () => {
  return (
    <>
      <Banner />
      <div>
        <h2 className={styles.titulo}>Drama & Ação</h2>
        <div className={styles.slider}>
          <Movie categoria="Drama, Ação" />
        </div>
      </div>
      <div>
        <h2 className={styles.titulo}>Aventura</h2>
        <div className={styles.slider}>
          <Movie categoria="Aventura" />
        </div>
      </div>
      <div>
        <h2 className={styles.titulo}>Comédia</h2>
        <div className={styles.slider}>
          <Movie categoria="Comédia" />
        </div>
      </div>
      <div>
        <h2 className={styles.titulo}>Fantasia</h2>
        <div className={styles.slider}>
          <Movie categoria="Fantasia" />
        </div>
      </div>
      <div>
        <h2 className={styles.titulo}>Anime</h2>
        <div className={styles.slider}>
          <Movie categoria="Anime" />
        </div>
      </div>
    </>
  );
};

export default Categories;
