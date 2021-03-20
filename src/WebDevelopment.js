import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';





const WebDevelopment = () => {
        return(
    <div className="web-development"> 
    <div className="other">
    <img className="languages-logos" src="https://i.imgur.com/FUdEHQQ.png?1"/>
    <div className="col-1">
        {/* <h2>Full stack development</h2>
        <p className="list-heading">Languages</p>
        <ul className="no-bull"> 
            <li>HTML</li>
            <li><img src=""/>CSS</li>
            <li><img src=""/>PHP</li>
            <li><img src=""/>Javascript</li>
            <li><img src=""/>NodeJS</li>
            <li><img src=""/>JSX</li>

        </ul>
        <p className="list-heading">Frameworks and packages</p>
        <ul className="no-bull">
            <li><img src=""/>React</li>
            <li><img src=""/>Express</li>
            <li><img src=""/>Parcel</li>
        </ul>
        <p className="list-heading">Databases</p>
        <ul className="no-bull">
            <li><img src=""/>SQL</li>
            <li><img src=""/>NoSQL</li>
            <li><img src=""/>MongoDB</li>
        </ul>
        <p className="list-heading">Workflow</p>
        <ul className="no-bull">
        <li><img src=""/>Github</li>
        <li><img src=""/>Fork</li>
        <li><img src=""/>Bash</li>

        </ul>
        <p className="list-heading">Other</p>
        <ul className="no-bull">
            <li><img src=""/>WordPress</li>
        </ul> */}
    </div> 
<div className="row-1">
    <ul className="no-bull">
            <li>HTML</li>
            <li>CSS</li> 
              
    </ul>
    <ul className="no-bull">
    <li>Javascript</li> 
    <li>NodeJS</li> 
            <li>JSX</li>   
    </ul>
    <ul className="no-bull">
            <li>PHP</li> 
            <li>Ruby</li>   
    </ul>
    <ul className="no-bull">
    <li> React.js</li>
    <li> Express.js</li>
    <li> Parcel</li>
        </ul>

<ul className="no-bull">  
            <li> SQL</li>
            <li> NOSQL</li>
            <li> MongoDB</li>
</ul>

<ul className="no-bull">
    <li>Github</li>
    <li>Bash</li>
    <li>Fork</li>
    </ul>
<ul className="no-bull">
    <li>Wordress customisation</li>
    </ul>
            

</div>

<div className="row-2">
<Card style={{ width: '30%' }}>
  <Card.Body>
    <Card.Title><h2>Career highlights</h2></Card.Title>
    <Card.Text>
    <ul className="box-lists">
    <Card.Img variant="top" src="holder.js/100px180" />
    <li>Creating websites like this!</li>
    <li>Living and working in China.</li>
    <li>Successfully delivered the NSW Biosecurity Act 2015.</li>
    <li>Ensured Victorians had water in critical periods by improving licencing processes.</li>
    </ul>
    </Card.Text>
  </Card.Body>
  <Card.Footer>
  <Button variant="primary">See more</Button>
  </Card.Footer>
</Card>

<Card style={{ width: '30%' }}>
  <Card.Body>
    <Card.Title><h2>Professional competencies</h2></Card.Title>
    <Card.Text>
    <ul className="box-lists">
    <Card.Img variant="top" src="holder.js/100px180" />
        <li><strong>Web development</strong> skills, digital marketing training.</li>
        <li>Proven ability to learn quickly and make <strong>good judgement </strong>calls under pressure.</li>
        <li>Research, analysis and project management skills.</li>
        <li>Serving and advising <strong>business and community</strong>.</li>
    </ul>
    </Card.Text>
  </Card.Body>
  <Card.Footer>
  <Button variant="primary">See more</Button>
  </Card.Footer>
</Card>

<Card style={{ width: '30%' }}>
  <Card.Body>
    <Card.Title><h2>Interests</h2></Card.Title>
    <Card.Text>
    <ul className="box-lists no-bull">
    <Card.Img variant="top" src="holder.js/100px180" />
        <li>If I'm not at the beach, I'll be walking my dashie Sebastian <a href="https://www.instagram.com/beachboy_seb/">@beachboy_Seb</a></li>
        <li>... or creating at my art studio <a href="https://www.instagram.com/jessish_art/">@jessish_art</a> </li>
        <li>I also really enjoy learning languages and sharing culture. I try to sneak in time for Chinese comics and poems, and I teach English once a week.</li>
    </ul>
    </Card.Text>
  </Card.Body>
  <Card.Footer>
  <Button variant="primary">See more</Button>
  </Card.Footer>
</Card>

</div>

<div className="row-3"></div>

<div className="row-4">
<h1>Experience</h1>
<div className="row-4-cards">
<Card style={{ width: '20%' }}>
  <Card.Body>
    <Card.Title>General Assembly (GA)</Card.Title>
    <Card.Text>
    <ul className="box-white no-bull">
    <Card.Img variant="top" src="holder.js/100px180" />
        
        <li>Course and dates: Software Engineering Immersive - Nov 2020 to May 2021</li>
        <li>Achievements: I was awarded the 'See Her Excel' scholarship by GA, for women who show potential to excel in the tech industry.</li>
    </ul>
    </Card.Text>
  </Card.Body>
  <Card.Footer>
  <Button variant="primary">See more</Button>
  </Card.Footer>
</Card>


<Card style={{ width: '20%' }}>
  <Card.Body>
    <Card.Title>Victorian Government</Card.Title>
    <Card.Text>
    <ul className="box-white no-bull">
    <Card.Img variant="top" src="holder.js/100px180" />
        
    <li>Role and dates: Project/Policy Officer - 2016 to present</li>
        <li>Achievements: I successfully reduced licence application waiting times by 75%, despite the pandemic.</li>
        
    </ul>
    </Card.Text>
  </Card.Body>
  <Card.Footer>
  <Button variant="primary">See more</Button>
  </Card.Footer>
</Card>

<Card style={{ width: '20%' }}>
  <Card.Body>
    <Card.Title>Florence Academy of Art</Card.Title>
    <Card.Text>
    <ul className="box-white no-bull">
    <Card.Img variant="top" src="holder.js/100px180" />
        
    <li>Course and dates: Drawing and Painting Intensive - Jan 2018 to June 2019</li>
        <li>Achievements: I was awarded a scholarship for attaining high standards in the curriculum, reflecting the values of the school and contributing to the campus culture.</li>
        
    </ul>
    </Card.Text>
  </Card.Body>
  <Card.Footer>
  <Button variant="primary">See more</Button>
  </Card.Footer>
</Card>

<Card style={{ width: '20%' }}>
  <Card.Body>
    <Card.Title>NSW Government</Card.Title>
    <Card.Text>
    <ul className="box-white no-bull">
    <Card.Img variant="top" src="holder.js/100px180" />
    <li>Role and dates: Policy/Project Officer - 2013 to 2016</li>
        <li>Achievements: I coordinated the passage of priority biosecurity legislation through NSW Parliament.</li>
    </ul>
    </Card.Text>
  </Card.Body>
  <Card.Footer>
  <Button variant="primary">See more</Button>
  </Card.Footer>
</Card>

<Card style={{ width: '20%' }}>
  <Card.Body>
    <Card.Title>SBS Television</Card.Title>
    <Card.Text>
    <ul className="box-white no-bull">
    <Card.Img variant="top" src="holder.js/100px180" />
    <li>Role and dates: Public Relations Officer, part-time - January 2007 to January 2009</li>
        <li>Achievements: Independently managed the switchboard and reception during a transmission shutdown.</li>
    </ul>
    </Card.Text>
    
  </Card.Body>
  <Card.Footer>
  <Button variant="primary">See more</Button>
  </Card.Footer>
</Card>
</div>
</div>

    
        
    </div>
</div>
        )
};

export {WebDevelopment};


