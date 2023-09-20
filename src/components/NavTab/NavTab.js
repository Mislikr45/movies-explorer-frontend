import React from "react";
import "./NavTab.css";
import { Link } from "react-router-dom";

function NavTab({ closeNavTab, openNavTab }) {
	return (
		<nav className="navigate">
			<button
				className="navigate__button-close"
				type="button"
				onClick={closeNavTab}
				/>
			<div className="navigate__main-rout">
				<Link to="/" className="navigate__rout">
					Главная
				</Link>
				<Link to="/movies" className="navigate__rout">
					Фильмы
				</Link>
				<Link to="/saved-movies" className="navigate__rout">
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
