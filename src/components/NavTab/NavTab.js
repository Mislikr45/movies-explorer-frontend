import React from "react";
import "./NavTab.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function NavTab({ closeNavTab, openNavTab }) {
	const location = useLocation();
	const { pathname } = location;
	return (
		<nav className="navigate">
			<button
				className="navigate__button-close"
				type="button"
				onClick={closeNavTab}
				/>
			<div className="navigate__main-rout">
				<Link to="/" className={pathname === '/' ? 'navigate__rout navigate__rout-underline' : 'navigate__rout'} onClick={closeNavTab}>
					Главная
				</Link>
				<Link to="/movies" className={pathname === '/movies' ? 'navigate__rout navigate__rout-underline' : 'navigate__rout'} onClick={closeNavTab}>
					Фильмы
				</Link>
				<Link to="/saved-movies" className={pathname === '/saved-movies' ? 'navigate__rout navigate__rout-underline' : 'navigate__rout'} onClick={closeNavTab}>
					Сохранённые фильмы
				</Link>
			</div>
			<Link to="/profile" className="navigation__profile-menu" >					
					<p className="navigation__profile-title">Аккаунт</p>
					<div className="navigation__profile-icon"></div>				
					</Link>
		</nav>
	);
}

export default NavTab;
