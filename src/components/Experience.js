import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Experience = () => {
    return(
    <div className="experience"> 
        <div className="row-4">
        <h1>Experience</h1>
            <div className="row-4-cards">
            <Card style={{ width: '20%' }}>
            <Card.Body>
                <Card.Title className="teal"><h3>General Assembly (GA)</h3></Card.Title>
                <Card.Img variant="top" src="https://i.imgur.com/SjINd9it.png?3" />
                <Card.Text>
                    <ul className="box-list no-bull">Achievements: 
                        <li>I was awarded the 'See Her Excel' scholarship for showing potential as a software engineer.</li>
                    </ul>
                    <ul className="box-list no-bull">Course and dates: 
                        <li>Software Engineering Immersive - Nov 2020 to May 2021</li>
                    </ul>
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <Button variant="primary">See more</Button>
            </Card.Footer>
            </Card>

            <Card style={{ width: '20%' }}>
            <Card.Body>
                <Card.Title className="teal"><h3>Victorian Government</h3></Card.Title>
                <Card.Img variant="top" src="https://i.imgur.com/i6ZWFmRt.png?1" />
                <Card.Text>
                    <ul className="box-list no-bull">Achievements: 
                        <li>I successfully reduced licence application waiting times by 75%, despite the pandemic.</li>
                    </ul>
                    <ul className="box-list no-bull">Role and dates:
                        <li>Project Officer - Aug 2016 to PRESENT</li>
                    </ul>
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <Button variant="primary">See more</Button>
            </Card.Footer>
            </Card>

            <Card style={{ width: '20%' }}>
            <Card.Body>
                <Card.Title className="teal"><h3>Florence Academy of Art</h3></Card.Title>
                <Card.Img variant="top" src="https://i.imgur.com/xM9qVzrt.png?1" />
                <Card.Text>
                <ul className="box-list no-bull">Achievements: 
                    <li>I was awarded a full semester scholarship for attaining an equivalent 4.0 GPA.</li>
                </ul>
                <ul className="box-list no-bull">Course and dates:
                    <li>Drawing and Painting Intensive - Jan 2018 to June 2019</li>
                </ul>
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <Button variant="primary">See more</Button>
            </Card.Footer>
            </Card>

            <Card style={{ width: '20%' }}>
            <Card.Body>
                <Card.Title className="teal"><h3>NSW Government</h3></Card.Title>
                <Card.Img variant="top" src="https://i.imgur.com/7tJZYPZt.png?1" />
                <Card.Text>
                <ul className="box-list no-bull">Achievements: 
                    <li>I coordinated the passage of priority biosecurity legislation through NSW Parliament.</li>
                </ul>
                <ul className="box-list no-bull">Role and dates: 
                    <li>Project Officer - Mar 2013 to Feb 2016</li>
                </ul>
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <Button variant="primary">See more</Button>
            </Card.Footer>
            </Card>

            <Card style={{ width: '20%' }}>
            <Card.Body>
                <Card.Title className="teal"><h3>SBS Television</h3></Card.Title>
                <Card.Img variant="top" src="https://i.imgur.com/xBUKbZmt.png?3" />
                <Card.Text>
                <ul className="box-list no-bull">Achievements: 
                    <li>Independently managed the switchboard and reception during a transmission shutdown.</li>
                </ul>
                <ul className="box-list no-bull ">Role and dates: 
                    <li>Public Relations Officer - January 2007 to January 2009</li>
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
    )
};

export { Experience };


