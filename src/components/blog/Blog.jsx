import { h, render } from 'preact';

import Sample from 'assets/images/portfolio/singles/01.jpg';
import Sample2 from 'assets/images/portfolio/singles/02.jpg';

const Blog = (props) => {
  // TODO Blog will need to be a component with an onScroll
  // handler that is passed into a vertical loading scroller
  return (
    <div className="page blog">
      <div>
        <img className="blog__image" src={Sample} alt=""/>
        <div className="blog__meta">
          <span className="meta__date">May 01, 2016</span>
          <span className="meta__spacer">|</span>
          <span className="meta__title">Myanmar</span>
        </div>
      </div>
      <div>
        <img className="blog__image" src={Sample2} alt=""/>
        <div className="blog__meta">
          <span className="meta__date">May 01, 2016</span>
          <span className="meta__spacer">|</span>
          <span className="meta__title">Myanmar</span>
        </div>
      </div>
    </div>
  );
};

export default Blog;
