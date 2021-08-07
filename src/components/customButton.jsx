import React from 'react';

const CustomButton = (props) => {
    let customButton = {}
    if (props.type == 'image') {
        customButton = <img src={props.image} className='ImageButton'/>
    } else {
        customButton = <custombutton><code>{props.text}</code></custombutton>
    }

    return ( 
        <a href={props.link} className='Link'>
            {customButton}
        </a>
     );
}
 
export default CustomButton;
