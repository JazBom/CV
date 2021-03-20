import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { WebDevelopment } from "./WebDevelopment";

const ProfComp = () => {
    return(
          <div className="prof-comp">
            <ul className="box-lists">
        <li>Eight years in <strong>customer-focused</strong> roles.</li>
        <li>Strategic planning and project management skills.</li>
        <li>Serving and advising <strong>business and community</strong>.</li>
        <li>Proven ability to learn quickly and make <strong>good judgement </strong>calls under pressure.</li>
        <li><strong>Web development</strong> skills, digital marketing training.</li>
        </ul>
                  
          </div>
    );
};

export { ProfComp };