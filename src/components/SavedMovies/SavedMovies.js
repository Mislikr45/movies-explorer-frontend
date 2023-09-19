import React from "react";
import "./SavedMovies.css";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { moviesList } from "../../utils/constants";
import Search from "../Search/Search";

function SavedMovies() {
	return (
		<section className="savedMovies">
			<main className="savedMovies__main">
			<Search />
			<MoviesCardList
				moviesList={moviesList.slice(0, 2)}
				isSavedMoviesPage={true}
				disabled = {"movies__card-button movies__card-delete"}
			    enabled = {"movies__card-button movies__card-delete"}
			/>
			</main>
		</section>
	);
}

export default SavedMovies;
