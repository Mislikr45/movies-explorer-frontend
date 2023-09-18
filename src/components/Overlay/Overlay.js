import React from "react";
import "./Overlay.css";

function Overlay({ isOpen, onClose }) {
	return isOpen ? <div className="overlay" onClick={onClose}></div> : null;
}

export default Overlay;
