import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Contact from './components/Contact/Contact';
import Payment from './components/Payment/Payment';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/contact">
          <Contact></Contact>
        </Route>
        <Route path="/payment">
          <Payment></Payment>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
