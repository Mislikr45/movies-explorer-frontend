import "./Profile.css";
import { useNavigate, Routes, Route } from "react-router-dom";
// import { Link } from "react-router-dom";


export default function Profile() {
	const navigate = useNavigate();
	function Exit() {
		navigate("/");
	}
	return (
		<section className="profile">
			<main className="prodile__main">
			<h1 className="profile__greetings">Привет, Виталий!</h1>
			<form className="profile__form">
				<label className="profile__label">Имя</label>
				<input
					id="name"
					name="name"
					type="name"
					className="profile__input"
					placeholder="Сергей"
					minLength="2"
				    maxLength="10"
				/>

				<label className="profile__label">E-mail</label>
				<input
					id="email"
					name="email"
					type="email"
					className="profile__input"
					placeholder="mislikr45@yandex.ru"
				/>
			</form>

			<button className="profile__button-edite" type="submit"> 
				Редактировать
			</button>
			<button
				className="profile__button-exit"
				id="profile__button-exit"
				type="button"
				onClick={Exit}
			>
				Выйти из аккаунта
			</button>
			</main>
		</section>
	);
}
