import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { Redirect, Route, Switch, withRouter, BrowserRouter, useHistory } from 'react-router-dom';

import store from 'store';
import Home from 'views/home';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ScrollToTop/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="*">
            <Redirect to="/"/>
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

const ScrollToTop = withRouter(() => {
  const history = useHistory();
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    });
    return unlisten;
  }, [history]);
  return null;
});

export default App;
