import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Button from '../components/customButton';
import EmailIcon from '../images/emailIcon.svg'

class AboutPage extends Component {
    state = {  }
    render() { 
        return (                                                
                <div className='Page'>
                    <h1 className='Heading'>About Me</h1>                    
                    <p><code>Born and raised in Portland, Oregon, I'm currently in the Boise area.</code></p>
                    <p><code>Currently working as a senior software engineer at Suds Creative, but I'm always looking for cool projects!</code></p>
                    <p><code>Hit me up!</code></p>                    
                    <div className='Center-Justified'>
                        <Button type='image' image={EmailIcon} link="mailto:tmjarv@gmail.com" />
                    </div>                    
                    <Fade left>
                        <p><code>Some sort of thing here.</code></p>
                    </Fade>                      
                </div>                 
         );
    }
}

export default AboutPage;