import logo from './logo.svg';
import './App.css';
import HomePage from './components/Home';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LoginPage from './components/auth/Login';
import RegisterPage from './components/auth/Register';
import NavbarHome from './components/NavbarHome';

import AddTutorial from "./components/tutorials/AddTutorial";
import Tutorial from "./components/tutorials/Tutorial";
import TutorialsList from "./components/tutorials/TutorialsList";
import { ValidForm } from './components/ValidForm';

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

          <Route path="/valid">
            <ValidForm />
          </Route>

          <Route exact path={["/tutorials"]} component={TutorialsList} />
          <Route exact path="/add" component={AddTutorial} />
          <Route path="/tutorials/:id" component={Tutorial} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
