

import './AppStyle.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { Nav } from './Nav';
import { Banner } from './Banner';
import { Footer } from './Footer';
import { Container } from './Container';
import { WebDevelopment } from './WebDevelopment'
import { Art } from './Art'


  const App = () => {
    return (
      <Router>
        <div className="App">
        
        <img src="https://jessicabommerblog.files.wordpress.com/2017/02/original-1.jpg" className="img-background"/>  
          
          <Nav/>
          <Banner/>
           
            <Switch>

            <Route exact-path="/home">
              <Container/>
            </Route>

            <Route exact-path="/webdevelopment">
                <WebDevelopment/>
            </Route>

            <Route exact-path="/art">
                <Art/>
            </Route>

          </Switch>
          <Footer/>
        </div>
  
      </Router>
          
    );
  };
  
  export default App;
