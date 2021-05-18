import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TodoList from "./components/todo-page";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/">
            <TodoList />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
