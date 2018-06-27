import { h, Component } from 'preact';

import Loader from 'components/interfaces/Loader';

class ScrollPagination extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      visibleItems: [],
      start: 0,
      offset: 0,
      isPaginating: false
    };

    this.handleScroll = this.handleScroll.bind(this);
    this.handlePaginate = this.handlePaginate.bind(this);
  }

  componentWillMount() {
    const start = 0;
    const offset = this.props.perPage;
    const visibleItems = this.props.payload.slice(start, offset);

    this.setState({
      items: this.props.payload,
      start,
      offset,
      visibleItems
    });
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handlePaginate() {
    const { start, offset, visibleItems, items } = this.state;
    const newStartPoint = offset;
    const newOffsetPoint = offset + this.props.perPage;
    const newItems = items.slice(newStartPoint, newOffsetPoint);
    const allVisibleItems = visibleItems.concat(newItems);

    const setState = () => {
      this.setState({
        start: newStartPoint,
        offset: newOffsetPoint,
        visibleItems: allVisibleItems,
        isPaginating: false,
      })
    };

    // Rendering will most likely occur instantly
    // causing jagged animations. We want to give the
    // impression that items are loaded despite
    // being a static site, so we delay rendering
    // by one second.
    const TTLForRender = 1000;

    setTimeout(setState, TTLForRender);
  }

  getScrollXY() {
    let scrOfX = 0, scrOfY = 0;

    const pageOffsetIsNumber = typeof(window.pageYOffset) === 'number';
    const useDocBody = (
      document.body &&
      (document.body.scrollLeft || document.body.scrollTop)
    );
    const useDocEl = (
      document.documentElement &&
      (document.documentElement.scrollLeft || document.documentElement.scrollTop)
    );

    if (pageOffsetIsNumber) {
      scrOfY = window.pageYOffset;
      scrOfX = window.pageXOffset;
    } else if (useDocBody) {
      scrOfY = document.body.scrollTop;
      scrOfX = document.body.scrollLeft;
    } else if (useDocEl) {
      scrOfY = document.documentElement.scrollTop;
      scrOfX = document.documentElement.scrollLeft;
    }

    return [ scrOfX, scrOfY ];
  }

  getDocHeight() {
    const D = document;
    return Math.max(
      D.body.scrollHeight, D.documentElement.scrollHeight,
      D.body.offsetHeight, D.documentElement.offsetHeight,
      D.body.clientHeight, D.documentElement.clientHeight
    );
  }

  handleScroll(e) {
    e.preventDefault();

    const canPaginate = (
      !this.state.isPaginating &&
      this.state.visibleItems < this.state.items
    );
    const threshold = this.getDocHeight() - window.innerHeight - 100;
    if ((this.getScrollXY()[1] > threshold) && canPaginate) {
      this.setState({
        isPaginating: true
      });
      this.handlePaginate();
    }
   }

  render() {
    const { customStyle, wrapper } = this.props;
    const ComponentWrapper = wrapper;
    const visibleItems = this.state.visibleItems.map(item => (
      <ComponentWrapper item={item} />
    ));

    return (
      <div id="scroll-pagination" className={customStyle}>
        {visibleItems}
        { this.state.isPaginating && <Loader /> }
      </div>
    );
  }
}

export default ScrollPagination;
