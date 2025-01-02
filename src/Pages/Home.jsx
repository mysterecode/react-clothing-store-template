import React from "react";
import Hero from '../Components/Home/Hero';
import Category from "../Components/Home/Category";
import NewArrival from '../Components/Home/NewArrival'
import AboutService from "../Components/Home/AboutService";

function Home() {
    return ( <div>
        <Hero />
        <Category />
        <NewArrival/>
        <AboutService />
    </div> );
}

export default Home;