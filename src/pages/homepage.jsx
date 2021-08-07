import React, { Component } from 'react';
import Loading from './loadPage';
import Fade from 'react-reveal/Fade';

// Talk about how I specialize in all things Javascript. Frontend, backend, etc. Node, versatile language. Also familiar with others.

class HomePage extends Component { 

    constructor(props) {
        super(props);
        this.state = {        
            classNames: "",
            animationFinished: false,
            displayLoading: "block",
            displayPage: "none"
        }            
        this.endAnimation = this.endAnimation.bind(this)
      }
    
      onAnimationEnd = () => {
        this.setState({
          animationFinished: true,
        });
      };      

    endAnimation = () => {
        this.setState({
            ...this.state,
            displayLoading: "none",
            displayPage: "block"
        })        
    }
    
    render() {            
        return ( 
            <div>                                     
                <Loading handleEnd={this.endAnimation} display={this.state.displayLoading} /> 
                <div className='Page' style={{ display: this.state.displayPage }}>
                    <Fade left>
                        <h1 className='Heading'>Trevor Jarvis</h1>                    
                    </Fade>
                    <Fade right>
                        <p><code>Senior Software Engineer and Technical Project Manager</code></p>
                        <p><code>I specialize in Javascript and React.</code></p>
                        <p><code>I use Agile/Scrum methodologies to effectively manage my projects.</code></p>                    
                    </Fade>
                </div>
            </div>
         );
    }
}

export default HomePage;