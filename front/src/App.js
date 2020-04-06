import React from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';
import HomePage from './components/home-page/HomePage';
import ProductList from './components/product-list/ProductList';
import RegisterUser from './components/LoginUser/RegisterUser';
import RegisterPartner from './components/loginPartner/RegisterPartner';
import Login from './components/connection/Login';
import ProductDescription from './components/product-description/ProductDescription';
import Payment from './components/payment/Payment';
import UserInfo from './components/user/user-info/UserInfo';
import UserOrder from './components/user/user-order/UserOrder';
import Basket from './components/basket/Basket';
import AddImage from './components/admin/add-image/AddImage';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/product-list" component={ProductList} />
        <Route path="/login-user" component={RegisterUser} />
        <Route path="/login-driver" component={RegisterPartner} />
        <Route path="/login" component={Login} />
        <Route path="/product-description" component={ProductDescription} />
        <Route path="/payment" component={Payment} />
        <Route path="/user/info" component={UserInfo} />
        <Route path="/user/order" component={UserOrder} />
        <Route path="/basket" component={Basket} />
        <Route path="/upload/image" component={AddImage} />
      </Switch>
    </div>
  );
}

export default App;
