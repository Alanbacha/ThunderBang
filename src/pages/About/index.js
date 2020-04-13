import React from "react";

import Layout from "../../Layout";

import "./styles.css";

export default function Game() {
	return (
		<Layout>
			<div className="content">
				<section className="about-content">
					<div className="text language pt-br">
						<h2>Sobre</h2>
						<p>Este jogo foi desenvolvido por Alan Bacha.</p>
					</div>

					<div className="text language en-ca">
						<h2>About</h2>
						<p>This game was developed by Alan Bacha.</p>
					</div>

					<div className="text language fr-ca">
						<h2>À propos</h2>
						<p>Ce jeu a été développé par Alan Bacha.</p>
					</div>
				</section>
			</div>
		</Layout>
	);
}
