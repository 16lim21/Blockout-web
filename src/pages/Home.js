/**
 * Home page that users see once they have logged in
 * @exports Home
 */
import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import ToDo from "./ToDo";
import NewToDo from "./NewToDo"
import styled from "styled-components";

const Background = styled.div`
    background-color: #282c34;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    font-family: 'Source Sans Pro', sans-serif;
`

const Home = () => {
    let match = useRouteMatch()
    return (
        <Background>
            <Switch>
                <Route exact path={match.path}>
                    <ToDo/>
                </Route>
                <Route exact path={`${match.path}/new`}>
                    <NewToDo/>
                </Route>
            </Switch>
        </Background>
    );
};

export default Home;
