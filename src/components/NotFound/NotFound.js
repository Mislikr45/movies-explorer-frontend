import React from "react";
import "./NotFound.css";
import { useNavigate } from "react-router-dom";

function NotFound() {
	const navigate = useNavigate();
	const goBack = () => {
		navigate(-1)
	}
	return (
		<main className="noteFound">
			<section className="noteFound__main">
				<h1 className="noteFound__title">404</h1>
				<h2 className="noteFound__subtitle">Страница не найдена</h2>
				<button className="noteFound__button" type="button" onClick={goBack}>
					Назад
				</button>
			</section>
		</main>
	);
}

export default NotFound;
