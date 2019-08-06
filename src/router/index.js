import React, { Fragment } from "react";
import { Route, Redirect } from 'react-router-dom';


import Index from "@/components/main/index"
import Mine from "@/components/main/mine"
import Theater from "@/components/main/theater"
import Ticket from "@/components/main/ticket"

export default class extends React.PureComponent {
    render() {
        return (
            <Fragment>
                <Route path="/index" component={Index} />
                <Route path="/mine" component={Mine} />
                <Route path="/theater" component={Theater} />
                <Route path="/ticket" component={Ticket} />
                <Redirect path="/" to="/index" />
            </Fragment>
        )
    }
}
