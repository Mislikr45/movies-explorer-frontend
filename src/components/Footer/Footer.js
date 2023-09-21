import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
	return (
		<footer className="footer">
			<h2 className="footer__title">
				Учебный проект Яндекс.Практикум х BeatFilm.
			</h2>
			<div className="footer__navigation">
				<p className="footer__caption"> © 2023</p>
				<ul className="footer__links">
					<li className="footer__links-item">
						<Link
							className="footer__link"
							target="_blank"
							to="https://practicum.yandex.ru/"
						>
							Яндекс.Практикум
						</Link>
					</li>
					<li className="footer__links-item">
						<Link
							className="footer__link"
							target="_blank"
							to="https://github.com/Mislikr45"
						>
							Github
						</Link>
					</li>
				</ul>
			</div>
		</footer>
	);
}

export default Footer;
