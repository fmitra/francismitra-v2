import { h } from 'preact';
import { Link } from 'preact-router';

import ROUTES from 'src/routes';
import menuIcon from 'assets/images/icons/icon-menu.svg';

const Header = (props) => {
  const toggleHandler = props.onMenuToggle;
  const headerVisible = props.isHome ? 'header--hide' : '';
  const menuAnimation = props.isMobileMenuVisible ? 'animate-body header--white' : '';
  const styleName = `header clearfix ${headerVisible} ${menuAnimation}`;

  return (
    <div className={styleName}>
      <Link className="header__author" href={ROUTES.HOME}>FrancisMitra</Link>
      <img
        className="header__menu-toggle"
        src={menuIcon} alt="toggle"
        onClick={toggleHandler}
      />
    </div>
  );
};

export default Header;
