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

const Portfolio = (props) => {
  const images = getImages(props.location.pathname).map(image => (
    <div>
      <img className="unveil" src={image.image} data-src={image.image} />
      <div className="row">
        <span>{image.title}</span>
        <span> | </span>
        <span>{image.year}</span>
      </div>
    </div>
  ));

  return (
    <section className="portfolio">
      <HorizontalScroller>
        {images}
      </HorizontalScroller>
    </section>
  );
};

export default Portfolio;
