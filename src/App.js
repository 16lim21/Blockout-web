/**
 * The Single Page Application that incorporates all the routers and the soon to be added navbar
 * @exports App
 */

import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import AuthProvider from "./contexts/useAuthContext";

const App = () => {
    return (
        <AuthProvider>
            <Switch>
                <Route exact path="/" component={Login}></Route>
                <Route path="/home" component={Home}></Route>
            </Switch>
        </AuthProvider>
    );
};

export default App;