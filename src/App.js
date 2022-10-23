import { Route, Switch } from 'react-router-dom';
import './App.module.css';
import Login from './pages/login/Login';
import MainPage from './pages/mainpage/MainPage';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={() => <MainPage />} />
        <Route path="/login" render={() => <Login />} />
        <Route render={() => <h3>Page Not Found.</h3>} />
      </Switch>
    </div>
  );
}

export default App;
