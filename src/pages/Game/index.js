import React, { useState, useEffect } from "react";

import Layout from "../../Layout";
import api from "../../services/api";

import "./styles.css";

export default function Game() {
	const math = require("mathjs");

	const [cards, setCards] = useState([]);
	const [card, setCard] = useState([]);

	const [rules, setRules] = useState([]);
	const [countRules, setCountRules] = useState(0);

	useEffect(() => {
		api.get("cards").then((res) => {
			setCards(res.data);

			const c = res.data[math.randomInt(res.data.length)];
			setCard(c);
		});
	}, [math]);

	useEffect(() => {
		api.get("rules").then((res) => {
			setRules(res.data);
		});
	}, []);

	function handleNewCard() {
		const c = cards[math.randomInt(cards.length)];
		setCard(c);
	}

	function handleNewRules() {
		let ruleDescription = prompt();
		setCountRules(countRules + 1);
		const r = { id: countRules, description: ruleDescription, active: true };
		rules.push(r);
		setRules(rules);
	}

	function handleChangeRuleStatus(rule) {
		let v = [...rules];
		let i = v.findIndex((obj) => obj.id === rule.id);
		v[i].active = !rule.active;
		setRules(v);
	}

	return (
		<Layout>
			<div className="content portrait-flex-direction-column">
				<section className="playing-card">
					<h2>
						<label className="card">{card.name}</label>
					</h2>
					<div className="text">
						<div className="language pt-br">
							<p>{card.description_PtBr}</p>
						</div>

						<div className="language en-ca">
							<p>{card.description_EnCa}</p>
						</div>

						<div className="language fr-ca">
							<p>{card.description_FrCa}</p>
						</div>
					</div>
					<button className="button" onClick={handleNewCard}>
						<span className="language pt-br">Próxima</span>
						<span className="language en-ca">Next</span>
						<span className="language fr-ca">Prochaine</span>
					</button>
				</section>

				<section className="rules">
					<h2>
						<span className="language pt-br">Regras ativas</span>
						<span className="language en-ca">Actives rules</span>
						<span className="language fr-ca">Règles actives</span>
					</h2>

					<div className="text">
						<ul className="rule-list">
							{rules
								.filter((r) => {
									return r.active === true;
								})
								.map((r) => (
									<li
										key={r.id}
										onClick={() => {
											handleChangeRuleStatus(r);
										}}
									>
										{r.description ? <span>{r.description}</span> : ""}
										<span className="language pt-br">{r.description_PtBr}</span>
										<span className="language en-ca">{r.description_EnCa}</span>
										<span className="language fr-ca">{r.description_FrCa}</span>
									</li>
								))}
						</ul>
					</div>

					<button className="button" onClick={handleNewRules}>
						<span className="language pt-br">Nova regra</span>
						<span className="language en-ca">New rule</span>
						<span className="language fr-ca">Nouvelle Règle</span>
					</button>
				</section>

				<section className="rules">
					<h2>
						<span className="language pt-br">Regras inativas</span>
						<span className="language en-ca">Inactives rules</span>
						<span className="language fr-ca">Règles inactives</span>
					</h2>

					<div className="text">
						<ul className="rule-list">
							{rules
								.filter((r) => {
									return r.active === false;
								})
								.map((r) => (
									<li
										key={r.id}
										onClick={() => {
											handleChangeRuleStatus(r);
										}}
									>
										{r.description ? <span>{r.description}</span> : ""}
										<span className="language pt-br">{r.description_PtBr}</span>
										<span className="language en-ca">{r.description_EnCa}</span>
										<span className="language fr-ca">{r.description_FrCa}</span>
									</li>
								))}
						</ul>
					</div>
				</section>
			</div>
		</Layout>
	);
}

/*
 
 I just received my grocery shopping, but there are 4 products that didn't came.

Tracking number: 6622016000087
Total value: $155.96

I want to know if these products will be delivery, or if I will receive the discount of $48.44 in the amount value.


__________________________________________________
PRODUCT 1
Great Value Beef Burgers 
Sku: 6000191272333
items: 1
price: $15.97
	
__________________________________________________
PRODUCT 2
Great Value Ham And Cheese Stuffed Breaded Chicken Breast Cutlets
Sku: 6000196287478
items: 1
price $4.50

__________________________________________________
PRODUCT 3
Boneless Skinless Fillet Removed Chicken Breasts
Sku: 6000191279309
items: 2
price: $10
total: $20
	
__________________________________________________
PRODUCT 4
Lou's Kitchen Barbecue Pork Back Ribs in Lou's Babecue Sauce.
Sku: 10313354
items: 1
price: $7.97




legenda frozen

mulan
hallowen
minha mae é uma peça 3
aves de rapina
maria e joao conto das bruxas

 
 */
