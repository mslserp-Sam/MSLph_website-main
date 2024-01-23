import React from 'react'
import '../../CSS/newsContent.css'
import { Link } from 'react-router-dom';
import 'react-awesome-slider/dist/styles.css';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';

const YearEndParty = () => {
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
                            <img src={require('../../assets/MLBB_Landing_Assets/News/Contents/YearEndParty/news.jpg')} alt="Insert Banner" />
                          </div>
                        </AutoplaySlider>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6">
                  <div className="newsHeadContent right">
                    {/* <img src={require('../../assets/MLBB_Landing_Assets/News/Highlights/MSLStarCity.png')} alt="" /> */}
                    <h4 className='headTitle'>YEAR END PARTY</h4>
                    <p>
                    A Mythical End, in the Presence of Legends: The 2022 MSL Year-End Party
                    <br/><br/>An achievement that is meant for recognition has been brought to the tables with young leaders all around the nation. It has more meaning to it than it was deemed it would be. It is because it was celebrated amidst the span of breadth of each living legends. On top of that, it was Christmas that makes it more bountiful and perplexing. If you have attended such type of convivial, what would you feel?
                    
                    </p>
                  </div>
                </div>
            </div>
            
            
          </div>
          <div className="newsBodyContainer">
            <p>
            The event was preceded with a lot of extravaganza that entertained not just a single person but a whole lot of the attendee. An event that has to be celebrated since another year had passed. The efforts that was spared, the sleepless nights, the mortifying feeling of failure, and above all - the SUCCESS that is the cause for celebration. It was truly astonishing to have young leaders be gathered despite the gap of each other. As a consequence, SLs or shall we say student leaders was encouraged more to do theirs duties and responsibilities up to the upper limit or even have a breakthrough.
            <br/><br/>A night full of surprises, laughters, and excitement bellows on each ends. A year end party is considerably an eventful moment for those young leaders’ efforts had been acknowledged. Moreover, they expected for another event such as this that commemorates each achievements.
            </p>
          </div> 
        </section>
    </div>
  )
}

export default YearEndParty