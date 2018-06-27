import { h, render } from 'preact';

import ScrollPagination from 'components/interfaces/ScrollPagination';
import Sample from 'assets/images/portfolio/singles/01.jpg';

const generateMockPosts = () => {
  const posts = [];
  for (let i = 0; i < 30; i++) {
    posts.push({
      image: Sample,
      timestamp: 'May 20, 2018',
      title: 'Myanmar'
    })
  }
  return posts;
};

const BlogPost = (props) => (
  <div className="blog__post">
    <img className="blog__image" src={props.item.image} alt=""/>
    <div className="blog__meta">
      <span className="meta__date">{props.item.timestamp}</span>
      <span className="meta__spacer">|</span>
      <span className="meta__title">{props.item.title}</span>
    </div>
  </div>
);

const Blog = (props) => {
  const posts = generateMockPosts();

  return (
    <div className="page blog">
      <ScrollPagination perPage={5} payload={posts} wrapper={BlogPost} />
    </div>
  );
};

export default Blog;
