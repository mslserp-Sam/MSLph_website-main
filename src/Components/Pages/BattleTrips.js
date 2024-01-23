import React, { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import '../CSS/battleTrips.css'
import { 
  FaTimes,
} from 'react-icons/fa';
import { Helmet } from 'react-helmet'
import webIcon from '../assets/MLBB_Landing_Assets/MSLLogo.png'
import Swal from 'sweetalert2'

const BattleTrips = () => {
  const [viewOverview, setViewOverview] = useState(true)
  const [viewTac, setViewTac] = useState(false)
  const [viewSpecifics, setViewSpecifics] = useState(false)
  // const [viewProgTime, setViewTimeProg] = useState(false)
  const [viewRegForm, setViewRegForm] = useState(false)
  const [ifCom, setifCom] = useState(false);
  const [cbConfirm, setcbConfirm] = useState(false);
  const [cbAgree, setcbAgree] = useState(false);
  const [viewForm, setViewForm] = useState(false)
  const [submit, setSubmit] = useState(false);
  const [formData, setFormData] = useState({
    "Community": "Student Leaders",
    "Area": " ",
    "University ": " ",
    "Region": "Luzon",
    "FullName": "",
    "Gender": "Male",
    "Email": "",
    "Contact": "",
    "Address": "",
    "Airport": "",
    "ID": "",
    "FBlink": "",
    "Confirm": "yes",
    "Agree": "yes"
  })
  const handleInputData = (input) => (e) => {
    const { value } = e.target;
    if(input == "Community"){
      if(value == "Student Leaders"){
        setFormData((prevState) => ({
          ...prevState,
          "Area": "",
        }));
        setifCom(false)
      }else{
        setFormData((prevState) => ({
          ...prevState,
          "University": "",
        }));
        setifCom(true)
      }
    }
    setFormData((prevState) => ({
      ...prevState,
      [input]: value,
    }));
    
  };
 
  async function handleSubmitt(e){
    e.preventDefault();
    setSubmit(true);
    e.target.reset();
  
    let url = `https://docs.google.com/forms/d/e/1FAIpQLSc0mSWcCh4YsbpZfzsXEZE4hrx89wb0x2ccvNOI-YqqWA7AsA/formResponse?
    &entry.1792404058=${formData["Community"]}
    &entry.1929344487=${formData["Area"]}
    &entry.471019983=${formData["University"]}
    &entry.739763409=${formData["Region"]}
    &entry.84414673=${formData["FullName"]}
    &entry.1174253167=${formData["Gender"]}
    &entry.822722596=${formData["Email"]}
    &entry.1121835721=${formData["Contact"]}
    &entry.1849337349=${formData["Address"]}
    &entry.902230315=${formData["Airport"]}
    &entry.597219145=${formData["ID"]}
    &entry.701144016=${formData["FBlink"]}
    &entry.1579770845=${formData["Confirm"]}
    &entry.639661054=${formData["Agree"]}
    `;
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
      // body: newFormData
    }).catch((err) => {
      console.log("err", err);
    });
    functions();
    
  }
  const functions = () =>{
      showAlert();
  }
  const showAlert = () => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Thank you for submitting your entry! ",
      text: "We have recorded your details and we will let you know about the results through your email after the deliberations.",
      showConfirmButton: false,
      timer: 1500
    });
  }

  const handleViewOverview = () => {
    setViewOverview(true)
    setViewTac(false)
    setViewSpecifics(false)
    // setViewTimeProg(false)
    setViewRegForm(false)
    setViewForm(false)
  }
  const handleViewTAC = () => {
    setViewTac(true)
    setViewOverview(false)
    setViewSpecifics(false)
    // setViewTimeProg(false)
    setViewRegForm(false)
    setViewForm(false)
  }
  const handleViewSpecifics = () => {
    setViewSpecifics(true)
    setViewOverview(false)
    setViewTac(false)
    // setViewTimeProg(false)
    setViewRegForm(false)
    setViewForm(false)
  }
  // const handleViewTimeProg = () => {
  //   setViewTimeProg(true)
  //   setViewOverview(false)
  //   setViewTac(false)
  //   setViewSpecifics(false)
  //   setViewRegForm(false)
  // }
  const handleViewBtReg = () => {
    setViewRegForm(true)
    setViewOverview(false)
    setViewTac(false)
    setViewSpecifics(false)
    setViewForm(false)
    // setViewTimeProg(false)
  }
  const handleViewform = () => {
    setViewRegForm(false)
    setViewOverview(false)
    setViewTac(false)
    setViewSpecifics(false)
    setViewForm(true)
    // setViewTimeProg(false)
  }


  const [viewValidationForm, setViewValidationForm] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const formRef = useRef(null);
  
  const handleSubmit = (event) => {
    // event.preventDefault();
    setViewValidationForm(true);
    if (isSubmitted) return;
    setIsSubmitted(true);
  };

  const handleCloseVal = () => {
    setViewValidationForm(false)
    formRef.current.reset();
    setIsSubmitted(true);
  }

  


  const [inputAgeValue, setInputAgeValue] = useState('');
  const handleAgeInputChange = (e) => {
    const value = e.target.value;
    if (/^\d{0,2}$/.test(value)) {
      setInputAgeValue(value);
    }
  };
  const [inputServerValue, setInputServerValue] = useState('');
  const handleServerInputChange = (e) => {
    const value = e.target.value;
    if (/^\d{0,5}$/.test(value)) {
      setInputServerValue(value);
    }
  };
  const [inputUIDValue, setInputUIDValue] = useState('');
  const handleUIDInputChange = (e) => {
    const value = e.target.value;
    if (/^\d{0,10}$/.test(value)) {
      setInputUIDValue(value);
    }
  };
  const [inputFBValue, setInputFBValue] = useState('');
  const handleInputFBChange = (e) => {
    const value = e.target.value;
    // Regular expression to match a Facebook URL
    const facebookRegex = /^(https?:\/\/)?(www\.)?facebook\.com\/.+/;
    if (facebookRegex.test(value)) {
      setInputFBValue(value);
    }
  };


  if(viewValidationForm == true  ){
    window.document.body.style.overflow = 'hidden';
  } else{
    window.document.body.style.overflow = 'auto';
  }



  return (
    <>
    <Helmet>
      <link rel="icon" type="image/png" href={webIcon} />
    </Helmet>
    <div className='mainContainer battleTrips'>
      {viewValidationForm &&<div className="completionContainer">
        <div className="validationContent">
          {/* <button id='closeReg' onClick={handleCloseVal}><h5><FaTimes/></h5></button> */}
          <img src={require('../assets/MLBB_Landing_Assets/BattleTripsLogo.png')} alt="" />
          <h5>CONGRATULATIONS</h5>
          <p>You are now currently listed on Battle Trips. <br />To validate and be eligible, please complete the required documents by clicking "Validate".</p>
          <a href="https://forms.gle/bK5AYfwx6fc92ema8"><button id='validationForm'><h6>Validate</h6></button></a>
        </div>
      </div>}


      <section className="battleTripsContainer">
        <div className="btcContent top">
          <img src={require('../assets/MLBB_Landing_Assets/BTM5LIPAD.png')} alt="" />
          {/* <img id='extraLogo' src={require('../assets/MLBB_Landing_Assets/mlbbSun.png')} alt="" /> */}
        </div>
        <div className="btcContent nav">
          <button className={viewOverview ? 'active' : ''} onClick={handleViewOverview}><h6>Overview</h6></button>
          {/* <button className={viewTac ? 'active' : ''} onClick={handleViewTAC}><h6>Terms and Conditions</h6></button> */}
          <button className={viewForm ? 'active' : ''} onClick={handleViewform}><h6>Form</h6></button>
          {/* <button className={viewSpecifics ? 'active' : ''} onClick={handleViewSpecifics}><h6>Event Specifics</h6></button> */}
          {/* <button className={viewProgTime ? 'active' : ''} onClick={handleViewTimeProg}><h6>Event Program</h6></button> */}
          {/* <button className={viewRegForm ? 'active' : ''} onClick={handleViewBtReg}><h6>Registration Form</h6></button> */}
        </div>
        {viewOverview &&<div className="btcContent overview">
          <h5>The Battle Trips: M5Lipad</h5>
          <h6>Mechanics:</h6>
          <br/>
          <ol>
              <ul >
                <p>1. Create a video of yourself answering the questions: </p>
                  <li><p>a. Who are you supporting from the PH Teams, and Why?</p></li>
                  <li><p>b. Why do you deserve to be in the M5 World Championships?</p></li>
              </ul>
              <li><p>2. The video should be in Landscape at 16:9 or equivalent. </p></li>
              <li><p>3. The video should not exceed 1 minute and 20 seconds. </p></li>
              <li><p>4. Edits such as background music, video effects, etc. are not recommended. You may use captions but in minimal. Avoid unnecessary transitions or video filters. </p></li>
              <li><p>5. Upload your video to your Personal Facebook Account using the hashtags: #MLBB #M5Philippines #M5Lipad #CommunityHeroesPH #StudentLeadersPH #LakasNgPinas.</p></li>
              <li><p>6. To submit your entry, fill out the form using this link: moontonslph.org/M5Lipad </p></li>

          </ol>
          <br/>
          <h6>Guidelines:</h6>
          <br/>
          <ol>
              <li><p>1. The applicant should be at least 18 years old and have a valid ID for presentation (for student ID, it should be supported by a certificate of registration from the school).</p></li>
              <li><p>2. Should be a member of any Community Heroes or Student Leaders Programs across the Philippines. </p></li>
              <li><p>3. For the Student, the applicant must be enrolled in the current semester. </p></li>
              <li><p>4. Entries will be validated from the current master lists available from our existing communities; both Community Heroes and Student Leader programs. Unregistered applications will automatically be disqualified.</p></li>
          </ol>
          <br/>
          <h6>Terms and Conditions:</h6>
          <br/>
          <ol>
              <li><p>1. Winners will be posted on the Official Facebook Pages of MSL Philippines and Community Heroes.</p></li>
              <li><p>2. Winners should confirm their seats within 72 hours after the announcement is posted and sent through email. Failure to confirm will forfeit the winning and be given to another entry.</p></li>
              <li><p>3. The winning slot is non-transferable to another person.</p></li>
              
          </ol>
          <h6>Inclusions:</h6>
          <br/>
          <ol>
              <li><p>1. Hotel Accommodation (2 days and 1 night) within the area of the venue.</p></li>
              
                <li><p>2. Transportation (Depending on the Location)</p>
                  <ul>
                    <li><p>a. Local Airport to NAIA</p></li>
                    <li><p>b. NAIA to Accomodation</p></li>
                  </ul>
                </li>
              <li><p>3. M5 Championships Tickets (December 17, 2023)</p></li>
              <li><p>4. Daily Allowances and Food (3,000 per day)</p></li>
          </ol>

          {/* <p>
            <span></span>On the 12th season of Mobile Legends: Bang Bang Professional League Philippines, 
            the esports department and marketing department, specifically on Community Heroes 
            and Student Leaders, of Moonton Philippines will be conducting an extended collaboration 
            from the last season of the league. An initiative where MLBB fans of different 
            communities and schools can enjoy limited and exclusive experiences on the MPL 
            PH Season 12 Regular Season and Playoffs thru MPL Battle Trips. <br /><br />
            <span></span>MPL Battle Trips is a 5-week event where fans of MLBB from around Luzon will 
            be given a chance to visit the MPL PH Season 12 venue in Makati City. The participants 
            will be selected from different events under respective pages of MLBB PH - Community 
            Heroes and MLBB PH - Student Leaders.
          </p>
          <h5>OBJECTIVES</h5>
          <ul>
            <h6>Throughout the whole duration of the event, the MPL Battle Trips aims to have the following;</h6>
            <li><p>• Promote camaraderie and rapport among MLBB fans of the community</p></li>
            <li><p>• Immerse the participants on the happenings behind what we see in the esports industry</p></li>
            <li><p>• Appreciate and reward MLBB fans by giving them a once in a lifetime event.</p></li>
          </ul> */}
        </div>}
        {viewForm &&<div className="btcContent tac">
          <form className='card bg-dark text-white p-5' onSubmit={handleSubmitt} target="_self">
            <div className="row ">
                <div className='col-md-6 col-sm-12  mb-2'>
                  <div class="form-group">
                    <label for="exampleFormControlSelect1">Which Community?</label>
                    <select class="form-control bg-dark text-white" id="" onChange={handleInputData("Community")} required>
                      <option value="Student Leaders">Student Leaders</option>
                      <option value="Community Heroes">Community Heroes</option>
                    </select>
                  </div>
                </div>
                <div className='col-md-6 col-sm-12  mb-2'>
                  {ifCom &&
                    <div class="form-group">
                      <label for="exampleFormControlSelect1">Which area are you from?</label>
                      {/* <select class="form-control bg-dark text-white" id="" onChange={handleInputData("Area")}>
                        <option value="Student Leaders">Student Leaders</option>
                        <option>Community Heroes</option>
                      </select> */}
                      <input type="text" class="form-control bg-dark text-white" id="" onChange={handleInputData("Area")} required/>
                    </div>
                  }
                  {!ifCom &&
                    <div class="form-group">
                      <label for="exampleFormControlSelect1">Which University are you from?</label>
                      {/* <select class="form-control bg-dark text-white" id="" onChange={handleInputData("University")}>
                        <option>Student Leaders</option>
                        <option>Community Heroes</option>
                      </select> */}
                      <input type="text" class="form-control bg-dark text-white" id="" onChange={handleInputData("University")} required/>
                    </div>
                  }
                </div>
                <div className='col-md-6 col-sm-12 mb-2'>
                  <div class="form-group">
                    <label for="exampleFormControlSelect1">Region</label>
                    <select class="form-control bg-dark text-white" id="" onChange={handleInputData("Region")} required>
                      <option value="Luzon">Luzon</option>
                      <option value="Visayas">Visayas</option>
                      <option value="Mindanao">Mindanao</option>
                    </select>
                  </div>
                </div>
                <div className='col-md-6 col-sm-12  mb-2'>
                  <div class="form-group">
                    <label for="">Full Name <small>(Format: Last Name, First Name, M.I.)</small></label>
                    <input type="text" class="form-control bg-dark text-white" id="" onChange={handleInputData("FullName")} required/>
                  </div>
                </div>
                <div className='col-md-6 col-sm-12  mb-2'>
                  <div class="form-group">
                    <label for="exampleFormControlSelect1">Gender</label>
                    <select class="form-control bg-dark text-white" id="" onChange={handleInputData("Gender") }required>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>
                </div>
                <div className='col-md-6 col-sm-12  mb-2'>
                  <div class="form-group">
                    <label for="">Email</label>
                    <input type="email" class="form-control bg-dark text-white" id="" onChange={handleInputData("Email")} required/>
                  </div>
                </div>
                <div className='col-md-6 col-sm-12  mb-2'>
                  <div class="form-group">
                    <label for="">Contact No.</label>
                    <input type="text" class="form-control bg-dark text-white" id="" onChange={handleInputData("Contact")} required/>
                  </div>
                </div>
                <div className='col-md-6 col-sm-12  mb-2'>
                  <div class="form-group">
                    <label for="">Current Address</label>
                    <input type="text" class="form-control bg-dark text-white" id="" onChange={handleInputData("Address")} required/>
                  </div>
                </div>
                <div className='col-md-6 col-sm-12  mb-2'>
                  <div class="form-group">
                    <label for="">Nearest Airport from your home address</label>
                    <input type="text" class="form-control bg-dark text-white" id="" onChange={handleInputData("Airport")} required/>
                  </div>
                </div>
                <div className='col-md-6 col-sm-12  mb-2'>
                  <div class="form-group">
                    <label for="">Google Drive Link of your Valid ID</label>
                    <input type="text" class="form-control bg-dark text-white" id="" onChange={handleInputData("ID")} required/>
                  </div>
                </div>
                <div className='col-12 mb-2'>
                  <div class="form-group">
                    <label for="">Facebook Link of your entry (Video Link)</label>
                    <input type="text" class="form-control bg-dark text-white" id="" onChange={handleInputData("FBlink")} required/>
                  </div>
                </div>
                <div className='col-md-6 col-sm-12 mb-2'>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox"  required/>
                    <label class="form-check-label" for="defaultCheck1">
                      I confirm that I am 18+ years old.
                    </label>
                  </div>
                </div>
                <div className='col-md-6 col-sm-12 mb-2'>
                  <div class="form-check mb-4">
                    <input class="form-check-input" type="checkbox"  required/>
                    <label class="form-check-label" for="defaultCheck1">
                    By providing my personal information I agree to the Terms and Conditions and acknowledge that I have read the Privacy Policy of MSL Philippines
                    </label>
                  </div>
                  
                </div>
                <button type="submit" class="submitbtn btn btn-light">Submit</button>
            </div>
          </form>
        </div>}
        {/* {viewTac &&<div className="btcContent tac">
          <ul>
            <h6>A. Who are qualified to join?</h6>
            <li><p>• Filipino MLBB fans aged 18 and above</p></li>
            <li><p>• With an active MLBB account</p></li>
            <li><p>• Can travel to Metro Manila on any date/s of MPL S12 regular season and/or playoffs</p></li>
            <li><p>• With proof of complete vaccination against COVID 19 or local vaccination card</p></li>
            <li><p>• With proof of enrollment on A.Y. 2022 - 2023 or A.Y. 2023 - 2024</p></li>
            <h6>B. Who are disqualified to join?</h6>
            <li><p>• Employees of Moonton Philippines and their respective partners and vendors</p></li>
            <li><p>• Participants who do not follow the published event mechanics</p></li>
            <h6>C. Event Coverage and Duration</h6>
            <li><p>• Event is open to the Philippines only, particular in Luzon</p></li>
            <li><p>• Event runs from September 23, 2023 to October 14, 2023 (for regular season) only</p></li>
            <li><p>• Event runs from ------ to ----- (for playoffs) only</p></li>
            <h6>D. Event Selection of Winners and Claiming of Prizes</h6>
            <li><p>• There wil be a total of 30 winners to be selected every week; 15 from MLBB PH - Community Heroes and 15 from MLBB PH - Student Leaders</p></li>
            <li><p>• In case one (or more) of the winners will not be available due to reasons beyond the control of the organizers, the right to select another participant is reserved to organizer</p></li>
            <li><p>• A winner of any week cannot be a winner of succeeding weeks or should not be a winner of preceding weeks unless there's no enought participants that will fulfill the slots</p></li>
            <li><p>• Winners must message the MLBB PH - Community Heroes (for CH event winners) or MLBB PH - Student Leaders (for SL event winners) Facebook page to confirm their presence and attendance on the MPL Battle Trips</p></li>
            <li><p>• Slots for winners who will not be able to confirm within 24 hours after the winners' posting will be deemed forfeited and will be considered void</p></li>
            <li><p>• Slots are non-transferable and other prizer are non-convertible into cash and/or in-game diamonds</p></li>
            <h6>E. General Conditions</h6>
            <li><p>• Participants represent and warrant that they have read, understood, and agreed to abide by the event terms and conditions</p></li>
            <li><p>• Participants agree and consent to the use of their information and pictures submitted or parts thereof for promotional contents of MLBB PH - Community Heros, MLBB PH- Student Leaders, and MPL Philippines</p></li>
          </ul>
        </div>} */}
        {/* {viewSpecifics &&<div className="btcContent specifics">
          <ul>
            <h6>There will be a total of 36 participants for MPL Battle Trips each week;</h6>
            <li><p>• 15 community members from MLBB PH - Community Heroes</p></li>
            <li><p>• 15 students from MLBB PH - Student Leaders</p></li>
            <li><p>• 3 manpower handler assigned from MLBB PH - Community Heroes</p></li>
            <li><p>• 3 manpower handler assigned from MLBB PH - Student Leaders</p></li>
            <h6>The event will run for exact five (5) weeks; four (4) weeks regular season (Weeks 3 to 6) and one (1) week playoffs</h6>
            <h6>The weekly participants will be entitled of the following during MPL Battle Trips;</h6>
            <li><p>• Back and forth transportation from pick up point</p></li>
            <li><p>• Day pass</p></li>
            <li><p>• Official MLBB merch</p></li>
            <li><p>• Exclusive talks from Moonton PH speakers</p></li>
            <li><p>• Lunch meal</p></li>
            <li><p>• Fun games and diamond rewards during the  trip</p></li>
          </ul>
        </div>} */}
        {/* {viewProgTime &&<div className="btcContent program">
          <h5>Event Day Timeline</h5>
          <h6>11:00 am to 11:20 am	- Registration</h6>
          <h6>11:20 am to 11:30 am	- Introduction + Photo Op + Merch Giving</h6>
          <h6>11:30 am to 12:00 noon	- Lunch</h6>
          <h6>12:00 pm to 12:45	pm - Assembly to the Studio + Sessions (c/o Talent, Prod/LOPs, and Marketing)</h6>
          <h6>12:45 pm to 9:30 pm - MPL Broadcast</h6>
        </div>} */}
        {/* {viewRegForm &&<div className="btcContent register">
          <h5>Personal Details</h5>
          <p>Complete all details and requirements to be verified</p>
          <form 
            ref={formRef}
            action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSdsCBFE844J9dpEIZE7qg96epPiyEs4okblMGhfZCg4XMJJKA/formResponse" 
            target="hidden_iframe"
            method='post'
            onSubmit={handleSubmit}
          >
          <iframe
            name="hidden_iframe"
            id="hidden_iframe"
            style={{ display: 'none' }}
            onLoad={() => {
              setIsSubmitted(true)
              // This event handler runs when the form is submitted and the response is received
              // You can add code here to handle the response, if needed
            }}
          />
            <input id='btRegName' type="text" name='entry.393000631' placeholder='Fullname' required/><br />
            <input id='btRegAge' type="number" name='entry.613583443' placeholder='Age' value={inputAgeValue} onChange={handleAgeInputChange} required/>
            <input id='btRegFB' type="text" name='entry.60894837' placeholder='Facebook Link' value={inputFBValue} onChange={handleInputFBChange} required/><br />
            <input id='btRegServer' type="number" name='entry.1618428808' placeholder='ML Server ID (4-5 Digits)' value={inputServerValue} onChange={handleServerInputChange} required/>
            <input id='btRegIGN' type="number" name='entry.890765617' placeholder='ML User ID (7-10 Digits)' value={inputUIDValue} onChange={handleUIDInputChange} required/><br /><br />
            <h5>Event Mini-Game</h5>
            <img src={require('../assets/MLBB_Landing_Assets/BattleTrips/btMiniGame3.png')} alt="" />
            <p>Who is the MPL Pro Player born and raised in Bulacan <br /> and formerly part of Moonton Student Leaders?</p>   
            <input id='miniGameAns' type="text" name='entry.1767671561' placeholder='Answer' required/><br />
            <p id='agree'>By submitting you agree to all terms and conditions.</p>
            <input className={isSubmitted ? 'btRegSubmit disabled' :'btRegSubmit enabled'} type='submit' value='Submit' disabled={isSubmitted}/>
          </form>
        </div>} */}
      </section>
    </div>
    </>
  )
}

export default BattleTrips