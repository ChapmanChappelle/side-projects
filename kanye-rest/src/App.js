import './App.css';
import { BrowserRouter, Route, Switch} from "react-router-dom"
import Home from "./Components/Home"

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
