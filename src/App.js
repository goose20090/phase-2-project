import './App.css';
import NavBar from './NavBar';
import {Route, Switch} from "react-router-dom";
import Characters from './Characters';
import Quotes from './Quotes';

function App() {
  return (
    <div>
      <NavBar/>
      <Switch>
        <Route exact path = "/characters">
          <Characters/>
        </Route>
        <Route exact path = "/quotes">
          <Quotes/>
        </Route>
      </Switch>
      
    </div>
  );
}

export default App;
