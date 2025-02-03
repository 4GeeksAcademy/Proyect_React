import React from "react";

//include images into your bundle
import { Navbar } from "./Navbar";
import {Jumbotron} from "./Jumbotron";
import  Card  from "./Card";
import { Footer } from "./Footer";
import { array } from "prop-types";

//create your first component
const Home = () => {
	const array = [1,2,3,4];
	return (
		<>
	<div>
		< Navbar />
	</div>
	<div>
		< Jumbotron />
	</div>
	<div className="row">
		{array.map((_, index) => (
		<div className="col-12 col-md-6 col-lg-3" key={index}>
		<Card/>
		</div>
	))}
	</div>

	<div>
		< Footer />
	</div>
	</>
	);
};

export default Home;
