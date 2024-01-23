import React from 'react'
import '../../CSS/newsContent.css'
import { Link } from 'react-router-dom';
import 'react-awesome-slider/dist/styles.css';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';

const M5WatchFest = () => {
  const AutoplaySlider = withAutoplay(AwesomeSlider);
  return (
    <div className='mainContainer newsMSL'>
        <section className="newsHeadlinesContainer top">
          <div className="newsHeadContainer">
            <div className='row headd'>
              <div className='col-sm-6 col-12'>
                <div className="newsHeadContent left">
                  <div className="sliderContainerNews">
                    <div className="sliderFeatNews">
                      <AutoplaySlider className="newsSlider"
                          play={true}
                          cancelOnInteraction={false} // should stop playing on user interaction
                          interval={3000}
                      >
                        <div className="featContentNews">
                          <img src={require('../../assets/MLBB_Landing_Assets/News/Contents/M5WatchFest/M5Wfest02.png')} alt="Insert Banner" />
                        </div>
                        <div className="featContentNews">
                          <img src={require('../../assets/MLBB_Landing_Assets/News/Contents/M5WatchFest/M5Wfest03.png')} alt="Insert Banner" />
                        </div>
                        <div className="featContentNews">
                          <img src={require('../../assets/MLBB_Landing_Assets/News/Contents/M5WatchFest/M5Wfest04.png')} alt="Insert Banner" />
                        </div>
                        <div className="featContentNews">
                          <img src={require('../../assets/MLBB_Landing_Assets/News/Contents/M5WatchFest/M5Wfest05.png')} alt="Insert Banner" />
                        </div>
                        <div className="featContentNews">
                          <img src={require('../../assets/MLBB_Landing_Assets/News/Contents/M5WatchFest/M5Wfest06.png')} alt="Insert Banner" />
                        </div>
                      </AutoplaySlider>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-sm-6 col-12'>
                <div className="newsHeadContent right">
                  <h4 className='headTitle'>Awe-Inspiring Achievement: Moonton Student Leaders Organize M5 Watch Fest for 26 Schools</h4>
                  <p>
                    By: Mizhcar Krishna A. Villanueva <br />
                    December 30, 2023
                  </p>
                </div>
              </div>
            </div>
            
          
          </div>
          <div className="newsBodyContainer">
            <p>
            Moonton Student Leader’s biggest project of the year: “The M5 University Watch Fest”, was organized to 26 different universities in the Philippines during the course of the M5 World Championship from December 2 - 17. <br /><br />
            Moonton Student Leaders (MSL), a group of dedicated and passionate student leaders and Mobile Legends  Bang Bang players from different schools in the Philippines, have accomplished something truly awe-inspiring. Their remarkable achievement comes in the form of organizing the M5 Watch fest, a grand event that brought together 26 different schools. <br /><br />

            The “M-series” of the Mobile Legends Bang Bang is one of the international MLBB tournaments conducted by Moonton in different countries. It is the year-end tournament that showcases the prowess of different countries across the world in the game. This year, the fifth M-series, commonly called “M5'', was  conducted here in the Philippines and the EVM Convention Center and Rizal Memorial Coliseum were the chosen venues for the said event. As a way of supporting the Filipino MLBB teams AP Bren and Blacklist International, MSL PH planned to have a watch fest in different schools. <br /><br />

            Around 30 universities in the country applied but only 26 were chosen. Majority of the chosen universities were under the MSL program however, all were welcomed to join, even those who are non-MSL. Aside from showing the students’ passion for gaming, it also showed the creativity and diversity of each university on how they conducted the event.  <br /><br />

            With an event this big, even students who are used to host events at their school still had to undergo practices, meetings with head organizers and school admins, and supply shopping for the event.  <br /><br />

            Krish, one of the student leaders, explained, "Being part of the organizing team allowed me to enhance my leadership skills. I had to coordinate with different schools, manage inventory, and ensure everything ran smoothly. It was challenging because I also went to the M5 venue to be a media producer, yet that experience helped me grow as an individual and handle pressure." <br /><br />

            The participants of the M5 Watch fest had an unforgettable experience that left them inspired and motivated. Eivan, a student from National University Fairview and the President of their esports organization: NU Fervent, expressed his excitement, saying, <br /><br />

            "Being a non-MSL, after the watch party I really am thinking about becoming an MSL. Moonton Student Leaders PH helps cultivate leadership skills in students while helping them enjoy their passion for gaming even more." <br /><br />

            Organizing such a large-scale event did not come without its fair share of challenges. The student leaders encountered unexpected obstacles, tight deadlines, and the need to adapt to unforeseen circumstances. However, these hurdles became valuable learning opportunities. <br /><br />

            According to a Student Leader from Visayas, Lei, they encountered some difficulties in securing their venue and equipment for the event due to the budget they have. <br /><br />

            Miz, another student leader, shared her insights, saying, “After the opening day, andami ulit nangyari sa Mindanao. Sunod-sunod yung earthquake and also the aftershocks na sobrang dami. Akala namin okay na nung Dec. 10 na, ready na kami to set-up again doon sa event venue namin but at 11am nung araw na yon, a very bad news was announced to us. All the university events, including the admin’s annual event, was all canceled.” <br /><br />

            Throughout the event, there were numerous notable moments and achievements that further exemplified the Moonton Student Leaders' awe-inspiring achievement. From outstanding performances in the gaming tournaments to jaw-dropping cosplay transformations, participants left their mark on the M5 Watch fest. The event provided a platform for exceptional talent to shine and served as a testament to the incredible skills and passion within the gaming community. <br /><br />

            The Moonton Student Leaders have undoubtedly left an indelible mark on the gaming community through their awe-inspiring achievement of organizing the M5 Watch fest. This event not only brought together 26 schools but also fostered unity, team spirit, and personal growth among the participants. The dedication and passion exhibited by these student leaders in overcoming challenges and creating a memorable experience for all involved is truly commendable. As we look toward the future, it is clear that M5 Watch fest has the potential to expand its reach and make an even greater impact. Let us celebrate the success of these remarkable individuals and the inspiration they have provided to others in the pursuit of their own awe-inspiring achievements.

            </p>
          </div> 
        </section>
    </div>
  )
}

export default M5WatchFest