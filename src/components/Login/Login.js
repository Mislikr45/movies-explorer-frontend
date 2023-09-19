import Form from "../Form/Form";
import "./Login.css";

export default function Login() {
	return (
		<Form
			buttonText="Войти"
			titleText="Рады видеть!"
			subOffer="Еще не зарегистрированы?"
			offerLink="Регистрация"
			link="/signup"
		>
			<section className="login">
				<main className="login__main">
				<form className="login__form">
					<label className="login__label">E-mail</label>
					<input
						id="email"
						name="email"
						type="email"
						className="login__input"
						required
						placeholder="mislik"
						minLength="2"
						maxlength="10"
					/>

					<label className="login__label">Пароль</label>
					<input
						id="password"
						name="password"
						type="password"
						className="login__input"
						placeholder="*****"
						required
						minLength="6"
						maxlength="10"
					/>
				</form>
				</main>
			</section>			
		</Form>
	);
}
