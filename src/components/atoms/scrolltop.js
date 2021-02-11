import React, { Component } from 'react'
import arrowicon from '../../assets/logos/up-arrow.svg'

class ScrollTop extends Component {
    constructor(props){
        super()
        this.scrollTop = this.scrollTop.bind(this)
        this.scrollHide = this.scrollHide.bind(this)
    }
    scrollHide(){
        if (window.pageYOffset > 300){
                document.getElementById('scrollTop').classList.remove('scrollHide')
                console.log('test')
        } else if (window.pageYOffset <= 400){
            document.getElementById('scrollTop').classList.add('scrollHide')
        }
    }
    scrollTop() {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
    componentDidMount(){
        window.addEventListener('scroll',this.scrollHide)
    }    
    render() {
        return (
            <div id="scrollTop" className="scrollHide" onClick={this.scrollTop}>
                <img src={arrowicon} alt="scroll up" />
            </div>
        )
    }
}

export default ScrollTop;
