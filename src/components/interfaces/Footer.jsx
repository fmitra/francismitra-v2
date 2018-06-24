import { h } from 'preact';
import { Link } from 'react-router-dom';

import ROUTES from 'src/routes';

const YEAR = new Date().getFullYear();

const Footer = (props) => (
  <footer>
    <span className="left">
      <Link to={ROUTES.HOME}>Francis Mitra</Link> |
      <a target="_blank" href="https://github.com/fmitra/francismitra">Source</a>
    </span>
    <span className="right">
      &copy; {YEAR}
    </span>
  </footer>
);

export default Footer;
