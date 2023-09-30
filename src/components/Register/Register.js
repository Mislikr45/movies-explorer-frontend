import Form from "../Form/Form";
import "./Register.css";
import React, { useState } from "react";
import { EMAIL_CHECK } from "../../utils/constants"



export default function Register({onRegister, error}) {
	const [formValue, setFormValue] = useState({
		name:"",
		email: "",
		password: "",
	  });

	  const [isValid, setIsValid] = useState(false);
	  const [isEmpty, setIsEmpty] = useState(true);
	

	  React.useEffect(() => {
	 
		const InputValid = () => {
			console.log(formValue)
			const nameValid = formValue.name.length >= 2 && formValue.name.length <= 10;
			const emailValid = EMAIL_CHECK.test(formValue.email.trim());
			const passwordValid = formValue.password.length >= 6;
	  
			return nameValid && emailValid && passwordValid;
		  };

		  setIsValid(InputValid());
		  setIsEmpty(
			formValue.name.trim() === "" || formValue.email.trim() === "" || formValue.password.trim() === ""
		  );
	  }, [formValue.name, formValue.email, formValue.password]);

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
					/>

					<label className="register__label">E-mail</label>
					<input
						id="email"
						name="email"
						type="email"
						value={formValue.email}
                        onChange={handleChange}
						className={setIsValid ? "register__input" : ""}
						placeholder="mislikr45@gmail.com"

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
					/>
					<p className="register-error">{error}</p>
					<button className={`form__button ${isEmpty || !isValid
                ? "form__button-disable"
                : ""
            }`}
			disabled={isEmpty || !isValid ? true : false}		
					type="submit" onSubmit={handleSubmit}>Зарегистрироваться</button>		
				</form>	
				
			</main>
		</Form>
	);
}
