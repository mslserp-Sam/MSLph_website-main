import React from 'react'
import '../../CSS/newsContent.css'
import { Link } from 'react-router-dom';
import 'react-awesome-slider/dist/styles.css';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';

const MfourFlashMob = () => {
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
                            <img src={require('../../assets/MLBB_Landing_Assets/News/Contents/MfourFlashMob/news.jpg')} alt="Insert Banner" />
                          </div>
                        </AutoplaySlider>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6">
                  <div className="newsHeadContent right">
                    {/* <img src={require('../../assets/MLBB_Landing_Assets/News/Highlights/MSLStarCity.png')} alt="" /> */}
                    <h4 className='headTitle'>Student Leaders, Finishing the 4-day Promotions with a Bang!</h4>
                    <p>
                    The MLBB PH - Student Leaders have recently concluded their 4-day promotional event for the M4 World Championship Tournament and Watch Party, leaving a lasting impression on the MLBB community in the Philippines. The event was a huge success, thanks to the hard work and dedication of the student leaders.
                    </p>
                  </div>
                </div>
            </div>
            
            
          </div>
          <div className="newsBodyContainer">
            <p> Student Leaders, Finishing the 4-day Promotions with a Bang!
            <br/><br/>From the first day of the promotions, dance groups such as TML Crew and Mastermind showcased their talents and encouraged players to support the teams representing the Philippines with the chants #PinasLangMalakas and #WeDareToBeGreat. The event continued to attract players from all over the nation who showed enthusiasm and support for their home teams.
            <br/><br/>The last day of the promotions took place at the Mall of Asia, where the organizers went above and beyond to make the event a grand success. The grand stage and spectacular performances were a sight to behold, making the event truly sensational and fascinating.
            <br/><br/>The student leaders who organized the event expressed their delight at its success and promised to continue organizing such events in the future. They aim to create a more priceless stage for all MLBB fans and provide more opportunities for players to show their support for their home teams.
            Overall, the MLBB PH - Student Leaders did an outstanding job in promoting the M4 World Championship Tournament and Watch Party. This event has shown that the MLBB community in the Philippines is passionate and enthusiastic about the game, and the student leaders have successfully encouraged players to support their home teams. We can't wait to see what they'll come up with next.
            </p>
          </div> 
        </section>
    </div>
  )
}

export default MfourFlashMob