
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Films from './components/Films';
import Series from './components/Series';
import Category from './components/Category';
import Producer from './components/Producer';
import Actors from './components/Actors';
import StarF from './components/StarF';
import StarE from './components/StarE';
import Director from './components/Director';
import Home from './components/Home';
import WatchF from './components/WatchF';
import WatchS from './components/WatchS';
import Users from './components/Users';

import Header from './components/Header'
import Episode from './components/Episode';
import Season from './components/Season';



function App() {
  return (
    <Router>
      <Header />

      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>

      <Switch>
        <Route path="/series" component={Series} />
        <Route path="/films" component={Films} />
        <Route path="/category" component={Category} />
        <Route path="/producer" component={Producer} />
        <Route path="/director" component={Director} />
        <Route path="/actor" component={Actors} />
        <Route path="/star_f" component={StarF} />
        <Route path="/star_e" component={StarE} />
        <Route path="/users" component={Users} />
        <Route path="/watch_f" component={WatchF} />
        <Route path="/watch_s" component={WatchS} />
        <Route path="/episode" component={Episode} />
        <Route path="/season" component={Season} />
      </Switch>

    </Router >
  );
}

export default App;
