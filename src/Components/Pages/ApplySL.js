import React, { useState, useEffect, useRef } from 'react'
import '../CSS/applySL.css'
import axios from 'axios'
import { 
    FaAngleDoubleRight,
} from 'react-icons/fa';

const ApplySL = () => {
  const [viewDefaultASL, setViewDefaultASL] = useState(true)
  const [viewSecondASL, setViewSecondASL] = useState(false)
  const [viewThirdASL, setViewThirdASL] = useState(false)
  const [viewForthASL, setViewForthASL] = useState(false)
  const [viewFifthASL, setViewFifthASL] = useState(false)


  const handleViewDefaultASL = () => {
    setViewDefaultASL(true)
    setViewSecondASL(false)
    setViewThirdASL(false)
    setViewForthASL(false)
    setViewFifthASL(false)
  }
  const handleViewSecondASL = () => {
    setViewSecondASL(true)
    setViewDefaultASL(false)
    setViewThirdASL(false)
    setViewForthASL(false)
    setViewFifthASL(false)
  }
  const handleViewThirdASL = () => {
    setViewThirdASL(true);
    setViewDefaultASL(false)
    setViewSecondASL(false)
    setViewForthASL(false)
    setViewFifthASL(false)
  }
  const handleViewForthASL = () => {
    setViewForthASL(true)
    setViewDefaultASL(false)
    setViewSecondASL(false)
    setViewThirdASL(false)
    setViewFifthASL(false)
  }
  const handleViewFifthASL = () => {
    setViewFifthASL(true)
    setViewDefaultASL(false)
    setViewSecondASL(false)
    setViewThirdASL(false)
    setViewForthASL(false)
  }


  // Personal Details Form Page
  const [inputFullname, setInputFullname] = useState('')
  const [inputNickname, setInputNickname] = useState('')
  const [inputFblink, setInputFblink] = useState('')
  const [inputEmail, setInputEmail] = useState('')
  const [inputContact, setInputContact] = useState('')
  const [inputGender, setInputGender] = useState('')
  const [inputBday, setInputBday] = useState('')
  const [inputAge, setInputAge] = useState('')
  const [inputCourse, setInputCourse] = useState('')
  const [inputForms, setInputForms] = useState('')
  const [inputSheet, setInputSheet] = useState('')

  // School Details Form Page
  // const [inputSchoolInfo, setInputSchoolInfo] = useState('')
  const [inputChapter, setInputChapter] = useState('')
  const [inputSchoolAddress, setInputSchoolAddress] = useState('')
  const [inputSchoolName, setInputSchoolName] = useState('')
  const [inputSchoolCampus, setInputSchoolCampus] = useState('')
  const [inputSchoolTourna1, setInputSchoolTourna1] = useState('')
  const [inputSchoolTourna2, setInputSchoolTourna2] = useState('')

  // MLS Applicant Questions
  // const [inputQ1, setINputQ1] = useState('')
  const [inputQ2, setINputQ2] = useState('')
  const [inputQ3, setINputQ3] = useState('')
  const [inputQ4, setINputQ4] = useState('')



  useEffect(() => {
    if (inputBday) {
      const birthdayDate = new Date(inputBday);
      const currentDate = new Date();

      const ageInMilliseconds = currentDate - birthdayDate;
      const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);

      setInputAge(Math.floor(ageInYears));
    }
  }, [inputBday]);

  const handleInputFBChange = (e) => {
    const value = e.target.value;
    const facebookRegex = /^(https?:\/\/)?(www\.)?facebook\.com\/.+/;
    if (facebookRegex.test(value)) {
      setInputFblink(value);
    }
  };
  const handleInputContact = (e) => {
    const value = e.target.value;
    if (/^\d{0,11}$/.test(value)) {
      setInputContact(value);
    }
  };

  const [viewValidationForm, setViewValidationForm] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const formRef = useRef(null);
  
  const handleSubmit = (event) => {
    // event.preventDefault();
    setViewValidationForm(true);
    if (isSubmitted) return;
    setIsSubmitted(true);
  };





  return (
    <div className='mainContainer applySL'>
        <div className="slRegisterContainer">
          <div className="slRegisterContent">
            <div className="slrContent left">
              <h3>APPLY STUDENT LEADER</h3>
              <div className="applySLNav">
                <button className={viewDefaultASL ? 'active' : ''} onClick={handleViewDefaultASL}><h6>Overview</h6></button>
                {/* <button className={viewSecondASL ? 'active' : ''} onClick={handleViewSecondASL}><h6>Personal</h6></button> */}
                <button className={viewSecondASL ? 'active' : ''}><h6>Personal</h6></button>
                <button className={viewThirdASL ? 'active' : ''} onClick={handleViewThirdASL} 
                  disabled={!inputFullname || !inputNickname || !inputFblink || !inputEmail || !inputContact || !inputGender || !inputBday || !inputAge || !inputCourse || !inputForms || !inputSheet}
                >
                  <h6>School</h6>
                </button>
                <button className={viewForthASL ? 'active' : ''} onClick={handleViewForthASL}
                  disabled={ !inputChapter || !inputSchoolAddress || !inputSchoolAddress || !inputSchoolName || !inputSchoolCampus || !inputSchoolTourna1 || !inputSchoolTourna2}
                >
                  <h6>Questions</h6>
                </button>
                <button className={viewFifthASL ? 'active' : ''} onClick={handleViewFifthASL}
                  disabled={!inputQ2 || !inputQ3 || !inputQ4}
                >
                  <h6>Verification</h6>
                </button>
              </div>
              <form 
                ref={formRef}
                action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSdnZHF_WUiqrB5KUUYJl3i3BmgPrPNANmNbKi9P8h7Mi6u79g/formResponse" 
                method='post'
                target="apply_iframe"
                onSubmit={handleSubmit}
              >
              <iframe
                name="apply_iframe"
                id="apply_iframe"
                style={{ display: 'none' }}
                onLoad={() => {
                  // This event handler runs when the form is submitted and the response is received
                  // You can add code here to handle the response, if needed
                }}
              />
              <div className={(!viewSecondASL && !viewThirdASL && !viewForthASL && !viewFifthASL) ? "applySLContainer form active" : "applySLContainer form"}>
                <br />
                <p>
                  Hello MLBB student-gamer! <br /><br />

                  This application form is for non-graduating college students only which age is <br /> 
                  at least 18 years old by first semester of A.Y. 2023-2024. All HS, SHS and 17 years old <br /> 
                  entries are strictly not yet allowed to be part of our MSL PH Team. <br /><br />

                  Before applying as student leader we want to make sure that you fully understand <br /> 
                  what a student leader is and what they do! So make sure you have seen and read <br /> 
                  through this <a href="https://tinyurl.com/5n7khxff">Guideline Slide</a>. <br /><br />

                  Ready your requirements first. This application form requires these following images and information: <br />
                  1. Proof of enrollment (student ID, enrollment status, receipts) <br />
                  2. Legit Facebook profile link with at least 300 real people as friends (not private) <br />
                  3. Name of school/college/university with branch and school's complete address <br /><br />

                  Complete all required fields to proceed on next pages
                </p><br />
                <span className='proceedButton'>
                  {/* <button type='button' onClick={handleViewSecondASL}><h6>Proceed <FaAngleDoubleRight className='faIcons'/></h6></button> */}
                  <button type='button'><h6>Application Temporarily Closed</h6></button>
                </span>
              </div>
              <div className={(!viewDefaultASL && !viewThirdASL && !viewForthASL && !viewFifthASL) ? "applySLContainer form active" : "applySLContainer form"}>
                <span id='SLInformation'>
                  {/* <label htmlFor="playerSLInfo"><p>MSL Applicant Information <sup></sup></p></label> */}
                  {/* <textarea name="entry.1213540738" id="playerSLInfo" placeholder='Add Short Description (Optional)'></textarea> */}
                </span>
                <h6>MSL Applicant Details</h6>
                <span id='SLFullName'>
                  <label htmlFor="playerSLFullname"><p>Fullname (Given Name, Middle Initial, Surname) <sup>*</sup></p></label>
                  <input name='entry.1716587549' type="text" id='playerSLFullname' placeholder='Crisostomo S. Ibarra' required value={inputFullname} onInput={(e) => setInputFullname(e.target.value)}/>
                </span>
                <span id='SLNickname'>
                  <label htmlFor="playerSLNickname"><p>Nickname <sup>*</sup></p></label>
                  <input name='entry.1430641761' type="text" id='playerSLNickname' placeholder='Cris' required value={inputNickname} onInput={(e) => setInputNickname(e.target.value)}/>
                </span>
                <span id='SLFacebook'>
                  <label htmlFor="playerSLFacebook"><p>Facebook Link <sup>*</sup></p></label>
                  <input name='entry.232113636' type="text" id='playerSLFacebook' placeholder='https://www.facebook.com/crisheesh' required value={inputFblink} onChange={handleInputFBChange}/>
                </span>
                <span id='SLEmail'>
                  <label htmlFor="playerSLEmail"><p>Email Address <sup>*</sup></p></label>
                  <input name='entry.252062006' type="email" id='playerSLEmail' placeholder='crisheesh@email.com' required value={inputEmail} onInput={(e) => setInputEmail(e.target.value)}/>
                </span>
                <span id='SLContact'>
                  <label htmlFor="playerSLContactl"><p>Contact No. <sup>*</sup></p></label>
                  <input name='entry.1686702222' type="number" id='playerSLContact' placeholder='09*********' required value={inputContact} onChange={handleInputContact}/>
                </span>
                <span id='SLGender'>
                  <label htmlFor="playerSLGender"><p>Gender <sup>*</sup></p></label>
                  <select name="entry.1142322936" id="playerSLGender" required value={inputGender} onInput={(e) => setInputGender(e.target.value)}>
                    <option value=""><p>Select Gender</p></option>
                    <option value="Male"><p>Male</p></option>
                    <option value="Female"><p>Female</p></option>
                    <option value="N/A"><p>Prefer not to say</p></option>
                  </select>
                </span>
                <span id='SLBirthday'>
                  <label htmlFor="playerSLBirthday"><p>Birthday <sup>*</sup></p></label>
                  <input name='entry.1866477804' type="date" id='playerSLBirthday' required value={inputBday} onInput={(e) => setInputBday(e.target.value)}/>
                </span>
                <span id='SLAge'>
                  <label htmlFor="playerSLAge"><p>Age <sup>*</sup></p></label>
                  <input name='entry.1950360851' type="number" id='playerSLAge' placeholder='0' readOnly required value={inputAge} onInput={(e) => setInputAge(e.target.value)}/>
                </span>
                <span id='SLCourse'>
                  <label htmlFor="playerSLCourse"><p>Course (Do not Abbreviate) <sup>*</sup></p></label>
                  <input name='entry.348805162' type="text" id='playerSLCourse' placeholder='Bachelor Of Science In Esports Gaming' required value={inputCourse} onInput={(e) => setInputCourse(e.target.value)}/>
                </span>
                <span id='SLGForms'>
                  <label htmlFor="playerSLGForm"><p>How well you are in Google Forms? <sup>*</sup></p></label>
                  <select name="entry.1878377073" id="playerSLGForm" required value={inputForms} onInput={(e) => setInputForms(e.target.value)}>
                    <option value=""><p>Select Skill Level</p></option>
                    <option value="Bad"><p>Bad</p></option>
                    <option value="Fair"><p>Fair</p></option>
                    <option value="Competent"><p>Competent</p></option>
                    <option value="Proficient"><p>Proficient</p></option>
                    <option value="Skilled"><p>Skilled</p></option>
                  </select>
                </span>
                <span id='SLGSheets'>
                  <label htmlFor="playerSLGSheets"><p>How well you are in Google Sheets? <sup>*</sup></p></label>
                  <select name="entry.1996751772" id="playerSLGSheets" required value={inputSheet} onInput={(e) => setInputSheet(e.target.value)}>
                    <option value=""><p>Select Skill Level</p></option>
                    <option value="Bad"><p>Bad</p></option>
                    <option value="Fair"><p>Fair</p></option>
                    <option value="Competent"><p>Competent</p></option>
                    <option value="Proficient"><p>Proficient</p></option>
                    <option value="Skilled"><p>Skilled</p></option>
                  </select>
                </span><br />
                <span className={!inputFullname || !inputNickname || !inputFblink || !inputEmail || !inputContact || !inputGender || !inputBday || !inputAge || !inputCourse || !inputForms || !inputSheet ? 'proceedButton disabled' : 'proceedButton'}>
                  <button type='button' onClick={handleViewThirdASL}><h6>Proceed <FaAngleDoubleRight className='faIcons'/></h6></button>
                </span>
              </div>
              <div className={(!viewDefaultASL && !viewSecondASL && !viewForthASL && !viewFifthASL && viewThirdASL) ? "applySLContainer form active" : "applySLContainer form"}>
                {/* <span id='schoolInformation'> */}
                  {/* <label htmlFor="playerSchoolInfo"><p>Your School Information <sup>*</sup></p></label> */}
                  {/* <textarea name="entry.437053347" id="playerSchoolInfo" placeholder='Add Description' required value={inputSchoolInfo} onInput={(e) => setInputSchoolInfo(e.target.value)}></textarea> */}
                {/* </span> */}
                <h6>MSL School Details</h6>
                <span id='schoolChapter'>
                  <label htmlFor="playerScArea"><p>School Area <sup>*</sup></p></label>
                  <select name="entry.1506657533" id="playerScArea" required value={inputChapter} onInput={(e) => setInputChapter(e.target.value)}>
                    <option value=""><p>Select Area</p></option>
                    <option value="Luzon"><p>Luzon</p></option>
                    <option value="Visayas"><p>Visayas</p></option>
                    <option value="Mindanao"><p>Mindanao</p></option>
                  </select>
                </span>
                <span id='schoolAddress'>
                  <label htmlFor="playerScAdd"><p>School Address <sup>*</sup></p></label>
                  <input name='entry.1162203677' type="text" id='playerScAdd' placeholder='Complete Institution Address' required value={inputSchoolAddress} onInput={(e) => setInputSchoolAddress(e.target.value)}/>
                </span><br />
                <span id='schoolName'>
                  <label htmlFor="playerScName"><p>School Name (Do not Abbreviate)<sup>*</sup></p></label>
                  <input name='entry.658351730' type="text" id='playerScName' placeholder='Insert Full Institution/College/University Name' required value={inputSchoolName} onInput={(e) => setInputSchoolName(e.target.value)}/>
                </span>
                <span id='schoolCampus'>
                  <label htmlFor="playerScCampus"><p>School Campus <sup>*</sup></p></label>
                  <input name='entry.1293829142' type="text" id='playerScCampus' placeholder='Ex. Main Campus' required value={inputSchoolCampus} onInput={(e) => setInputSchoolCampus(e.target.value)}/>
                </span>
                <span id='SLTournament1'>
                  <label htmlFor="playerSLTournament"><p>How often you join MLBB tournaments and contests? <sup>*</sup></p></label>
                  <select name="entry.1809106261" id="playerSLTournament" required value={inputSchoolTourna1} onInput={(e) => setInputSchoolTourna1(e.target.value)}>
                    <option value=""><p>Select Answer</p></option>
                    <option value="Always"><p>Always</p></option>
                    <option value="Sometimes"><p>Sometimes</p></option>
                    <option value="Once"><p>Once</p></option>
                    <option value="Never"><p>Never</p></option>
                  </select>
                </span>
                <span id='SLTournament2'>
                  <label htmlFor="playerSLTournament"><p>Have you handled or have been a manpower for an event before? School event, mall event, festivals, etc.<sup>*</sup></p></label>
                  <select name="entry.1344856059" id="playerSLTournament" required value={inputSchoolTourna2} onInput={(e) => setInputSchoolTourna2(e.target.value)}>
                    <option value=""><p>Select Answer</p></option>
                    <option value="Yes, I was a key person in that event."><p>Yes, I was a key person in that event.</p></option>
                    <option value="Yes, I was one of the manpower for that event."><p>Yes, I was one of the manpower for that event.</p></option>
                    <option value="No, I have not been a part of an event before."><p>No, I have not been a part of an event before.</p></option>
                  </select>
                </span><br />
                <span className={!inputChapter || !inputSchoolAddress || !inputSchoolAddress || !inputSchoolName || !inputSchoolCampus || !inputSchoolTourna1 || !inputSchoolTourna2 ? 'proceedButton disabled' : 'proceedButton'}>
                  <button type='button' onClick={handleViewForthASL}><h6>Proceed <FaAngleDoubleRight className='faIcons'/></h6></button>
                </span>
              </div>
              <div className={(!viewDefaultASL && !viewSecondASL && !viewThirdASL && !viewFifthASL && viewForthASL) ? "applySLContainer form active" : "applySLContainer form"}>
                <span id='SLQuestion1'>
                  {/* <label htmlFor="playerSLQuestion1"><p>Let us know more about you. <sup>*</sup></p></label>
                  <textarea name="entry.455934655" id="playerSLQuestion1" placeholder='Add Answer' required value={inputQ1} onInput={(e) => setINputQ1(e.target.value)}></textarea> */}
                </span>
                <h6>MSL Applicant Q&A</h6>
                <span id='SLQuestion2'>
                  <label htmlFor="playerSLQuestion2"><p>Being a Moonton Student Leader requires you to be a friendly and approachable person, is this something you are used to already or is it something you have to adjust or change within yourself? <sup>*</sup></p></label>
                  <textarea name="entry.624752905" id="playerSLQuestion2" placeholder='Add Answer' required value={inputQ2} onInput={(e) => setINputQ2(e.target.value)}></textarea>
                </span>
                <span id='SLQuestion3'>
                  <label htmlFor="playerSLQuestion3"><p>Being a Moonton Student Leader you will be carrying tasks from MLBB in exchange for 500 to 3000 diamonds a week depends on your performance and weight of task. What's your response over this? <sup>*</sup></p></label>
                  <textarea name="entry.1224107849" id="playerSLQuestion3" placeholder='Add Answer' required value={inputQ3} onInput={(e) => setINputQ3(e.target.value)}></textarea>
                </span>
                <span id='SLQuestion4'>
                  <label htmlFor="playerSLQuestion4"><p>There are probably a lot of MLBB players who wants to be part of MLBB as MSL. Let us know why do you want to be a Moonton Student Leader? Tell us, or convince us why we would pick you to be part of this team. <sup>*</sup></p></label>
                  <textarea name="entry.138384084" id="playerSLQuestion4" placeholder='Add Answer' required value={inputQ4} onInput={(e) => setINputQ4(e.target.value)}></textarea>
                </span><br />
                <span className={!inputQ2 || !inputQ3 || !inputQ4 ? 'proceedButton disabled' : 'proceedButton'}>
                  <button type='button' onClick={handleViewFifthASL}><h6>Proceed <FaAngleDoubleRight className='faIcons'/></h6></button>
                </span>
              </div>
              <div className={(!viewDefaultASL && !viewSecondASL && !viewThirdASL && !viewForthASL && viewFifthASL) ? "applySLContainer form active" : "applySLContainer form"}>
                <div className="successFilling">
                  {isSubmitted ? 
                    <div className="allYouSetUp congrats">
                      <img src={require('../assets/MLBB_Landing_Assets/MSLLogoSuccess.png')} alt="" />
                      <h5>YOU'RE ALMOST THERE!</h5>
                      <p>Complete your credentials by filling this form and <br /> wait for your verification.</p><br />
                      <a href="https://forms.gle/MUvxJWQ1Br9vG5Pt6" target='blank'><h6>CREDENTIAL FORM</h6></a>
                    </div>
                    :
                    <div className="allYouSetUp">
                      <img src={require('../assets/MLBB_Landing_Assets/MSLLogo.png')} alt="" />
                      <h6>By submitting the form you agree to all <br /> Terms and Condition</h6>
                      <input type="submit" value='SUBMIT' />
                    </div>
                  }
                </div>
              </div>
              </form>
            </div>
            <div className="slrContent right">
              {viewDefaultASL &&<img src={require('../assets/MLBB_Landing_Assets/ApplyAssets/DiggieSkin1.webp')} alt="" />}
              {viewSecondASL &&<img src={require('../assets/MLBB_Landing_Assets/ApplyAssets/RafaelaSkin1.webp')} alt="" />}
              {viewThirdASL &&<img src={require('../assets/MLBB_Landing_Assets/ApplyAssets/LyliaSkin1.webp')} alt="" />}
              {viewForthASL &&<img src={require('../assets/MLBB_Landing_Assets/ApplyAssets/YuZhongSkin1.webp')} alt="" />}
              {viewFifthASL &&<img src={require('../assets/MLBB_Landing_Assets/ApplyAssets/FredrinSkin1.webp')} alt="" />}
            </div>
          </div>
        </div>
    </div>
  )
}

export default ApplySL