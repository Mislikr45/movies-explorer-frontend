import React from "react";
import "./Movies.css";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "./Preloader/Preloader";
import Search from "../Search/Search";
import { useEffect, useState } from "react";

function Movies({ movies, onSave, onDelete, userProfile, getMovieFunc, setSearch }) {
  // const [isMovieButton, setMovieButton] = React.useState(true);
  const [visibleMovies, setVisibleMovies] = useState(onVisibleMovie());
  const [windowWith, setwindowWith] = useState([]);
  const [visibleButton, setvisibleButton] = useState(false);
  // результаты поиска
  const [searchResults, setSearchResults] = useState(
    JSON.parse(localStorage.getItem("searchResults")) || [],
  );
  // результаты запроса
  const [query, setQuery] = useState(localStorage.getItem("query") || "");
  const [hasSearched, setHasSearched] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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

  // useEffect(() => {
  //   getMovieFunc()
  // }, [setSearch]);

  useEffect(() => {
    localStorage.setItem("isShortFilm", isShortFilm);
  }, [isShortFilm]);

  function onVisibleMovie() {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1279) {
      return 16;
    } else if (screenWidth >= 768) {
      return 12;
    } else if (screenWidth >= 641) {
      return 8;
    } else {
      return 5;
    }
  }

  const handleShowMoreClick = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1279) {
      setVisibleMovies((prevVisibleCards) => prevVisibleCards + 4);
    } else if (screenWidth >= 1040) {
      setVisibleMovies((prevVisibleCards) => prevVisibleCards + 3);
    } else {
      setVisibleMovies((prevVisibleCards) => prevVisibleCards + 2);
    }
  };

  let resize = window.addEventListener("resize", (e) => {
    return setwindowWith(e.target.innerWidth);
  });

  useEffect(() => {
    function handleResize() {
      setVisibleMovies(onVisibleMovie());
    }
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWith]);

  const filterMovies = (query, isShortFilm) => {
    
    setIsLoading(true);

    let filteredMovies = movies;

    if (isShortFilm) {
      filteredMovies = filteredMovies.filter((movie) => movie.duration <= 40);

    }

    const filteredResults = filteredMovies.filter((movie) => {
      return (
        movie.nameRU.toLowerCase().includes(query.toLowerCase()) ||
        movie.nameEN.toLowerCase().includes(query.toLowerCase())
      );
    });

    setSearchResults(filteredResults);
    localStorage.setItem("searchResults", JSON.stringify(filteredResults));

    setTimeout(() => {
      setIsLoading(false);
    }, 300);

  };

  const handleSearch = async (query, isShortFilm) => {
    setIsLoading(true);
    let filteredMovies = movies;
    if (movies.length === 0) {
      filteredMovies = await movies;
    }

    let searchResults;

    if (isShortFilm) {
      filteredMovies = movies.filter((movie) => movie.duration <= 40);
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
    setTimeout(() => {
      setIsLoading(false);
    }, 800);
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
      />
      {isLoading ? (
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
        />
      )}
      <button
        className={hasSearched && searchResults.length === 0 ? "movies__button-more" : "movies__button-more_none"}
        type="button"
        onClick={handleShowMoreClick}
      >
        Ещё
      </button>
    </main>
  );
}

export default Movies;
