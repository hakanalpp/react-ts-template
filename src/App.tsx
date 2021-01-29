import { BrowserRouter as RouterDOM, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';

const App = (): JSX.Element => {
  return (
    <RouterDOM>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </RouterDOM>
  );
};

export default App;
