import React from "react";

//include images into your bundle
import { Navbar } from "./Navbar";
import {Jumbotron} from "./Jumbotron";
import { Card } from "./Card";
import { Footer } from "./Footer";

//create your first component
const Home = () => {
	return (
		<>
	<div>
		< Navbar />
		{/* Hecho por Joan */}
	</div>
	<div>
		< Jumbotron />
		{/* Hecho por Pablo */}
	</div>
	<div>
		< Card />
		{/* Hecho por Alex */}
	</div>
	<div>
		< Footer />
		{/* Hecho por Joan */}
	</div>
	</>
	);
};

export default Home;
