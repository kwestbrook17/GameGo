import React, { useState } from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Carousel from "../components/Carousel";
import SearchBar from "../components/SearchBar";
import CustomPrevArrow from '../components/CustomPrevArrow'; 
import CustomNextArrow from '../components/CustomNextArrow';
import carouselPhoto1 from "../assets/halo.jpeg";
import carouselPhoto2 from "../assets/silenthill.jpg";
import carouselPhoto3 from "../assets/pokemon.png";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const carouselPhotos = [carouselPhoto1, carouselPhoto2, carouselPhoto3];

  const productLinks = [
    "https://example.com/product1",
    "https://example.com/product2",
    "https://example.com/product3",
  ];

  const handleSearch = (query) => {
    setSearchQuery(query);
    // You can add additional logic here if needed
  };

  const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  prevArrow: <CustomPrevArrow />, 
  nextArrow: <CustomNextArrow />, 
};


  return (
    <div className="container">
      <SearchBar onSearch={handleSearch} />
      <h1>Featured Products</h1>
      <Carousel
        photos={carouselPhotos}
        productLinks={productLinks}
        settings={settings}
      />
      <CategoryMenu />
      <ProductList />
    </div>
  );
};

export default Home;
