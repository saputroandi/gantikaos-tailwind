import React from "react"
import store from './redux/store'
import Home from "./pages/Home/Home"
import { Provider } from 'react-redux'
import Product from "./pages/Product/Product"
import {BrowserRouter, Route, Switch} from "react-router-dom"

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
