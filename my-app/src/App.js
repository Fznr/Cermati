import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Logo from './Assets/logo.png'
import { faComments } from "@fortawesome/free-regular-svg-icons";
import { faPaintBrush } from "@fortawesome/free-solid-svg-icons";
import { faCubes } from "@fortawesome/free-solid-svg-icons";
import { faBullhorn } from "@fortawesome/free-solid-svg-icons";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import { faTasks } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Helmet} from 'react-helmet'


function App() {
  const [cookies,setCookies]=React.useState(true)
  const [leter,setLeter]=React.useState(false)
  const [scroll,setScroll]=React.useState(true)
  const handleCookies= () => {
    setCookies(false)
  }
  const handleLeter= () => {
    setLeter(false)
    setScroll(false)
    setInterval(() => {
      setScroll(true);
    }, 60000);
  }

  onscroll = () => {
    setLeter(true)
  }
  return ( 
    <>
    <div>
      <Helmet>
        <title>​Fauzan Rachmatullah | Cermati.com Front-end Developer Entry Test</title>
      </Helmet>
    </div>
    {cookies ? 
      <div className="sliding">
        <div className="slidingContent">
          <h1>By accessing and using this website, you acknowledge that you have read and
              understand our Cookie Policy, Privacy Policy, and our Terms of Service.</h1>
        </div>
          <button id="slidingButton" onClick={handleCookies}>Got it</button>
      </div> : 
      <div className="sliding" style={{height:"0px"}}>
      </div>
    }
    
    {cookies ? 
      <div className="header" style={{marginTop:"50px"}}>
        <div className="headerLogo">
          <img src={Logo} alt="logoHeader"/>
        </div>
        <div className="headerBody">
          <h2 className="headText">Hello! I'm Fauzan Rachmatullah</h2>
          <h1 className="headText">Consult, Design,and Develop Websites</h1>
          <p className="headText">Have something great in mind? Feel free to contact me.</p>
          <p className="headText">I'll help you to make it happen</p>
          <button>LET'S MAKE CONTACT</button>
        </div>
      </div> : 
      <div className="header" style={{marginTop:"0px"}}>
        <div className="headerLogo">
          <img src={Logo} alt="logoHeader"/>
        </div>
        <div className="headerBody">
          <h2 className="headText">Hello! I'm Fauzan Rachmatullah</h2>
          <h1 className="headText">Consult, Design,and Develop Websites</h1>
          <p className="headText">Have something great in mind? Feel free to contact me.</p>
          <p className="headText">I'll help you to make it happen</p>
          <button>LET'S MAKE CONTACT</button>
        </div>
      </div>
    }

      <div className="content">
        <div className="highlightHeader">
          <h2>How Can I Help You?</h2>
          <p>Our work then targeted, best practices outcomes social innovation synergy.
              Venture philanthropy, revolutionary inclusive policymaker relief. User-centered
              program areas scale.</p>
        </div>
        <div className="contentBody">
          <div  id="columnContent">
            <div className="tileHeader">
              <h1>
                Consult
              </h1>
              <FontAwesomeIcon icon={faComments}/>
            </div>
            <p>
              Co-create, design thinking; strengthen infrastructure resist granular.
              Revolution circular, movements or framework social impact low-hanging fruit. 
              Save the world compelling revolutionary progress.
            </p>
          </div>
          <div  id="columnContent">
          <div className="tileHeader">
              <h1>
                Design
              </h1>
              <FontAwesomeIcon icon={faPaintBrush}/>
            </div>
            <p>
              Policymaker collaborates collective impact humanitarian shared value
              vocabulary inspire issue outcomes agile. Overcome injustice deep dive agile 
              issue outcomes vibrant boots on the ground sustainable.
            </p>
          </div>
          <div  id="columnContent">
          <div className="tileHeader">
              <h1>
                Develop
              </h1>
              <FontAwesomeIcon icon={faCubes}/>
            </div>
            <p>
              Revolutionary circular, movements a or impact framework social impact low-
              hanging. Save the compelling revolutionary inspire progress. Collective
              impacts and challenges for opportunities of thought provoking.
            </p>
          </div>
          <div  id="columnContent">
          <div className="tileHeader">
              <h1>
                Marketing
              </h1>
              <FontAwesomeIcon icon={faBullhorn}/>
            </div>
            <p>
              Peaceful; vibrant paradigm, collaborative cities. Shared vocabulary agile,
              replicable, effective altruism youth. Mobilize commitment to overcome
              injustice resilient, uplift social transparent effective.
            </p>
          </div>
          <div  id="columnContent">
          <div className="tileHeader">
              <h1>
                Manage
              </h1>
              <FontAwesomeIcon icon={faTasks}/>
            </div>
            <p>
              Change-makers innovation or shared unit of analysis. Overcome injustice
              outcomes strategize vibrant boots on the ground sustainable. Optimism,
              effective altruism invest optimism corporate social.
            </p>
          </div>
          <div  id="columnContent">
          <div className="tileHeader">
              <h1>
                Evolve
              </h1>
              <FontAwesomeIcon icon={faChartLine}/>
            </div>
            <p>
              Activate catalyze and impact contextualize humanitarian. Unit of analysis
              overcome injustice storytelling altruism. Thought leadership mass 
              incarceration. Outcomes big data, fairness, social game-changer.
            </p>
          </div>

        </div>
        
        {leter && scroll ? 
          <div className="newsleter" style={{transform:"scaleY(1)"}}>
            <div id="newsleterHead">
              <h1>Get latest updates in web technologies</h1>
              <FontAwesomeIcon icon={faTimes} onClick={handleLeter}/>
            </div>
            <p>I write articles related to web technologies, such as design trends, development
              tools, UI/UX case studies and reviews, and more. Sign up to my newsletter to get
              them all.</p>
            <form>
              <input placeholder="Email Address"></input>
              <button id="buttonNews">Count Me In</button>
            </form>
          </div> :
          <div className="newsleter" style={{transform:"scaleY(0)"}}>
            <h1>Get latest updates in web technologies</h1>
            <p>I write articles related to web technologies, such as design trends, development
              tools, UI/UX case studies and reviews, and more. Sign up to my newsletter to get
              them all.</p>
            <form>
              <input placeholder="Email Address"></input>
              <button id="buttonNews">Count Me In</button>
            </form>
        </div>
        }
        
        <div className="footer-copyright text-center py-1" id="footerPage">
          <p>“​© 2020 Fauzan Rachmatullah. All rights reserved.​”</p>
        </div>
      </div>
    </>
  );
}

export default App;
