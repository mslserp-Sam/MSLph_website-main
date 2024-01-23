import React, { useEffect, useState, useRef  } from 'react'
import styled, { keyframes, css } from 'styled-components';
import '../CSS/yuzong.css'


const Mfive = () => {

  const [submit, setSubmit] = useState(false);

  const [selectedOption, setSelectedOption] = useState('');
  const [inputValue, setInputValue] = useState('');

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    setInputValue(selectedValue);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const [selectedDate, setSelectedDate] = useState('');
  const [inputValue1, setInputValue1] = useState('');

  const handleDateChange = (event) => {
    const selectedDateValue = event.target.value;
    setSelectedDate(selectedDateValue);
    setInputValue1(selectedDateValue);
  };

  const handleInputChange1 = (event) => {
    setInputValue1(event.target.value);
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
    <div className='mainContainer pap'>
      {isSubmitted &&<div className="completionContainer">
        <div className="validationContent">
          {/* <button id='closeReg' onClick={handleCloseVal}><h5><FaTimes/></h5></button> */}
          <img src={require('../assets/MLBB_Landing_Assets/MSLLogoSuccess.png')} alt="" />
          <h5>Successfully Registered!</h5>
          <p>Go to the venue to confirm your attendance on your selected date.</p>
          {/* <button id='validationForm'><h6>Okay</h6></button> */}
        </div>
      </div>}



      <div className="m5Container register">
        <div className="m5LogoContent">
          <img src={require('../assets/MLBB_Landing_Assets/m5logo.png')} alt="" />
        </div>
        <div className="m5RegistrationContent">
          <img id='bren' src={require('../assets/MLBB_Landing_Assets/BrenEsportsSkin.png')} alt="" />
          <img id='echo' src={require('../assets/MLBB_Landing_Assets/EchoEsportsSkin.png')} alt="" />
          <img id='blacklist' src={require('../assets/MLBB_Landing_Assets/BlacklistEsportsSkin.png')} alt="" />
          <img id='yuzhong' src={require('../assets/MLBB_Landing_Assets/yuzhonghero.png')} alt="" />
        </div>
        <div className="m5RegistrationForm">
          <form 
          onSubmit={handleSubmit} 
          action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSdFoFFjNpxQvoq0hsnIxaTX0uB0vCppfKe2vNBsIvO_BqEXZg/formResponse"
          ref={formRef}
          method='post'
          target="apply_iframe"
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
            <div className="m5RegForm">
              <h4>M5 UNIVERSITY WATCH FEST</h4>
              <div className="m5RegFormContent">
                <span>
                  <label htmlFor=""><p>Name</p></label>
                  <input type="text" name='entry.1089833616' placeholder='Juan Dela Cruz' required/>
                </span>
                <span>
                  <label htmlFor=""><p>Email</p></label>
                  <input type="email" name='entry.1393134870' placeholder='juandelacruzM5@email.com' required/>
                </span>
                <span>
                  <label htmlFor=""><p>Location</p></label>
                  <select name="" id="" value={selectedOption} onChange={handleSelectChange} required>
                    <option value="">- Select Location -</option>
                    <option value="Ateneo De Davao University">Ateneo De Davao University</option>
                    <option value="CARAGA State University">CARAGA State University</option> 
                    <option value="Cebu Technological University - Cebu City">Cebu Technological University - Cebu City</option>
                    <option value="Cebu Technological University - Danao Campus">Cebu Technological University - Danao Campus</option>
                    <option value="Central Luzon State University">Central Luzon State University</option>
                    <option value="Central Mindanao University">Central Mindanao University</option>
                    <option value="City College of San Jose Del Monte">City College of San Jose Del Monte</option>
                    <option value="Eastern Visayas State University - Ormoc Campus">Eastern Visayas State University - Ormoc Campus</option>
                    <option value="Father Saturnino Urios University">Father Saturnino Urios University</option>
                    <option value="Holy Angel University">Holy Angel University</option>
                    <option value="Iloilo Watch Fest (WVSU & ISATU)">Iloilo Watch Fest (WVSU & ISATU)</option>
                    <option value="Josefina Herrera Cerilles State College">Josefina Herrera Cerilles State College</option>
                    <option value="Laguna State Polytechnic University">Laguna State Polytechnic University</option>
                    <option value="Lyceum of Subic Bay">Lyceum of Subic Bay</option>
                    <option value="Mindanao State University - Iligan Institute of Technology">Mindanao State University - Iligan Institute of Technology</option>
                    <option value="National University - Fairview">National University - Fairview</option>
                    <option value="National University - Laguna">National University - Laguna</option>
                    <option value="Polytechnic University of the Philippines - Sta Mesa">Polytechnic University of the Philippines - Sta Mesa</option>
                    <option value="Southwestern University PHINMA">Southwestern University PHINMA</option>
                    <option value="Tarlac State University">Tarlac State University</option>
                    <option value="Technological University of the Philippines - Taguig Campus">Technological University of the Philippines - Taguig Campus</option>
                    <option value="University of Mindanao - Matina Campus">University of Mindanao - Matina Campus</option>
                    <option value="University of Southeastern Philippines - Obrero">University of Southeastern Philippines - Obrero</option>               
                    <option value="University of the Philippines - Diliman">University of the Philippines - Diliman</option>                   
                    <option value="Visayas State University">Visayas State University</option>
                    <option value="MSL Internal Watch Fest">MSL Internal Watch Fest</option>
                   </select>
                </span>
                <span className='hiddenInputs'>
                  <input type="text" name='entry.339458244' value={inputValue} onChange={handleInputChange}/>
                </span>
                <span>
                  <label htmlFor=""><p>Server ID</p></label>
                  <input type="number" name='entry.1878770539' placeholder='*****' required/>
                </span>
                <span>
                  <label htmlFor=""><p>UID Number</p></label>
                  <input type="number" name='entry.1431580969' placeholder='*********' required/>
                </span>
                <span>
                  <label htmlFor=""><p>Date will Attend</p></label><br />
                  <input type="date" value={selectedDate} onChange={handleDateChange} required/>
                </span>
                <span className='hiddenInputs'>
                  <input type="text" name='entry.1756607279' value={inputValue1} onChange={handleInputChange1}/>
                </span>
                <span id='submitForm'>
                  <input type="submit" value='REGISTER' disabled/>
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Mfive