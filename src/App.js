import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Routes from './router/route';
import UserContextProvider from './contexts/UserContext';

function App() {
  return (
    <Router>
      <div className="App">
          <UserContextProvider>
            <Switch>
              <Routes />
            </Switch>
          </UserContextProvider>
      </div>
    </Router>
  );
}

export default App;
