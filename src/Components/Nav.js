import React, { useState, useEffect, useRef } from 'react'
import "./CSS/nav.css";
import { 
    FaBars, 
    FaWindowClose,
    FaTimes,
    FaArrowCircleDown,
    FaArrowCircleUp,
    FaComments,
    FaTh,
    FaFacebookSquare,
    FaGoogle,
    FaDiscord,
    FaTelegramPlane,
    FaTwitter,
    FaGithub,
    FaYoutube,
    FaEye,
    FaEyeSlash
} from 'react-icons/fa';

import { Link } from 'react-router-dom';
import axios from 'axios';
import supabase from './Pages/supabase';
import heroDatas from '../mlbbHero.json'
import LuzonCampus from '../mlbbLuzon.json';
import VizayasCampus from '../mlbbVizayas.json';
import MindanaoCampus from '../mlbbMindanao.json';




const Nav = () => {

// Form Setup

  const [username, setUsername] = useState('');
  const [userpassword, setUserPassword] = useState('');
  const [userAccess, setUserAccess] = useState(false)
  const loginAPI = process.env.REACT_APP_MSL_LOGIN_API;
  const logoutAPI = process.env.REACT_APP_MSL_LOGOUT_API;

  const handleLogin = () => {
    fetch(loginAPI, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `username=${username}&password=${userpassword}`
    })
    .then(response => response.json())
    .then(data => {
        if (data.success = 'true') {
          localStorage.setItem('mslUsername', data.username);
          localStorage.setItem('isLoggedIn', 'true');
          setViewLogin(false);
          window.location.reload();
          console.log('success');
        } 
        else {
          setViewLogin(false);
          alert (data.message);
        }
    })
    .catch(error => console.error('Error:', error));
  };


  const LoginUsername = localStorage.getItem('mslUsername');
  const [data1, setData1] = useState([]);
  const mslData1 = process.env.REACT_APP_MSL_DATA1_API;

  useEffect(() => {
    const fetchData1 = () => {
      axios.get(mslData1)
      .then((response) => {
        setData1(response.data.filter(item => item.username == LoginUsername));
      })
      .catch(error => {
        console.log(error)
      })
    }
    fetchData1();
  }, [])

  const renderStatus = () => {
    return data1.filter(item => item.username == LoginUsername).map((item) => (
      (item.status)
    ));
  };


  const playerStatus = renderStatus();
  useEffect(() => {
    if (playerStatus == 'Active'){
      setUserAccess(true)
    }
    
    if (playerStatus == 'Idle'){
      setVIewRegSuccess(true)
    }
  }, [playerStatus]);

  
  const handleLogout = () => {
    fetch(logoutAPI, {
        method: 'GET',
    })
    .then(response => {
      if (response.redirected) {
        window.location.href = response.url;
      }
    });
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('mslUsername');
    window.location.reload();
    setUserAccess(false)
  };




// Mobile Navigation Modal Popup

  const [openMobNav, setOpenMobNav] = useState(false)


  const handleViewMob = () => {
    setOpenMobNav(true)
  }
  const handleCloseMob = () => {
    setOpenMobNav(false)
  }



