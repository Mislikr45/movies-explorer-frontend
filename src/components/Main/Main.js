import React from "react";
import "./Main.css";
import Promo from "./Promo/Promo";
import Techs from "./Techs/Techs";
import AboutMe from "./AboutMe/AboutMe";
import AboutProject from "./AboutProject/AboutProject";
import Portfolio from "./Portfolio/Portfolio";

function Main() {
	return (
		<main className="main">
			<Promo />
			<AboutProject />
			<Techs />
			<AboutMe />
			<Portfolio />
		</main>
	);
}

export default Main;
