import Form from "../Form/Form";
import "./Register.css";
// import { Link } from "react-router-dom";

export default function Register() {
	return (
		<Form
			buttonText="Зарегистрироваться"
			titleText="Добро пожаловать!"
			subOffer="Уже зарегистрированы?"
			offerLink="Войти"
			link="/signin"
		>
			<main className="register">
				<form className="register__form">
					<label className="register__label">Имя</label>
					<input
						id="name"
						name="name"
						type="name"
						className="register__input"
						placeholder="Sergey"
						required
						minLength="2"
						maxLength="10"
					/>

					<label className="register__label">E-mail</label>
					<input
						id="email"
						name="email"
						type="email"
						className="register__input"
						placeholder="mislikr45@gmail.com"
						required
					/>

					<label className="register__label">Пароль</label>
					<input
						id="password"
						name="password"
						type="password"
						className="register__input"
						placeholder="******"
						minLength="6"
						maxLength="10"
						required
					/>
				</form>			
			</main>
		</Form>
	);
}
