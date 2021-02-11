import React, { Component } from 'react'
import LogoFooter from '../atoms/logofooter'
import fbicon from '../../assets/logos/facebook.svg'
import instaicon from '../../assets/logos/instagram.svg'
import githubicon from '../../assets/logos/github-logo.svg'

class Footer extends Component {    
    render() {
        return (
            <div className="container-footer">
                <div className="align-items-center row">
                    <div className="col-md-2">
                        <div className="logofooter">
                            <LogoFooter />
                        </div>
                    </div>
                    <div className="address col-12 col-md-5 text-left">
                        <div className="address-info">
                            <h5>Golang-Tangsel</h5>
                            <p>Desa Cibogo, Kecamatan Cisauk, Kabupaten Tangerang, 15344</p>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <ul className="sos-med">
                            <li>
                                <a href="https://web.facebook.com/golang.tangsel">
                                    <img src={fbicon} alt="facebook icon" />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/golangtangsel/">
                                    <img src={instaicon} alt="instagram icon" />
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/GolangTangsel">
                                    <img src={githubicon} alt="github icon"/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Footer;
