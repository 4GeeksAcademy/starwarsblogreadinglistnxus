import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/scrollToTop";
import Navbar from './js/components/Navbar'; 


import { Home } from "./js/views/home";
import { Demo } from "./js/views/demo";
import { Single } from "./js/views/single";
import injectContext from "./js/store/appContext";

import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";

//create your first component
const Layout = () => {
	
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/demo" element={<Demo />} />
						<Route path="/single/:theid" element={<Single />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
