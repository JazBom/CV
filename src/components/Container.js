import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { Languages } from "./Languages";
import { Highlights } from "./Highlights";
import { SiteLinks } from "./SiteLinks";
import { Experience } from "./Experience";

const Container = () => {
    return(
          <div className="container">
          <Languages />
          <Highlights />
          <SiteLinks /> 
          <Experience />
          </div>
)
};

export { Container };