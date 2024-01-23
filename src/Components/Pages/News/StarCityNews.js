import React from 'react'
import '../../CSS/newsContent.css'
import { Link } from 'react-router-dom';
import 'react-awesome-slider/dist/styles.css';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';

const StarCityNews = () => {
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
                            <img src={require('../../assets/MLBB_Landing_Assets/News/Contents/StarCity/DSC05272.jpg')} alt="Insert Banner" />
                          </div>
                          <div className="featContentNews">
                            <img src={require('../../assets/MLBB_Landing_Assets/News/Contents/StarCity/DSC05267.jpg')} alt="Insert Banner" />
                          </div>
                          <div className="featContentNews">
                            <img src={require('../../assets/MLBB_Landing_Assets/News/Contents/StarCity/DSC05247.jpg')} alt="Insert Banner" />
                          </div>
                          <div className="featContentNews">
                            <img src={require('../../assets/MLBB_Landing_Assets/News/Contents/StarCity/DSC05258.jpg')} alt="Insert Banner" />
                          </div>
                          <div className="featContentNews">
                            <img src={require('../../assets/MLBB_Landing_Assets/News/Contents/StarCity/DSC05272.jpg')} alt="Insert Banner" />
                          </div>
                          <div className="featContentNews">
                            <img src={require('../../assets/MLBB_Landing_Assets/News/Contents/StarCity/DSC05278.jpg')} alt="Insert Banner" />
                          </div>
                        </AutoplaySlider>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6">
                  <div className="newsHeadContent right">
                    <img src={require('../../assets/MLBB_Landing_Assets/News/Highlights/MSLStarCity.png')} alt="" />
                    <h4 className='headTitle'>MSL Philippines commemorate 3rd anniversary blowout at Star City</h4>
                    <p>
                      The Moonton Student Leaders (MSL) Philippines are all stars of their own kind. Last October 14, 2023, MSLs had 
                      the spectacular opportunity to celebrate their 3rd year anniversary in a place like no other: the glittering 
                      realm of Star City!
                    </p>
                  </div>
                </div>
            </div>
            
            
          </div>
          <div className="newsBodyContainer">
            <p>
              The MSL Philippines x Star City collaboration has provided 25 all-access tickets to select Student Leaders across the country. 
              Pioneers, old, and new Student Leaders shared fun and excitement as they roamed the park and its 30 thrilling rides and 
              attractions. This grand spree is also a celebration of Mobile Legends: Bang Bang’s 7th anniversary—a huge blast befitting 
              the game’s unbeatable success. <br /><br />
              The event was a great avenue to mark MSL Philippines’ three-year streak of establishing, supporting, and empowering campus 
              communities along the archipelago. To quote AJ Macadangdang, Creatives Head of MSL Philippines, “And three years is not the 
              end of creating opportunities”. <br /><br />
              It was indeed a great moment to recognize great leadership and gaming excellence. MSLs proved Star City’s #MasayaDito mantra 
              firsthand. <br /><br />
              This MSL Philippines' 3rd Anniversary Blowout wouldn't be possible if it weren't for the never-ending support of Moonton, 
              along with the great initiative from Star City. The said event will surely transcend to greater leadership and more 
              successful events! <br /><br />
            </p>
          </div> 
        </section>
    </div>
  )
}

export default StarCityNews