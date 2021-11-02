import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Auth } from "./pages/Auth";
import { Home } from "./pages/Home";

export function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Auth} />
                <Route path="/home" exact component={Home} />
            </Switch>
        </BrowserRouter>
    );
}
