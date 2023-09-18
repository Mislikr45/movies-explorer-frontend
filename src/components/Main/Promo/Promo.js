import React from "react";
import "./Promo.css";
import CCCCCC from "../../../images/CCCCCC.svg";
// import { Link } from "react-router-dom";

function Promo() {
	return (
		<section className="promo">
			<h1 className="promo__title">
				Учебный проект студента факультета Веб-разработки.
			</h1>
			<img className="promo__picture" alt="картинка для стиля" src={CCCCCC} />
		</section>
	);
}

export default Promo;
