import React from 'react'
import '../../CSS/newsContent.css'
import { Link } from 'react-router-dom';
import 'react-awesome-slider/dist/styles.css';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';

const RiseToGlory = () => {
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
                          <img src={require('../../assets/MLBB_Landing_Assets/News/Contents/RiseToGlory/news.jpg')} alt="Insert Banner" />
                        </div>
                      </AutoplaySlider>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6">
                <div className="newsHeadContent right">
                  {/* <img src={require('../../assets/MLBB_Landing_Assets/News/Highlights/MSLStarCity.png')} alt="" /> */}
                  <h4 className='headTitle'>Rise to Glory</h4>
                  <p>
                    Rise to Glory: MPLipad flies selected MLBB PH Student Leaders, Community Heroes to MPL Grand Finals
                    <br/><br/>Electrifying and exhilarating—these words precisely describe the fiery atmosphere at the SMX Convention last May 7 as two titan teams, ECHO and Blacklist International, clashed in an epic battle during the Mobile Legends Professional League (MPL) Grand Finals.
                    
                  </p>
                </div>
              </div>
            </div>

            
          </div>
          <div className="newsBodyContainer">
            <p>
                Amidst the frenzied cheers and intense gameplay, four lucky students experienced it all firsthand thanks to the MPL Battle Trips: MPLipad event.
                <br/><br/>The MPL Battletrips: MPLipad event was a collaboration between the MLBB-PH Community Heroes and Moonton Student Leaders, in partnership with MPL Philippines. This event gave four members of the Visayas and Mindanao SL and CH communities the opportunity to witness the MPL Grand Finals live with an all-expense paid trip to the SMX Convention Center in Pasay City last May 6–7, 2023.",
                <br/><br/>These participants were chosen based on their 1-minute videos posted on their social media accounts answering the question, 'Why do you deserve to go to the MPL Grand Finals through the MPL Battle Trips?'",
                <br/><br/>For Cidric Lloyd Leagogo, the experience was nothing short of amazing. ",
                <br/><br/>He expressed his gratitude, saying, Being a winner of MPLipad and [being given] the chance to watch MPL live is such an awesome experience. I'm very thankful to [the] MLBB PH Community for picking me as the winner even though trainee palang ako.",
                <br/><br/>The MPL Battle Trips:  MPLipad event was just one of the many initiatives undertaken by Moonton, the game developer behind Mobile Legends, to promote the growth of the MLBB community in the Philippines, particularly on campuses, through local organizations such as the MLBB PH Community Heroes and Moonton Student Leaders Community. Initially, the event only catered to Luzon members. ",
                <br/><br/>[This experience] made me [realize] that MLBB has transcended from being just a mobile game to a gaming phenomenon that unites people, Mocsana, a winner from MSU-IIT, also stated in an interview. ",
                <br/><br/>Mobile Legends: Bang Bang (MLBB) is a multiplayer online battle arena (MOBA) game developed and published by Moonton last 2016. Since then, it has gained a massive following in Southeast Asia and beyond.", 
            <br/><br/>
            </p>
          </div> 
        </section>
    </div>
  )
}

export default RiseToGlory