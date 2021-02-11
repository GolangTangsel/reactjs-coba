import React, { Component } from 'react';
import BtnOurServices from '../atoms/btnourservices';
import BtnOurProjects from '../atoms/btnourprojects';
import BtnOurTeams from '../atoms/btnourteams';
import LogoHeader from '../atoms/logoheader';


class Header extends Component {
    render() {
        return (
            <div className='container-header'>
                <div className="align-items-center row">
                <div className="col-md-2">
                        <div className="logoheader">
                            <LogoHeader />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="our-services">
                            <BtnOurServices />
                        </div>
                    </div>
                    <div className="col-md-3">                       
                        <div className="our-projects">
                            <BtnOurProjects /> 
                        </div>
                    </div>
                    <div className="col-md-3">                       
                        <div className="our-teams">
                            <BtnOurTeams /> 
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;