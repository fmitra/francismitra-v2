import { h } from 'preact';
import { Link } from 'preact-router';

import ROUTES from 'src/routes';

const Footer = (props) => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer clearfix">
      <span className="footer__left">
        <Link className="footer__author" href={ROUTES.HOME}>Francis Mitra</Link>
        <span className="footer__spacer">|</span>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/fmitra">Github</a>
      </span>
      <span className="footer__right">
        &copy; {currentYear}
      </span>
    </div>
  );
};

export default Footer;
