import { h } from 'preact';
import { Link } from 'react-router-dom';

import ROUTES from 'src/routes';

const Header = (props) => {
  const toggleStyle = props.isHome ? 'hide-toggle' : '';
  const styleName = `mobile-menu clearfix ${toggleStyle}`;

  return (
    <div className={styleName}>
      <Link className="author" to={ROUTES.HOME}>Francis<strong>Mitra</strong></Link>
      <span className="menu-toggle" data-icon-name="hamburgerCross"></span>
    </div>
  );
};

export default Header;
