import React from 'react';
import './banner.css';
import me from "../Images/david.jpg";

class Banner extends React.Component {

    render() {
        return (
            <div className='BannerFull'>
                <div className='logo'>
                    <img src={me} alt="Me" className='me'/>
                </div>
                <div className='BannerTop'>
                    <div className='header'>
                        <p className="name">Hello World</p>
                    </div>
                    <div>
                        <li>
                            <ul>
                                <button onClick={() => {this.props.click(0)}}>About Me</button>
                            </ul>
                            <ul>
                                <button onClick={() => {this.props.click(1)}}>Portfolio</button>
                            </ul>
                            <ul>
                                <button onClick={() => {this.props.click(2)}}>Contact Me</button>
                            </ul>
                            <ul>
                                <button onClick={() => {this.props.click(3)}}>Resume</button>
                            </ul>
                        </li>
                    </div>
                </div>
            </div>
        )
    }
}

export {Banner}