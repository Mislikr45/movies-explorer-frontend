import React from "react";
import "./SavedMovies.css";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { useEffect, useState } from "react";
import Search from "../Search/Search";
import {DURATION} from '../../utils/constants'

function SavedMovies({ saveMovies, onDelete, userProfile, setSearch, moveSave }) {

  useEffect(() => {
    localStorage.setItem("currentPath", "/saved-movies");
  }, []);

  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isShortFilm, setIsShortFilm] = useState(false);

  useEffect(() => {
    setSearchResults(saveMovies)
    filterMovies(query, isShortFilm);
  }, [saveMovies, query, isShortFilm]);

  const handleSearch = (newQuery, newIsShortFilm) => {
    setIsShortFilm(newIsShortFilm);

    const filteredMovies = saveMovies.filter((movie) => {
      const includesQuery =
        movie.nameRU.toLowerCase().includes(newQuery.toLowerCase()) ||
        movie.nameEN.toLowerCase().includes(newQuery.toLowerCase());

      if (newIsShortFilm) {
        return includesQuery && movie.duration <= DURATION;
      } else {
        return includesQuery;
      }
    });

    setSearchResults(filteredMovies);
  };
  const filterMovies = (query, isShortFilm) => {
    let filteredMovies = saveMovies;
    if (isShortFilm) {
      filteredMovies = filteredMovies.filter((movie) => movie.duration <= DURATION);
    }
    const filteredResults = filteredMovies.filter((movie) => {
      return (
        movie.nameRU.toLowerCase().includes(query.toLowerCase()) ||
        movie.nameEN.toLowerCase().includes(query.toLowerCase())
      );
    });

    setSearchResults(filteredResults);
  };

  return (
    <main className="savedMovies">
      <Search
        query={query}
        setQuery={setQuery}
        isShortFilm={isShortFilm}
        setIsShortFilm={setIsShortFilm}
        onSearch={handleSearch}
        onFilter={filterMovies}
        setSearch={setSearch}
      />
      <MoviesCardList
        moviesList={searchResults}
        isSavedMovies={true}
        disabled={"movies__card-button movies__card-delete"}
        enabled={"movies__card-button-enabled"}
        onDelete={onDelete}
        moveSave={moveSave}
        userProfile={userProfile}
      />
    </main>
  );
}

export default SavedMovies;
