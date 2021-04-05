import React from "react";
import {
    BrowserRouter as 
    Link
  } from "react-router-dom";
  import Button from 'react-bootstrap/Button';

const Banner = () => {
        return(
         

            <div className="banner">
              
            <div className="sub-header">
                 <p className="first-word">functional</p> 
                 <p className="second-word">joyful</p> 
                 <p className="third-word">elegant</p>
              </div>
              
              <h2>Jessica Bommer</h2>
              
              <div className="img-container">
                <img src="https://i.imgur.com/7oTF4p3.png" alt="photo-of-Jess" />
              </div>
            
              

            <h1>Web Dev | Artist | Project Manager</h1>

            </div>
          
        )
    };

    export { Banner }