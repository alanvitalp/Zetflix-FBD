import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Films from './components/Films';

import Login from './components/Login';
import Register from './components/RegisterForm';
import Series from './components/Series';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>

      <Switch>
        <Route path="/series" component={Series} />
        <Route path="/films" component={Films} />
      </Switch>

      <Switch>

      </Switch>
    </Router>
  );
}

export default App;
