import React from 'react'
import '../../CSS/newsContent.css'
import { Link } from 'react-router-dom';
import 'react-awesome-slider/dist/styles.css';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';

const TheAllStar = () => {
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
                            <img src={require('../../assets/MLBB_Landing_Assets/News/Contents/TheAllStar/news.jpg')} alt="Insert Banner" />
                          </div>
                        </AutoplaySlider>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6">
                  <div className="newsHeadContent right">
                    {/* <img src={require('../../assets/MLBB_Landing_Assets/News/Highlights/MSLStarCity.png')} alt="" /> */}
                    <h4 className='headTitle'>The All Star University Highgrounds All Out Experience</h4>
                    <p>
                    #BeTheBida: The All Star University Highgrounds All Out Experience
                    The ALL STAR University Highgrounds gave each and every student the opportunity to #BeTheBida! MLBB-PH Student Leaders, in partnership with Moonton, successfully organized the ALL STAR University Highgrounds Event on April 27-29, 2023, featuring students from different universities.
                    </p>
                  </div>
                </div>
            </div>


          </div>
          <div className="newsBodyContainer">
            <p>The event aimed to promote the game's ALL STAR Event, with K-Pop group ITZY as the ambassador of Mobile Legends: Bang Bang. Moreover, RAZER Gold and Richeese played major roles as sponsors in making the event possible.",
            <br/><br/>The participating universities were:",
            <p>Laguna State Polytechnic University - Los Baños Campus",</p>
            <p>Tarlac State University",</p>
            <p>Technological University of the Philippines - Manila",</p>
            <p>Cebu Technological University - Cebu City",</p>
            <p>West Visayas State University",</p>
            <p>Ateneo De Davao University",</p>
            <p>Mindanao State University - Iligan Institute of Technology",</p>
           The event showcased activities namely, Fun Matches, Highground Selfies, All Star Tattoo Booth, Head, Shoulders Knees, and Cup, Bottle Flip Tic Tac Toe, Inflating Cup Challenge, Complete The Line, BIDA: Flex Hero, and Guess What I Say. An All Star Party wouldn't be complete without music! That's why a Music Carnival was presented in order to experience an all out All Star Party!",
            <br/><br/>The All Star University Highgrounds featured prizes such as the Razer Hammerhead True Wireless Headset, gift packs from the sponsors, cash prizes, and a grand total of 350,000 in-game diamonds as prizes, alongside exclusive MLBB ALL STAR Merchandise.",
            <br/><br/>The event was an excellent opportunity for participating universities to meet MLBB Influencers, making the universities as lively as ever. On top of that, Student Leaders and Partner Organizations from the participating universities made sure that the event was fun, enjoyable, and successful.",
            <br/><br/>The ALL STAR University Highgrounds Event served as one of the many initiatives undertaken by Moonton to promote the growth of the MLBB community in the Philippines, particularly on campuses, through in-campus organizations, and the MLBB-PH Student Leaders.",
            </p>
          </div> 
        </section>
    </div>
  )
}

export default TheAllStar