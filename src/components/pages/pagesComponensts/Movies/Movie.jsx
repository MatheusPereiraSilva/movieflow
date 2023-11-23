import React from "react";
import styles from "./Movie.module.css";
import { MovieList } from "../../../../data/filmList";
import purplePlayImage from '../../../../../public/images/purpleplay.png'
import purpleMoreImage from '../../../../../public/images/purplecheck.png'

const Movie = ({categoria}) => {
  const filmsToShow = MovieList.filter((film) => film.category === categoria)
    return (
      <div className={styles.filmList}>
        {filmsToShow.map(film => (
        <div key={film.id} className={styles.dFlex}>
          <div>
            <img src={film.image} alt={film.name} className={styles.filme}/>
          </div>
          <div className={styles.divHover}>
            <div className={styles.container}>
              <div className={styles.top}>
                <img src={purplePlayImage} alt={film.name}/>
                <h1>{film.name}</h1>
                <img src={purpleMoreImage} />
              </div>
              <div className={styles.rating}>
                <img src={film.rating} alt="Rating" />
              </div>
              <div className={styles.description}>
                <p>{film.description}</p>
              </div>
            </div>
          </div>
        </div>
        ))}
      </div>
    )
  
};

export default Movie;