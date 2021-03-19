import routes from "./routes"
import {BrowserRouter, Route, Switch} from "react-router-dom"

//dont touch this, instead touch routes.js
export default function Router() {

    return (
        <BrowserRouter>
            <Switch>
                {routes.map((route, index) => (
                    <Route
                    key={index}
                    path={route.path}
                    children={<route.component />}
                    {...route.props}
                    />
                ))}
            </Switch>
        </BrowserRouter>
    )
}