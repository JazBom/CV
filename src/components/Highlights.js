import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Highlights = () => {
        return(
        <div className="highlights"> 

<div className="row-2">
<Card>
  <Card.Body>
    <Card.Title><h2>Career highlights</h2></Card.Title>
    <Card.Text>
    <ul className="box-lists no-bull">
    <li>Creating websites like this</li>
    <li>Living and working in China and Italy</li>
    <li>Successfully delivering NSW's Biosecurity Act</li>
    <li>Facilitating Victoria's access to water throughout the pandemic</li>
    </ul>
    </Card.Text>
  </Card.Body>
  <Card.Footer>
  </Card.Footer>
</Card>

<Card>
  <Card.Body>
    <Card.Title><h2>Professional competencies</h2></Card.Title>
    <Card.Text>
    <ul className="box-lists no-bull">
        <li>Web development and full stack programming</li>
        <li>Ability to learn quickly and make good judgement calls under pressure</li>
        <li>Research, analysis and project management</li>
        <li>Delivering results for clients</li>
    </ul>
    </Card.Text>
  </Card.Body>
  <Card.Footer>
  </Card.Footer>
</Card>

<Card>
  <Card.Body>
    <Card.Title><h2>Interests</h2></Card.Title>
    <Card.Text>
    <ul className="box-lists no-bull">
    <li>Designing and building web apps, like my browser game <a href="https://jazbom.github.io/">Art vs Art</a></li>
    <li>Art <a href="https://www.instagram.com/jessish_art/">@jessish_art</a> </li>
    <li>Languages (Mandarin 普通话，简/繁体字)</li>
    <li>Beach days with my dog <a href="https://www.instagram.com/beachboy_seb/">@beachboy_Seb</a></li>
    </ul>
    </Card.Text>
  </Card.Body>
  <Card.Footer>
  </Card.Footer>
</Card>

</div>
</div>

)};

export {Highlights};


