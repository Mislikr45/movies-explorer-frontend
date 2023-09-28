import "./Profile.css";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

export default function Profile({userData, onUpdateData, onOut, func}) {
	const navigate = useNavigate();
	React.useEffect(() => {
		func()}, [])
	function Exit() {
		onOut();
		navigate("/");}

		const [formValue, setFormValue] = useState({
			name:userData.name,
			email: userData.email,

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
		const { name, email } = formValue;
		console.log(onUpdateData)
		console.log(name, email)
		onUpdateData({ name, email });
		console.log("profile");
	  };
	
	return (
		<section className="profile">
			<main className="prodile__main">
			<h1 className="profile__greetings">Привет, {userData.name}!</h1>
			<form className="profile__form" onSubmit={handleSubmit}>
				<div className="profile__form-container">
				<label className="profile__label">Имя</label>
				<input
					id="name"
					name="name"
					type="name"
					className="profile__input"
					placeholder={userData.name}
					minLength="2"
				    maxLength="10"
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
					placeholder={userData.email}
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
