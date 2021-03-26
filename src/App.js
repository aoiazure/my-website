import { HashRouter, Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import RPG from "./Components/RPG/RPG";

function App() {
  return (
    <HashRouter basename="/">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/rpg" component={RPG} />
      </Switch>
    </HashRouter>
  );
}

export default App;
