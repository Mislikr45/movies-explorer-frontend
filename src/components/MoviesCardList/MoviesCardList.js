import React, { Children } from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({moviesList, isSavedMoviesPage, disabled, enabled}) {
	return (
		<ul className="movies__list">
			{moviesList.map((movie) => {
				return (
					<MoviesCard
						movie={movie}
						key={movie.movieId}
						isSavedMoviesPage={isSavedMoviesPage}
						disabled={disabled}
						enabled={enabled}
					/>
				);
			})}
		</ul>
	);
}
export default MoviesCardList;
