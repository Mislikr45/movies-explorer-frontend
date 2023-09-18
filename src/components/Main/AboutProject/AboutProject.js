import React from "react";
import "./AboutProject.css";

// import { Link } from "react-router-dom";

function AboutProject() {
	return (
		<section className="aboutProject">
			<h2 className="aboutProject__title">О проекте</h2>
			<ul className="aboutProject__table">
				<li className="about-project__tabel-item">
					<h3 className="about-project__tabel-title">
						Дипломный проект включал 5 этапов
					</h3>
					<p className="about-project__tabel-text">
						Составление плана, работу над бэкендом, вёрстку, добавление
						функциональности и финальные доработки.
					</p>
				</li>
				<li className="aboutProject__tabel-item">
					<h3 className="about-project__tabel-title">
						На выполнение диплома ушло 5 недель
					</h3>
					<p className="about-project__tabel-text">
						У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
						соблюдать, чтобы успешно защититься.
					</p>
				</li>
			</ul>
			<div className="aboutProject__road">
				<h3 className="aboutProject__road-week">1 неделя</h3>
				<h3 className="aboutProject__road-week">4 недели</h3>

				<span className="aboutProject__road-span">Back-end</span>
				<span className="aboutProject__road-span">Front-end</span>
			</div>
		</section>
	);
}

export default AboutProject;
