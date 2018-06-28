import { h, render } from 'preact';

import ScrollPagination from 'components/interfaces/ScrollPagination';
import Posts from 'assets/blog/posts.json';

const BlogImage = (props) => (
  // TODO For now we'll leave this out of webpack. Debug this later
  <img className="blog__image" src={props.image} alt="" />
);

const BlogPost = (props) => {
  const images = props.item.images.map((image, i) => (
    <BlogImage key={i} image={image} />
  ));

  return (
    <div className="blog__post">
      {images}
      <div className="blog__content" dangerouslySetInnerHTML={{ __html: props.item.content }}>
      </div>
      <div className="blog__meta">
        <span className="meta__date">{props.item.timestamp}</span>
        <span className="meta__spacer">|</span>
        <span className="meta__title">{props.item.title}</span>
      </div>
    </div>
  );
};

const Blog = (props) => {
  return (
    <div className="page blog">
      <ScrollPagination perPage={5} payload={Posts} wrapper={BlogPost} />
    </div>
  );
};

export default Blog;
