import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Banner} from "./componets/banner"
import {AboutMe} from "./componets/AboutMe"
import {Resume} from "./componets/Resume/Resume"
import {Contact} from "./componets/Contact"
import {Portfolio} from "./componets/Portfolio"

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          pages: [<AboutMe />, <Portfolio />, <Contact />, <Resume />],
          value: 0,
          isSelected: false
        };
      }

    handleClick(i) {
        this.setState({
            value: i,
            isSelected: true
        });
        document.getElementById("Body").style.visibility = "Visible"
        document.getElementById("banner").style.visibility = "hidden"
    }
    
    render() {

        return (
            <>  <div className='banner' id="banner">
                    <Banner click={(i) => this.handleClick(i)}/>
                </div>
                <div className='main-body' id="Body" >
                    {this.state.pages[this.state.value]}
                </div>
            </>
        )
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);