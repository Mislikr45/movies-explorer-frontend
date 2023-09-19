import "./Search.css";
import React from "react";

export default function Search() {
	const [isActive, setIsActive] = React.useState(true);

	const moviesShot = `${
		isActive
			? "search__checkbox-button search__checkbox-button_disabled"
			: "search__checkbox-button search__checkbox-button_enable"
	}`;

	function handleCheck() {
		setIsActive(!isActive);
	}

	return (
		<section className="search">
			<div className="search__main">
				<div className="search__magnifier"></div>
				<form className="search__form">
					<input
						id="movies"
						name="movies"
						type="movies"
						className="search__input"
						placeholder="Фильм"
						required
					/>
					<button className="search___form-button" type="submit">Найти</button>
					<div className="search__checkbox">
					<button className={moviesShot} type="button" onClick={handleCheck} />
					<span className="search__checkbox-span">Короткометражки</span>
				</div>
				</form>
			
			</div>
		</section>
	);
}
