import React, { useState } from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Carousel from "../components/Carousel";
import SearchBar from "../components/SearchBar";
import carouselPhoto1 from "../assets/alphabet-blocks.jpg";
import carouselPhoto2 from "../assets/cookie-tin.jpg";
import carouselPhoto3 from "../assets/tablet.jpg";

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
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Set the autoplay speed in milliseconds (e.g., 3000 ms for 3 seconds)
  };

  return (
    <div className="container">
      <SearchBar onSearch={handleSearch} />
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
