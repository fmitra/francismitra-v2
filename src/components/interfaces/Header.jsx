import { h } from 'preact';
import { Link } from 'preact-router';

import ROUTES from 'src/routes';
import openMenuIcon from 'assets/images/icons/icon-menu.svg';
import closeMenuIcon from 'assets/images/icons/icon-menu-close.svg';

const Header = (props) => {
  const toggleHandler = props.onMenuToggle;
  const headerVisible = props.isHome ? 'header--hide' : '';
  const menuAnimation = props.isMobileMenuVisible ? 'animate-body header--white' : '';
  const headerStyle = `header clearfix ${headerVisible} ${menuAnimation}`;
  const menuIcon = props.isMobileMenuVisible ? closeMenuIcon : openMenuIcon;
  const menuStyle = props.isMobileMenuVisible
    ? 'header__menu-toggle--close'
    : 'header__menu-toggle';

  return (
    <div className={headerStyle}>
      <Link className="header__author" href={ROUTES.HOME}>FrancisMitra</Link>
      <img
        className={menuStyle}
        src={menuIcon} alt="toggle"
        onClick={toggleHandler}
      />
    </div>
  );
};

export default Header;
