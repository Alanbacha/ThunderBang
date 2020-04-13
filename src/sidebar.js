import React from "react";

import { Link } from "react-router-dom";

import { slide as Menu } from "react-burger-menu";

import logoImg from "./assets/logo.png";

export default (props) => {
	return (
		// Pass on our props
		<Menu {...props}>
			<div className="menu-item">
				<img className="logo" src={logoImg} alt="Pipoco do Trovao" />
			</div>

			<Link className="menu-item" to="/">
				<span className="language pt-br">Jogar</span>
				<span className="language en-ca">Play</span>
				<span className="language fr-ca">Jouez</span>
			</Link>

			<Link className="menu-item" to="/about">
				<span className="language pt-br">Sobre</span>
				<span className="language en-ca">About</span>
				<span className="language fr-ca">À propos</span>
			</Link>
		</Menu>
	);
};
