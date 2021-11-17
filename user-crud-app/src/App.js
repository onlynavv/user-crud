import './index.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './Home';
import Users from './Users';
import AddUsers from './AddUsers';
import Error from './Error';
import EditUsers from './EditUsers';
import Profile from './Profile';
import AddProfile from './AddProfile';
import EditProfile from './EditProfile';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/edit-user/:id">
            <EditUsers />
          </Route>
          <Route path="/create-user">
            <AddUsers />
          </Route>
          <Route path="/profile/:id">
            <Profile />
          </Route>
          <Route path="/add-profile/:id">
            <AddProfile />
          </Route>
          <Route path="/edit-profile/:id">
            <EditProfile />
          </Route>
          <Route path="**">
            <Error />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
