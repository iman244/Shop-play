import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./App/Home";
import Product from "./App/Product";
import ProductList from "./App/ProductList";
import SignUp from "./App/SignUp";
import Footer from "./components/high-level/Footer/Footer3c";
import Navbar from "./components/high-level/Navbar3c/Navbar3c1";
import SignIn from "./App/SignIn";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/productList" component={ProductList} />
          <Route path="/product/:id" component={Product} />
          <Route path="/signUp" component={SignUp} />
          <Route path="/signIn" component={SignIn} />
          <Route path="/" component={Home} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
