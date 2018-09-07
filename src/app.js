import Router from 'preact-router';
import { h, render, Component } from 'preact';

import ROUTES from 'src/routes';

// Components
import Nav from 'components/interfaces/Nav';
import Footer from 'components/interfaces/Footer';
import Header from 'components/interfaces/Header';

import Home from 'components/home/Home';
import Blog from 'components/blog/Blog';
import Portfolio from 'components/portfolio/Portfolio';
import Info from 'components/info/Info';

// Styles
import 'styles/fonts.scss';
import 'styles/app.scss';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isMobileMenuVisible: false,
      path: '/'
    };

    this.handleToggleMobileMenu.bind(this);
  }

  handleToggleMobileMenu(routerProps) {
    const isVisible = this.state.isMobileMenuVisible;
    const newState = {
      isMobileMenuVisible: !isVisible
    };

    if (routerProps) {
      newState['path'] = routerProps.url;

      // user scroll position should be reset on
      // route changes
      window.scrollTo(0, 0);
    }

    this.setState(newState);
  }

  render() {
    const isHome = this.state.path === '/';
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

        <Router onChange={(props) => this.handleToggleMobileMenu(props)}>
          <Home path={ROUTES.HOME} />
          <Portfolio path={ROUTES.SINGLES} />
          <Portfolio path={ROUTES.LIFESTYLE} />
          <Portfolio path={ROUTES.PEOPLE} />
          <Portfolio path={ROUTES.PLACES} />
          <Info path={ROUTES.INFO} />
          <Blog path={ROUTES.BLOG} />
        </Router>

        <Footer />
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
