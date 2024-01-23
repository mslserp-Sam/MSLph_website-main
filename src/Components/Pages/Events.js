import React from 'react'
import "../CSS/events.css"
import { Link } from 'react-router-dom'

const Events = () => {
  return (
    <div className='mainContainer allEvents'>
        <section className="eventsPageMLBB top">
            <div className="epContentTop">
                <h2>MSL EVENTS</h2>
                <h4>"Join us for an exciting journey of unforgettable moments!"</h4>
            </div>
            <div className="epContentMid">
                <Link to='/M5Lipad'>
                    <div className="upcomingEvents active">
                        <h6>SOON</h6>
                    </div>
                    <div className="epcmContent active">
                        <img src={require('../assets/MLBB_Landing_Assets/BattleTripsLogo.png')} alt="" />
                        <h5>Battle Trips</h5>
                        <p>MPL Battle Trips is a 5-week event where fans of MLBB from around Luzon will be given a chance to visit the MPL PH venue.</p>
                    </div>
                </Link>
                <Link>
                    <div className="upcomingEvents active">
                        <h6>SOON</h6>
                    </div>
                    <div className="epcmContent active">
                        <img src={require('../assets/MLBB_Landing_Assets/OfflineTournamentLogo.png')} alt="" />
                        <h5>B.W.O.T.</h5>
                        <p>Bi-weekly Offline Tournament is a local campus event where student players compete every two weeks for a diamond rewards.</p>
                    </div>
                </Link>
                <Link>
                    <div className="upcomingEvents active">
                        <h6>SOON</h6>
                    </div>
                    <div className="epcmContent active">
                        <img src={require('../assets/MLBB_Landing_Assets/StreamerNightLogo.png')} alt="" />
                        <h5>Streamer Nights</h5>
                        <p>Streamer Night is a streaming event wherein student players can learn more about heroes and right builds from known streamers.</p>
                    </div>
                </Link>
                <Link to='/Events/MCC'>
                    <div className="upcomingEvents active">
                        <h6>SOON</h6>
                    </div>
                    <div className="epcmContent active">
                        <img src={require('../assets/MLBB_Landing_Assets/MCCTournamentLogo.png')} alt="" />
                        <h5>MSL COLLEGIATE CUP</h5>
                        <p>MSL Collegiate Cup (MCC) is a platform for collegiate players to showcase their skills in the national stage. </p>
                    </div>
                </Link>
                <Link>
                    <div className="upcomingEvents">
                        <h6>SOON</h6>
                    </div>
                    <div className="epcmContent">
                        <img src={require('../assets/MLBB_Landing_Assets/BattleTripsLogo.png')} alt="" />
                        <h5>Battle Trips</h5>
                        <p>MPL Battle Trips is a 5-week event where fans of MLBB from around Luzon will be given a chance to visit the MPL PH venue.</p>
                    </div>
                </Link>
            </div>
        </section>
    </div>
  )
}

export default Events