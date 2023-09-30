import "./Profile.css";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext"
import { EMAIL_CHECK } from "../../utils/constants"

export default function Profile({onUpdateData, onOut, func}) {
	const navigate = useNavigate();
	const [isValid, setIsValid] = useState(false);
	const [isEmpty, setIsEmpty] = useState(true);
	const currentUser = React.useContext(CurrentUserContext);

	React.useEffect(() => {
		func()}, [])
	function Exit() {
		onOut();
		navigate("/");}

		const [formValue, setFormValue] = useState({
			name:"",
			email: "",

		  });
		
		  const handleChange = (e) => {
			const { name, value } = e.target;
		
			setFormValue({
				...formValue,
				[name]: value,
			  });
			};

			React.useEffect(() => {
	 
				const InputValid = () => {
					console.log(formValue)
					const nameValid = formValue.name.length >= 2 && formValue.name.length <= 10;
					const emailValid = EMAIL_CHECK.test(formValue.email.trim());
	                const equalsName = formValue.name === currentUser.name;
					const equalsEmail = formValue.email === currentUser.name
					return nameValid && emailValid && !equalsName && !equalsEmail
				  };
		
				  setIsValid(InputValid());
				  setIsEmpty(
					formValue.name.trim() === "" || formValue.email.trim() === "" || formValue.password.trim() === ""
				  );
			  }, [formValue.name, formValue.email]);
	
	  const handleSubmit = (e) => {
		e.preventDefault();
		const name = formValue.name ? formValue.name : currentUser.name;
		const email = formValue.email ? formValue.email : currentUser.email;
		onUpdateData({ name , email });
		console.log("profile");
	  };
	
	return (
		<section className="profile">
			<main className="prodile__main">
			<h1 className="profile__greetings">Привет, {currentUser.name}!</h1>
			<form className="profile__form" onSubmit={handleSubmit}>
				<div className="profile__form-container">
				<label className="profile__label">Имя</label>
				<input
					id="name"
					name="name"
					type="name"
					className="profile__input"
					// minLength="2"
				    // maxLength="10"
					value={formValue.name}
                    onChange={handleChange}
				/>
				</div>

                <div className="profile__form-container">
				<label className="profile__label">E-mail</label>
				<input
					id="email"
					name="email"
					type="email"
					className="profile__input"
					value={formValue.email}
                    onChange={handleChange}
				/>
				</div>
				<button className=
				{`profile__button-edite ${isEmpty || !isValid
					? "profile__button-edite-disable"
					: ""
				}`}
				 type="submit"
				disabled={isEmpty || !isValid ? true : false}
				 onSubmit={handleSubmit}> 
				Редактировать
			</button>
			</form>


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
