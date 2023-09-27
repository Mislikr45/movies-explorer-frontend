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

  const navigate = useNavigate();

  React.useEffect(() => {
    handleTokenCheck();
  }, [loggedIn]);

  const handleTokenCheck = () => {
    if (localStorage.getItem("token")) {
      const jwt = localStorage.getItem("token");
      auth.checkToken(jwt).then((res) => {
        console.log(res);
        setUser({ email: res.email });
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
    navigate("/");
  };

  React.useEffect(() => {
    Promise.all([
      mainApi.getUserInfo(),
      mainApi.getMoviesUser(),
      // movieApi.getMovies(),
    ])
      .then(([userProfile, moviesUser, movies]) => {
        setCurrentUser(userProfile);
        // setMovies(movies);
        setMoviesUser(moviesUser);
      })
      .catch((error) => console.log(`Ошибка: ${error}`));
  }, [navigate]);


  function getMoviesBest() {
    movieApi.getMovies()
    .then((movies) => { setMovies(movies) })
    .catch((error) => console.log(`Ошибка: ${error}`))
  }

  // console.log(moviesUser)
  function checkRegisterAdd() {
    setCheckRegister(true);
  }

  function handleRegister(email, password, name) {
    console.log("app");
    auth
      .register(email, password, name)
      .then((res) => {
        navigate("/signin", { replace: true });
      })
      .catch((err) => {
        setErorRegister(err)
        checkRegisterAdd();
      });
  }

  function handleAuthorization({ email, password }) {
    auth
      .authorize({ email, password })
      .then((data) => {
        console.log(data);
        localStorage.setItem("jwt", data.token);
        setUser({ email: email });
        setLoggedIn(true);
        console.log(data.token);
        navigate("/movie", { replace: true });
      })
      .catch((err) => {
        setErorLogin(err)
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
    console.log("add movie app");
    console.log(movie);
    // setIsloading(true)
    mainApi
      .handleAddMovieApi(movie)
      .then((newMovie) => {
        setMovies([newMovie, ...movies]);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        // setIsloading(false)
      });
  }

  function deleteFilm(movie) {
    console.log(movie._id);
    mainApi
      .deleteMovie(movie._id)
      .then((item) => {
        setMovies((prevState) =>
          prevState.filter((item) => item._id !== movie._id),
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
