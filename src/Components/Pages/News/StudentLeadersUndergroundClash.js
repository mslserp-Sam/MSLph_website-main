
import React from 'react'
import '../../CSS/newsContent.css'
import { Link } from 'react-router-dom';
import 'react-awesome-slider/dist/styles.css';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';

const StudentLeadersUndergroundClash = () => {
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
                          <img src={require('../../assets/MLBB_Landing_Assets/News/Contents/StudentLeadersUndergroundClash/news.jpg')} alt="Insert Banner" />
                        </div>
                      </AutoplaySlider>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6">
                <div className="newsHeadContent right">
                  {/* <img src={require('../../assets/MLBB_Landing_Assets/News/Highlights/MSLStarCity.png')} alt="" /> */}
                  <h4 className='headTitle'>Student Leaders, Community Heroes intensifies atmosphere in MLBB Underground Clash</h4>
                  <p>
                    Riveting pengame and gripping bars—the unspoken rule at the Red Apple Manila in Pasig City, as selected Student Leaders and Community Heroes aroused crowd power during the MLBB Underground Clash, as part of Project NEXT 2023.
                  </p>
                </div>
              </div>
            </div>
      

          </div>
          <div className="newsBodyContainer">
            <p>
            Riveting pengame and gripping bars—the unspoken rule at the Red Apple Manila in Pasig City, as selected Student Leaders and Community Heroes aroused crowd power during the MLBB Underground Clash, as part of Project NEXT 2023.",
            <br/><br/>With the aim to highlight what's #NEXTFORYOU in the Land of Dawn, prominent rappers Shehyee and Sinio, as well as professional players from Blacklist International and ECHO Philippines, embarked on a battle of playful raps and intense gameplay. The first part, which aired on July 1, showcased the new emblem system through a series of 1v1 and 3v3 battles. The second part, streamed on July 8, featured the new marksman hero, Ixia, in a 5v5 battle between Blacklist and ECHO.
            <br/><br/>Thirteen SLs/non-SLs and seven CH from Metro Manila, Laguna, and Batangas showed their enthusiasm for the game through cheers and applause as the fierce rivals battled in matches of wit, flow, and punchlines, as well as in competitive MLBB custom battles with randomized emblems. The participants divulged in official Project NEXT merchandise and free food throughout the event.
            <br/><br/>Meeting and joining some of the well-known pro players in this industry and calibrated rappers are the reasons why I felt [surreal] about this event', Jose Miguel Bacuetes, one of the SL participants in the Underground Clash. '[The best part is] seeing yourself on the official Facebook and YouTube pages of Mobile Legends: Bang Bang together with [those] people', he added. Part 1 of the Underground Clash racked up 3 million+ cumulative views on Facebook and YouTube.
            <br/><br/>Project NEXT is a program launched by the Mobile Legends: Bang Bang Team since 2020 that aims to introduce new features designed to enhance the gameplay experience for professional and casual players. Specifically, in the 2023 run of the project, various updates, including the new emblem system, new ranking tier, new hero, and new lore, are expected to give players a more entertaining and delightful experience in the Land of Dawn.
            </p>
          </div> 
        </section>
    </div>
  )
}

export default StudentLeadersUndergroundClash