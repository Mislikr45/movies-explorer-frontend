import "./Form.css";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";

function Form({ buttonText, titleText, subOffer, offerLink, children, link }) {
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("1form");
	  };

	return (
		<section className="form">
			<div className="form__greetings">
				<Link to="/" className="form__link" >
				<img className="form__logo logo" src={logo} alt="логотип" />
				</Link>
				<h1 className="form__title">{titleText}</h1>
			</div>
			{children}
			<div className="form__offer">
				<p className="form__offer-subtitle">{subOffer}</p>
				<Link to={link} className="form__offer-link">
					{offerLink}
				</Link>
			</div>
		</section>
	);
}

export default Form;
