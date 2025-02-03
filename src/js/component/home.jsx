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
	</div>
	<div>
		< Jumbotron />
	</div>
	<div>
		< Card />
	</div>
	<div>
		< Footer />
	</div>
	</>
	);
};

export default Home;
