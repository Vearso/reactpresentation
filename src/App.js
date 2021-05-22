import {
  BrowserRouter as Router,
  Switch,
  Route,
}                from 'react-router-dom';
import './App.css';
import Dashboard from './views/vDashboard/vDashboard';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
