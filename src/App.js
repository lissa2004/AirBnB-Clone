import './App.css';
import Header from "./Components/Layout/Header"
import Home from "./Components/Layout/Home"
import Footer from './Components/Layout/Footer';
import SearchPage from './Components/Layout/SearchPage';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Router >
      <Header />
      <Switch >
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/Search">
          <SearchPage />
        </Route>
      </Switch>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
