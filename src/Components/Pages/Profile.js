import React, { useState, useEffect } from 'react'
import '../CSS/profile.css'
import axios from 'axios'
import heroDatas from '../../mlbbHero.json'
import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import webIcon from '../assets/MLBB_Landing_Assets/MSLLogo.png'

const Profile = () => {
  const {MSLPlayerUsername} = useParams() 

  const [viewProfileDashboard, setViewProdileDashboard] = useState(true)
  const [viewProfileAdmin, setViewProfileAdmin] = useState(false)
  const [viewProfileMasterlist, setViewProfileMasterlist] = useState(false)
  const [viewProfileReporting, setViewProfileReporting] = useState(false)
  const [viewSettings, setViewSettings] = useState(false)

  const handleViewProfile = () => {
    setViewProdileDashboard(true)
    setViewProfileAdmin(false)
    setViewProfileMasterlist(false)
    setViewProfileReporting(false)
    setViewSettings(false)
  }
  const handleViewAdmin = () => {
    setViewProfileAdmin(true)
    setViewProdileDashboard(false)
    setViewProfileMasterlist(false)
    setViewProfileReporting(false)
    setViewSettings(false)
  }
  const handleViewMasterlist = () => {
    setViewProfileMasterlist(true)
    setViewProfileAdmin(false)
    setViewProdileDashboard(false)
    setViewProfileReporting(false)
    setViewSettings(false)
  }
  const handleViewReporting = () => {
    setViewProfileReporting(true)
    setViewProfileMasterlist(false)
    setViewProfileAdmin(false)
    setViewProdileDashboard(false)
    setViewSettings(false)
  }
  const handleViewSetting = () => {
    setViewSettings(true)
    setViewProfileReporting(false)
    setViewProfileMasterlist(false)
    setViewProfileAdmin(false)
    setViewProdileDashboard(false)
  }



  const [viewAllNavigations, setViewAllNavigations] = useState(false)
  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn === 'true') {
      setViewAllNavigations(true)
    }
  }, []);


  const LoginUsername = localStorage.getItem('mslUsername');
  const isLoggedIn = localStorage.getItem('isLoggedIn');

  const [data1, setData1] = useState([]);
  useEffect(() => {
    const fetchData1 = () => {
      axios.get("https://mslcontent.000webhostapp.com/msldata1.php")
      .then((response) => {
        if (isLoggedIn == 'true'){
          setData1(response.data.filter(item => item.username == LoginUsername));
        }else{
          setData1(response.data.filter(item => item.username == MSLPlayerUsername))
        }
      })
      .catch(error => {
        console.log(error)
      })
    }
    fetchData1();
  }, [])


  const [data2, setData2] = useState([]);
  useEffect(() => {
    const fetchData2 = () => {
      axios.get("https://mslcontent.000webhostapp.com/msldata2.php")
      .then((response) => {
        if (isLoggedIn == 'true'){
          setData2(response.data.filter(item => item.username == LoginUsername));
        }else{
          setData2(response.data.filter(item => item.username == MSLPlayerUsername))
        }
      })
      .catch(error => {
        console.log(error)
      })
    }
    fetchData2();
  }, [])


  // User Details Rendering
  const renderPlayerImageBG = () => {
    if (isLoggedIn == 'true') {
      return data1.filter(item => item.username == LoginUsername).map((item) => (
        <img id='mlbbPlayerShadow' src={process.env.PUBLIC_URL + "/Players/" + (item.userimg)} alt=""/>
      ));
    } else {
      return data1.filter(item => item.username == MSLPlayerUsername).map((item) => (
        <img id='mlbbPlayerShadow' src={process.env.PUBLIC_URL + "/Players/" + (item.userimg)} alt=""/>
      ));
    }
  };
  const renderPlayerImage = () => {
    if (isLoggedIn == 'true') {
      if (data1.length == 0){
        return (
          <img id='mlbbPlayerImg' src='' mlbbSilhoutte={renderMLBBGender()} alt="" />
        );
      } else {
        return data1.filter(item => item.username == LoginUsername).map((item) => (
          <img id='mlbbPlayerImg' src={process.env.PUBLIC_URL + "/Players/" + (item.userimg)} mlbbSilhoutte='' alt="" />
        ));
      }
    }else{
      if (data1.length == 0){
        return (
          <img id='mlbbPlayerImg' src='' mlbbSilhoutte={renderMLBBGender()} alt="" />
        );
      } else {
        return data1.filter(item => item.username == MSLPlayerUsername).map((item) => (
          <img id='mlbbPlayerImg' src={process.env.PUBLIC_URL + "/Players/" + (item.userimg)} mlbbSilhoutte='' alt="" />
        ));
      }
    }
  };
  const renderPlayerImageView = () => {
    return data1.filter(item => item.userimg == '').map((item) =>(
      <img id='mlbbPlayerImg' src='' mlbbSilhoutte={renderMLBBGender()} alt="" />
    ));
  }
  const renderPlayerPoints = () => {
    if (isLoggedIn == 'true') {
      return data1.filter(item => item.username == LoginUsername).map((item) => (
        (item.points)
      ));
    }else{
      return data1.filter(item => item.username == MSLPlayerUsername).map((item) => (
        (item.points)
      ));
    }
  };
  const renderMLBBRank = () => {
    return data1.map((item) => (
      (item.rank)
    ));
  };
  const renderMLBBGivenname = () => {
    return data1.map((item) => (
      (item.givenname)
    ));
  };
  const renderMLBBVerified = () => {
    return data1.map((item) => (
      (item.verified)
    ));
  };
  const renderMLBBIgn = () => {
    return data1.map((item) => (
      (item.ign)
    ));
  };
  const renderMLBBGender = () => {
    return data1.map((item) => (
      (item.gender)
    ));
  };
  const renderMLBBSquad = () => {
    return data1.map((item) => (
      (item.squad)
    ));
  };
  const renderMLBBRole = () => {
    return data1.map((item) => (
      (item.role)
    ));
  };


  // Heroes Rendering

  const renderMLBBHero1 = () => {
    return data2.map((item) => (
      (item.hero1)
    ));
  };
  const renderMLBBHero2 = () => {
    return data2.map((item) => (
      (item.hero2)
    ));
  };
  const renderMLBBHero3 = () => {
    return data2.map((item) => (
      (item.hero3)
    ));
  };

  const Hero1 = renderMLBBHero1()
  const Hero2 = renderMLBBHero2()
  const Hero3 = renderMLBBHero3()

  const renderMLBBHeroFetch1 = () => {
    return heroDatas.filter(item => item.name == Hero1).map((item) => (
      (item.key)
    ));
  };
  const renderMLBBHeroFetch2 = () => {
    return heroDatas.filter(item => item.name == Hero2).map((item) => (
      (item.key)
    ));
  };
  const renderMLBBHeroFetch3 = () => {
    return heroDatas.filter(item => item.name == Hero3).map((item) => (
      (item.key)
    ));
  };


  return (
    <>
    <Helmet>
      <link rel="icon" type="image/png" href={webIcon} />
    </Helmet>
    <div className='mainContainer profile'>
      <section className="profilePageMLBB top">
        <div className="dpMLBBContainer">
          <div className="dpMLBBContent left">
            {renderPlayerImageBG()}
            <div className="profileCardContainer">
              <img id='mlbbPLayerRank' src='' mlbbRank={renderMLBBRank()} alt="" />
              <div className="mlbbPlayerSL">
                <h4>{renderPlayerPoints()}</h4>
                {renderPlayerImage()}
                {renderPlayerImageView()}
                <img id='mlbbMslLogo' src={require('../assets/MLBB_Landing_Assets/MSLLogoMetal.png')} alt="" />
              </div>
            </div>
          </div>
          <div className="dpMLBBContent right">
            {viewAllNavigations &&<div className="profileNavs">
              <button className={viewProfileDashboard ? 'active' : ''} onClick={handleViewProfile}><h6>DASHBOARD</h6></button>
              <button className={viewProfileAdmin ? 'active' : ''} onClick={handleViewAdmin}><h6>ADMIN</h6></button>
              <button className={viewProfileMasterlist ? 'active' : ''} onClick={handleViewMasterlist}><h6>MASTERLIST</h6></button>
              <button className={viewProfileReporting ? 'active' : ''} onClick={handleViewReporting}><h6>REPORTING</h6></button>
              <button className={viewSettings ? 'active' : ''} onClick={handleViewSetting}><h6>SETTINGS</h6></button>
            </div>}
            {viewProfileDashboard &&<div className="dpmcDashboard">
              <div id='dpmcPlayerName'>
                <h3>{renderMLBBGivenname()}</h3>
                <img id='mlbbPlayersBadge' src='' verified={renderMLBBVerified()} alt="" />
              </div>
              {/* <div id="dpmcPlayerSchool">
                <h5>Quezon City University</h5>
              </div> */}
              <div id='dpmcPlayerIGN'>
                <img id='mlbbPlayerHero1' src={"https:"+renderMLBBHeroFetch1()} alt="" />
                <img id='mlbbPlayerHero2' src={"https:"+renderMLBBHeroFetch2()} alt="" />
                <img id='mlbbPlayerHero3' src={"https:"+renderMLBBHeroFetch3()}  alt="" />
                <img id='mlbbPlayerRole' src='' mlRole={renderMLBBRole()} alt="" />
                <img id='mlbbPlayerGender' src='' mlGender={renderMLBBGender()} alt="" />
                <h5>{renderMLBBIgn()} <sup><span>{renderMLBBSquad()}</span></sup></h5>
              </div>
            </div>}
            {viewProfileAdmin &&<div className="dpmcProfileAdmin">

            </div>}
            {viewProfileMasterlist &&<div className="dpmcProfileMasterlist">

            </div>}
            {viewProfileReporting &&<div className="dpmcProfileReporting">

            </div>}
            {viewProfileReporting &&<div className="dpmcProfileSettings">

            </div>}
          </div>
        </div>
        <img id='paperScratch01' src={require('../assets/MLBB_Landing_Assets/Scratch04.png')} alt="" />
      </section>
    </div>
    </>
  )
}

export default Profile