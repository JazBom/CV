import React, { Component } from "react";

class ContactForm extends Component{
    constructor() {
        super();
        this.state = {
            contactFormMessages: [ { name: "", email: "", message: ""},
                        ],
        };
    };

    handleContactFormSubmit = (name, email, message) => {
        console.log("formvalues:", name, email, message);
        const newMessage= {name: name, email: email, message: message};
        const newContactFormMessages = [...this.state.contactFormMessages];
        newMessage.push(newContactFormMessages);
        this.setState({contactFormMessages: newContactFormMessages});
    };
    
    render(){
        return(
            
            <div className="Contact-form">

                <div className="Details">
                <button className="Button form-element" onSubmit={this.handleContactFormSubmit}>Contact me</button>
                <input className="Contact form-element" placeholder="Your name">{this.state.name}</input>
                <input className="Contact form-element" placeholder=" and email">{this.state.email}</input>
                </div>

                <div className="Messages">
                <input className="Message-input" placeholder="... write your message here!">{this.state.message}</input>
                </div>

            </div>
        )
    };

};

export default ContactForm;