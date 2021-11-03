import { useContext, useEffect } from "react";
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";
import { AuthContext } from "./contexts/auth";
import { Auth } from "./pages/Auth";
import { Home } from "./pages/Home";
import { Register } from "./pages/Register";

export function App() {
    const history = useHistory();
    const { user } = useContext(AuthContext);

    useEffect(() => {
        if (!!user) {
            history.replace('/');
        }
    }, []);

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Auth} />
                <Route path="/register" exact component={Register} />
                <Route path="/home" exact component={Home} />
            </Switch>
        </BrowserRouter>
    );
}
