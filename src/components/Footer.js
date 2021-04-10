import React, { Component } from 'react'
import { MDBContainer, MDBFooter } from "mdbreact";

class Footer extends Component {
    render() {
        return (
            <MDBFooter className="footer font-small pt-4 mt-4">
                <div className="footer-copyright text-center py-3">
                    <MDBContainer fluid>
                        &copy; MB My Portfolio, 2021
                    </MDBContainer>
                </div>
            </MDBFooter>
        )
    }
}

export default Footer
