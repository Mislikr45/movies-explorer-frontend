import Form from "../Form/Form";
import "./Register.css";
import React, { useState } from "react";




export default function Register({onRegister}) {
	const [formValue, setFormValue] = useState({
		name:"",
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
    const { name, email, password } = formValue;
    onRegister({ name, email, password });

  };


	return (
		<Form
			buttonText="Зарегистрироваться"
			titleText="Добро пожаловать!"
			subOffer="Уже зарегистрированы?"
			offerLink="Войти"
			link="/signin"
		>
			<main className="register">
				<form className="register__form" onSubmit={handleSubmit}>
					<label className="register__label">Имя</label>
					<input
						id="name"
						name="name"
						type="name"
						className="register__input"
						placeholder="Sergey"
						value={formValue.name}
                        onChange={handleChange}
						required
						minLength="2"
						maxLength="10"
					/>

					<label className="register__label">E-mail</label>
					<input
						id="email"
						name="email"
						type="email"
						value={formValue.email}
                        onChange={handleChange}
						className="register__input"
						placeholder="mislikr45@gmail.com"
						required
					/>

					<label className="register__label">Пароль</label>
					<input
						id="password"
						name="password"
						type="password"
						value={formValue.password}
                        onChange={handleChange}
						className="register__input"
						placeholder="******"
						minLength="6"
						maxLength="10"
						required
					/>
					<button className="form__button" type="submit" onSubmit={handleSubmit}>Зарегистрироваться</button>		
				</form>	
				
			</main>
		</Form>
	);
}
