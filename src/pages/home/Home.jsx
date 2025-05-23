import React from "react";
import "./home.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Featured from "../../components/featured/Featured";
import PropertyList from "../../components/propertyList/PropertyList";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import Footer from "../../components/footer/Footer";
const Home = ()=> {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <div className="homeTitle">Search By Property Type</div>
        <PropertyList />
        <div className="homeTitle">Most Loved Hotels</div>
        <FeaturedProperties />
        <Footer />
      </div>
    </div>
  );
}
export default Home;
