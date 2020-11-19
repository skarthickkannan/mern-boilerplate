import { Switch, Route } from "react-router-dom";
import Register from "./views/Register";
import Login from "./views/Login";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </div>
  );
}

export default App;
