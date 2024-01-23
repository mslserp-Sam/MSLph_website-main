import React from 'react'
import '../../CSS/newsContent.css'
import { Link } from 'react-router-dom';
import 'react-awesome-slider/dist/styles.css';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';

const FirstCampusOfflineTournament = () => {
  const AutoplaySlider = withAutoplay(AwesomeSlider);
  return (
    <div className='mainContainer newsMSL'>
        <section className="newsHeadlinesContainer top">
          <div className="newsHeadContainer">
            <div className="row headd">
                <div className="col-12 col-sm-6">
                  <div className="newsHeadContent left">
                    <div className="sliderContainerNews">
                      <div className="sliderFeatNews">
                        <AutoplaySlider className="newsSlider"
                            play={true}
                            cancelOnInteraction={false} // should stop playing on user interaction
                            interval={3000}
                        >
                          <div className="featContentNews">
                            <img src={require('../../assets/MLBB_Landing_Assets/News/Contents/FirstCampusOfflineTournament/news.jpg')} alt="Insert Banner" />
                          </div>
                        </AutoplaySlider>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6">
                  <div className="newsHeadContent right">
                    {/* <img src={require('../../assets/MLBB_Landing_Assets/News/Highlights/MSLStarCity.png')} alt="" /> */}
                    <h4 className='headTitle'>FIRST CAMPUS OFFLINE TOURNAMENT</h4>
                    <p>
                    Another feat that has been achieved!
                    </p>
                    <p>
                    Another great breakthrough has been achieved by the sole leaders, advocating the events. It was an event that is most anticipated by the MLBB Fans, for finally, they can show their talents, techniques, strategies, and power in reigning the game of season.
                    </p>
                  </div>
                </div>
            </div>

     
          </div>
          <div className="newsBodyContainer">
            <p>
             On February 25, 2023, the first ever Campus-Wide 5vs5 Mobile Legends OFFLINE TOURNAMENT commenced. The players are battling onsite, showcasing their greatness together with their teams. 
                <br/><br/>The MLBB Players in selected universities have been touched by a long lasting drive in conquering the game. Different teams and players in partnered schools and universities showed an awe-inspiring teamworks and sportsmanship namely; 
                <br/><br/>Our student leaders had led the charge in accomplishing such a feat. On top of that, they have felt accomplished as a merit of their spent efforts in building, constructing a plan, late night works, and pressure just to make the event memorable and one of a kind.
                <br/><br/>In fullness of time, the players can display their winning gameplay, rampaging the battle in the game and even dominating the opponents in reality. This is in order for the players to really feel the sensation of the moment in breaking their opponents onsite. Because of that, victors have tasted the sweetest victory right after the period of pandemic.
                <br/><br/>This is just one of the steps that the student leaders has to uphold for future activities. This achievement will serve as a foundation in carrying the future of every activity the student leaders will hold for.
                <br/><br/>Furthermore, the MLBB Fans and Players are expecting more and more events that will be undertaken in the future, and the classic support, participation, cooperation of every partnered school and universities.
                <p>Mindanao State University Iligan Institute of Technology</p>
                <p>Liceo de Cagayan University - Main Campus</p>
                <p>University of Science and Technology Southern Philippines</p>
                <p>Quezon City Philippines</p>
                <p>Caraga State University</p>
                <p>University of Southeastern Philippines - Obrero Campus</p>
                <p>Central Luzon State University; Tagoloan Community College</p>
                <p>Pampanga State Agricultural University</p>
                <p>Central Mindanao University</p>  
            </p>
            
          
          </div> 
        </section>
    </div>
  )
}

export default FirstCampusOfflineTournament