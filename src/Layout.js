import React, { useState } from "react";

import SideBar from "./sidebar";

export default function Header(props) {
	const [language, setLanguage] = useState(localStorage.getItem("language") || "pt-br");

	function handleChangeLanguage(value) {
		setLanguage(value);
		localStorage.setItem("language", value);
	}

	return (
		<div id="App" className={language}>
			<SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />

			<div id="page-wrap" className="container">
				<header>
					<ul className="languages">
						<li className="lang-pt-br">
							<button type="button" onClick={() => handleChangeLanguage("pt-br")}>
								pt
							</button>
						</li>
						<li className="lang-en-ca">
							<button type="button" onClick={() => handleChangeLanguage("en-ca")}>
								en
							</button>
						</li>
						<li className="lang-fr-ca">
							<button type="button" onClick={() => handleChangeLanguage("fr-ca")}>
								fr
							</button>
						</li>
					</ul>
				</header>

				{props.children}
			</div>
		</div>
	);
}
