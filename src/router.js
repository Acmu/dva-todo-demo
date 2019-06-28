import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import TodoPage from './routes/TodoPage';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path='/todo' exact component={TodoPage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
