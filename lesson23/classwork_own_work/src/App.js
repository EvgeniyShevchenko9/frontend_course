import './App.scss';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import AsideMenu from './components/AsideMenu/AsideMenu';
import Login from './views/Login/Login';
import Products from './views/Products/Products';
import ProductsPage from './views/ProductsPage/ProductsPage';

function App() {
  return (
    <Router>
    <div className='container'>
     <AsideMenu/>
     <Switch>
        <Route path='/login'>
            <Login/>
        </Route>
        <div className='offsetLeft'>
        <Route path='/products'>
            <Products/>
        </Route>
        <Route path='/products/:id'>
            <ProductsPage/>
        </Route>
        </div>
     </Switch>
     </div>
    </Router>
  );
}

export default App;
