import React from "react";
import "./SavedMovies.css";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { moviesList } from "../../utils/constants";
import Search from "../Search/Search";

function SavedMovies() {
	return (
		<section className="savedMovies">
			<Search />
			<MoviesCardList
				moviesList={moviesList.slice(0, 2)}
				isSavedMoviesPage={true}
			/>
		</section>
	);
}

export default SavedMovies;
