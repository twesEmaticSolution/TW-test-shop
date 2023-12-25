import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import Productscreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";

// GTM
import React from 'react'
import ReactDOM from 'react-dom'
import Router from 'react-router'
import routes from './routes'
 
import TagManager from 'react-gtm-module'
 
const tagManagerArgs = {
    gtmId: 'GTM-000000'
}
 
TagManager.initialize(tagManagerArgs)
 
const app = document.getElementById('app')
ReactDOM.render(<Router routes={routes} />, app)
// GTM

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/order/:id" element={<OrderScreen />} />
            <Route path="/product/:id" element={<Productscreen />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/placeorder" element={<PlaceOrderScreen />} />
            <Route path="/shipping" element={<ShippingScreen />} />
            <Route path="/payment" element={<PaymentScreen />} />
            <Route path="/register" element={<RegisterScreen />} />
            <Route path="/profile" element={<ProfileScreen />} />
            <Route path="/cart">
              <Route path=":id" element={<CartScreen />}></Route>
              <Route path="" element={<CartScreen />}></Route>
            </Route>
            <Route path="/" element={<HomeScreen />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
