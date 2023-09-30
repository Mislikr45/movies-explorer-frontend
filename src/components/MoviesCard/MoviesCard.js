import React from "react";
import "./MoviesCard.css";
import { URLIMG } from "../../utils/constants";
import { CurrentUserContext } from "../../contexts/CurrentUserContext"

function MoviesCard({
  movie,
  disabled,
  enabled,
  onSave,
  onDelete,
  isSavedMovies,
}) {
  const [isActive, setIsActive] = React.useState(false);
  const imageUrl = !isSavedMovies ? URLIMG + movie.image.url : movie.image;
  const currentUser = React.useContext(CurrentUserContext);

  const moviesButtonSaved = `${
    currentUser._id === movie.owner ? enabled : disabled
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
