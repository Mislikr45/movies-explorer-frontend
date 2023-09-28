import React from "react";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useNavigate, navigate } from "react-router-dom";

import "./App.css";

import * as auth from "../../utils/auth";
import { mainApi } from "../../utils/API/MainApi";
import { movieApi } from "../../utils/API/MoviesApi";

import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies.js";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import NotFound from "../NotFound/NotFound";
import ProtectedRouteElement from "../ProtectedRoute/ProtectedRoute";

function App() {
  //Хуки

  const [currentUser, setCurrentUser] = useState({});
  const [movies, setMovies] = useState([]);
  const [moviesUser, setMoviesUser] = useState([]);
  const [user, setUser] = useState({ email: "" });
  const [loggedIn, setLoggedIn] = useState(false);
  const [checkRegister, setCheckRegister] = useState(false); //Регистрация
  const [erorLogin, setErorLogin]=useState("");
  const [erorRegister, setErorRegister]=useState("");
  const {searchMovie, setSarchMovie}= useState(false);
  const {searchMovieSave, setSarchMovieSave}= useState(false);

  const navigate = useNavigate();

  React.useEffect(() => {
    handleTokenCheck();
  }, [loggedIn]);

  const handleTokenCheck = () => {
    if (localStorage.getItem("token")) {
      const jwt = localStorage.getItem("token");
      auth.checkToken(jwt).then((res) => {
        if (res) {
          setLoggedIn(true);
          navigate("/movies", { replace: true });       
         }
      });
    }
  };
  

  function checkRegisterAdd() {
    setCheckRegister(true);
  }

  const handleSignOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("query");
    localStorage.removeItem("isShortFilm");
    localStorage.removeItem("searchResults");
    localStorage.removeItem("currentPath");
    setLoggedIn(false);
    navigate("/signin");
  };

function getUserData() {
  mainApi.getUserInfo()
  .then((userProfile) => { setCurrentUser(userProfile)})
  .catch((error) => console.log(`Ошибка: ${error}`))
}

function getFilmUser() {
  mainApi.getMoviesUser()
  .then((moviesUser) => {setMoviesUser(moviesUser)})
  .catch((error) => console.log(`Ошибка: ${error}`))
}

React.useEffect(() => {
  getFilmUser();
}, [navigate]);

  function getMoviesBest() {
    movieApi.getMovies()
    .then((movies) => { setMovies(movies)})
    .catch((error) => console.log(`Ошибка: ${error}`))
  }

  // console.log(moviesUser)
  function checkRegisterAdd() {
    setCheckRegister(true);
  }

  function handleRegister(email, password, name) {
    auth
      .register(email, password, name)
      .then((res) => {
        setErorRegister("");
        navigate("/signin", { replace: true });
      })
      .catch((err) => {
        setErorRegister("что-то пошло не так");
        checkRegisterAdd();
      });
  }

  function handleAuthorization({ email, password }) {
    auth
      .authorize({ email, password })
      .then((data) => {
        localStorage.setItem("jwt", data.token);
        handleTokenCheck();
      })
      .catch((err) => {
        setErorLogin("что-то пошло не так");
        checkRegisterAdd();
      });
  }

  function handleUpdateUser(name, email) {
    // setIsloading(true)
    mainApi
      .editeProfile(name, email)
      .then((profile) => {
        console.log(profile);
        setCurrentUser(profile);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        // setIsloading(false)
      });
  }

  function saveMovie(movie) {
    // setIsloading(true)
    mainApi
      .handleAddMovieApi(movie)
      .then((newMovie) => {
        console.log(newMovie) 
        setMoviesUser([newMovie, ...movies]);
        console.log(setMoviesUser)
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        // setIsloading(false)
      });
  }

  function deleteFilm(movie) {
    console.log(movie);
    mainApi
      .deleteMovie(movie._id)
      .then((item) => {
        console.log(item)
        setMoviesUser((saveMovies) =>
        saveMovies.filter((item) => item._id !== movie._id),
          console.log(setMoviesUser)
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="page__container">
      <div className="app">
        <Header loggedIn={loggedIn} />
        <Routes>
          <Route path="*" element={<NotFound />} />

          <Route path="/" element={<Main loggedIn={loggedIn} />} />

          <Route
            path="/movies"
            replace="true"
            element={
              <ProtectedRouteElement
                loggedIn={loggedIn}
                element={Movies}
                userProfile={currentUser}
                movies={movies}
                savedMovies={moviesUser}
                onSave={saveMovie}
                onDelete={deleteFilm}
                getMovieFunc={getMoviesBest}
                setSearch={setSarchMovie}
              />
            }
          />

          <Route
            path="/saved-movies"
            element={
              <ProtectedRouteElement
                element={SavedMovies}
                userProfile={currentUser}
                saveMovies={moviesUser}
                loggedIn={loggedIn}
                onDelete={deleteFilm}
              />
            }
          />

          <Route
            path="/profile"
            element={
              <ProtectedRouteElement
                element={Profile}
                userData={currentUser}
                onUpdateData={handleUpdateUser}
                loggedIn={loggedIn}
                onOut={handleSignOut}
                func={getUserData}
              />
            }
          />

          <Route
            path="/signin"
            element={<Login
               onLogin={handleAuthorization} 
               error={erorLogin}
               />}
          />

          <Route
            path="/signup"
            element={
              <>
                <Register
                onRegister={handleRegister}                
                error={erorRegister}
                />
              </>
            }
          />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
