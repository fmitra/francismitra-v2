import { h, Component } from 'preact';

/**
 * HorizontalScroller is designed for pages with horizontal
 * content. It overrides the user's scroll event to ensure
 * a downward scroll moves the page right while scroll left/right
 * behaves as predicted.
 */
class HorizontalScroller extends Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll(e) {
    const horizontal = e.deltaX;
    const vertical = e.deltaY;

    let direction = Math.min(horizontal, vertical);
    if (vertical > 0 || horizontal > 0) {
      direction = Math.max(horizontal, vertical);
    }

    window.scrollBy(direction, 0);
  }

  componentDidMount() {
    // TODO Check browser compatibilty for passive setting
    window.addEventListener('wheel', this.handleScroll, { passive: true });
  }

  componentWillUnmount() {
    window.removeEventListener('wheel', this.handleScroll);
  }

  render() {
    const { customStyle } = this.props;

    return (
      <div className={customStyle}>
        {this.props.children}
      </div>
    );
  }
}

export default HorizontalScroller;
