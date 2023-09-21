import React from "react";
import "./MoviesCard.css";

function MoviesCard({movie, disabled, enabled}) {
	const [isActive, setIsActive] = React.useState(true);
	const moviesButton = `${
		isActive ? disabled : enabled
	  }`;

	function handleCheck() {
		setIsActive(!isActive);
	}
   console.log(disabled);
	return (
		<li className="movies__card">
			<img
				className="movies__card-photo"
				src={movie.image}
				alt={movie.nameRU}
			/>
			<div className="movies__card-about">
				<div className="movies__card-container">
					<h2 className="movies__card-title">{movie.nameRU}</h2>
					<button
						className={moviesButton}
						type="button"
						onClick={handleCheck}
					/>
				</div>
				<span className="movies__card-time">{movie.duration}</span>
			</div>
		</li>
	);
}

export default MoviesCard;
