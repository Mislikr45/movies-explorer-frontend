import Form from "../Form/Form";
import "./Login.css";

export default function Login() {
	return (
		<Form
			buttonText="Войти"
			titleText="Рады видеть!"
			subOffer="Еще не зарегистрированы?"
			offerLink="Регистрация"
		>
			<section className="login">
				<form className="login__form">
					<label className="login__label">E-mail</label>
					<input
						id="email"
						name="email"
						type="email"
						className="login__input"
					/>

					<label className="login__label">Пароль</label>
					<input
						id="password"
						name="password"
						type="password"
						className="login__input"
					/>
				</form>
			</section>
		</Form>
	);
}
