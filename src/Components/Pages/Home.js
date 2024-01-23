import React, { useEffect, useState } from 'react'
import "../CSS/home.css";
import { Link } from 'react-router-dom';
import 'react-awesome-slider/dist/styles.css';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import axios from 'axios';
import { Doughnut } from 'react-chartjs-2';
import { 
  FaTrophy,
  FaPuzzlePiece,
  FaRocket,
  FaBrain,
  FaUsers,
  FaHandshake,
  FaTicketAlt,
} from 'react-icons/fa';
import {
  SiMysql,
  SiGooglecloud,
  SiReact,
  SiAdobephotoshop,
} from 'react-icons/si';
import shortVid from "../assets/MLBB_Landing_Assets/landingBGVideo.mp4"


ChartJS.register(ArcElement, Tooltip, Legend );



const Home = () => {
  const AutoplaySlider = withAutoplay(AwesomeSlider);
  const [hasScrolled, setHasScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(true);
    };
  
    window.addEventListener("scroll", handleScroll);
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;
  const day = currentDate.getDate();
  const formattedDate = currentDate.toDateString();

  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  useEffect(() => {
    const updateYear = () => {
      setCurrentYear(new Date().getFullYear());
    };
    const intervalId = setInterval(updateYear, 1000);
    return () => clearInterval(intervalId);
  }, []);


  




  return (
    <div className='mainContainer mlbb'>
      <section className='landingPageMLBB top'>
        <img id="miyaML" src={require('../assets/MLBB_Landing_Assets/RegisterImg.png')} alt="" />
        <div className="lpContentTop">
          <h2>WELCOME</h2>
          <h4>TO MSL PHILIPPINES</h4>
        </div>
        <div className="lpContentTop1">
          <span>
            <h3>65</h3>
            <h6>CAMPUSES</h6>
          </span>
          <span>
            <h3>186</h3>
            <h6>STUDENT LEADERS</h6>
          </span>
          <span>
            <h3>27,000+</h3>
            <h6>STUDENT PLAYERS</h6>
          </span>
        </div>
        <div className="lpContentTop2">
          <Link to="/Campus"><button><h6>CAMPUSES</h6></button></Link>
          <Link to="/Programs"><button><h6>PROGRAMS</h6></button></Link>
          <Link to="/Events"><button><h6>EVENTS</h6></button></Link>
        </div>
        {/* <img id="scratch00" src={require('../assets/MLBB_Landing_Assets/Scratch01.png')} alt="" /> */}
      </section>
      <section className='landingMLBB mid0'>
        <div className="lpContentMid0 definition">
          <div className="lpcm0 right">
            <img src={require('../assets/MLBB_Landing_Assets/MSLLogo.png')} alt="" />
          </div>
          <div className="lpcm0 left">
            <h5>WHAT IS</h5>
            <h2>MOONTON</h2>
            <h4>STUDENT LEADERS ?</h4>
            <p>
              <span>Moonton Student Leaders</span> is a collection of student gamers from different Collegiate Schools in the Philippines. The program was developed to boost the Mobile Legends: Bang Bang Community in universities while maintaining academic excellence.
            </p>
            <div>
              <span>
                <h2><FaTrophy/></h2>
                <p>Bi weekly <br />Tournament</p>
              </span>
              <span>
                <h2><FaRocket/></h2>
                <p>Special <br />Events</p>
              </span>
              <span>
                <h2><FaBrain/></h2>
                <p>Academic <br />Activities</p>
              </span>
              <span>
                <h2><FaUsers/></h2>
                <p>Interschool <br />Activities</p>
              </span>
              <span>
                <h2><FaHandshake/></h2>
                <p>Org and School <br />Partnership</p>
              </span>
              <span>
                <h2><FaTicketAlt/></h2>
                <p>Event <br />Raffle</p>
              </span>
            </div>
          </div>
          <div className="lpcm0 right1">
            <img id="rogerSkin" src={require('../assets/MLBB_Landing_Assets/RogerSkin.png')} alt="" />
            <h6>BECOME A STUDENT LEADER <br />IN YOUR CAMPUS!</h6>
            <Link to='/Apply'><button><h6>Apply Now</h6></button></Link>
          </div>
        </div>
        <div className="lpContentMid0 updates">
          <h4>MSL-Ph Community Updates</h4>
          <div className="lpcUpdatesContainer">
            <div className="lpcuContent left">
              <div className="newsContent">
                <Link to='/NewsAndFeature/MSLPHMidYearCulmination'>
                  <div>
                    <img src={process.env.PUBLIC_URL + "./news/News05.png"} alt="" />
                    <span>
                      <h6>2023 Mid-Year Culmination</h6>
                      <p>June 2023</p>
                    </span>
                  </div>
                </Link>
                <Link to="/NewsAndFeature/StudentLeadersUndergroundClash">
                  <div>
                    <img src={process.env.PUBLIC_URL + "./news/News04.png"} alt="" />
                    <span>
                      <h6>MLBB Underground Clash</h6>
                      <p>July 09 2023</p>
                    </span>
                  </div>
                </Link>
                <Link to="/NewsAndFeature/TheAllStar">
                  <div>
                    <img src={process.env.PUBLIC_URL + "./news/News03.png"} alt="" />
                    <span>
                      <h6>The All Star University Highground</h6>
                      <p>May 07 2023</p>
                    </span>
                  </div>
                </Link>
                <Link to="/NewsAndFeature/RiseToGlory">
                  <div>
                    <img src={process.env.PUBLIC_URL + "./news/News02.png"} alt="" />
                    <span>
                      <h6>Rise to Glory</h6>
                      <p>May 07 2023</p>
                    </span>
                  </div>
                </Link>
                <Link to="/NewsAndFeature/MplBattleTrip">
                  <div>
                    <img src={process.env.PUBLIC_URL + "./news/News01.png"} alt="" />
                    <span>
                      <h6>MPL Battle Trips</h6>
                      <p>March 12 2023</p>
                    </span>
                  </div>
                </Link>
              </div>
            </div>
            <div className="lpcuContent right">
              <div className="sliderContainer">
                <div className="sliderFeat">
                  <AutoplaySlider className="homeSlider"
                      play={true}
                      cancelOnInteraction={false} // should stop playing on user interaction
                      interval={3000}
                  >
                    <div className="featContent">
                      <img src={process.env.PUBLIC_URL + "./carousel/banner01.png"} alt="Insert Banner" />
                    </div>
                    <div className="featContent">
                      <img src={process.env.PUBLIC_URL + "./carousel/banner04.png"} alt="Insert Banner" />
                    </div>
                    <div className="featContent">
                      <img src={process.env.PUBLIC_URL + "./carousel/banner02.png"} alt="Insert Banner" />
                    </div>
                    <div className="featContent">
                      <img src={process.env.PUBLIC_URL + "./carousel/banner03.png"} alt="Insert Banner" />
                    </div>
                  </AutoplaySlider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="landingMLBB mid1">
        <div className="lpContentMid1">
          <img id="fannySkin" src={require('../assets/MLBB_Landing_Assets/FannySkin.png')} alt="" />
          <h4>WHAT IS SEPP ?</h4>
          <p>
            The School Events Partnership Program (SEPP) offers an exclusive platform for students 
            and university organizations to create engaging tournaments, contests, and events, 
            along with access to sponsorship packages from MSL.
          </p>
          <Link to="/Programs/SEPP"><button><h6>Learn More</h6></button></Link>
          <img id="hanzoSkin" src={require('../assets/MLBB_Landing_Assets/HanzoSkin.png')} alt="" />
        </div>
      </section>
      <section className="landingMLBB mid2">
        <div className="lpContentMid2">
          <h4>BE OUR ORG PARTNER</h4>
          <h6>Enjoy exclusive perks and grants for your organization and members.</h6>
          <div className="lpcmButtons">
            <Link to="/Programs/SEPP"><button><h6>All About SEPP</h6></button></Link>
            {/* <Link><button><h6>Event Guidelines</h6></button></Link> */}
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfa9_HxrJm2KahGopCyhvq4muTAQ_pU24RIC7IcxZcMaxxf9Q/viewform" target='blank'><button><h6>Apply Now</h6></button></a>
          </div>
          <div className="lpcmEvents">
            <div>
              <img src={require('../assets/MLBB_Landing_Assets/HarithSkin.png')} alt="" />
              <h5>MLBB Tournaments and Events</h5>
              <span>
                <p>Thrilling esports tournaments and contests centered around Mobile Legends: Bang Bang, fostering friendly competition and strategic gameplay.</p>
              </span>
            </div>
            <div>
              <img src={require('../assets/MLBB_Landing_Assets/LyliaSkin.png')} alt="" />
              <h5>Non-MLBB Tournaments and Events</h5>
              <span>
                <p>Activities such as TikTok Contests, Dance Contests, Banner Contests, and Art Contests, designed to showcase creativity and talents beyond the gaming sphere.</p>
              </span>
            </div>
            <div>
              <img src={require('../assets/MLBB_Landing_Assets/ChangeSkin.png')} alt="" />
              <h5>Academic Contest and Events</h5>
              <span>
                <p>Intellectual challenges like Quiz Bees, Essay Contests, and Poster Contests, along with Sports Leagues and School Pageants.</p>
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="landingMLBB mid3">
        <img id="scratch01" src={require('../assets/MLBB_Landing_Assets/Scratch03.png')} alt="" />
        <div className="lpContentMid3">
          <video className='videoTag' autoPlay muted>
            <source src={shortVid} type='video/mp4' />
          </video>
        </div>
        <img id="scratch02" src={require('../assets/MLBB_Landing_Assets/Scratch03.png')} alt="" />
      </section>
      <section className="landingMLBB mid4">
        <div className="lpContentMid4">
          <h6>PREVIOUSLY PARTNERED ORGANIZATIONS</h6>
          <div className="seppOrg">
            <span>
              <img src={require('../assets/MLBB_Landing_Assets/OrgLogos/AdDU_BlueKnights.png')} alt="" />
            </span>
            <span>
              <img src={require('../assets/MLBB_Landing_Assets/OrgLogos/BulSU_TheOtakuPhilippines.png')} alt="" />
            </span>
            <span>
              <img src={require('../assets/MLBB_Landing_Assets/OrgLogos/CLSUxKappaPhiMu.png')} alt="" />
            </span>
            <span>
              <img src={require('../assets/MLBB_Landing_Assets/OrgLogos/CMU_Esports.png')} alt="" />
            </span>
            <span>
              <img src={require('../assets/MLBB_Landing_Assets/OrgLogos/CSU_Gamee.png')} alt="" />
            </span>
            <span>
              <img src={require('../assets/MLBB_Landing_Assets/OrgLogos/CTUMain_SSG.png')} alt="" />
            </span>
            <span>
              <img src={require('../assets/MLBB_Landing_Assets/OrgLogos/EVSU_OCC.png')} alt="" />
            </span>
            <span>
              <img src={require('../assets/MLBB_Landing_Assets/OrgLogos/ISATU_StudentRepublic.png')} alt="" />
            </span>
            <span>
              <img src={require('../assets/MLBB_Landing_Assets/OrgLogos/LSPULB_LegionOfLures.png')} alt="" />
            </span>
            <span>
              <img src={require('../assets/MLBB_Landing_Assets/OrgLogos/MSUIIT_TitanEsports.png')} alt="" />
            </span>
            <span>
              <img src={require('../assets/MLBB_Landing_Assets/OrgLogos/PUP_PylonEsports.png')} alt="" />
            </span>
            <span>
              <img src={require('../assets/MLBB_Landing_Assets/OrgLogos/TSU_VulphoxEsports.png')} alt="" />
            </span>
            <span>
              <img src={require('../assets/MLBB_Landing_Assets/OrgLogos/TUP_Gear.png')} alt="" />
            </span>
            <span>
              <img src={require('../assets/MLBB_Landing_Assets/OrgLogos/WVSU_WestEsports.png')} alt="" />
            </span>
            <span>
              <img src={require('../assets/MLBB_Landing_Assets/OrgLogos/XUCSG_CentralStudentGovernment.png')} alt="" />
            </span>
          </div>
        </div>
      </section>
      <section className="landingMLBB mid5">
        <div className="lpContentMid5">
          <h4>THE CORE TEAM</h4>
          <div className="coreTeam">
            <span>
              <img src={require('../assets/MLBB_Landing_Assets/CoreTeam/maamAJ.png')} alt="" />
              <h6>AJ MACADANGDANG</h6>
              <p>Contents and SocMed Dept.</p>
            </span>
            <span>
              <img src={require('../assets/MLBB_Landing_Assets/CoreTeam/sirLenard.png')} alt="" />
              <h6>LENARD JECIEL</h6>
              <p>Campus Dept.</p>
            </span>
            <span id='bigBoss'>
              <img src={require('../assets/MLBB_Landing_Assets/CoreTeam/sirRyan.png')} alt="" />
              <h6>KEN RYAN LEE</h6>
              <p>MSL Philippines <br />Community Manager</p>
            </span>
            <span>
              <img src={require('../assets/MLBB_Landing_Assets/CoreTeam/sirSean.png')} alt="" />
              <h6>SEAN MANLUPIG</h6>
              <p>SERP Dept.</p>
            </span>
            <span>
              <img src={require('../assets/MLBB_Landing_Assets/CoreTeam/sirCarlo.png')} alt="" />
              <h6>CARLO CASTILLIO</h6>
              <p>General Affairs Dept.</p>
            </span>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home;