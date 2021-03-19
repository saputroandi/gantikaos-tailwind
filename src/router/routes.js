import Home from "../pages/Home"
import Product from "../pages/Details"

//add your routes here

const routes = [
    {
        path : "/",
        props : {
            exact : true,
        },
        component : () => <Home />
    },
    {
        path : "/detail/:id",
        component : () => <Product />
    },
]

export default routes