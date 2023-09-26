import React from "react";
import "./MoviesCard.css";
import { urlImg } from "../../utils/constants";

function MoviesCard({
  movie,
  disabled,
  enabled,
  onSave,
  onDelete,
  isSavedMovies,
  userProfile,
}) {
  const [isActive, setIsActive] = React.useState(false);
  console.log(movie)
  const imageUrl = urlImg + movie.image.url;

  const moviesButtonSaved = `${
    userProfile._id === movie.owner ? disabled : enabled
  }`;

  const moviesButton = `${isActive ? enabled : disabled}`;

  function durationHours(minutes) {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours} ч ${remainingMinutes} мин`;
  }
  const durationFormat = durationHours(movie.duration);

  function handleAddMovie() {
    onSave(movie);
    setIsActive(true);
  }

  function handleDeleteMovie() {
    onDelete(movie);
  }

  return (
    <li className="movies__card">
      <img className="movies__card-photo" src={imageUrl} alt={movie.nameRU} />
      <div className="movies__card-about">
        <div className="movies__card-container">
          <h2 className="movies__card-title">{movie.nameRU}</h2>
          <button
            className={isSavedMovies ? moviesButtonSaved : moviesButton}
            type="button"
            onClick={!isSavedMovies ? handleAddMovie : handleDeleteMovie}
          />
        </div>
        <span className="movies__card-time">{durationFormat}</span>
      </div>
    </li>
  );
}

export default MoviesCard;
