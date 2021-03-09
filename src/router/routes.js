import Home from "../pages/Home/Home"
import Product from "../pages/Product/Product"

//add your routes here

const routes = [
    {
        path : "/",
        exact : true,
        component : () => <Home />
    },
    {
        path : "/detail",
        exact : false,
        component : () => <Product />
    },
]

export default routes