import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Button from '../components/customButton';
import LinkedInLogo from '../images/linkedinLogo.png'
import EmailIcon from '../images/emailIcon.svg'

class ContactPage extends Component {
    state = {  }
    render() { 
        return (                                                
                <div className='Page'>
                    {/* <h1 className='Heading'>Some Headline</h1> */}
                    <p><code>Got a cool project? Hit me up!</code></p>
                    <p><code>Send me an email or a LinkedIn message.</code></p>                    
                    <div className='Wrapper-3-Col'>
                        <Fade left>
                            <div className='Three-Column-1'>
                                <Button type='image' image={EmailIcon} link="mailto:tmjarv@gmail.com" />
                            </div>
                        </Fade>
                        <Fade right>
                            <div className='Three-Column-3'>
                                <Button type='image' image={LinkedInLogo} link="https://www.linkedin.com/in/trevor-jarvis-b7b235185/" />
                            </div>
                        </Fade>
                    </div>
                </div>
         );
    }
}
 
export default ContactPage;