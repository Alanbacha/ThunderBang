import React, { useState, useEffect } from "react";

import Layout from "../../Layout";
import api from "../../services/api";

import "./styles.css";

export default function Game() {
	const math = require("mathjs");

	const [cards, setCards] = useState([]);
	const [card, setCard] = useState([]);

	useEffect(() => {
		loadCards();
	}, []);

	function loadCards() {
		api.get("cards").then((res) => {
			setCards(res.data);

			const c = res.data[math.randomInt(res.data.length)];
			setCard(c);
		});
	}

	function handleNewCard() {
		const c = cards[math.randomInt(cards.length)];
		setCard(c);
	}

	return (
		<Layout>
			<div className="content portrait-flex-direction-column">
				<section className="playing-card">
					<label>{card.name}</label>

					<ul>
						<li className="language pt-br">
							<p>{card.description_PtBr}</p>
						</li>

						<li className="language en-ca">
							<p>{card.description_EnCa}</p>
						</li>

						<li className="language fr-ca">
							<p>{card.description_FrCa}</p>
						</li>
					</ul>

					<button className="button" onClick={handleNewCard}>
						<span className="language pt-br">Próxima</span>
						<span className="language en-ca">Next</span>
						<span className="language fr-ca">Prochaine</span>
					</button>
				</section>

				<section className="rules-on">
					<label>
						<span className="language pt-br">Regras ativas</span>
						<span className="language en-ca">Actives rules</span>
						<span className="language fr-ca">Règles actives</span>
					</label>

					<ul>
						<li>on</li>
					</ul>
				</section>

				<section className="rules-off">
					<label>
						<span className="language pt-br">Regras inativas</span>
						<span className="language en-ca">Inactives rules</span>
						<span className="language fr-ca">Règles inactives</span>
					</label>

					<ul>
						<li>off</li>
					</ul>
				</section>
			</div>
		</Layout>
	);
}
