import { h } from 'preact';
import { Link } from 'react-router-dom';

import ROUTES from 'src/routes';

const Nav = (props) => {
  const navStyle = props.isHome ? 'nav nav--full-screen' : 'nav';
  const navAnimation = props.isMobileMenuVisible ? 'animate-nav' : '';
  const styleName = `${navStyle} ${navAnimation}`;
  const toggleHandler = props.onMenuToggle;

  return (
    <nav className={styleName}>
      <ul className="nav__menu">
        <li><Link to={ROUTES.SINGLES} onClick={toggleHandler}>Singles</Link></li>
        <li><Link to={ROUTES.LIFESTYLE} onClick={toggleHandler}>Life</Link></li>
        <li><Link to={ROUTES.PEOPLE} onClick={toggleHandler}>People</Link></li>
        <li><Link to={ROUTES.PLACES} onClick={toggleHandler}>Places</Link></li>
        <li><Link to={ROUTES.INFO} onClick={toggleHandler}>Info</Link></li>
        <li><Link to={ROUTES.BLOG} onClick={toggleHandler}>Blog</Link></li>
      </ul>
      { props.isHome &&
        <ul className="nav__aside">
          <li>abstract&</li>
          <li>love&</li>
          <li>fashion&</li>
          <li>travel&</li>
        </ul>
      }
    </nav>
  );
}

export default Nav;
