import React, { Component } from 'react';
import { Element } from 'react-scroll'
import '../Styles/Contact.css';

class Contact extends Component {
    render() {
        return (
            <Element className="mgt-global-20" name="scroll-time">
                <div className="Contact" data-aos="fade-up">
                    <h1>This is Contact component</h1>
                </div>
            </Element>
        );
    }
}

export default Contact;
