import "./App.css";
import Community from "./Pages/Community";
import GlobalForum from "./Pages/GlobalForum";
import Conference from "./Pages/Conference";
import Accelerator from "./Pages/Accelerator";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route path="/" component={GlobalForum} exact />
      <Route path="/community" component={Community} />
      <Route path="/conference" component={Conference} />
      <Route path="/accelerator" component={Accelerator} />
    </Switch>
  );
}

export default App;
