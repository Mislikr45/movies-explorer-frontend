import "./Profile.css";
// import { Link } from "react-router-dom";

export default function Profile() {
	return (
		<section className="profile">
			<h1 className="profile__greetings">Привет, Виталий!</h1>
			<form className="profile__form">
				<label className="profile__label">Имя</label>
				<input
					id="name"
					name="name"
					type="name"
					className="profile__input"
					placeholder="Сергей"
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

			<button className="profile__button-edite" type="button">
				Редактировать
			</button>
			<button
				className="profile__button-exit"
				id="profile__button-exit"
				type="button"
			>
				Выйти из аккаунта
			</button>
		</section>
	);
}
