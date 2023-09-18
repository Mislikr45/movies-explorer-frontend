import "./Form.css";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";

function Form({ buttonText, titleText, subOffer, offerLink, children }) {
	return (
		<section className="form">
			<div className="form__greetings">
				<img className="form__logo logo" src={logo} alt="логотип" />
				<h1 className="form__title">{titleText}</h1>
			</div>
			{children}
			<button className="form__button">{buttonText}</button>
			<div className="form__offer">
				<p className="form__offer-subtitle">{subOffer}</p>
				<Link to="*" className="form__offer-link">
					{offerLink}
				</Link>
			</div>
		</section>
	);
}

export default Form;
