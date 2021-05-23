import {
  BrowserRouter as Router,
  Switch,
  Route,
}                  from 'react-router-dom';
import './App.css';
import Dashboard   from './views/vDashboard/vDashboard';
import CNavigation from 'components/navigation/cNavigation';

function App() {
  return (
    <Router>
      <CNavigation/>
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route path="/statistics">
          <h1>Statistics Page</h1>
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
