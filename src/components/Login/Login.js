import Form from "../Form/Form";
import "./Login.css";
import { email_check } from "../../utils/constants"
import React, { useState } from "react";

export default function Login({onLogin, error}) {
	const [formValue, setFormValue] = useState({
		email: "",
		password: "",
	  });

	  const [isValid, setIsValid] = useState(false);
	  const [isEmpty, setIsEmpty] = useState(true);
	
	  const handleChange = (e) => {
		const { name, value } = e.target;
	
	    setFormValue({
			...formValue,
			[name]: value,
		  });
		};

		React.useEffect(() => {
	 
			const InputValid = () => {
				const emailValid = email_check.test(formValue.email.trim());
				const passwordValid = formValue.password.length >= 6;
		  
				return emailValid && passwordValid;
			  };
	
			  setIsValid(InputValid());
			  setIsEmpty(
				 formValue.email.trim() === ""
				|| formValue.password.trim() === ""
			  );
			  console.log(isEmpty)
			  console.log(InputValid)
		  }, [formValue.email, formValue.password]);
	

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formValue;
	console.log(onLogin)
	console.log( email, password )
    onLogin({ email, password });
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
					<p className="login-error">{error}</p>
					<button 
					className={`form__button ${isEmpty || !isValid
                ? "form__button-disable"
                : ""
            }`}
					type="submit" 
					onSubmit={handleSubmit}
					disabled={isEmpty || !isValid ? true : false}					
					>Войти</button>	
				</form>
			</main>			
		</Form>
	);
}
