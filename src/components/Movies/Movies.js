import React from "react";
import "./Movies.css";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Search from "../Search/Search";
import { moviesList } from "../../utils/constants";

function Movies() {
	// const [isMovieButton, setMovieButton] = React.useState(true);
	return (
		<section className="movies">
			<Search />
			<MoviesCardList
				moviesList={moviesList.slice(0, 5)}
				isMovieButton={false}
			/>
			<button className="movies__button-more" type="button">
				Ещё
			</button>
		</section>
	);
}

export default Movies;
