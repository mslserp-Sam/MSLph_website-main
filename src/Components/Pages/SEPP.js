import React, { useEffect, useState } from 'react'
import "../CSS/sepp.css";
import { Link } from 'react-router-dom';
import { 
    FaAngleDown,
    FaAngleUp,
    FaAngleDoubleRight,
    FaAngleLeft,
    FaFileAlt
} from 'react-icons/fa';
import { Helmet } from 'react-helmet'
import webIcon from '../assets/MLBB_Landing_Assets/MSLLogo.png'

const SEPP = () => {

    const [viewDefaultProgram, setViewDefaultProgram] = useState(true)
    const [viewExecutionGuide, setViewExecutionGuide] = useState(false)
    const [viewDocresources, setViewDocResources] = useState(false)
    const [viewSubmissionForm, setViewSubmissionForm] = useState(false)



    const handleViewDefProg = () => {
        setViewDefaultProgram(true)
        setViewExecutionGuide(false)
        setViewDocResources(false)
        setViewSubmissionForm(false)
    }
    const handleViewExeGuide = () => {
        setViewExecutionGuide(true)
        setViewDefaultProgram(false)
        setViewDocResources(false)
        setViewSubmissionForm(false)
    }
    const handleViewDocResources = () => {
        setViewDocResources(true)
        setViewExecutionGuide(false)
        setViewDefaultProgram(false)
        setViewSubmissionForm(false)
    }
    const handleViewSubmissionForm = () => {
        setViewSubmissionForm(true)
        setViewDefaultProgram(false)
        setViewExecutionGuide(false)
        setViewDocResources(false)
    }

    



    const [viewELQ, setViewELQ] = useState (false)
    const handleViewELQ = () => {
        setViewELQ(true)
    }
    const handleCloseELQ = () => {
        setViewELQ(false)
    }

    const [viewDBAQ, setViewDBAQ] = useState (false)
    const handleViewDBAQ = () => {
        setViewDBAQ(true)
    }
    const handleCloseDBAQ = () => {
        setViewDBAQ(false)
    }

    const [viewIMF, setViewIMF] = useState (false)
    const handleViewIMF = () => {
        setViewIMF(true)
    }
    const handleCloseIMF = () => {
        setViewIMF(false)
    }




  return (
    <>
    <Helmet>
      <link rel="icon" type="image/png" href={webIcon} />
    </Helmet>
    <div className='mainContainer sepp'>
        <section className="seppPageMLBB top">
            <div className="seppContentTop">
                <h2>SEPP</h2>
                <div className="scTop left">
                    <img src={require('../assets/MLBB_Landing_Assets/NatanSkin.png')} alt="" />
                </div>
                <div className="scTop right">
                    <h4>SCHOOL EVENTS PARTNERSHIP PROGRAM</h4>
                    <p>
                        <span></span>The School Events Partnership Program (SEPP) provides an exclusive 
                        platform for students from partner universities to engage in tournaments 
                        and contests. This unique initiative fosters the growth of both academic 
                        and athletic prowess among students. Notably, winning participants not 
                        only earn recognition but also attract sponsorships, adding a rewarding 
                        dimension to their achievements. SEPP stands as a testament to the 
                        commitment to nurturing holistic excellence within the student community.
                    </p>
                </div>
            </div>
            <img id="scratch03" src={require('../assets/MLBB_Landing_Assets/Scratch04.png')} alt="" />
        </section>
        <section className="seppPageMLBB nav">
            <button className={viewDefaultProgram ? 'active' : ''} onClick={handleViewDefProg}><h6>General Guide</h6></button>
            <button className={viewExecutionGuide ? 'active' : ''} onClick={handleViewExeGuide}><h6>Execution Guide</h6></button>
            <button className={viewDocresources ? 'active' : ''} onClick={handleViewDocResources}><h6>Document Resources</h6></button>
            <button className={viewSubmissionForm ? 'active' : ''} onClick={handleViewSubmissionForm}><h6>Submission Form</h6></button>
        </section>
        {viewDefaultProgram &&<section className="seppPageMLBB mid">
            <div className="seppContentMid1">
                <h4>PROGRAM OBJECTIVES</h4>
                <div className="scMid1Container">
                    <div>
                        <h6>• Cultivating Relations Among University Organizations</h6>
                        <p>
                            The program aims to foster robust connections between universities across the Philippines, creating an external network that enhances collaboration and cooperation.
                        </p>
                    </div>
                    <div>
                        <h6>• Nurturing a Thriving MLBB Gaming Community</h6>
                        <p>
                            SEPP is dedicated to nurturing a vibrant MLBB gaming community within each university, encouraging camaraderie and skill development among students through engaging tournaments and events.
                        </p>
                    </div>
                    <div>
                        <h6>• Identifying and Empowering Student Leaders</h6>
                        <p>
                            A primary goal of SEPP is to identify and empower potential student leaders who will take charge of establishing and managing the MLBB gaming community within their respective universities, promoting leadership and teamwork.
                        </p>
                    </div>
                    <div>
                        <h6>• Facilitating Beneficial Sponsorships and Partnerships</h6>
                        <p>
                            SEPP serves as a conduit for fostering mutually beneficial sponsorships and partnerships between universities and external entities, thereby creating opportunities for growth and development for both parties and the broader gaming community within the university.
                        </p>
                    </div>
                </div>
            </div>
            <div className="seppContentMid2">
                <h4>PROGRAM SCOPE</h4>
                <div className="scMid2Container">
                    <div>
                        <img src={require('../assets/MLBB_Landing_Assets/HarithSkin.png')} alt="" />
                        <h6>MLBB Tournaments and Contests</h6>
                        <p>
                            <span></span>Thrilling esports tournaments and contests centered around Mobile Legends: Bang Bang, fostering friendly competition and strategic gameplay.
                        </p>
                    </div>
                    <div>
                        <img src={require('../assets/MLBB_Landing_Assets/LyliaSkin.png')} alt="" />
                        <h6>Non-MLBB-related Contests and Events</h6>
                        <p>
                            <span></span>A vibrant array of activities such as TikTok Contests, Dance Contests, Banner Contests, and Art Contests, designed to showcase creativity and talents beyond the gaming sphere.
                        </p>
                    </div>
                    <div>
                        <img src={require('../assets/MLBB_Landing_Assets/ChangeSkin.png')} alt="" />
                        <h6>Academic-related Contests and Events</h6>
                        <p>
                            <span></span>Intellectual challenges like Quiz Bees, Essay Contests, and Poster Contests, along with Sports Leagues and School Pageants, promote a holistic development approach by blending academics and extracurricular achievements.
                        </p>
                    </div>
                </div>
            </div>
            <div className="seppContentMid3">
                {!viewELQ ? 
                    <a onClick={handleViewELQ}><h4>ELIGIBILITY AND REQUIREMENTS <FaAngleDown className='faIcon'/></h4></a> :
                    <a onClick={handleCloseELQ}><h4>ELIGIBILITY AND REQUIREMENTS <FaAngleUp className='faIcon'/></h4></a>
                }
                {viewELQ &&<div className="scMid3Container">
                    <h5>In order for an event to be sponsored by this program, these basic requirements should be met:</h5>
                    <p>
                        1. For schools with an established SL in their school and non-SL schools. <br />
                        2. Events should be hosted by an Official organization in the School or by the School's management. <br />
                        3. Events that should be supported by SEPP must be MLBB-related and other specified in this guide only. <br />
                        4. Requesting organization should have a proposal to be submitted at least 2 weeks before the event. <br />
                        5. Events should not involve any type of violence, instead, promote balanced gaming and studying. <br />
                        6. Participants of the events should only be bona fide students of their school. <br />
                        7. Teams should consist of the following minimum team requirements for tournament-related events: <br />
                        <span></span>A. College-Wide Events - Minimum of 8 Teams <br />
                        <span></span>B. University-Wide Events - Minimum of 16 Teams <br />
                        8. Events should be nonprofit, meaning there should be no registration fee involved. <br />
                        9. Additional Requirements for Online Events: <br />
                        <span></span>A. The logo of MLBB PH SL is posted on every online posting of the event. <br />
                        <span></span>B. MLBB PH - Student Leaders Official Page must be tagged on the official announcement of the event. <br />
                        <span></span>C. If the event is live-streamed on any social media channels: <br />
                        <span></span><span></span>• MLBB PH SL Official Page should be tagged on their livestream caption. <br />
                        <span></span><span></span>• There should be an official logo of MLBB PH SL included in the production overlay. <br />
                        <span></span>D. Should submit at least 5-10 minutes of video from their event which can be used to create video highlights to be posted on the MLBB PH - Student Leaders Official Page <br />
                        10. Additional Requirements for On-ground Events: <br />
                        <span></span>A. The logo of MLBB PH SL is included in the banner (or anything they can show on the venue) during the event.  <br />
                        <span></span>B. Have the official SL of their school participate, or be involved in the event proper itself (they can be marshall, coordinator, or deliver a speech to promote SL).   <br />
                        <span></span>C. Submit pictures and videos of the event proper that can be posted on the MLBB PH Official Page. (10 pictures, 5-10 minutes video)  <br />
                        <span></span>D. Picture of SL manpower with the event organizers and participants.  <br />
                        11. If the event is both Online and On-ground, No. 9 & 10 should be followed. <br />
                    </p>
                </div>}
            </div>
            <div className="seppContentMid4">
                {!viewDBAQ ?
                    <a onClick={handleViewDBAQ}><h4>DIAMOND BUDGET ALLOTMENT AND UTILIZATION <FaAngleDown className='faIcon'/></h4></a>:
                    <a onClick={handleCloseDBAQ}><h4>DIAMOND BUDGET ALLOTMENT AND UTILIZATION <FaAngleUp className='faIcon'/></h4></a>
                }
                {viewDBAQ &&<div className="scMid4Container">
                    <h5></h5>
                    <p>
                        1. Diamond Rewards shall be given to the requesting organization to be used as a prize for their event. The amount to be sponsored will vary depending on what type of event and the level of school. <br />
                        2. The breakdown of the budget should follow the following conditions: <br />
                        <span></span>A. Maximum allotment could be used solely for prizes. <br />
                        <span></span>B. If there are Production Team Diamond Rewards (This includes casters, live stream personnel, and others), should not exceed 50% of the total expenditure only. <br />
                        3. Diamond Rewards Maximum Allotment according to Event Type and School Level: <br />
                        <table>
                            <thead>
                                <tr>
                                    <th rowSpan={3} colSpan={3}>Type of Event</th>
                                    <th colSpan={6}>MAXIMUM DIAMONDS ALLOTMENT Per EVENT</th>
                                    <th rowSpan={3} colSpan={3}>NON SL</th>
                                </tr>
                                <tr>
                                    <th colSpan={3}>COLLEGE-WIDE EVENTS</th>
                                    <th colSpan={3}>UNIVERSITY-WIDE EVENTS</th>
                                </tr>
                                <tr>
                                    <th>LEVEL 1</th>
                                    <th>LEVEL 2</th>
                                    <th>LEVEL 3</th>
                                    <th>LEVEL 1</th>
                                    <th>LEVEL 2</th>
                                    <th>LEVEL 3</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td colSpan={3}>On-Ground Tournament <br />(with Livestream)</td>
                                    <td>10,000</td>
                                    <td>20,000</td>
                                    <td>25,000</td>
                                    <td>15,000</td>
                                    <td>25,000</td>
                                    <td>30,000</td>
                                    <td>8,500</td>
                                </tr>
                                <tr>
                                    <td colSpan={3}>On-Ground Tournament <br />(w/o Livestream)</td>
                                    <td>8,000</td>
                                    <td>10,000</td>
                                    <td>15,000</td>
                                    <td>10,000</td>
                                    <td>15,000</td>
                                    <td>20,000</td>
                                    <td>7,500</td>
                                </tr>
                                <tr>
                                    <td colSpan={3}>Online Tournament <br />(with Livestream)</td>
                                    <td>5,000</td>
                                    <td>8,500</td>
                                    <td>10,000</td>
                                    <td>8,500</td>
                                    <td>12,000</td>
                                    <td>15,000</td>
                                    <td>3,500</td>
                                </tr>
                                <tr>
                                    <td colSpan={3}>Online Tournament <br />(w/o Livestream)</td>
                                    <td>3,000</td>
                                    <td>5,000</td>
                                    <td>8,500</td>
                                    <td>5,000</td>
                                    <td>8,500</td>
                                    <td>10,000</td>
                                    <td>2,500</td>
                                </tr>
                                <tr>
                                    <td colSpan={3}>Other Online Events <br />but non Tournament</td>
                                    <td>5,000</td>
                                    <td>8,000</td>
                                    <td>10,000</td>
                                    <td>7,500</td>
                                    <td>12,000</td>
                                    <td>15,000</td>
                                    <td>3,500</td>
                                </tr>
                                <tr>
                                    <td colSpan={3}>On-Ground Events, Non-MLBB, <br />School Related</td>
                                    <td>2,500</td>
                                    <td>5,000</td>
                                    <td>7,500</td>
                                    <td>5,000</td>
                                    <td>7,500</td>
                                    <td>10,000</td>
                                    <td>2,000</td>
                                </tr>
                            </tbody>
                        </table>
                        4. Total Diamonds Budget for a School per Semester according to Level. <br />
                        <table>
                            <thead>
                                <tr>
                                    <th>SCHOOL LEVEL</th>
                                    <th>TOTAL BUDGET Per SEMESTER</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>LEVEL 1</td>
                                    <td>25,000</td>
                                </tr>
                                <tr>
                                    <td>LEVEL 2</td>
                                    <td>45,000</td>
                                </tr>
                                <tr>
                                    <td>LEVEL 3</td>
                                    <td>55,000</td>
                                </tr>
                                <tr>
                                    <td>ALL NON-SL SCHOOLS</td>
                                    <td>100,000</td>
                                </tr>
                            </tbody>
                        </table>
                        Note: This is the maximum budget allowance for a school per semester, but SLs are allowed to manage the budget so that it can be used to sponsor various events in their school. MSL Philippines may waive the maximum budget for Level 3 and Officially Partnered Schools provided that they should submit a proposal justifying the implementation of the event.
                    </p>
                </div>}
            </div>
            <div className="seppContentMid5">
                {!viewIMF ?
                    <a onClick={handleViewIMF}><h4>IMPLEMENTATION FRAMEWORK <FaAngleDown className='faIcon'/></h4></a>:
                    <a onClick={handleCloseIMF}><h4>IMPLEMENTATION FRAMEWORK <FaAngleUp className='faIcon'/></h4></a>
                }
                {viewIMF &&<div className="scMid5Container">
                    <h5></h5>
                    <p>
                        1. Application Process <br />
                        <span></span>A. The application for this program will be open for the whole semester. <br />
                        <span></span>B. The Student Leader team will create the application form wherein organizations can submit their proposals and be reviewed by the team and the SL of the campus where the event would take place. <br /><br />
                        2. Approval of the Request <br />
                        <span></span>A. The SL team will determine if the event is within the scope of the program and determine the amount of diamonds that will be given to the requesting organization. <br />
                        <span></span>B. After the decision, an agreement form will be signed by the team and the requesting organization wherein details of the sponsorship will be provided, such as the number of diamonds and the additional requirements agreed upon by both parties. <br /><br />
                        3. Releasing of Diamond Incentives <br />
                        <span></span>A. A sample winners sheet will be provided by the SL team which will be filled out by the requesting organization. This sheet requires the Name, UID, and server of the winners to whom the diamonds will be directly sent. <br />
                        <span></span>B. Diamond rewards will be released 3-4 weeks after the submission of the winners' sheet and the requirements mentioned in the agreement form. 
                    </p>
                </div>}
            </div>
        </section>}
        {viewExecutionGuide&& <section className="seppPageMLBB mid">
            {/* <div className="seppContentForms">
                <h4>DOCUMENT RESOURCES</h4>
                <div className="sedContainer">
                    <a href="https://docs.google.com/document/d/1Rzr9lndZZTzu2Qc1eF0CgydL-rsqe4K6/edit">
                        <img src={require('../assets/MLBB_Landing_Assets/DocumentQR/EventProposal.png')} alt="" />
                        <p>Event Proposal Template</p>
                    </a>
                    <a href="https://docs.google.com/document/d/11B_r3gaXxO-vYcEf4XQo6V4eXSz-nCvc/edit">
                        <img src={require('../assets/MLBB_Landing_Assets/DocumentQR/AgreementForm.png')} alt="" />
                        <p>Agreement Form</p>
                    </a>
                    <a href="https://docs.google.com/spreadsheets/d/1qoNmn6Hn4EYQaww38IC2EfZn5IzsKbot/edit#gid=1644320961">
                        <img src={require('../assets/MLBB_Landing_Assets/DocumentQR/PreRegisteedPlayersDS.png')} alt="" />
                        <p>Player's Data Sheet</p>
                    </a>
                    <a href="https://docs.google.com/spreadsheets/d/1Th2kAV0tv5z7U5C7JCrPrXOfjo5VSmp3/edit#gid=799054646">
                        <img src={require('../assets/MLBB_Landing_Assets/DocumentQR/TournamentWinnersSheet.png')} alt="" />
                        <p>Tournament Winner Sheet</p>
                    </a>
                    <a href="https://docs.google.com/spreadsheets/d/1PmfN_gH2T_q9UAq5btsSbF_slyILDmQu/edit#gid=1641200751">
                        <img src={require('../assets/MLBB_Landing_Assets/DocumentQR/OtherEventsWinners.png')} alt="" />
                        <p>Other Events Winners</p>
                    </a>
                    <a href="https://drive.google.com/drive/folders/1juRQbt96SQlUYzBtX15Fry9WcEfQSJU3">
                        <img src={require('../assets/MLBB_Landing_Assets/DocumentQR/MSLLogos.png')} alt="" />
                        <p>MSL Official Logos</p>
                    </a>
                </div>
            </div> */}
            <div className="seppContentProcess">
                <h4>EXECUTION GUIDE</h4>
                <h5>Event Application Process</h5>
                <p>
                    1. Create a proposal for the event in accordance with the format in <span><a href="https://docs.google.com/document/d/1Rzr9lndZZTzu2Qc1eF0CgydL-rsqe4K6/edit">Event Proposal Template</a></span>. <br />
                    2. Fill out the <span><a href="https://docs.google.com/forms/d/e/1FAIpQLSeyd05ghg4o1STflKEmdi0gfN73VFqcKU1KfeIEidj_rXf5Tw/viewform">Event Application Form</a></span>. <br />
                    3. The SL team will determine if the event is within the program's scope and approve the amount of diamonds given to the requesting organization. This process usually takes 5 to 10 days upon submission of the <span><a href="https://docs.google.com/forms/d/e/1FAIpQLSeyd05ghg4o1STflKEmdi0gfN73VFqcKU1KfeIEidj_rXf5Tw/viewform">Event Application Form</a></span>.
                </p>
                <h5>Signing Up for the Agreement Form</h5>
                <p>
                    1. Make a copy of the <span><a href="https://docs.google.com/document/d/11B_r3gaXxO-vYcEf4XQo6V4eXSz-nCvc/edit">Agreement Form</a></span>. <br />
                    2. Fill up and edit the necessary details relevant to the agreement and sign the Agreement Form. Send the editable file through email at <span>sepp@moontonslph.org</span> with the Email Subject <span>“SL SEPP - [school name] Agreement Form”</span>. <br />
                    3. The SL team will verify all the details in the Agreement Form and once finalized, the SL team will sign the Agreement Form as a sign of the execution of the contract. <br />
                    4. A protected, non-editable file will be sent within 3 days after the SL team receives the Agreement Form's initial file.
                </p>
                <h5>Complying with Pre-Event Requirements</h5>
                <h6>(For MLBB tournaments only, you can skip this part if your event is non-MLBB tournament)</h6>
                <p>
                    1. A registration form to be uploaded online is a must in order to comply with this. <br />
                    2. Make a copy of the <span><a href="https://docs.google.com/spreadsheets/d/1qoNmn6Hn4EYQaww38IC2EfZn5IzsKbot/edit#gid=1644320961">Pre-registered Players' Sheet</a></span>. <br />
                    3. Fill up and edit the necessary details. Input all the registered players' full name, IGN, server, and UID. Make sure that all the information is correct. <br />
                    4. Submit the compiled pre-registered players sheet to <span>sepp@moontonslph.org</span> with the Email Subject <span>“SL SEPP - [school name] Pre-registered Players Sheet”</span>. <br />
                    5. Once submitted, no player's info should be changed in the pre-registered players sheet as it will be submitted to Moonton.
                </p>
                <h5>Running the Event Proper</h5>
                <p>
                    On this part, the SL team should not have any interference with the event organizers unless for on-site events whereas an SL should be invited as part of the organizers - for SL schools. <br />
                    REMINDER: For your publication materials and banners, you should use the MSL Philippines Logo which can be accessed in the Google Drive Folder. <br />
                    You should also tag MLBB PH SL's official page for every online posting that your event will be having.
                </p>
                <h5>Post Event Reporting Process</h5>
                <p>
                    Create a winners sheet in accordance with the templates below. <br />
                    NOTE: It may vary depending on the type of event. <br />
                    • Tournament Winners <br />
                    • Other Events Winners <br />
                    Compile all the required documentation as stated in Eligibility and Requirements No. 9. Upload it in one Google Drive, you may use separate folders for each type of file. <br />
                    Submit those in the <span>Event Reporting Form</span>.
                </p>
                <h5>Diamonds Release</h5>
                <p>
                    1. After the post-event reporting process, the SL team will review all submitted pre-event requirements. Once all the requirements are met, the SL team will send a report to Moonton to recognize the winners of the event.
                    2. The winners may expect 2 to 3 weeks after the event before they receive the prizes unless a certain announcement has been made.
                </p>
            </div>
        </section>}
        {viewDocresources &&<section className="seppPageMLBB mid">
            <div className="seppContentForms">
                <h4>DOCUMENT RESOURCES</h4>
                <div className="sedContainer">
                    <a href="https://docs.google.com/document/d/1Rzr9lndZZTzu2Qc1eF0CgydL-rsqe4K6/edit">
                        <img src={require('../assets/MLBB_Landing_Assets/DocumentQR/EventProposal.png')} alt="" />
                        <p>Event Proposal Template</p>
                    </a>
                    <a href="https://docs.google.com/document/d/11B_r3gaXxO-vYcEf4XQo6V4eXSz-nCvc/edit">
                        <img src={require('../assets/MLBB_Landing_Assets/DocumentQR/AgreementForm.png')} alt="" />
                        <p>Agreement Form</p>
                    </a>
                    <a href="https://docs.google.com/spreadsheets/d/1qoNmn6Hn4EYQaww38IC2EfZn5IzsKbot/edit#gid=1644320961">
                        <img src={require('../assets/MLBB_Landing_Assets/DocumentQR/PreRegisteedPlayersDS.png')} alt="" />
                        <p>Player's Data Sheet</p>
                    </a>
                    <a href="https://docs.google.com/spreadsheets/d/1Th2kAV0tv5z7U5C7JCrPrXOfjo5VSmp3/edit#gid=799054646">
                        <img src={require('../assets/MLBB_Landing_Assets/DocumentQR/TournamentWinnersSheet.png')} alt="" />
                        <p>Tournament Winner Sheet</p>
                    </a>
                    <a href="https://docs.google.com/spreadsheets/d/1PmfN_gH2T_q9UAq5btsSbF_slyILDmQu/edit#gid=1641200751">
                        <img src={require('../assets/MLBB_Landing_Assets/DocumentQR/OtherEventsWinners.png')} alt="" />
                        <p>Other Events Winners</p>
                    </a>
                    <a href="https://drive.google.com/drive/folders/1juRQbt96SQlUYzBtX15Fry9WcEfQSJU3">
                        <img src={require('../assets/MLBB_Landing_Assets/DocumentQR/MSLLogos.png')} alt="" />
                        <p>MSL Official Logos</p>
                    </a>
                </div>
            </div>
        </section>}
        {viewSubmissionForm &&<section className="seppPageMLBB mid">
            <div className="seppContentForms">
                <h4>SUBMISSION FORMS</h4>
                <div className="sedContainer">
                    <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSfSzqCCInJYKgSQ4BmAWov2hSS-Asa3DaK-mBvyH7ULiUmuPQ/viewform">
                        <img src={require('../assets/MLBB_Landing_Assets/DocumentQR/EventApplicationForm.png')} alt="" />
                        <p><FaFileAlt className='faIcons'/> Event Application Form</p>
                    </a>
                    <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSdDoz9Gp97ejiJspqIp03WunoLwLWKFzf4B4Q1FZa-I74QfUQ/viewform">
                        <img src={require('../assets/MLBB_Landing_Assets/DocumentQR/PostEventreportingForm.png')} alt="" />
                        <p><FaFileAlt className='faIcons'/> Post-Event Reporting Form</p>
                    </a>
                </div>
            </div>
        </section>}
    </div>
    </>
  )
}

export default SEPP