import React from 'react'
import '../../CSS/newsContent.css'
import { Link } from 'react-router-dom';
import 'react-awesome-slider/dist/styles.css';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';

const MSLPHMidYearCulmination = () => {
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
                            <img src={require('../../assets/MLBB_Landing_Assets/News/Contents/MSLPHMidYearCulmination/news.jpg')} alt="Insert Banner" />
                          </div>
                        </AutoplaySlider>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6">
                  <div className="newsHeadContent right">
                      {/* <img src={require('../../assets/MLBB_Landing_Assets/News/Highlights/MSLStarCity.png')} alt="" /> */}
                      <h4 className='headTitle'>MSL Philippines revels in a celebration spree during 2023 Mid-Year Culmination</h4>
                      <p>
                      The indomitable Filipino spirit of festivity was personified by Moonton Student Leaders as they celebrated remarkable midyear achievements through fun events filled with teeming rewards, from June 18 to July 1, 2023",
                      </p>
                  </div>
                </div>
            </div>
          
            
          </div>
          <div className="newsBodyContainer">
            <p>
                 With the goal of acknowledging their skills and dedication toward the community, SLs from all over the Philippines engaged in various culminating activities—from commemoration of phenomenal Student Leaders to a fierce MLBB Internal Tournament.",
                 <br/><br/>The MSL Mid-Year Awards span three categories that aim to feature outstanding leadership skills, significant contributions, and commitment to grow their respective MLBB communities. Ranelle Kenneth C. Noya (Caraga State University), James L. Santos (Quezon City University), Denver P. Dofredo (University of Southern Mindanao – Kabacan), Harry A. Gentiles Jr. (University of Mindanao – New Matina), and Cherrey Kris L. Lomonsod (Surigao Del Norte State University) stood out from the rest and were hailed as Most Outstanding MSL Awardees.
                 <br/><br/>SL Impact Awards were awarded to those who fostered community engagement through various initiatives and projects. This award was given per region: Elmer Christian M. Dela Merced (Luzon/ Polytechnic University of the Philippines – Sta. Mesa), Kate Nicole M. De La Calzada (Visayas/ Cebu Technological University), and Kareen Mae A. Limosnero (Mindanao/ University of Southeastern Philippines – Obrero). The iterated awards were voted for by SLs and the public via a survey form. Meanwhile, University of Southern Mindanao – Kabacan Campus won the Community Growth Award, which was based on manual trend analysis.
                 <br/><br/>Being awarded was something I honestly did not expect…we were delighted [when the winners were announced]”, Denver Dofredo, Outstanding MSL Awardee and Community Growth Awardee stated. He also mentioned tips on how to improve community reach through extensive contact with prospective individuals and by hosting giveaways to encourage student participation. “The event [MYC 2023] is thrilling, enjoyable, and nice in my humble viewpoint”, he added.",
                 <br/><br/>Furthermore, the MLBB Internal Tournament brimmed with climactic gameplays as Elmer & Da Boys worked their way to the top, with members John Froilan Pabalan, Aaron Troy Bugarin, Angel Maikellexiz Calma, Elmer Christian Dela Merced, and Ed Justine Memije being hailed as the overall Champions. Team Akame finished as the 1st Runner Up of the competition.Furthermore, the MLBB Internal Tournament brimmed with climactic gameplays as Elmer & Da Boys worked their way to the top, with members John Froilan Pabalan, Aaron Troy Bugarin, Angel Maikellexiz Calma, Elmer Christian Dela Merced, and Ed Justine Memije being hailed as the overall Champions. Team Akame finished as the 1st Runner Up of the competition.
                 <br/><br/>Moonton Student Leaders Philippines was established in September 2020 and aims to promote balanced gaming and academics by harnessing the power of mobile gaming to create a safe and inclusive community. The Mid-Year Culmination was one of its initiatives to recognize the hard work of MSLs in their respective MLBB communities.",
            </p>
          </div> 
        </section>
    </div>
  )
}

export default MSLPHMidYearCulmination