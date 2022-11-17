import React from 'react';
import './banner.css';
import me from "../Images/David.png";

class Banner extends React.Component {

    render() {
        return (
            <div className='BannerFull'>
                <div></div>
                <button onClick={() => {this.props.click(0)}}>About Me</button>
                <div></div>
                <button onClick={() => {this.props.click(1)}}>Portfolio</button>
                <div className='logo'>
                    <img src={me} alt="Me" className='me'/>
                </div>
                <button onClick={() => {this.props.click(2)}}>Contact Me</button>
                <div></div>
                <button onClick={() => {this.props.click(3)}}>Resume</button>
                <div></div>
            </div>
        )
    }
}

export {Banner}