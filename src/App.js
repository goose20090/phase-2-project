import './App.css';
import NavBar from './NavBar';
import {Route, Switch} from "react-router-dom";
import Aragon from './Aragon';
import Party from './Party';
import Gandalf from './Gandalf';
import Frodo from './Frodo';

function App() {
  return (
    <div>
      <NavBar/>
      <Switch>
        <Route exact path = "/gandalf">
          <Gandalf/>
        </Route>
        <Route exact path = "/aragon">
          <Aragon/>
        </Route>
        <Route exact path = "/frodo">
          <Frodo/>
        </Route>
      </Switch>
      <Party/>


      
    </div>
  );
}

export default App;
