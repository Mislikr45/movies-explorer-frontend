import React from "react";
import "./Portfolio.css";

import { Link } from "react-router-dom";

function Portfolio() {
	return (
		<section className="portfolio">
			<h2 className="portfolio__title">Портфолио</h2>
			<ul className="portfolio__list">
				<li className="portfolio__list-item">
					<Link
						className="portfolio__link"
						target="_blank"
						to="https://github.com/Mislikr45/how-to-learn"
					>
						<p className="portfolio__link-text">Статичный сайт</p>
						<div className="portfolio__link-image" />
					</Link>
				</li>
				<li className="portfolio__list-item">
					<Link
						className="portfolio__link"
						target="_blank"
						to="https://github.com/Mislikr45/russian-travel"
					>
						<p className="portfolio__link-text">Адаптивный сайт</p>

						<div className="portfolio__link-image" />
					</Link>
				</li>

				<li className="portfolio__list-item">
					<Link
						className="portfolio__link"
						target="_blank"
						to="https://github.com/Mislikr45/react-mesto-api-full-gha"
					>
						<p className="portfolio__link-text">Одностраничное приложение</p>
						<div className="portfolio__link-image" />
					</Link>
				</li>
			</ul>
		</section>
	);
}

export default Portfolio;
