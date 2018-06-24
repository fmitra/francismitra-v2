import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { h, render, Component } from 'preact';

import ROUTES from 'src/routes';

// Components
import Grid from  'components/interfaces/Grid';
import Blog from 'components/blog/Blog';
import Portfolio from 'components/portfolio/Portfolio';
import Info from 'components/info/Info';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Grid>
        <Route exact path={ROUTES.SINGLES} component={Portfolio} />
        <Route exact path={ROUTES.LIFESTYLE} component={Portfolio} />
        <Route exact path={ROUTES.PEOPLE} component={Portfolio} />
        <Route exact path={ROUTES.PLACES} component={Portfolio} />
        <Route exact path={ROUTES.INFO} component={Info} />
        <Route exact path={ROUTES.BLOG} component={Blog} />
      </Grid>
    </Switch>
  </BrowserRouter>
);

render(<App />, document.getElementById('app'));
