import logo from './logo.svg';
import './App.css';
import CategoryList from './components/CategoryCard/CategoryList';
import CreateCategory from './components/CategoryCard/CreateCategory';
import HomePage from './components/Home';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LoginPage from './components/auth/Login';
import RegisterPage from './components/auth/Register';
import NavbarHome from './components/NavbarHome';

function App() {
  return (

    <Router>
      <NavbarHome />
      <div className="container">
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/register">
            <RegisterPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
