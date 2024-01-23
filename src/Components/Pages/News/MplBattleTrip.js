import React from 'react'
import '../../CSS/newsContent.css'
import { Link } from 'react-router-dom';
import 'react-awesome-slider/dist/styles.css';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';

const MplBattleTrip = () => {
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
                            <img src={require('../../assets/MLBB_Landing_Assets/News/Contents/MplBattleTrip/news.jpg')} alt="Insert Banner" />
                          </div>
                        </AutoplaySlider>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6">
                  <div className="newsHeadContent right">
                    {/* <img src={require('../../assets/MLBB_Landing_Assets/News/Highlights/MSLStarCity.png')} alt="" /> */}
                    <h4 className='headTitle'>MPL BATTLE TRIP</h4>
                    <p>
                      The first ever Biweekly Campus-Wide 5vs5 Mobile Legends Tournament OFFLINE, has been successfully conducted by the MLBB PH Student Leaders. It is another feat that has been achieved sweeping their way on another whole new chapter. With this, the student leaders are anticipating another event to be carried through.
                    </p>
                    <p>
                      Beforehand, there are qualifications we adhere to in order for the organizers and the MLBB - PH Student Leaders to select the chosen players in different universities of Quezon City. 
                    </p>
                  </div>
                </div>
            </div>


          </div>
          <div className="newsBodyContainer">
            <p>
                On that note, the successful or the winners will be entitled to receive a lot of merchandise and prizes during the community trip to MPL. Besides the merchandise, they are also entitled to receive Epic Gold Tickets for a day pass, Snacks and Beverages, and last but not the least MLBB in-game diamonds. Additionally, they have a chance to meet the MPL Professional Players and Casters!
                <br/><br/>Lucky winners are truly thankful for the privileges they garnered after deciding to be a part of the community. Having such luxurious treatment and accommodation is such  a blessing. They outwardly proclaim to have this kind of event regularly and that all of the students be given a chance to be chosen.
                <br/><br/>With that, the MPL Battle Trips has been successfully administered and is still on their way to fetch the chosen ones, the university students. To finally have a chance to witness the gameplays of their bais players.
                <br/><br/>It must be a bonafide student of partnered universities of MLBB - PH Student Leaders within Quezon City.
                <br/><br/>They should have an active account on MLBB and be registered to their respective university’s lists, that their respective student leaders hold.
                <br/><br/>Of course, we shouldn’t forget the health protocols. The university students should have a copy or present their Vaccination Cards before On-Board.
                <br/><br/>The University Students should have a proof and copy of their successful enrollment of A.Y. 2022 - 2023.
            
            </p>
          </div> 
        </section>
    </div>
  )
}

export default MplBattleTrip