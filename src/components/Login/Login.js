import Form from "../Form/Form";
import "./Login.css";
import React, { useState } from "react";

export default function Login({onLogin}) {
	const [formValue, setFormValue] = useState({
		email: "",
		password: "",
	  });
	
	  const handleChange = (e) => {
		const { name, value } = e.target;
	
	    setFormValue({
			...formValue,
			[name]: value,
		  });
		};

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formValue;
	console.log(onLogin)
	console.log( email, password )
    onLogin({ email, password });
	console.log("1");
  };
	return (
		<Form
			buttonText="Войти"
			titleText="Рады видеть!"
			subOffer="Еще не зарегистрированы?"
			offerLink="Регистрация"
			link="/signup"
		>
			<main className="login">
				<form className="login__form" onSubmit={handleSubmit}>
					<label className="login__label">E-mail</label>
					<input
						id="email"
						name="email"
						type="email"
						className="login__input"
						required
						placeholder="mislik"
						minLength="2"
						value={formValue.email}
                        onChange={handleChange}
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
						value={formValue.password}
                        onChange={handleChange}
					/>
					<button className="form__button" type="submit" onSubmit={handleSubmit}>Войти</button>	
				</form>
			</main>			
		</Form>
	);
}
