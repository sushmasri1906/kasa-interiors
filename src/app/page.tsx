import React from "react";
import Hero from "./components/Home/Hero";
import AboutPreview from "./components/Home/AboutPreview";
import Process from "./components/Home/Process";
import ServicesOverview from "./components/Home/ServicesOverview";
import WhyChooseKasa from "./components/Home/WhyChooseUs";

function page() {
	return (
		<>
			<Hero />
			<AboutPreview />
			<Process />
			<ServicesOverview />
			{/* <WhyChooseKasa /> */}
		</>
	);
}

export default page;
