import React from "react";
import "./MoviesCard.css";

function MoviesCard(props) {
	const { movie } = props;
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
						className={`movies__card-button ${
							props.isSavedMoviesPage
								? "movies__card-delete"
								: "movies__card-like"
						}`}
						type="button"
					/>
				</div>
				<span className="movies__card-time">{movie.duration}</span>
			</div>
		</li>
	);
}

export default MoviesCard;
