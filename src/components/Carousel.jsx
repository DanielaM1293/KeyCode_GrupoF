import Slider from "react-slick";

const Carousel = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index}>
          <img
            className="w-full h-64 object-cover" 
            src={image}
            alt={`Carousel slide ${index}`}
          />
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
