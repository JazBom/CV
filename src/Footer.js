import React, { Component } from "react";
import ContactForm from "./ContactForm";

class Footer extends Component{
    constructor(){
        super();
    };

    render(){
        return(
    <footer className="Footer">
    <ContactForm/ >
    </footer>
        )
    }
};

export { Footer};