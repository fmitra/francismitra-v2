import { h } from 'preact';
import { Link } from 'preact-router';

import ROUTES from 'src/routes';

const Nav = (props) => {
  const navStyle = props.isHome ? 'nav nav--full-screen' : 'nav';
  const navAnimation = props.isMobileMenuVisible ? 'animate-nav' : '';
  const styleName = `${navStyle} ${navAnimation}`;
  const toggleHandler = props.onMenuToggle;

  return (
    <nav className={styleName}>
      <ul className="nav__menu">
        <li><Link href={ROUTES.SINGLES}>Singles</Link></li>
        <li><Link href={ROUTES.LIFESTYLE}>Life</Link></li>
        <li><Link href={ROUTES.PEOPLE}>People</Link></li>
        <li><Link href={ROUTES.PLACES}>Places</Link></li>
        <li><Link href={ROUTES.INFO}>Info</Link></li>
        <li><Link href={ROUTES.BLOG}>Blog</Link></li>
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