// Login Modal Setup

  const [viewLogin, setViewLogin] = useState(false);
  const [viewRegister, setViewRegister] = useState(false)
  const [viewRegSuccess, setVIewRegSuccess] = useState(false)
  const [viewRegFailed, setViewRegFailed] = useState(false)

  
  const handleViewLogin = () => {
    setViewLogin(true)
    setViewRegister(false)
  }
  const handleViewRegister = () => {
    setViewRegister(true)
    setViewLogin(false)
  }
  const handleCloseLogin = () => {
    setViewLogin(false)
    setViewRegister(false)
  }
  const handleCloseHandling = () => {
    setVIewRegSuccess(false)
    setViewRegFailed(false)
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('mslUsername');
  }

  // useEffect(() => {
  //   const currentURL = window.location.href;
  //   // Check if the URL matches the specific one you want to trigger the modal for
  //   if (currentURL.includes('/Users/student?=registerSuccess')) {
  //     setVIewRegSuccess(true);
  //   }
  //   if (currentURL.includes('/Users/student?=registerFailed')) {
  //     setViewRegFailed(true);
  //   }
  // }, []);

  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const [viewDefaultReg, setViewDefaultReg] = useState(true)
  const [viewSecReg, setViewSecReg] = useState(false)
  const [viewThiReg, setViewThiReg] = useState(false)
  const [viewForReg, setViewForReg] = useState(false)

  const handleViewDefaultReg = () => {
    setViewDefaultReg(true)
    setViewSecReg(false)
    setViewThiReg(false)
    setViewForReg(false)
  }

  const handleViewSecReg = () => {
    setViewSecReg(true)
    setViewDefaultReg(false)
    setViewThiReg(false)
    setViewForReg(false)
  }

  const handleViewThiReg = () => {
    setViewThiReg(true)
    setViewDefaultReg(false)
    setViewSecReg(false)
    setViewForReg(false)
  }

  const handleViewForReg = () => {
    setViewForReg(true)
    setViewThiReg(false)
    setViewDefaultReg(false)
    setViewSecReg(false)
  }



  if(viewLogin == true ||
    viewRegister == true ||
    viewRegSuccess == true ||
    viewRegFailed == true ||
    openMobNav == true  ){
    window.document.body.style.overflow = 'hidden';
  } else{
    window.document.body.style.overflow = 'auto';
  }



  const [viewEventsNav, setViewEventsNav] = useState(false)
  const [viewProgramsNav, setViewProgramsNav] = useState(false)
  const [viewResourcesNav, setViewResourcesNav] = useState(false)

  const handleViewEventsNav = () => {
    setViewEventsNav(true)
    setViewProgramsNav(false)
    setViewResourcesNav(false)
  }
  const handleViewProgramsNav = () => {
    setViewProgramsNav(true)
    setViewEventsNav(false)
    setViewResourcesNav(false)
  }
  const handleViewResourcesNav = () => {
    setViewResourcesNav(true)
    setViewEventsNav(false)
    setViewProgramsNav(false)
  }

  const handleCloseNavOptions = () => {
    setViewEventsNav(false)
    setViewProgramsNav(false)
    setViewResourcesNav(false)
  }

  useEffect(() => {
    if (viewEventsNav) {
      const timer = setTimeout(() => {
        setViewEventsNav(false);
      }, 3500);

      return () => clearTimeout(timer);
    }

    if (viewProgramsNav) {
      const timer = setTimeout(() => {
        setViewProgramsNav(false);
      }, 3500);

      return () => clearTimeout(timer);
    }

    if (viewResourcesNav) {
      const timer = setTimeout(() => {
        setViewResourcesNav(false);
      }, 3500);

      return () => clearTimeout(timer);
    }
  }, [viewEventsNav, viewProgramsNav, viewResourcesNav]);


  const handleInputHero = (event) => {
    const heroInput = event.target.value;
  }


  const [campusValue, setCampusValue] = useState('')
  const handleCampusValue = (event) => {
    setCampusValue(event.target.value);
  }
  const renderCampusFetch = () => {
    if (campusValue == 'Luzon') {
      return LuzonCampus.sort((a, b) => a.name.localeCompare(b.name)).map((campus, i) => (
        <option value={campus.name} key={i}>{campus.name}</option>
      ));
    }else if (campusValue == 'Vizayas') {
      return VizayasCampus.sort((a, b) => a.name.localeCompare(b.name)).map((campus, i) => (
        <option value={campus.name} key={i}>{campus.name}</option>
      ));
    }else if (campusValue == 'Mindanao') {
      return MindanaoCampus.sort((a, b) => a.name.localeCompare(b.name)).map((campus, i) => (
        <option value={campus.name} key={i}>{campus.name}</option>
      ));
    }
  };

  const [birthday, setBirthday] = useState('');
  const [age, setAge] = useState(null);

  useEffect(() => {
    if (birthday) {
      const birthdayDate = new Date(birthday);
      const currentDate = new Date();

      const ageInMilliseconds = currentDate - birthdayDate;
      const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);

      setAge(Math.floor(ageInYears));
    }
  }, [birthday]);


  const [inputContactValue, setInputContactValue] = useState('');
  const handleContactInputChange = (e) => {
    const value = e.target.value;
    if (/^\d{0,11}$/.test(value)) {
      setInputContactValue(value);
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

  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRegRef = useRef(null);

  const handleRegSubmit = () => {
    // event.preventDefault();
    setVIewRegSuccess(true);
    if (isSubmitted) return;
    setIsSubmitted(true);
  };

  return (
    <nav>
      {viewLogin &&<div className="loginContainer">
        <div className="loginContent">
          <button id='closeLogin' onClick={handleCloseLogin}><h5><FaTimes/></h5></button>
          <img src={require('./assets/MLBB_Landing_Assets/MSLLogo.png')} alt="" />
          <div className="loginEmail">
            <input type="text" name='username' value={username} onChange={e => setUsername(e.target.value)} placeholder='Username' required/>
            <input type="password" name='password' value={userpassword} onChange={e => setUserPassword(e.target.value)}  placeholder='Password' required/>
            <button onClick={handleLogin} name='loginUser'><h6>LOGIN</h6></button>
            <p><a href="" type='button'>Forgot Password?</a></p>
          </div>
          <h6>OR</h6>
          <h5>LOGIN WITH</h5>
          <div className="loginSocials">
            <button type='button'><h6 className='faIcon'><FaFacebookSquare/></h6></button>
            <button type='button'><h6 className='faIcon'><FaGoogle/></h6></button>
            <button type='button'><h6 className='faIcon'><FaDiscord/></h6></button>
          </div>
          <button type='button' id='createAccount' onClick={handleViewRegister}><p>Create an Account</p></button>
        </div>
      </div>}

      {viewRegister &&
      <div className="registerContainer">
        <form 
          ref={formRegRef}
          action="https://mslcontent.000webhostapp.com/mslLogin.php" 
          onSubmit={handleRegSubmit} 
          target="signup_iframe"
          method="POST"
        >
        <iframe
          name="signup_iframe"
          id="signup_iframe"
          style={{ display: 'none' }}
          onLoad={() => {
            setViewRegister(false);
          }}
        />
        {/* <form action="" method='POST'> */}
        <div className="registerContent">
          <button type='button' id='closeRegister' onClick={handleCloseLogin}><h5><FaTimes/></h5></button>
          <div className="registerPlayer">
            <div className="regPlayer left">
              <div className="sampleCardContainer">
                <div className="sampleCard front">
                  <div className="cardSampleContent">
                    <img id='mlbbNewLogo' src={require('./assets/MLBB_Landing_Assets/MLBBNewLogo.png')} alt="" />
                    <img id='playerCardImg' src={require('./assets/MLBB_Landing_Assets/lgbtqaSilhoutte.webp')} alt="" />
                    <div className="playerBasicDetails">
                      <div className="pbCardDetails">
                        <div className="pbcDetails left">
                          <span>
                            <h6>Crisostomo</h6>
                          </span>
                          <span>
                            <img src={require('./assets/MLBB_Landing_Assets/Role/Roam.webp')} alt="" />
                            <p>MSL - Simoun</p>
                          </span>
                        </div>
                        <div className="pbcDetails right">
                          <img src={require('./assets/MLBB_Landing_Assets/Rankings/Mythic.webp')} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sampleCard back">
                  <img src={require('./assets/MLBB_Landing_Assets/MSLLogoMetal.png')} alt="" />
                </div>
              </div>
            </div>
            <div className="regForm right">
              <div className={(!viewSecReg && !viewThiReg && !viewForReg) ? "regPlayer right visible" : "regPlayer right"}>
                <h5>Register User</h5><br />
                <h6>Basic Details</h6>
                <div className="formRegisterContainer form1Content">
                  <span id='playerGivenName'>
                    <label htmlFor="playerGivenName"><p>Given Name <sup>*</sup></p></label>
                    <input name='mlPlayerName' id='playerGivenName' type="text" placeholder='Crisostomo' required/>
                  </span>
                  <span id='playerSurname'>
                    <label htmlFor="playerSurname"><p>Surname <sup>*</sup></p></label>
                    <input name='mlPlayerSurname' id='playerSurname' type="text" placeholder='Ibarra' required/>
                  </span>
                  <span id='playerImage'>
                    <label htmlFor="playerImage"><p>Image <sup>*</sup></p></label>
                    <input id='playerImage' type="file" disabled/>
                  </span>
                  <span id='playerBirthday'>
                    <label htmlFor="playerBirthday"><p>Birthday <sup>*</sup></p></label>
                    <input name='mlPlayerBday' id='playerBirthday' type="date" value={birthday} onChange={(e) => setBirthday(e.target.value)} required/>
                  </span>
                  <span id='playerAge'>
                    <label htmlFor="playerAge"><p>Age</p></label>
                    <input name='mlPlayerAge' id='playerAge' type="number" value={age} placeholder='0' readOnly/>
                  </span>
                  <span id='playerGender'>
                    <label htmlFor="playerGender"><p>Gender <sup>*</sup></p></label>
                    <select name="mlPlayerGender" id="playerGender" required>
                      <option value="">Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="LGBTQA+">Prefer not to Say</option>
                    </select>
                  </span>
                  <span id='playerContact'>
                    <label htmlFor="playerContact"><p>Contact No. <sup>*</sup></p></label>
                    <input name='mlPlayerContact' id='playerContact' type="number" placeholder='09** **** ***' value={inputContactValue} onChange={handleContactInputChange} required/>
                  </span>
                  <span id='playerGmail'>
                    <label htmlFor="playerEmail"><p>Email Address <sup>*</sup></p></label>
                    <input name='mlPlayerEmail' id='playerEmail' type="email" placeholder='crisheesh@email.com' required/>
                  </span>
                </div><br />
                <div className="playerFormButton">
                  <button type='button' onClick={handleViewSecReg}><p>NEXT</p></button>
                </div>
              </div>
              <div className={(!viewDefaultReg && !viewThiReg && !viewForReg) ? "regPlayer right visible" : "regPlayer right"}>
                <h5>Register Student</h5><br />
                <h6>School Details</h6>
                <div className="formRegisterContainer form2Content">
                  <span id='playerSY'>
                    <label htmlFor="playerSY"><p>School Year <sup>*</sup></p></label>
                    <select name="mlPlayerSY" id="playerSY" required>
                      <option value="">Select Year</option>
                      <option value="Freshmen">Freshmen</option>
                      <option value="Sophomore">Sophomore</option>
                      <option value="Junior">Junior</option>
                      <option value="Senior">Senior</option>
                      <option value="Alumni">Alumni</option>
                    </select>
                  </span>
                  <span id='playerArea'>
                    <label htmlFor="playerArea"><p>Area <sup>*</sup></p></label>
                    <select name="mlPlayerArea" id="playerArea" value={campusValue} onChange={handleCampusValue} required>
                      <option value="">Select Chapter</option>
                      <option value="Luzon">Luzon</option>
                      <option value="Vizayas">Vizayas</option>
                      <option value="Mindanao">Mindanao</option>
                    </select>
                  </span>
                  <span id='playerSchool'>
                    <label htmlFor="playerSchool"><p>School University <sup>*</sup></p></label>
                    <select name="mlPlayerSchool" id="playerSchool" required>
                      <option value="">Select College/University/Institute</option>
                      {renderCampusFetch()}
                    </select>
                  </span>
                  <span id='playerRegform'>
                    <label htmlFor="playerRegform"><p>Registration Form <sup>*</sup></p></label>
                    <input id='playerRegform' type="file" placeholder='Ibarra' disabled/>
                  </span>
                  <span id='playerStudentID'>
                    <label htmlFor="playerStudentID"><p>Student ID <sup>*</sup></p></label>
                    <input name='mlPlayerStuID' id='playerStudentID' type="text" placeholder='*** *** ***' required/>
                  </span>
                  <span id='playerCourse'>
                    <label htmlFor="playerCourse"><p>Course <sup>*</sup></p></label>
                    <input name='mlPlayerCourse' id='playerCourse' type="text" placeholder='Bachelor of Science in Esports Gaming (Dont Abbreviate)' required/>
                  </span>
                </div><br />
                <div className="playerFormButton">
                  <button type='button' onClick={handleViewDefaultReg}><p>PREV</p></button>
                  <button type='button' onClick={handleViewThiReg}><p>NEXT</p></button>
                </div>
              </div>
              <div className={(!viewSecReg && !viewDefaultReg && viewThiReg && !viewForReg) ? "regPlayer right visible" : "regPlayer right"}>
                <h5>Register MLBB Account</h5><br />
                <h6>MLBB Details</h6>
                <div className="formRegisterContainer form1Content">
                  <span id='playerInGameName'>
                    <label htmlFor="playerInGameName"><p>In-Game-Name (IGN) <sup>*</sup></p></label>
                    <input name='mlPlayerIGN' id='playerInGameName' type="text" placeholder='Simoun' required/>
                  </span>
                  <span id='playerServer'>
                    <label htmlFor="playerServer"><p>MLBB Server ID <sup>*</sup></p></label>
                    <input name='mlPlayerServer' id='playerServer' type="text" placeholder='*****' value={inputServerValue} onChange={handleServerInputChange} required/>
                  </span>
                  <span id='playerMLBBId'>
                    <label htmlFor="playerMLBBId"><p>MLBB User ID <sup>*</sup></p></label>
                    <input name='mlPlayerID' id='playerMLBBId' type="text" placeholder='*********' value={inputUIDValue} onChange={handleUIDInputChange} required/>
                  </span>
                  <span id='playerMLBBSquad'>
                    <label htmlFor="playerMLBBSquad"><p>MLBB Squad <sup></sup></p></label>
                    <input name='mlPlayerSquad' id='playerMLBBSquad' type="text" placeholder='MSL'/>
                  </span>
                  <span id='playerRank'>
                    <label htmlFor="playerRank"><p>MLBB User Rank <sup>*</sup></p></label>
                    <select name="mlPlayerRank" id="playerRank" required>
                      <option value="">Select Rank</option>
                      <option value="Warrior">Warrior</option>
                      <option value="Elite">Elite</option>
                      <option value="Master">Master</option>
                      <option value="GrandMaster">Grand Master</option>
                      <option value="Epic">Epic</option>
                      <option value="Legend">Legend</option>
                      <option value="Mythic">Mythic</option>
                      <option value="MythicalHonor">Mythical Honor</option>
                      <option value="MythicalGlory">Mythical Glory</option>
                      <option value="MythicalImmortal">Mythical Immortal</option>
                    </select>
                  </span>
                  <span id='playerRole'>
                    <label htmlFor="playerRole"><p>MLBB User Role <sup>*</sup></p></label>
                    <select name="mlPlayerRole" id="playerRole" required>
                      <option value="">Select Role</option>
                      <option value="Mid">Mid Laner</option>
                      <option value="Gold">Gold Laner</option>
                      <option value="Exp">Exp Laner</option>
                      <option value="Jungle">Jungler</option>
                      <option value="Roam">Roamer</option>
                    </select>
                  </span>
                  <span id='playerHero1'>
                    <label htmlFor="playerHero1"><p>User Hero 1</p></label>
                    <select name="mlPlayerHero1" id="playerHero1">
                        <option value="">Select Hero</option>
                      {heroDatas.sort((a, b) => a.name.localeCompare(b.name)).map((hero, i) => (
                        <option value={hero.name} key={i}>{hero.name}</option>
                      ))}
                    </select>
                  </span>
                  <span id='playerHero1'>
                    <label htmlFor="playerHero1"><p>User Hero 2</p></label>
                    <select name="mlPlayerHero2" id="playerHero1">
                        <option value="">Select Hero</option>
                      {heroDatas.sort((a, b) => a.name.localeCompare(b.name)).map((hero, i) => (
                        <option value={hero.name} key={i}>{hero.name}</option>
                      ))}
                    </select>
                  </span>
                  <span id='playerHero1'>
                    <label htmlFor="playerHero1"><p>User Hero 3</p></label>
                    <select name="mlPlayerHero3" id="playerHero1">
                        <option value="">Select Hero</option>
                      {heroDatas.sort((a, b) => a.name.localeCompare(b.name)).map((hero, i) => (
                        <option value={hero.name} key={i}>{hero.name}</option>
                      ))}
                    </select>
                  </span>
                </div><br />
                <div className="playerFormButton">
                  <button type='button' onClick={handleViewSecReg}><p>PREV</p></button>
                  <button type='button' onClick={handleViewForReg}><p>NEXT</p></button>
                </div>
              </div>
              <div className={(!viewSecReg && !viewDefaultReg && !viewThiReg && viewForReg) ? "regPlayer right visible" : "regPlayer right"}>
              <div className="registerEmail">
                <img src={require('./assets/MLBB_Landing_Assets/MSLLogo.png')} alt="" />
                <h5>REGISTER ACCOUNT</h5>
                <input type="text" name='username' placeholder='Username' id='mslPlayerUsername' required/><br />
                <span>
                  <label htmlFor="regPassword"><button type='button' onClick={togglePasswordVisibility}><p>{showPassword ? <FaEyeSlash/> : <FaEye/>}</p></button></label>
                  <input type={showPassword ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} name='password' id='regPassword' placeholder='Password' required/>
                </span><br /><br />
                <button className='createAccount prev' type='button' onClick={handleViewThiReg}><p>PREV</p></button>
                <button className='createAccount' type='sumbit' value="Submit" name='createAccount'><p>REGISTER</p></button>
              </div>
              </div>
            </div>
          </div>
          {/* <button id='loginAccount' onClick={handleViewLogin}><p>Login Account</p></button> */}
        </div>
        </form>
      </div>
      }


      {/* Error Handlings for Registration */}

      {viewRegSuccess &&<div className="registerSuccessContainer">
        <div className="registerSuccessContent">
          <button id='closeRegister' onClick={handleCloseHandling}><h5><FaTimes/></h5></button>
          <img src={require('./assets/MLBB_Landing_Assets/MSLLogoSuccess.png')} alt="" />
          <h5>Registration Success!</h5>
          <p>Please wait for your account verification to access your account. <br /> It will only take 1-2 days. See you!</p>
        </div>
      </div>}
      {viewRegFailed &&<div className="registerFailedContainer">
        <div className="registerFailedContent">
          <button id='closeRegister' onClick={handleCloseHandling}><h5><FaTimes/></h5></button>
          <img src={require('./assets/MLBB_Landing_Assets/MSLLogoError.png')} alt="" />
          <h5>Registration Error!</h5>
          <p>Please check and complete all data required to have an account. <br /> Please try again.</p>
        </div>
      </div>}





      {openMobNav &&
      <div className="navContainerMobile" onClick={handleCloseMob}>
        <div className="ncContentModal">
          <Link to='/' onClick={handleCloseMob}><h3>Home</h3></Link>
          {/* <Link onClick={handleCloseMob}><h3>Dashboard</h3></Link> */}
          <ul>
            <h3>Events <FaArrowCircleDown/></h3>
            <li>
              <Link to='/Events' onClick={handleCloseMob}><h4>All Events</h4></Link>
              {/* <Link to='/M5Lipad' onClick={handleCloseMob}><h4>M5 Lipad</h4></Link> */}
              <Link to='/Events/MCC' onClick={handleCloseMob}><h4>MCC</h4></Link>
              {/* <Link to='/M5WatchFest' onClick={handleCloseMob}><h4>M5 University Watch Fest</h4></Link> */}
              {/* <Link onClick={handleCloseMob}><h4>BWOT</h4></Link> */}
            </li>
          </ul>
          <ul>
            <h3>Programs <FaArrowCircleDown/></h3>
            <li>
              <Link to='/Programs' onClick={handleCloseMob}><h4>All Programs</h4></Link>
              <Link to='/Programs/SEPP' onClick={handleCloseMob}><h4>SEPP</h4></Link>
              <Link to='/Programs/EOSR' onClick={handleCloseNavOptions}><h4>EOSR</h4></Link>
              {/* <Link onClick={handleCloseMob}><h4>EOSR</h4></Link> */}
            </li>
          </ul>
          <ul>
            <h3>Resources <FaArrowCircleDown/></h3>
            <li>
              <Link to='/Apply' onClick={handleCloseMob}><h4>Apply SL</h4></Link>
              <Link to='/Campus' onClick={handleCloseMob}><h4>Campus</h4></Link>
              <Link to='/NewsAndFeature' onClick={handleCloseMob}><h4>News and Feature</h4></Link>
              {/* <Link onClick={handleCloseMob}><h4>About Us</h4></Link> */}
              {/* <Link to='/Faqs' onClick={handleCloseMob}><h4>FAQs</h4></Link> */}
            </li>
          </ul>
        </div>
      </div>
      }
      
      <div className="mainNavContainer website">
        <div className="navContainer website">
          <div className="navContent left">
              <Link to="/" onClick={handleCloseNavOptions}>
                  <img src={require('./assets/MLBB_Landing_Assets/MSLLogo00.png')} alt="" />
              </Link>
          </div>
          <div className="navContent right">
            {/* <Link><h6>Dashboard</h6></Link> */}
            <a id='dropDown'>
              {!viewEventsNav ?
                <h6 onClick={handleViewEventsNav}>Events <FaArrowCircleDown className='faIcon down'/></h6>:
                <h6 onClick={handleCloseNavOptions}>Events <FaArrowCircleUp className='faIcon down'/></h6>
              }
              {viewEventsNav &&<div className="dropDownContent">
                <Link to='/Events' onClick={handleCloseNavOptions}><h6>All Events</h6></Link>
                <Link to='/M5Lipad' onClick={handleCloseNavOptions}><h6>M5 Lipad</h6></Link>
                <Link onClick={handleCloseNavOptions}><h6>BWOT</h6></Link>
                <Link to='/Events/MCC'><h6>MCC</h6></Link>
                <Link to='/M5WatchFest' onClick={handleCloseNavOptions}><h6>M5 University Watch Fest</h6></Link>
              </div>}
            </a>
            <a id='dropDown'>
              {!viewProgramsNav ?
                <h6 onClick={handleViewProgramsNav}>Programs <FaArrowCircleDown className='faIcon down'/></h6>:
                <h6 onClick={handleCloseNavOptions}>Programs <FaArrowCircleUp className='faIcon down'/></h6>
              }
              {viewProgramsNav &&<div className="dropDownContent">
                <Link to='/Programs' onClick={handleCloseNavOptions}><h6>All Programs</h6></Link>
                <Link to='/Programs/SEPP' onClick={handleCloseNavOptions}><h6>SEPP</h6></Link>
                <Link to='/Programs/EOSR' onClick={handleCloseNavOptions}><h6>EOSR</h6></Link>
              </div>}
            </a>
            <a id='dropDown'>
              {!viewResourcesNav ?
                <h6 onClick={handleViewResourcesNav}>Resources <FaArrowCircleDown className='faIcon down'/></h6>:
                <h6 onClick={handleCloseNavOptions}>Resources <FaArrowCircleDown className='faIcon down'/></h6>
              }
              {viewResourcesNav &&<div className="dropDownContent">
                <Link to='/Apply' onClick={handleCloseNavOptions}><h6>Apply SL</h6></Link>
                <Link to='/Campus' onClick={handleCloseNavOptions}><h6>Campus</h6></Link>
                <Link to='/NewsAndFeature' onClick={handleCloseNavOptions}><h6>News And Feature</h6></Link>
                <Link onClick={handleCloseNavOptions}><h6>About Us</h6></Link>
                <Link to='/Faqs' onClick={handleCloseNavOptions}><h6>FAQs</h6></Link>
              </div>}
            </a>
            {!userAccess ?
            <>
            <button id='registerSL' onClick={handleViewRegister}><h6>Register</h6></button>
            <button id='loginSL' onClick={handleViewLogin}><h6>Login</h6></button>
            </>:
            <>
              <Link to={"/Users/"+LoginUsername} className='mslUserProfile'>
                <h6>My Profile</h6>
                <img src={require('./assets/MLBB_Landing_Assets/MSLLogo.png')} alt="" />
              </Link>
              <button id='logoutSL' onClick={handleLogout}><h6>Logout</h6></button>
            </>
            }
          </div>
        </div>
      </div>
      <div className="mainNavContainer mobile">
        <div className="navContainer mobile">
          <div className="ncMobile left">
            <Link to="/">
              <img src={require('./assets/MLBB_Landing_Assets/MSLLogo.png')} alt="" />
            </Link>
          </div>
          <div className="ncMobile right">
            {!openMobNav ?
              <button onClick={handleViewMob}><h4><FaBars/></h4></button>:
              <button onClick={handleCloseMob}><h4><FaTimes/></h4></button>
            }
          </div>
        </div>
      </div>
    </nav>
  ); 
}

export default Nav;