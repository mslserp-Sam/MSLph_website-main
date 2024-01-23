import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';


import Nav from './Components/Nav'
import Footer from './Components/Pages/footer';
import ScrollToTop from './Components/Pages/ScrollToTop';
import FacebookMsg from './Components/Pages/FacebookMsgr';

import Home from './Components/Pages/Home'

import Events from './Components/Pages/Events';
import BattleTrips from './Components/Pages/BattleTrips';
import MCC from './Components/Pages/MCC';


import Programs from './Components/Pages/Programs';
import SEPP from './Components/Pages/SEPP';
import EOSR from './Components/Pages/EOSR';
import Profile from './Components/Pages/Profile';

import ApplySL from './Components/Pages/ApplySL';
import Campus from './Components/Pages/Campus';
import News from './Components/Pages/News';
import Faqs from './Components/Pages/Faqs';
import Mfive from './Components/Pages/Mfive';
import PrivacyAndPolicy from './Components/Pages/PrivacyAndPolicy';
import TermsAndCondition from './Components/Pages/TermsAndCondition';


import M5WatchFest from './Components/Pages/News/M5WatchFest';
import StarCityNews from './Components/Pages/News/StarCityNews';
import M5LipadWinners from './Components/Pages/News/M5LipadWinners';
import FirstOnsiteBiWeekly from './Components/Pages/News/FirstOnsiteBiWeekly';
import MplBattleTrip from './Components/Pages/News/MplBattleTrip';
import FirstCampusOfflineTournament from './Components/Pages/News/FirstCampusOfflineTournament';

import MfourFlashMob from './Components/Pages/News/MfourFlashMob';
import YearEndParty from './Components/Pages/News/YearEndParty';
import RiseToGlory from './Components/Pages/News/RiseToGlory';
import TheAllStar from './Components/Pages/News/TheAllStar';
import StudentLeadersUndergroundClash from './Components/Pages/News/StudentLeadersUndergroundClash';
import MSLPHMidYearCulmination from './Components/Pages/News/MSLPHMidYearCulmination';
// M4 FLASHMOB
// YEAR END PARTY
// Rise to Glory
// The All Star University Highgrounds All Out Experience
// Student Leaders, Community Heroes intensifies atmosphere in MLBB Underground Clash
// MSL Philippines revels in a celebration spree during 2023 Mid-Year Culmination

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {

  return (
    <Router>
    <div>
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Users" element={<Home/>}/>
        <Route path="/Resgister/student?=registrationSuccess" element={<Home/>}/>
        <Route path="/Resgister/student?=registrationFailed" element={<Home/>}/>

        
        <Route path="/Events" element={<Events/>}/>
        <Route path="/M5Lipad" element={<BattleTrips/>}/>
        <Route path="/Events/MCC" element={<MCC/>}/>
        <Route path="/M5WatchFest" element={<Mfive/>}/>

        <Route path="/Programs" element={<Programs/>}/>
        <Route path="/Programs/SEPP" element={<SEPP/>}/>

        <Route path="/Programs/EOSR" element={<EOSR/>}/>


        <Route path="/Users/:MSLPlayerUsername" element={<Profile/>}/>


        
        <Route path="/Apply" element={<ApplySL/>}/>
        <Route path="/Campus" element={<Campus/>}/>
        <Route path="/NewsAndFeature" element={<News/>}/>
        <Route path="/Faqs" element={<Faqs/>}/>
        <Route path="/PrivacyAndPolicy" element={<PrivacyAndPolicy/>}/>
        <Route path="/TermsAndConditions" element={<TermsAndCondition/>}/>

        
        <Route path="/NewsAndFeature/M5WatchFest" element={<M5WatchFest/>}/>
        <Route path="/NewsAndFeature/M5LipadWinners" element={<M5LipadWinners/>}/>
        <Route path="/NewsAndFeature/MSL3rdAnniversarry" element={<StarCityNews/>}/>
        <Route path="/NewsAndFeature/FirstOnsiteBiWeekly" element={<FirstOnsiteBiWeekly/>}/>
        <Route path="/NewsAndFeature/MplBattleTrip" element={<MplBattleTrip/>}/>
        <Route path="/NewsAndFeature/FirstCampusOfflineTournament" element={<FirstCampusOfflineTournament/>}/>
        
        <Route path="/NewsAndFeature/MfourFlashMob" element={<MfourFlashMob/>}/>
        <Route path="/NewsAndFeature/YearEndParty" element={<YearEndParty/>}/>
        <Route path="/NewsAndFeature/RiseToGlory" element={<RiseToGlory/>}/>
        <Route path="/NewsAndFeature/TheAllStar" element={<TheAllStar/>}/>
        <Route path="/NewsAndFeature/StudentLeadersUndergroundClash" element={<StudentLeadersUndergroundClash/>}/>
        <Route path="/NewsAndFeature/MSLPHMidYearCulmination" element={<MSLPHMidYearCulmination/>}/>
      </Routes>
      <FacebookMsg/>
      <Footer />
    </div>
    </Router>
  );
}


export default App;
