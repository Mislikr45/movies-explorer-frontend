import React, { Children } from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList(props) {
	return (
		<ul className="movies__list">
			{props.moviesList.map((movie) => {
				return (
					<MoviesCard
						movie={movie}
						key={movie.movieId}
						isSavedMoviesPage={props.isSavedMoviesPage}
					/>
				);
			})}
		</ul>
	);
}
export default MoviesCardList;
