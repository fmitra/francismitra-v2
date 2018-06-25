import { h } from 'preact';

import Nav from './Nav';
import Footer from './Footer';
import Header from './Header';

const Grid = (props) => {
  const isHome = props.location.pathname === '/';

  return (
    <div className="wrapper">
      <Header isHome={isHome} />
      <Nav isHome={isHome} />
      <div className="nav-push"></div>
      <div className="mobile-shade"></div>
      <Footer />
      {props.children}
    </div>
  );
};

export default Grid;
