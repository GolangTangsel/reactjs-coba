import React, { Component } from 'react';
import logo from "../../assets/logos/golang-vertical.svg";

class LogoHeader extends Component {
    render() {
        return(
            <>
            <div>
                <img src={logo} alt="golang-logo" />
            </div>
            </>

        )
    }
}

export default LogoHeader;