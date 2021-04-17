import './AppStyle.css';
import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faPalette, faEnvelope, faPaperPlane, faPhone, faPhoneAlt, faMobile, faMobileAlt, faFileDownload, faArrowAltCircleDown, faArrowDown, faGem, faDatabase } from '@fortawesome/free-solid-svg-icons'
import {
  TransitionGroup,
  CSSTransition
} from "react-transition-group";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useLocation,
  useParams
} from "react-router-dom";
import { Nav } from './components/Nav';
import { Banner } from './components/Banner';
import { Container } from './components/Container';
import { Art } from './components/Art';
import { Footer } from './components/Footer';

const App = () => {
    
    library.add(fab, faPalette, faEnvelope, faPaperPlane, faPhone, faPhoneAlt, faMobile, faMobileAlt, faFileDownload, faArrowAltCircleDown, faArrowDown, faGem, faDatabase)

    return (
      <Router>
        <div className="App">
        
        {/* <img src="https://jessicabommerblog.files.wordpress.com/2017/02/original-1.jpg" className="img-background"/>  */}
        <img src="../Assets/BannerPic.png" className="img-background" alt="watercolor paint strokes"/>  

          
          <Nav/>
          <Banner/>
          {/* <CSSTransition
            classNames="fade"
            timeout={300}> */}
            <Switch>

            <Route exact path="/art">
              <Art/>
            </Route>

            <Route exact path="/">
              <Container/>
            </Route>

            {/* <Route path="*">
              <AnimationApp/>
            </Route> */}
            
            </Switch>
            {/* </CSSTransition> */}
          <Footer/>

        </div>
  
      </Router>
          
    );
  };
  
  export default App;
