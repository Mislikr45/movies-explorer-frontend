import "./Profile.css";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext"

export default function Profile({onUpdateData, onOut, func}) {
	const navigate = useNavigate();
	const currentUser = React.useContext(CurrentUserContext);
	React.useEffect(() => {
		func()}, [])
	function Exit() {
		onOut();
		navigate("/");}

		const [formValue, setFormValue] = useState({
			name: currentUser.name,
			email: currentUser.email,

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
				<button className="profile__button-edite" type="submit" onSubmit={handleSubmit}> 
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
