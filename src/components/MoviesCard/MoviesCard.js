import React from "react";
import "./MoviesCard.css";
import { URLIMG } from "../../utils/constants";
import { CurrentUserContext } from "../../contexts/CurrentUserContext"
import { Link } from "react-router-dom";

function MoviesCard({
  movie,
  disabled,
  enabled,
  onSave,
  onDelete,
  isSavedMovies,
  moveSave,
  
}) {

  const allIdSave=moveSave.map(function (movie){return movie.movieId
  })
    const checkliked = !isSavedMovies? allIdSave.some(i => i === movie.id) : false;
    // const chekDelete = !isSavedMovies? allIdSave.some(i => i === movie.id) : false;
  
  
     const moviesButtonSaved = `${
      checkliked? enabled : disabled
    }`;


  const [isActive, setIsActive] = React.useState(false);
  const [isLiked, setIsLiked] = React.useState(checkliked);
  const [isActiveLike, setIsActiveLike] = React.useState(false);
  const imageUrl = !isSavedMovies ? URLIMG + movie.image.url : movie.image;
  const currentUser = React.useContext(CurrentUserContext);

  console.log(isSavedMovies, movie, allIdSave, checkliked, isLiked);
 

  const moviesButton = `${isActive ? enabled : disabled}`;

  function durationHours(minutes) {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours} ч ${remainingMinutes} мин`;
  }
  const durationFormat = durationHours(movie.duration);

  function handleAddMovie() {
    var deleteMovie = moveSave.filter(function (moviedelete) {return moviedelete.movieId === movie.id} )
    console.log(deleteMovie, movie);
    // onSave(movie);
    // setIsLiked(true)
  }
 
  function handleDeleteMovie() {
    var deleteMovie = moveSave.filter(function (moviedelete) {return moviedelete.movieId === movie.id} )
    console.log(deleteMovie._id, movie);
    // onDelete(movie);
    // setIsLiked(false)
  }

  return (
    <li className="movies__card">
      <Link
							className="movies__link"
							target="_blank"
							to={movie.trailerLink}
						>
			      <img className="movies__card-photo" src={imageUrl} alt={movie.nameRU} />
						</Link>

      <div className="movies__card-about">
        <div className="movies__card-container">
          <h2 className="movies__card-title">{movie.nameRU}</h2>
          <button
            className={!isSavedMovies ? moviesButtonSaved : disabled}
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
