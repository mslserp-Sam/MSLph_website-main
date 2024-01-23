import React, { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import '../CSS/mcc.css'
import { 
  FaTimes,
} from 'react-icons/fa';
import { Helmet } from 'react-helmet'
import webIcon from '../assets/MLBB_Landing_Assets/MSLLogo.png'

const MCC = () => {
    const [viewMCCOvervire, setViewMCCOverview] = useState(true)
    const [viewMCCRuleBook, setViewMCCRuleBook] = useState(false)
    const [viewMCCApplication, setViewMCCApplication] = useState(false)
    const [viewMCCSeason, setViewMCCSeason] = useState(false)


    const handleViewMCCOverview = () => {
        setViewMCCOverview(true)
        setViewMCCRuleBook(false)
        setViewMCCApplication(false)
        setViewMCCSeason(false)
    }

    const handleViewMCCRulebook = () => {
        setViewMCCOverview(false)
        setViewMCCRuleBook(true)
        setViewMCCApplication(false)
        setViewMCCSeason(false)
    }





  return (
    <>
    <Helmet>
      <link rel="icon" type="image/png" href={webIcon} />
    </Helmet>
    <div className="mainContainer mcc">
        <section className="mccContainer">
            <div className="mccContent top">
                <img src={require('../assets/MLBB_Landing_Assets/mccMainLogo.png')} alt="" />
            </div>
            <div className="mccContent nav">
                <button className={viewMCCOvervire ? 'active' : 'enabled'} onClick={handleViewMCCOverview}><h6>Overview</h6></button>
                <button className={viewMCCRuleBook ? 'active' : 'enabled'} onClick={handleViewMCCRulebook}><h6>Rule Book</h6></button>
                <button className='disabled'><h6>Application</h6></button>
                <button className='disabled'><h6>Season 1 Bracket</h6></button>
            </div>
            {viewMCCOvervire &&<div className="mccContent overview">
                <h5>WHAT IS MCC ?</h5>
                <p>
                    <span></span>MSL Colligiate Cup (MCC) is a platform for collegiate players to showcase their skills in the national stage.
                    MCC is a potential franchise that both promote the participation of the MSL Communities and accredited organizations accross the country
                </p>
                <h5>WHO CAN JOIN ?</h5>
                <p>
                    <span></span>Aspiring Student-Gamers from MSL Communities and MSL Accredited Organizations are allowed to join.
                </p>
                <img src={require('../assets/MLBB_Landing_Assets/mccBracketSystem.jpg')} alt="" />
            </div>}
            {viewMCCRuleBook &&<div className="mccContent rulebook">
                <h5>MSL Collegiate Cup S1 Rulebook</h5>
                <p>
                    The <strong>"MSL Collegiate Cup S1 Rulebook"</strong> contains the official rules and regulations for the Moonton Student Leader Collegiate Cup (MCC) Season 1. It provides a comprehensive guide for participating teams and players, outlining the gameplay mechanics, match formats, and tournament structure. <br /><br />
                    The rulebook covers various aspects of the competition, including team composition, match scheduling, scoring system, and code of conduct. It ensures fair play, sportsmanship, and competitive integrity throughout the tournament. <br /><br />
                    All participating teams are expected to familiarize themselves with the rulebook and adhere to its guidelines. Any violations or disputes will be handled according to the procedures outlined in the rulebook. <br /><br />
                    The MSL Collegiate Cup S1 Rulebook is a fundamental document that ensures a level playing field and promotes a positive and competitive environment for all participants. <br /><br />
                </p><br />
                <h6><i>PATCH NOTES:</i></h6>
                <h5>1. Overview</h5><br />
                <p>
                    The Moonton Student Leader Collegiate Cup (MCC) is a rebranded School Rivals of Moonton Student Leaders PH. It is a platform for collegiate players to showcase their skills on the national stage. MCC is a potential franchise that promotes the participation of the existing MSL communities and accredited organizations across the country. <br /><br />
                    Definition of Terms <br />
                    <ul>
                        <li>Game - A specific instance or round of competition within the tournament that is played until a winner is determined either via; (a) destroying the enemy base, (b) a team forfeiting the game, or (c) a team losing by default or disqualification.</li>
                        <li>Match - A series of games played between two teams according to a specific format and set of rules. A match consists of multiple games, with each game contributing to the overall outcome of the match. The winner of the match is determined based on the number of games won. In a “best-of-one” format, the terms ‘game’ and ‘match’ may be used interchangeably.</li>
                        <li>Roster - The list of players who are officially registered to represent a team in the tournament. </li>
                        <li>Seed - The position assigned to a team based on the randomized bracketing. </li>
                        <li>Marshal - A designated official responsible for overseeing and enforcing the rules and regulations of the tournament. The marshal ensures fair play, resolves disputes, and maintains the integrity of the competition. They have the authority to make decisions, issue warnings, and impose penalties as necessary.</li>
                        <li>MCC Monthly Rivals - One stage of the tournament where teams from established MSL communities compete against each other on a monthly basis. It consists of a series of matches played within a specific time frame, with the results contributing to the upcoming stages of the tournament. </li>
                        <li>MCC University Rivals - One stage of the tournament where only esports organizations from accredited schools are allowed to compete. This stage showcases the talent and skills of collegiate players from accredited institutions, promoting healthy competition and fostering a sense of pride among participating schools.</li>
                        <li>Split/Stage - A specific phase or segment of the tournament where teams compete and progress based on their performance. The terms ‘split’ and ‘stage’ may be used interchangeably.</li>
                    </ul>
                </p>
                <h5>2. Team Formation</h5>
                <p>
                    2.1. Eligibility
                    <ul>
                        <li>All players should be bona fide students at the school that they are representing.</li>
                        <li>All players must not be under 16 years of age upon joining.</li>
                        <li>All players should submit proof of enrollment upon registration.</li>
                        <li>All players on the team should be from the same university and campus (if applicable).</li>
                    </ul><br />
                    2.1.1. MCC Monthly Rivals
                    <ul>
                        <li>Players should be part of the student masterlist sheet and the official Facebook group of established MSL communities upon registration.</li>
                    </ul><br />
                    2.1.2. MCC University Rivals
                    <ul>
                        <li>Only accredited and partnered esports organizations may submit a lineup to compete in the Campus Rivals stage of MCC.</li>
                        <li>All players in the submitted lineup must be official members of the accredited and partnered esports organization.</li>
                        <li>The esports organization should submit their rosters two (2) weeks before the actual start of the event.</li>
                    </ul><br /><br />
                    2.2. Composition <br /><br />
                    2.2.1. Each team is required to maintain the following during the entirety of the MCC:
                    <ul>
                        <li>Five (5) players for their starting lineup.</li>
                    </ul><br />
                    2.2.2. Teams can have the following as additionals during the entirety of the MCC but they are not required to do so:
                    <ul>
                        <li>One (1) team manager.</li>
                        <li>One (1) coach.</li>
                        <li>One (1) substitute player.</li>
                    </ul><br />
                    The minimum requirement for each team to legitimately function in the MCC is to maintain at least five (5) starter players. Failure to maintain this minimum standard shall subject the team to applicable penalties or disqualification. <br /><br />
                    2.3. Roster Adjustments <br /><br />
                    <span></span>Teams are permitted to modify their rosters during the intervals between Tournament Stages (MCC Monthly & University Rivals → MCC Group Stage/Wildcard → MCC Championships). Each team is limited to making a single roster adjustment during each roster change period. To enact roster changes, teams must complete the roster change form supplied by the MSL marshals. <br /><br />
                    2.4. Restrictions <br /><br />
                    2.4.1. Team Name and In-Game Name (IGN) Restrictions <br /><br />
                    <span></span>Team names and in-game names (IGNs) must adhere to certain restrictions. These restrictions include (1) not including vulgarities or obscenities; (2) avoiding derivatives of products or services that may cause confusion; and (3) refraining from using the names of other established players or fictional personalities. The MCC marshals have the sole discretion to apply these restrictions. If a team or player is determined by the MCC marshals to have a name that violates these restrictions, they will be given a 5-day grace period to make the necessary changes. Failure to comply within this timeframe will result in the team being ineligible to participate in the tournament. <br /><br />
                    2.4.2. Team Branding <br /><br />
                    <span></span>Teams are responsible for ensuring that the logo and branding they use to represent their team, as well as any intellectual property they submit to MSL PH, are either original creations or intellectual property for which they hold the rights. It is important that their use of such materials does not violate any intellectual property laws. MSL PH will not be held accountable for any legal actions taken against teams that fail to comply with these requirements.
                </p>
                <h5>3. Tournament Format</h5>
                <p>
                    3.1. MCC Monthly Rivals <br /><br />
                    <span></span>One stage of the tournament is where teams from established MSL communities compete against each other on a monthly basis. It consists of a series of matches played within a specified time frame for the months of November, December, January, and February, with the results contributing to the upcoming stages of the tournament. <br /><br />
                    3.1.1. Campus Clash <br /><br />
                    <span></span>These tournaments are regularly held in MSL community groups twice a month, providing an opportunity for teams within the community to compete against each other in single-elimination best-of-one matches. <br /><br />
                    3.1.2. Local Representative Clash <br /><br />
                    All bracket winners of the “3.1.1. Campus Clash” for each school will play for the spot of regional representative of the school in a single-elimination best-of-one match/es. At the end of this stage, only one team should become the final representative of the school for the “3.1.3. Regional Clash”. <br /><br />
                    <i>At this stage, the Campus Student Leaders (SLs) have the authority to change the format at their own discretion.</i><br /><br />
                    3.1.3. Regional Clash <br /><br />
                    Representatives from each school will face another team from other schools in a single-elimination best-of-one match (regional clash bracket finals will be a match with a 10-ban setup). <br />
                    All winners of “3.1.2. Local Representative Clash” will be divided into four (4) divisions:
                    <ul>
                        <li>NCR - NCL (North and Central Luzon) Region</li>
                        <li>South Luzon Region</li>
                        <li>Visayas Region</li>
                        <li>Mindanao Region</li>
                    </ul><br /><br />
                    At the end of this stage, only two teams should become the final representatives from each region for the “3.1.4. National Qualifier.” <br /><br />
                    3.1.4. National Qualifiers <br /><br />
                    In this stage, only eight (8) teams will compete for the top two (2) spots to qualify for the next split of the MCC. These eight (8) teams will compete in a single-elimination best-of-one matches with a 10-ban setup.
                    The two (2) qualifiers will be waitlisted for the upcoming “3.4. MCC Group Stages” and will be declared the <strong>‘Monthly Rivals Qualifiers’</strong>.
                </p>
                <img src={require('../assets/MLBB_Landing_Assets/mccRulebook.jpg')} alt="" />
            </div>}
        </section>

    </div>
    </>
  )
}

export default MCC