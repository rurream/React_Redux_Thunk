import './App.css';
import UserContainer from './containers/users/UsersList';
import { BrowserRouter as Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import UserDelete from './containers/users/UserDelete';
import NavBar from './containers/navBar/NavBar';
import UserCreate from './containers/users/UserCreate';
import UserEdit from './containers/users/UserEdit';
import { useSelector } from 'react-redux'
import Spinner from './components/spinner/Spinner';


function App() {
  const users = useSelector((state) => state.users);

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path='/' exact >
            <UserContainer />
          </Route>
          <Route path='/create' exact >
            <UserCreate />
          </Route>
          <Route path='/users/delete/:id' exact >
            <UserDelete />
          </Route>
          <Route path='/users/edit/:id' exact >
            <UserEdit />
          </Route>
        </Switch>
      </Router>
      {
          users.isProcesing && <Spinner/>
      }
    </div>
  );
}

export default App;
