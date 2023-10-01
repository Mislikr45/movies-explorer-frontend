import React from "react";
import "./Search.css";

export default function Search({
  query,
  setQuery,
  isShortFilm,
  setIsShortFilm,
  onSearch,
  onFilter,
  getMovieFunc
}) {
  const handleInputChange = (event) => {
     console.log(query)
    setQuery(event.target.value);
  };

  const handleShortFilmToggle = () => {
    setIsShortFilm(!isShortFilm);
    onFilter(query, !isShortFilm);
  };

  const handleSubmit = (event) => {
    getMovieFunc()
    event.preventDefault();
    onSearch(query, isShortFilm);
   
  };
  const handleInputKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSubmit(event);
      getMovieFunc()
     }
  };

  return (
    <section className="search">
      <div className="search__main">
        <div className="search__magnifier"></div>
        <form className="search__form" onSubmit={handleSubmit}>
          <input
            id="movies"
            name="movies"
            type="movies"
            className="search__input"
            value={query}
            onChange={handleInputChange}
            onKeyDown={handleInputKeyDown}
            placeholder="Фильм"
          />
          <button
            className="search___form-button"
            type="submit"
            onSubmit={handleSubmit}
          >
            Найти
          </button>
          <div className="search__checkbox">
            <button
              className={
                !isShortFilm
                  ? "search__checkbox-button search__checkbox-button_enable"
                  : "search__checkbox-button search__checkbox-button_disabled"
              }
              type="button"
              onClick={handleShortFilmToggle}
            />
            <span className="search__checkbox-span">Короткометражки</span>
          </div>
        </form>
      </div>
    </section>
  );
}
