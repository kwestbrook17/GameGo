import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";

const Home = () => {
  const carouselPhotos = [carouselPhoto1, carouselPhoto2, carouselPhoto3];

  const productLinks = [
    "https://example.com/product1",
    "https://example.com/product2",
    "https://example.com/product3",
  ];

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
