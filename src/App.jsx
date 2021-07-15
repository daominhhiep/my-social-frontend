import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";

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
                    <Route path={"/profile"}>
                        <Profile/>
                    </Route>
                </Switch>
            </Router>
        </>
    )
}


export default App
