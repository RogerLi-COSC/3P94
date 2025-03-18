import React from 'react';
import Carousel from 'react-bootstrap/Carousel'; // Ensure react-bootstrap is installed
import ExampleCarouselImage from './ExampleCarouselImage'; // Correct relative path
import galleryImage from '../../gallery10.jpg';
import galleryImage2 from '../../gallery4.jpg';

const CarouselComponent = () => {
  return (
    <div className="carousel-container">
      <Carousel>
        <Carousel.Item>
          <ExampleCarouselImage src={galleryImage} alt="First slide" />
          <Carousel.Caption>
            <h3>Fine Dining News</h3>
            <p>Latest news about Michelin Star Restaurants.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <ExampleCarouselImage src={galleryImage2} alt="Second slide" />
          <Carousel.Caption>
            <h3>Experience New Asian Flavour</h3>
            <p>See new Chinese, Japanese, Korean, and Vietnamese Recipes</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
