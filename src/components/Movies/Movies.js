import React from "react";
import "./Movies.css";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Search from "../Search/Search";
import { moviesList } from "../../utils/constants";

function Movies() {
	// const [isMovieButton, setMovieButton] = React.useState(true);
	return (
		<section className="movies">
			<main className="movies__main">
			<Search />
			<MoviesCardList
				moviesList={moviesList.slice(0, 5)}
				isMovieButton={false}
				disabled = {"movies__card-button movies__card-like"}
			    enabled = {"movies__card-button movies__card-like_active"}
			/>
			<button className="movies__button-more" type="button">
				Ещё
			</button>
			</main>
		</section>
	);
}

export default Movies;
