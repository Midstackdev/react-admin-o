import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import Users from './pages/users/Users';
import User from './pages/user/User';
import NewUser from './pages/newUser/NewUser';
import Products from './pages/products/Products';
import Product from './pages/product/Product';
import NewProduct from './pages/newProduct/NewProduct';

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
          <Route path="/products" component={Products} exact />
          <Route path="/products/new" component={NewProduct} exact/>
          <Route path="/products/:id" component={Product} exact/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
