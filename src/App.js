import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Contact from './components/Contact/Contact';
import Payment from './components/Payment/Payment';
import StripPayment from './components/StripPayment/StripPayment';
import ProcessPayment from './components/StripPayment/ProcessPayment';


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
        <Route path="/processPayment">
          <ProcessPayment></ProcessPayment>
        </Route>
        
      </Switch>
    </Router>
  );
}

export default App;
