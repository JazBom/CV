

import './AppStyle.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { Nav } from './components/Nav';
import { Banner } from './components/Banner';
import { Container } from './components/Container';
import { Footer } from './components/Footer';


  const App = () => {
    return (
      <Router>
        <div className="App">
        
        {/* <img src="https://jessicabommerblog.files.wordpress.com/2017/02/original-1.jpg" className="img-background"/>  */}
        <img src="../Assets/BannerPic.png" className="img-background"/>  

          
          <Nav/>
          <Banner/>
           
            <Switch>

            <Route exact-path="/home">
              <Container/>
            </Route>

            </Switch>

          <Footer/>
          
        </div>
  
      </Router>
          
    );
  };
  
  export default App;
