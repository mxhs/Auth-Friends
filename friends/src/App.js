import logo from './logo.svg';
import './App.css';
import {Route, Switch} from 'react-router-dom'

//Components
import {LoginPage} from './components/LoginPage'
import {FriendsList} from './components/FriendsList'
import PrivateRoute from './components/PrivateRoute';
import AddFriend from './components/AddFriend';


function App() {
  return (
    <Switch>
      <PrivateRoute exact path ="/friends" component={FriendsList}/>
      <PrivateRoute exact path ="/addfriend" component={AddFriend}/>
      <Route exact path="/">
        <LoginPage/>
      </Route>
    </Switch>
  );
}

export default App;
