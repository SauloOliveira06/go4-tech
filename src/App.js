import "./App.css";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Home from "./components/Pages/Home/Home";

import Favorite from "./components/Pages/Favorites/Favorite";
import Footer from "./components/Footer/Footer";

import './components/Footer/footer.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Header />
              <Home />
            <Footer />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/favorites">
            <Favorite />
          </Route>
        </Switch>
      </div>
      
    </Router>
  );
}

export default App;
