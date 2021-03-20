import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { WebDevelopment } from "./WebDevelopment";

const Container = () => {
    return(
          <div className="container">
            
                  <WebDevelopment/>
          </div>
    );
};

export { Container };