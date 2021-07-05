import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import Users from './pages/users/Users';
import User from './pages/user/User';
import NewUser from './pages/newUser/NewUser';

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/users" component={Users} exact />
          <Route path="/users/new" component={NewUser} exact/>
          <Route path="/users/:id" component={User} exact/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
