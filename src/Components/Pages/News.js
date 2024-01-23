import React from 'react'
import '../CSS/news.css'
import { Link } from 'react-router-dom'
import msl3rd from '../assets/MLBB_Landing_Assets/News/MSL_Anniversarry.mp4'

const News = () => {
  return (
    <div className='mainContainer news'>
        <section className="newsPageMLBB top">
            <div className="newsContainerTop">
              <h4>HIGHLIGHTS</h4>
              <div className='row highlightNews'>
                <div className='col-12 col-sm-6'>
                  <video className='videoTag' controls>
                    <source src={msl3rd} type='video/mp4' />
                  </video>
                </div>
                <div className='col-12 col-sm-6 updateTitle'>
                  <div className='titleImage'>
                    <img src={require('../assets/MLBB_Landing_Assets/News/Highlights/MSLStarCity.png')} alt="" />
                  </div>
                  <h5>MSL Philippines 3rd Year Anniversarry</h5>
                  <p>
                    Here's the highlights of the Moonton Student Leaders Philippines' 3rd Anniversary Blowout at Star City last October 14, 2023 in partnership with Star City and Mobile Legends Bang Bang. 💛🖤 
                  </p>
                  <Link to="/NewsAndFeature/MSL3rdAnniversarry"><button><h6 className='readmore'>READ MORE</h6></button></Link>
                </div>
              </div>
              {/* <div className='highlightNews'>
                <video className='videoTag' controls>
                  <source src={msl3rd} type='video/mp4' />
                </video>
                <div className='updateTitle'>
                  <div>
                    <img src={require('../assets/MLBB_Landing_Assets/News/Highlights/MSLStarCity.png')} alt="" />
                  </div>
                  <h5>MSL Philippines 3rd Year Anniversarry</h5>
                  <p>
                    Here's the highlights of the Moonton Student Leaders Philippines' 3rd Anniversary Blowout at Star City last October 14, 2023 in partnership with Star City and Mobile Legends Bang Bang. 💛🖤 
                  </p>
                  <Link to="/NewsAndFeature/MSL3rdAnniversarry"><button><h6 className="boboCssH6Read">READ MORE</h6></button></Link>
                </div>
              </div> */}
            </div>
        </section>
        <section className="newsPageMLBB mid">
          <div className="newsContainerMid1">
            <h4 className="boboCssH4s">NEWS AND UPDATES</h4>
            <div className="allNews">
              <div className='row'>
                <div className='col-12 col-sm-4 mb-3'>
                    <Link to="/NewsAndFeature/M5WatchFest">
                      <div className="nContent">
                        <img src={require('../assets/MLBB_Landing_Assets/News/Contents/M5WatchFest/M5Wfest02.png')} alt="" />
                        <h6 className="boboCssH6">Awe-Inspiring Achievement: Moonton Student Leaders Organize M5 Watchfest for 26 Schools</h6>
                        <p>Published December 2023</p>
                      </div>
                    </Link>
                </div>
                <div className='col-12 col-sm-4 mb-3'>
                    <Link to="/NewsAndFeature/M5LipadWinners">
                      <div className="nContent">
                        <img src={require('../assets/MLBB_Landing_Assets/News/Contents/M5LipadWinners/M5LipadCover.png')} alt="" />
                        <h6 className="boboCssH6">'Dream come true!' Lipad winners highlight unforgettable experiences in M5</h6>
                        <p>Published December 2023</p>
                      </div>
                    </Link>
                </div>
                <div className='col-12 col-sm-4 mb-3'>
                    <Link to="/NewsAndFeature/MSL3rdAnniversarry">
                      <div className="nContent">
                        <img src={require('../assets/MLBB_Landing_Assets/News/Contents/News06.png')} alt="" />
                        <h6 className="boboCssH6">Moonton Student Leaders Philippines' 3rd Anniversary Blowout at Star City</h6>
                        <p>Published October 2023</p>
                      </div>
                    </Link>
                </div>
                <div className='col-12 col-sm-4 mb-3'>
                    <Link to="/NewsAndFeature/StudentLeadersUndergroundClash">
                      <div className="nContent">
                        <img src={require('../assets/MLBB_Landing_Assets/News/Contents/StudentLeadersUndergroundClash/news.jpg')} alt="" />
                        <h6 className="boboCssH6">Student Leaders, Community Heroes intensifies atmosphere in MLBB Underground Clash!</h6>
                        <p>Published July 2023</p>
                      </div>
                    </Link>
                </div>
                <div className='col-12 col-sm-4 mb-3'>
                    <Link to="/NewsAndFeature/RiseToGlory">
                      <div className="nContent">
                        <img src={require('../assets/MLBB_Landing_Assets/News/Contents/RiseToGlory/news.jpg')} alt="" />
                        <h6 className="boboCssH6">Rise to Glory: MPLipad flies MSL-Ph Student Leaders, Community Heroes to MPL Grand Finals</h6>
                        <p>Published May 2023</p>
                      </div>
                    </Link>
                </div>
                <div className='col-12 col-sm-4 mb-3'>
                    <Link to="/NewsAndFeature/TheAllStar">
                      <div className="nContent">
                        <img src={require('../assets/MLBB_Landing_Assets/News/Contents/TheAllStar/news.jpg')} alt="" />
                        <h6 className="boboCssH6">The All Star University Highgrounds All Out Experience!</h6>
                        <p>Published May 2023</p>
                      </div>
                    </Link>
                </div>
                <div className='col-12 col-sm-4 mb-3'>
                    <Link to="/NewsAndFeature/MplBattleTrip">
                      <div className="nContent">
                        <img src={require('../assets/MLBB_Landing_Assets/News/Contents/News01.png')} alt="" />
                        <h6 className="boboCssH6">Bon Voyage! The ship of MPL Battle Trips has successfully sailed!</h6>
                        <p>Published March 2023</p>
                      </div>
                    </Link>
                </div>
                <div className='col-12 col-sm-4 mb-3'>
                    <Link to="/NewsAndFeature/FirstCampusOfflineTournament">
                      <div className="nContent">
                        <img src={require('../assets/MLBB_Landing_Assets/News/Contents/FirstCampusOfflineTournament/news.jpg')} alt="" />
                        <h6 className="boboCssH6">FIRST CAMPUS OFFLINE TOURNAMENT</h6>
                        <p>Published February 2023 </p>
                      </div>
                    </Link>
                </div>
                <div className='col-12 col-sm-4 mb-3'>
                    <Link to="/NewsAndFeature/FirstOnsiteBiWeekly">
                      <div className="nContent">
                        <img src={require('../assets/MLBB_Landing_Assets/News/Contents/FirstOnsiteBiWeekly/news.jpg')} alt="" />
                        <h6 className="boboCssH6">FIRST ONSITE BI WEEKLY!</h6>
                        <p>Published January  2023</p>
                      </div>
                    </Link>
                </div>
                <div className='col-12 col-sm-4 mb-3'>
                    <Link to="/NewsAndFeature/MfourFlashMob">
                      <div className="nContent">
                        <img src={require('../assets/MLBB_Landing_Assets/News/Contents/MfourFlashMob/news.jpg')} alt="" />
                        <h6 className="boboCssH6">Student Leaders, Finishing the 4-day Promotions with a Bang!</h6>
                        <p>Published January 2023</p>
                      </div>
                    </Link>
                </div>
                <div className='col-12 col-sm-4 mb-3'>
                    <Link to="/NewsAndFeature/MSLPHMidYearCulmination">
                      <div className="nContent">
                        <img src={require('../assets/MLBB_Landing_Assets/News/Contents/MSLPHMidYearCulmination/news.jpg')} alt="" />
                        <h6 className="boboCssH6">MSL Philippines revels in a celebration spree during 2023 Mid-Year Culmination!</h6>
                        <p></p>
                      </div>
                    </Link>
                </div>
                <div className='col-12 col-sm-4 mb-3'>
                    <Link to="/NewsAndFeature/YearEndParty">
                      <div className="nContent">
                        <img src={require('../assets/MLBB_Landing_Assets/News/Contents/YearEndParty/news.jpg')} alt="" />
                        <h6 className="boboCssH6">YEAR END PARTY!</h6>
                        <p>Published December 2022</p>
                      </div>
                    </Link>
                </div>
                

              </div>
              
              
              
              {/* <Link>
                <div className="nContent">
                  <img src={require('../assets/MLBB_Landing_Assets/News/Contents/News04.png')} alt="" />
                  <h6 className="boboCssH6">Student Leaders, Community Heroes intensifies atmosphere in MLBB Underground Clash</h6>
                  <p>Published July 2023</p>
                </div>
              </Link> */}
              {/* <Link>
                <div className="nContent">
                  <img src={require('../assets/MLBB_Landing_Assets/News/Contents/News05.png')} alt="" />
                  <h6 className="boboCssH6">MSL Philippines revels in a celebration spree during 2023 Mid-Year Culmination</h6>
                  <p>Published June 2023</p>
                </div>
              </Link> */}
              
              {/* <Link>
                <div className="nContent">
                  <img src={require('../assets/MLBB_Landing_Assets/News/Contents/News03.png')} alt="" />
                  <h6 className="boboCssH6">The All Star University Highgrounds All Out Experience</h6>
                  <p>Published May 2023</p>
                </div>
              </Link> */}
              
              
              {/* <Link>
                <div className="nContent">
                  <img src={require('../assets/MLBB_Landing_Assets/News/Contents/News02.png')} alt="" />
                  <h6 className="boboCssH6">Rise to Glory: MPLipad flies MSL-Ph Student Leaders, Community Heroes to MPL Grand Finals</h6>
                  <p>Published May 2023</p>
                </div>
              </Link> */}
              
              
              
              
              
              
              
            </div>
          </div>
        </section>
    </div>
  )
}

export default News