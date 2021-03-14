import 'bootstrap/dist/css/bootstrap.css';
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/umd/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import NavBar from './NavBar';

import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import ToonDetailsPage from './pages/ToonDetailsPage';
import ToonListPage from './pages/ToonListPage';
import UpdateToonPage from './pages/UpdateToonPage';

function App() {
  return (
    <Router>
      <NavBar />
      <div className="container">
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/about" component={AboutPage} exact />
          <Route path="/list" component={ToonListPage} exact />
          <Route path="/detail/:id" component={ToonDetailsPage} exact />
          <Route path="/update/:id" component={UpdateToonPage} exact />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
