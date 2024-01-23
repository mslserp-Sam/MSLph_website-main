import React from 'react'
import '../../CSS/newsContent.css'
import { Link } from 'react-router-dom';
import 'react-awesome-slider/dist/styles.css';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';

const MfourWatchParty = () => {
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
                          <img src={require('../../assets/MLBB_Landing_Assets/News/Contents/MfourWatchParty/news.jpg')} alt="Insert Banner" />
                          </div>
                        </AutoplaySlider>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6">
                    <div className="newsHeadContent right">
                      {/* <img src={require('../../assets/MLBB_Landing_Assets/News/Highlights/MSLStarCity.png')} alt="" /> */}
                      <h4 className='headTitle'>M4 WATCH PARTY</h4>
                      <p>
                      Bewildering Conquest of M4 Watch Party!
                      </p>
                    </div>
                </div>
            </div>
            
            
          </div>
          <div className="newsBodyContainer">
            <p>
           The recent M4 World Championship University Watch Party was a blast! Ignited the hearts of all players, with no age discrimination, in finding their way of playing Mobile Legends Bang Bang. It was the epitome of intensifying players' thirst to win a game. Different M4 Teams had brought their gameplay to another level that the players couldn’t easily predict. If you ever had the chance to represent your team, can you bring the same intensity of gameplay?
           <br/><br/>The recent M4 World Championship University Watch Party was a blast! Ignited the hearts of all players, with no age discrimination, in finding their way of playing Mobile Legends Bang Bang. It was the epitome of intensifying players' thirst to win a game. Different M4 Teams had brought their gameplay to another level that the players couldn’t easily predict. If you ever had the chance to represent your team, can you bring the same intensity of gameplay?
           <br/><br/>All around the nation, the M4 World Championship Tournament has been witnessed. There, attendees, which are the players, supported and cheered vigorously for their prospective teams to triumph in the game and bring the crown to their heads. Though the recipients themselves couldn’t hear their voices, for them, moral support is enough to let the teams they had supported know they are not playing the game solely. Indomitable wills of support had precedent in the hall's corners and fortified the ambiance. Moreover, banners being raised during the event is one thing, but throughout the program is a whole other story.
           <br/><br/>Many attendees have spared their time to attend the event and be one of the people who shout #DareToBeGreat and #PinasLangMalakas. It was a perplexing chant showcasing their inept support to their World Champions and also to the coordinators of the event. As they anticipated the titles to be claimed by their one and only M4 Team. Not just in the M4 World Championship Tournament, but in every partnered schools and universities, there are quests and events that they have to participate and 50,000 in-game diamonds, giveaways, and merchandise are waiting for the players to claim.
           <br/><br/>Hence, the event's entirety was very successful and flamboyantly exuded a future optimistic disposition. Players all around the nation are pleased with the event, as they have also earned a lot during the commencement. Quests and other entertaining activities have been adhered to during the offline event. Merchandises are being given to those who have spared their efforts in attaining the peak of the quests.
           <br/><br/>Additionally, many have anticipated that this event will still transpire in future activities. MLBB Players are drawn to what they think is exciting and fun. This activity will solidify the pillar of what Mobile Legends: Bang Bang can bring.",
            </p>
          </div> 
        </section>
    </div>
  )
}

export default MfourWatchParty