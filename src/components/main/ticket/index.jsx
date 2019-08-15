import React from 'react';
import { TicketWrap } from './styled'

import City from "./City"

class Ticket extends React.PureComponent {

    render() {

            return (
                <TicketWrap>
                    <header>
                        <div className="headTop">
                            <p>演出</p>
                        </div>
                    </header>
                    <City/>
                </TicketWrap >
            )
    }
}

export default Ticket

