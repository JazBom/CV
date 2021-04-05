import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Languages = () => {
        return(
   
    <div className="languages">

    {/* <img className="languages-logos" src="https://i.imgur.com/FUdEHQQ.png?1"/> */}

    <div className="row-1">

    <ul className="no-bull">
    <li>HTML</li>
    <li>CSS</li>  
    <li>Javascript</li> 
    </ul>

    <ul className="no-bull">
    
    <li>NodeJS</li> 
    <li>Express</li>   
    <li>Parcel</li>    
    </ul>

    <ul className="no-bull">
    <li>ReactJS</li>
    <li>JSX</li> 
    </ul>

    <ul className="no-bull">  
    <li>Ruby</li> 
    <li>Rails</li>  
    </ul>

     <ul className="no-bull teal">
    <li>PHP</li> 
    <li>Wordress</li>
    </ul>

    <ul className="no-bull">
    <li>SQL</li>
    <li>NOSQL</li>
    <li>MongoDB</li>
    <li>Postgres</li>
    </ul> 

    <ul className="no-bull blue">
    <li>Bash</li>
    <li>Git</li>
    <li>Github</li>
    <li>Fork</li>
    </ul>

   
    
    </div>  
    </div>

)
};

export {Languages};


