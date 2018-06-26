import { h, Component } from 'preact';

import HorizontalScroller from 'components/interfaces/HorizontalScroller';
import Singles from './Singles';
import Places from './Places';
import Lifestyle from './Lifestyle';
import People from './People';
import ROUTES from 'src/routes';

const getImages = (pathname) => {
  switch (pathname) {
    case ROUTES.SINGLES: {
      return Singles;
    }

    case ROUTES.LIFESTYLE: {
      return Lifestyle;
    }

    case ROUTES.PEOPLE: {
      return People;
    }

    case ROUTES.PLACES: {
      return Places;
    }

    default: {
      return Singles;
    }
  }
};

const PortfolioImage = (props) => (
  <div className="portfolio__image-wrapper">
    <img className="portfolio__image" src={props.image.image} />
    <div className="portfolio__caption">
      <span>{props.image.title}</span>
      <span> | </span>
      <span>{props.image.year}</span>
    </div>
  </div>
);

const Portfolio = (props) => {
  const images = getImages(props.location.pathname).map(image => (
    <PortfolioImage image={image} />
  ));

  return (
    <div className="portfolio">
      <HorizontalScroller customStyle="portfolio__image-wrapper">
        {images}
      </HorizontalScroller>
    </div>
  );
};

export default Portfolio;
