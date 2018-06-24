import { h } from 'preact';

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
  const images = getImages(props.location.pathname);

  return (
    <span>Portfolio</span>
  );
};

export default Portfolio;
