import React from "react"

//router
import {BrowserRouter, Route, Switch, Link} from "react-router-dom"
import Home from "./pages/Home/Home"
import Product from "./pages/Product/Product"

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/detail">
          <Product />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
