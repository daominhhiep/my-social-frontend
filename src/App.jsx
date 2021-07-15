import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";

function App() {
    return (
        <>
            <Router>
                <Switch>
                    <Route path={"/"}>
                        <Home/>
                    </Route>
                    <Route path={"/login"}>
                        <Login/>
                    </Route>
                </Switch>
            </Router>
        </>
    )
}


export default App
