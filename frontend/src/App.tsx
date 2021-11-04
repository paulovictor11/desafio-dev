import { ReactNode, useContext } from 'react';
import {
    BrowserRouter,
    Redirect,
    Route,
    RouteProps,
    Switch,
} from 'react-router-dom';
import { AuthContext } from './contexts/auth';
import { Auth } from './pages/Auth';
import { Home } from './pages/Home';
import { Register } from './pages/Register';

type PrivateRouteProps = RouteProps & {
    children: ReactNode;
};

function PrivateRoute({ children, ...rest }: PrivateRouteProps) {
    const { user } = useContext(AuthContext);

    return (
        <Route
            {...rest}
            render={({ location }) =>
                !!user ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: '/',
                            state: { from: location },
                        }}
                    />
                )
            }
        />
    );
}

export function App() {
    return (
        <BrowserRouter>
            <Switch>
                {/* Rotas livres */}
                <Route path="/" exact component={Auth} />
                <Route path="/register" component={Register} />

                {/* Rotas privadas -> só podem ser acessadas com usuário logado */}
                <PrivateRoute path="/home">
                    <Home />
                </PrivateRoute>
            </Switch>
        </BrowserRouter>
    );
}
