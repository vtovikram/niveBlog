import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import 'antd/dist/antd.css';
import Wrapper from './components/Wrapper';

function App() {

  return (<Router>
    <div>
      <Switch>
        <Route path="/:id" children={<Wrapper />} />
      </Switch>
    </div>
  </Router>);
}

export default App;
