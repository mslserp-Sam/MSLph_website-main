import React from 'react'
import "../CSS/programs.css";
import { Link } from 'react-router-dom';
import { 
    FaAngleDoubleRight,
} from 'react-icons/fa';

const Programs = () => {
  return (
    <div className='mainContainer programs'>
        <section className="programPageMLBB top">
            <div className="ppContentTop">
                <h2>MSL PROGRAMS</h2>
                <h4>"We don't just play games, we deliver academic excellence."</h4>
            </div>
            <div className="ppContentTop1">
                <div className="progOffers sepp">
                    <h3>SEPP</h3>
                    <div className="poContent skin">
                        <img id='natanSkin' src={require('../assets/MLBB_Landing_Assets/NatanSkin.png')} alt="" />
                    </div>
                    <div className="poContent det sepp">
                        <h4>SCHOOL EVENTS PARTNERSHIP PROGRAM</h4>
                        <p>
                            <span></span>It is where tournaments and contests are undertaken where only students 
                            of partnered universities are able to join. They promote academically and as well as 
                            sporty inclined students. Sponsorships will be coming through also, as rewards of 
                            winning every tournament and contest. That's what the School Events Partnership Program 
                            or SEPP are made for.
                        </p>
                        <Link id='active' to="/Programs/SEPP"><h6>Learn More <FaAngleDoubleRight className='faIcon'/></h6></Link>
                    </div>
                </div>
            </div>
        </section>
        <section className="programPageMLBB mid">
            <div className="ppContentTop1">
                <div className="progOffers eosr">
                    <h3>EOSR</h3>
                    <div className="poContent skin mobile">
                        <img id="silvanaSkin" src={require('../assets/MLBB_Landing_Assets/SilvanaSkin.png')} alt="" />
                    </div>
                    <div className="poContent det eosr">
                        <h4>END OF SEMESTER REWARDS</h4>
                        <p>
                            <span></span>EOSR is crafted for our MLBB student communities, deeply rooted in our 
                            objective of achieving balanced gaming and academics. Its fundamental goal is to recognize 
                            your commitment, effort, and successes along your academic journey. MSL Philippines values 
                            your grades through in-game diamonds and can earn up to 3,500 by doing your best in 
                            academics! 
                        </p>
                        <Link id='active'><h6>Learn More <FaAngleDoubleRight className='faIcon'/></h6></Link>
                    </div>
                    <div className="poContent skin right">
                        <img id="silvanaSkin" src={require('../assets/MLBB_Landing_Assets/SilvanaSkin.png')} alt="" />
                    </div>
                </div>
            </div>
            {/* <div className="ppContentTop1">
                <div className="progOffers bwot">
                    <h3>BWOT</h3>
                    <div className="poContent skin">
                        <img id="natanSkin" src={require('../assets/MLBB_Landing_Assets/EsmeraldaSkin.png')} alt="" />
                    </div>
                    <div className="poContent det">
                        <h4>BI WEEKLY OFFLINE TOURNAMENT</h4>
                        <p>
                            <span></span>Join the excitement of our bi-weekly offline tournament — a local campus 
                            event where SL members and student MLBB Players compete every two weeks for a chance 
                            to win dazzling diamond rewards.
                        </p>
                        <Link id='active'><h6>Learn More <FaAngleDoubleRight className='faIcon'/></h6></Link>
                    </div>
                </div>
            </div> */}
            {/* <div className="ppContentTop1 inactive">
                <h5>TO BE ANNOUNCED</h5>
                <div className="progOffers mcc">
                    <h3>MCC</h3>
                    <div className="poContent skin mobile">
                        <img src={require('../assets/MLBB_Landing_Assets/ValeSkin.png')} alt="" />
                    </div>
                    <div className="poContent det">
                        <h4>MSL COLLEGIATE CUP</h4>
                        <p style={{textAlign:'center'}}>
                            TO BE ANNOUNCED
                        </p>
                        <Link id='active'><h6>Learn More <FaAngleDoubleRight className='faIcon'/></h6></Link>
                    </div>
                    <div className="poContent skin right">
                        <img src={require('../assets/MLBB_Landing_Assets/ValeSkin.png')} alt="" />
                    </div>
                </div>
            </div> */}
        </section>
    </div>
  )
}

export default Programs