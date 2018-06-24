import { h } from 'preact';

import Nav from './Nav';
import Footer from './Footer';

const Grid = (props) => {
  return (
    <div class="grid">
      <Nav />
      <Footer />
      {props.children}
    </div>
  );
};

export default Grid;
