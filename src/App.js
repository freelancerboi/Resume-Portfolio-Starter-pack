import GalleryWedding from './Components/GalleryWedding';

import Start from "./Start";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

const App = () => {

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/' exact component={Start} />
          <Route path='/wedding' component={GalleryWedding} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
