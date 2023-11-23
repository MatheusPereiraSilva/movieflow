import React from "react";
import styles from "./Banner.module.css";
import { MovieList } from "../../../../data/filmList";
import PlayImage from "../../../../../public/images/play.png";
import MoreImage from "../../../../../public/images/more.png";
import InfoImage from "../../../../../public/images/info.png";

const Banner = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const movies = MovieList.map((movie) => (
    <div key={movie.id} className={styles.container}>
      <div className={styles.banner}>
        <h1 className={styles.title}>{movie.name}</h1>
        <div className={styles.line}>
        <img src={PlayImage} alt="Play" className={styles.image} />
        <h2 className={styles.reproduzir}>Reproduzir</h2>
        <span className={styles.rating}>
          <img src={movie.rating} alt={`Classificação: ${movie.rating}`} />
        </span>
        <img src={MoreImage} alt="More" className={styles.image}/>
        <img src={InfoImage} alt="Info" className={styles.image}/>
        </div>
      </div>
      <img src={movie.banner} alt={movie.name} className={styles.fundo}/>
    </div>
  ));

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % movies.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [movies.length]);

  return (
    <div className={styles.banner}>
      {movies.length > 0 && movies[currentIndex]}
    </div>
  );
};

export default Banner;
