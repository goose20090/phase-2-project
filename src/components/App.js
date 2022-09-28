import '../css/App.css';
import NavBar from './NavBar';
import {Route, Switch} from "react-router-dom";
import Party from './Party';
import {Container} from "./component styles/Container.style"
import {GlobalStyles} from "../GlobalStyles.style"
import CharacterFinder from './CharacterFinder';

function App() {
  return (
    <Container>
      <GlobalStyles/>
      <NavBar/>
      <Switch>
        <Route exact path = "/party">
          <Party/>
        </Route>
        <Route exact path = "/finder">
          <CharacterFinder/>
        </Route>
      </Switch>
    </Container >
  );
}

export default App;
