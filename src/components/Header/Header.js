import { Link } from "react-router-dom";
import React from "react";
import "./Header.css";

import logo from "../../images/logo.svg";

import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import Overlay from "../Overlay/Overlay";
import NavTab from "../NavTab/NavTab";
import { NavLink } from "react-router-dom";

function Header({ loggedIn }) {
  const location = useLocation();
  const { pathname } = location;
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [showNavTab, setShowNavTab] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const closeNavTab = () => {
    setShowNavTab(false);
  };

  const navContent = () => {
    if (pathname === "/") {
      if (!loggedIn) {
        return (
          <Navigation className="navigation__landing">
            <Link className="navigation__link" to="/signup">
              Регистрация
            </Link>
            <Link className="navigation__button" type="button" to="/signin">
              Войти
            </Link>
          </Navigation>
        );
      } else {
        return (
          <Navigation className="navigation_main">
            <ul className="navigation__movie">
              <li className="navigation__movie-item">
                <NavLink
                  to="/movies"
                  className={({ isActive, isPending }) =>
                    !isPending
                      ? "navigation__nav-link"
                      : !isActive
                      ? "navigation__nav-link "
                      : "navigation__nav-link navigation__nav-link-underline"
                  }
                >
                  Фильмы
                </NavLink>
              </li>
              <li className="navigation__movie-item">
                <NavLink
                  to="/saved-movies"
                  className={({ isActive, isPending }) =>
                    !isPending
                      ? "navigation__nav-link"
                      : !isActive
                      ? "navigation__nav-link "
                      : "navigation__nav-link navigation__nav-link-underline"
                  }
                >
                  Сохраненные фильмы
                </NavLink>
              </li>
            </ul>
            <Link to="/profile" className="navigation__profile">
              <p className="navigation__profile-title">Аккаунт</p>
              <div className="navigation__profile-icon"></div>
            </Link>
          </Navigation>
        );
      }
    } else if (
      pathname === "/movies" ||
      pathname === "/saved-movies" ||
      pathname === "/profile"
    ) {
      if (isMobile) {
        return (
          <Navigation>
            <button
              className="navigation__button-menu"
              onClick={() => setShowNavTab(true)}
            />
          </Navigation>
        );
      } else {
        return (
          <Navigation className="navigation_main">
            <ul className="navigation__movie">
              <li className="navigation__movie-item">
                <NavLink
                  to="/movies"
                  className={({ isActive, isPending }) =>
                    !isPending
                      ? "navigation__nav-link"
                      : !isActive
                      ? "navigation__nav-link "
                      : "navigation__nav-link navigation__nav-link-underline"
                  }
                >
                  Фильмы
                </NavLink>
              </li>
              <li className="navigation__movie-item">
                <NavLink
                  to="/saved-movies"
                  className={({ isActive, isPending }) =>
                    !isPending
                      ? "navigation__nav-link"
                      : !isActive
                      ? "navigation__nav-link "
                      : "navigation__nav-link navigation__nav-link-underline"
                  }
                >
                  Сохраненные фильмы
                </NavLink>
              </li>
            </ul>
            <Link to="/profile" className="navigation__profile">
              <p className="navigation__profile-title">Аккаунт</p>
              <div className="navigation__profile-icon"></div>
            </Link>
          </Navigation>
        );
      }
    }
  };

  return (
    <header
      className={
        pathname === "/signup" || pathname === "/signin"
          ? "header_headen"
          : pathname === "/"
          ? "header_landing"
          : "header"
      }
    >
      <div className="headear__navigation">
        <Link to="/" className="header__link">
          <img className="header__logo" src={logo} alt="Логотип" />
        </Link>
        {navContent()}
      </div>
      {showNavTab && (
        <>
          <NavTab closeNavTab={closeNavTab} />
          <Overlay isOpen={showNavTab} onClose={closeNavTab} />
        </>
      )}
    </header>
  );
}

export default Header;
