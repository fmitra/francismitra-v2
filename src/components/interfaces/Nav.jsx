import { h } from 'preact';
import { Link } from 'react-router-dom';

import ROUTES from 'src/routes';

const Nav = (props) => {
  const styleName = props.isHome ? 'full-screen' : '';

  return (
    <nav className={styleName}>
      <ul className="menu">
        <li><Link to={ROUTES.SINGLES}>Singles</Link></li>
        <li><Link to={ROUTES.LIFESTYLE}>Life</Link></li>
        <li><Link to={ROUTES.PEOPLE}>People</Link></li>
        <li><Link to={ROUTES.PLACES}>Places</Link></li>
        <li><Link to={ROUTES.INFO}>Info</Link></li>
        <li><Link to={ROUTES.BLOG}>Blog</Link></li>
      </ul>
      <ul className="aside">
        <li>abstract&</li>
        <li>love&</li>
        <li>fashion&</li>
        <li>travel&</li>
      </ul>
    </nav>
  );
};

export default Nav;
