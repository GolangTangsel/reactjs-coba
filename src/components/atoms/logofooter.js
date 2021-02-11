import React, { Component } from 'react'
import logo from "../../assets/logos/Go-Logo_White.svg";

class LogoFooter extends Component {
    render() {
        return (
            <div>
                <img src={logo} alt="footer-logo" />
            </div>
        )
    }
}

export default LogoFooter;
