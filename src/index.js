import React from "react"
import ReactDOM from "react-dom"
import {BrowserRouter, Route, Switch} from "react-router-dom"

import Mobiles from "./components/Mobiles"
import Home from "./components/Home"
import Menu from "./components/Menu"

const App = () => {
    return <BrowserRouter basename="">
        <div>
            <Menu/>
            <Switch>
                <Route path="/:type/:prodid?" component={Mobiles}/>
                <Route path="/" component={Home}/>
            </Switch>
        </div>
    </BrowserRouter>
};

ReactDOM.render(<App/>, document.getElementById("root"));