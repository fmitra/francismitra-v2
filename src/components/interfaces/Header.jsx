import { h } from 'preact';
import { Link } from 'react-router-dom';

import ROUTES from 'src/routes';
import menuIcon from 'assets/images/icons/icon-menu.svg';

const Header = (props) => {
  const isVisible = props.isHome ? 'header--hide' : '';
  const styleName = `header clearfix ${isVisible}`;

  return (
    <div className={styleName}>
      <Link className="header__author" to={ROUTES.HOME}>FrancisMitra</Link>
      <img className="header__menu-toggle" src={menuIcon} alt="toggle" />
    </div>
  );
};

export default Header;
