import React from 'react'
import '../../CSS/newsContent.css'
import { Link } from 'react-router-dom';
import 'react-awesome-slider/dist/styles.css';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';

const M5LipadWinners = () => {
  const AutoplaySlider = withAutoplay(AwesomeSlider);
  return (
    
    <div className='mainContainer newsMSL'>
        <section className="newsHeadlinesContainer top">
          <div className="newsHeadContainer">
          <div className='row headd'>
            <div className='col-12 col-sm-6'> 
            <div className="newsHeadContent left">
              <div className="sliderContainerNews">
                <div className="sliderFeatNews">
                  <AutoplaySlider className="newsSlider"
                      play={true}
                      cancelOnInteraction={false} // should stop playing on user interaction
                      interval={3000}
                  >
                    <div className="featContentNews">
                      <img src={require('../../assets/MLBB_Landing_Assets/News/Contents/M5LipadWinners/M5LipadCover.png')} alt="Insert Banner" />
                    </div>
                    <div className="featContentNews">
                      <img src={require('../../assets/MLBB_Landing_Assets/News/Contents/M5LipadWinners/M5Lipad1.png')} alt="Insert Banner" />
                    </div>
                    <div className="featContentNews">
                      <img src={require('../../assets/MLBB_Landing_Assets/News/Contents/M5LipadWinners/M5Lipad2.png')} alt="Insert Banner" />
                    </div>
                    <div className="featContentNews">
                      <img src={require('../../assets/MLBB_Landing_Assets/News/Contents/M5LipadWinners/M5Lipad3.png')} alt="Insert Banner" />
                    </div>
                    <div className="featContentNews">
                      <img src={require('../../assets/MLBB_Landing_Assets/News/Contents/M5LipadWinners/M5Lipad4.png')} alt="Insert Banner" />
                    </div>
                    {/* <div className="featContentNews">
                      <img src={require('../../assets/MLBB_Landing_Assets/News/Contents/StarCity/DSC05272.jpg')} alt="Insert Banner" />
                    </div>
                    <div className="featContentNews">
                      <img src={require('../../assets/MLBB_Landing_Assets/News/Contents/StarCity/DSC05278.jpg')} alt="Insert Banner" />
                    </div> */}
                  </AutoplaySlider>
                </div>
              </div>
            </div>
            </div>
            <div className='col-12 col-sm-6'> 
            <div className="newsHeadContent right">
              {/* <img src={require('../../assets/MLBB_Landing_Assets/News/Highlights/MSLStarCity.png')} alt="" /> */}
              <h4 className='headTitle'>'Dream come true!' Lipad winners highlight unforgettable experiences in M5</h4>
              <p>
                by Ian Capoquian <br />
                December 27, 2023
              </p>
            </div>
            </div>
          </div>
           
         
          </div>
          <div className="newsBodyContainer">
            <p>
                Three winners of the all-expense-paid M5Lipad battle trips share their most memorable moments 
                during the Mobile Legends: Bang Bang (MLBB) M5 World Championship in Manila last December 17, 
                at the Rizal Memorial Coliseum. <br /><br />

                Moonton Student Leaders (MSL) PH and Community Heroes (CH) picked esports enthusiasts Edelyn Malpas from Visayas, and Argie Salinas and Azriel Barrientos from Mindanao for a “better than great” experience with hotel accommodation, plane ticket, allowance, food, transportation, and M5 Championship Tickets to seal their M5Lipad journey. <br /><br />
                According to Edelyn, her M5Lipad journey was a mix of fun, wholesome, and amazing experience one MLBB fan could ever have. <br /><br />
    
                “M5Lipad is a dream. A dream of each die-hard fan ng MLBB pro scene, especially if walang budget,” the nursing student expressed. <br /><br />
                
                For the Visayan gamer, meeting AP.Bren’s David "FlapTzy" Canon is one of her cherished memories during their M5 journey. <br /><br />
                
                “It would be FlapTzy. Kasi unang una I'm not a fan, and to be honest, I have [a] different image in my mind of who FlapTzy [really] is, and I was shocked na he was very approachable pala. He's like an easy-going type of person, he is cute, and very friendly too,” she added. <br /><br />
                
                Meanwhile, Argie, who flew from Mindanao and attended the M5 with his best friend, said that he couldn’t contain his emotions all the time. <br /><br />
                
                “Papasok na kami sa venue ‘dun sa may booth, grabe yung feelings ko, yung emotion ko ‘di ko ma-explain like ang palagi ko lang masasabi at masisigaw ay ‘Lord, oh my God’ yan talaga lagi kong sinasabi,” shared Argie. <br />
                Additionally, the Sangguniang Kabataan (SK) member expressed his gratitude towards MSL and CH for giving him this once-in-a-lifetime experience.<br /><br />
                
                “Matagal ko nang hiniling ‘to sa kapatid ko na [nasa] Manila na baka pwede ako mabilhan ng ticket ng M5 at yung pang flight, kaso nga walang pera ‘di na talaga ako umasa. Sobrang laking tulong ng M5Lipad at sana marami pang mabigyan ng opportunity dito dahil alam ko madami ding naghahangad na makapanood nang kagaya ng napanood namin. Sobrang thankful ko kase isa talaga akong Esports Enthusiast,” he said during an interview. <br /><br />
                
                Moreover, esports fan Azriel said that seeing MLBB personalities in person is one of the highlights of his M5Lipad journey. <br /><br />
                
                “Meeting prominent MLBB personalities in the event was indeed an emotional moment. Each of them brought something unique to the scene. From players to casters and content creators, they all contributed to the game's vibrant community,” he said. <br /><br />
                
                However, one of these personalities stood out, who he wished to have seen closer during the M5. <br /><br />
                
                “Among all of them, although I didn't get the opportunity to come in close contact with, Ms. Mara Aquino truly had my attention completely engrossed. She indeed made the event more thrilling and pumping as she flaunted a notably high caliber of hosting prowess elevating the real essence of excellent spontaneity,” Azriel stated. <br /><br />
                
                Furthermore, Azriel shared that M5Lipad was not just a travel experience, but a rare opportunity to witness the best esports players of the world compete in the arena live. <br /><br />
                
                “It's really more than just a trip; it's more of a celebration of unity, ambition, and shared love for the game. I never really thought that I'd get chosen for this kind of chance and with that, I’m above all grateful to the Student Leaders of Moonton PH for [exceeding my initial expectations],” he said. <br /><br />
                
                The Philippines clinched its fourth consecutive World Championship title with AP.Bren securing a Grand Final revenge, 4-3, in a thrilling match against ONIC Esports, last December 16-17. <br />
 
            </p>
          </div> 
        </section>
    </div>
  )
}

export default M5LipadWinners