import { h, Component } from 'preact';

import Nav from './Nav';
import Footer from './Footer';
import Header from './Header';

class Grid extends Component {
  constructor(props) {
    super(props);

    this.state.isMobileMenuVisible = false;
    this.handleToggleMobileMenu.bind(this);
  }

  handleToggleMobileMenu() {
    const isVisible = this.state.isMobileMenuVisible;
    this.setState({ isMobileMenuVisible: !isVisible });
  }

  render() {
    const isHome = this.props.location.pathname === '/';
    const wrapperAnimation = this.state.isMobileMenuVisible ? 'animate-body' : '';
    const wrapperStyle = `wrapper ${wrapperAnimation}`;

    return (
      <div className={wrapperStyle}>
        <Header
          isMobileMenuVisible={this.state.isMobileMenuVisible}
          isHome={isHome}
          onMenuToggle={() => this.handleToggleMobileMenu()}
        />
        <Nav
          isHome={isHome}
          isMobileMenuVisible={this.state.isMobileMenuVisible}
          onMenuToggle={() => this.handleToggleMobileMenu()}
        />
        <div className="body-animator"></div>

        {
          this.state.isMobileMenuVisible &&
          <div className="mobile-shade" onClick={() => this.handleToggleMobileMenu()}></div>
        }

        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default Grid;
