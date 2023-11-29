import React from "react";
import styles from "./Movie.module.css";
import { MovieList } from "../../../../data/filmList";
import purplePlayImage from '../../../../../public/images/purpleplay.png'
import purpleMoreImage from '../../../../../public/images/purplecheck.png'

const Movie = ({ categoria }) => {
  const listaFilmes = React.useRef(null);
  const initialFilms = MovieList.filter((film) => film.category === categoria);
  const [films, setFilms] = React.useState(initialFilms);
  const [draggedFilm, setDraggedFilm] = React.useState(null);
  const [dragOverIndex, setDragOverIndex] = React.useState(null);

  React.useEffect(() => {
    localStorage.setItem('films', JSON.stringify(films));
  }, [films]);

  const handleDragStart = (e, film) => {
    e.dataTransfer.setData('text/plain', film.id);
    setDraggedFilm(film);
  };

  const handleDragOver = (e, index) => {
    e.preventDefault();
    if (draggedFilm) {
      const updatedFilms = [...films];
      const droppedIndex = updatedFilms.findIndex(film => film.id === draggedFilm.id);

      if (droppedIndex !== index) {
        const droppedFilm = updatedFilms.splice(droppedIndex, 1)[0];
        updatedFilms.splice(index, 0, droppedFilm);
        setFilms(updatedFilms);
        setDragOverIndex(index);
      }
    }
  };

  const handleDragEnd = () => {
    setDraggedFilm(null);
    setDragOverIndex(null);
  };

  const filmsToShow = films.filter((film) => film.category === categoria);

  const handleLeftClick = (e) => {
    e.preventDefault();
    listaFilmes.current.scrollLeft -= listaFilmes.current.offsetWidth;
  };

  const handleRightClick = (e) => {
    e.preventDefault();
    listaFilmes.current.scrollLeft += listaFilmes.current.offsetWidth;
  };

  return (
    <>
      <div
        className={styles.filmList}
        ref={listaFilmes}
        onDrop={(e) => handleDragOver(e, dragOverIndex || 0)}
        onDragOver={(e) => e.preventDefault()}
      >
        {filmsToShow.map((film, index) => (
          <div
            key={film.id}
            className={styles.dFlex}
            draggable='true'
            onDragStart={(e) => handleDragStart(e, film)}
            onDragOver={(e) => handleDragOver(e, index)}
            onDragEnd={handleDragEnd}
          >
            <div>
              <img src={film.image} alt={film.name} className={styles.filme} />
            </div>
            <div className={styles.divHover}>
              <div className={styles.container}>
                <div className={styles.top}>
                  <img src={purplePlayImage} alt={film.name} />
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
      <div className={styles.btn}>
        <button onClick={handleLeftClick}>{'<'}</button>
        <button onClick={handleRightClick}>{'>'}</button>
      </div>
    </>
  );
};

export default Movie;
