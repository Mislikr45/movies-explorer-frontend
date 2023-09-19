import React from "react";
import "./AboutMe.css";
import photo from "../../../images/photo.png";

import { Link } from "react-router-dom";

function AboutMe() {
	return (
		<section className="aboutMe">
			<h2 className="aboutMe__title">Студент</h2>
			<div className="aboutMe__resume">
				<img className="aboutMe__resume-photo" src={photo} alt="фотография резюме" />
				<h2 className="aboutMe__resume-name">Виталий</h2>
				<p className="aboutMe__resume-summary">Фронтенд-разработчик, 30 лет</p>
				<p className="aboutMe__resume-biography">
					Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня
					есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом.
					Недавно начал кодить. С 2015 года работал в компании «СКБ Контур».
					После того, как прошёл курс по веб-разработке, начал заниматься
					фриланс-заказами и ушёл с постоянной работы.
				</p>
				<Link
					className="aboutMe__link"
					target="_blank"
					to="https://github.com/Mislikr45"
				>
					Github
				</Link>
			</div>
		</section>
	);
}

export default AboutMe;
