import '../css/App.css';
import NavBar from './NavBar';
import {Route, Switch} from "react-router-dom";
import Aragon from './Aragon';
import Gandalf from './Gandalf';
import Frodo from './Frodo';
import Party from './Party';
import {Button, ButtonLabel} from "./Button.style"
import {Container} from "./Container.style"
import {GlobalStyles} from "../GlobalStyles.style"

function App() {
  return (
    <Container>
      <GlobalStyles/>
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
      <Button backgroundColor = "violet"><ButtonLabel>Click Me</ButtonLabel></Button>

      
    </Container >
  );
}

export default App;
