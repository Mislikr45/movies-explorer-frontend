import React from "react";
import "./Movies.css";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "./Preloader/Preloader";
import Search from "../Search/Search";
import { useEffect, useState } from "react";
import {
  DURATION,
  CARD_ADD_MOBILE,
  CARD_ADD_HD,
  CARD_ADD_FULLHD,
  CARD_FULLHD,
  CARD_HD,
  CARD_TABLET,
  CARD_MOBILE,
} from "../../utils/constants";

function Movies({
  movies,
  onSave,
  onDelete,
  userProfile,
  getMovieFunc,
  setSearch,
  isPreloader,
  moveSave,
  movieFuncDone,
}) {
  const [visibleMovies, setVisibleMovies] = useState(onVisibleMovie());
  const [windowWith, setwindowWith] = useState(window.innerWidth);
  const [visibleButton, setvisibleButton] = useState(false);
  // результаты поиска
  const [searchResults, setSearchResults] = useState(
    JSON.parse(localStorage.getItem("searchResults")) || [],
  );
  // результаты запроса
  const [query, setQuery] = useState(localStorage.getItem("query") || "");
  const [hasSearched, setHasSearched] = useState(false);

  const [isShortFilm, setIsShortFilm] = useState(
    localStorage.getItem("isShortFilm") === "true" || false,
  );

  const updateQuery = (newQuery) => {
    setQuery(newQuery);
  };

  const updateIsShortFilm = (newValue) => {
    setIsShortFilm(newValue);
  };

  useEffect(() => {
    localStorage.setItem("query", query);
  }, [query]);

  useEffect(() => {
    localStorage.setItem("isShortFilm", isShortFilm);
  }, [isShortFilm]);

  function onVisibleMovie() {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1279) {
      return CARD_FULLHD;
    } else if (screenWidth >= 768) {
      return CARD_HD;
    } else if (screenWidth >= 641) {
      return CARD_TABLET;
    } else {
      return CARD_MOBILE;
    }
  }

  const handleShowMoreClick = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1279) {
      setVisibleMovies(
        (prevVisibleCards) => prevVisibleCards + CARD_ADD_FULLHD,
      );
    } else if (screenWidth >= 1040) {
      setVisibleMovies((prevVisibleCards) => prevVisibleCards + CARD_ADD_HD);
    } else {
      setVisibleMovies(
        (prevVisibleCards) => prevVisibleCards + CARD_ADD_MOBILE,
      );
    }
  };
  useEffect(() => {
    function handleResize() {
      console.log(window.innerWidth);
      console.log(onVisibleMovie);
      onVisibleMovie();
      // setVisibleMovies(onVisibleMovie());
    }
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWith]);

  const filterMovies = (query, isShortFilm) => {
    console.log(query);
    let filteredMovies = movies;

    if (isShortFilm) {
      filteredMovies = filteredMovies.filter(
        (movie) => movie.duration <= DURATION,
      );
    }

    const filteredResults = filteredMovies.filter((movie) => {
      return (
        movie.nameRU.toLowerCase().includes(query.toLowerCase()) ||
        movie.nameEN.toLowerCase().includes(query.toLowerCase())
      );
    });

    setSearchResults(filteredResults);
    localStorage.setItem("searchResults", JSON.stringify(filteredResults));
    console.log(searchResults);
  };

  const handleSearch = async (query, isShortFilm) => {
    let filteredMovies = movies;
    if (movies.length === 0) {
      filteredMovies = await movies;
    }

    let searchResults;

    if (isShortFilm) {
      filteredMovies = movies.filter((movie) => movie.duration <= DURATION);
      searchResults = filteredMovies.filter((movie) => {
        return (
          movie.nameRU.toLowerCase().includes(query.toLowerCase()) ||
          movie.nameEN.toLowerCase().includes(query.toLowerCase())
        );
      });
    } else {
      searchResults = filteredMovies.filter((movie) => {
        return (
          movie.nameRU.toLowerCase().includes(query.toLowerCase()) ||
          movie.nameEN.toLowerCase().includes(query.toLowerCase())
        );
      });
    }
    setSearchResults(searchResults);
    setHasSearched(true);
    localStorage.setItem("searchResults", JSON.stringify(searchResults));
    setVisibleMovies(onVisibleMovie());
    console.log(searchResults);
    return;
  };

  return (
    <main className="movies">
      <Search
        query={query}
        setQuery={updateQuery}
        isShortFilm={isShortFilm}
        setIsShortFilm={updateIsShortFilm}
        onSearch={handleSearch}
        onFilter={filterMovies}
        setSearch={setSearch}
        getMovieFunc={getMovieFunc}
        movieFuncDone={movieFuncDone}
      />
      {isPreloader ? (
        <Preloader />
      ) : !movies || (hasSearched && searchResults.length === 0) ? (
        <p className="movies__info">Ничего не найдено.</p>
      ) : (
        <MoviesCardList
          moviesList={searchResults.slice(0, visibleMovies)}
          isMovieButton={false}
          disabled={"movies__card-button movies__card-like"}
          enabled={"movies__card-button movies__card-like_active"}
          onSave={onSave}
          onDelete={onDelete}
          userProfile={userProfile}
          moveSave={moveSave}
          isSavedMovies={false}
        />
      )}
      <button
        className={
          searchResults.length === 0 || visibleMovies >= searchResults.length
            ? "movies__button-more_none"
            : "movies__button-more"
        }
        type="button"
        onClick={handleShowMoreClick}
      >
        Ещё
      </button>
    </main>
  );
}

export default Movies;
