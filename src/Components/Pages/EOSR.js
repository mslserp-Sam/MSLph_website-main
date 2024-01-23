import React, { useEffect, useState } from 'react'
import "../CSS/eosr.css";
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

const EOSR = () => {

  return (
    <>
    <Helmet>
      <link rel="icon" type="image/png" href={webIcon} />
    </Helmet>
    <div className='mainContainer sepp'>
        <section className="seppPageMLBB top">
            <div className="seppContentTop">
                <h2 className='titleEosr'>EOSR</h2>
                <div className="scTop left">
                    <img src={require('../assets/MLBB_Landing_Assets/claude.png')} alt="" style={{zoom: '0.9', top: '100px'}}/>
                </div>
                <div className="scTop right">
                    <h4 className='subTitle'>End of Semester Rewards</h4>
                    <p className='desc'>
                        
                    </p>
                </div>
            </div>
            <img id="scratch03" src={require('../assets/MLBB_Landing_Assets/Scratch04.png')} alt="" />
        </section>
        <section className="seppPageMLBB mid">
            <div className="seppContentMid1">
                <div className='contentTitleSub'>
                    <h4 className='contentTitle'>requirements</h4>
                    <span>End Of Semester Rewards</span>
                </div>
                <div className="scMid1Container">
                    <div className='requirementsContent'>
                        <div className='divReqTitle'>
                            <div className='doubleTitle'>
                                <p className='requirementsPTitle'>Individual</p>
                                <p className='requirementsPTitle requirementsPTitleWhite'>requirements</p>
                            </div>
                        </div>
                        <div className='divReqContent'>
                            <span className='requirementsPContent'>
                                Must be officially enrolled at least four (4) subjects in their current semester.
                            </span>
                            <span className='requirementsPContent'>
                                Must be at least 90% or equivalent in GWA at the end of the semester.
                            </span>
                            <span className='requirementsPContent'>
                                Should have accumulate to at least 15 active points for the whole semester.
                            </span>
                        </div>
                    </div>
                </div>
                <div className="scMid1Container">
                    <div className='requirementsContent'>
                        <div className='divReqTitle'>
                            <div className='doubleTitle'>
                                <p className='requirementsPTitle'>Community</p>
                                <p className='requirementsPTitle requirementsPTitleWhite'>requirements</p>
                            </div>
                        </div>
                        <div className='divReqContent'>
                            <span className='requirementsPContent'>
                               Should have conducted to at least 50% of the total Biweekly Tournaments for the whole semester.
                            </span>
                            <span className='requirementsPContent'>
                                Community should not be under probitionary or SLs are still active.
                            </span>
                            <span className='requirementsPContent'>
                                Should be in levels 1, 2 and 3.
                            </span>
                            <span className='requirementsPContent'>
                                Community must be at least four (4) months from the date of establishments to the end of the semester of their school.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="seppContentMid1">
                <div className='contentTitleSub2'>
                    <h4 className='contentTitle2'>equivalent</h4><br/>
                    <div className='contentTitle2Span'><span>active points</span></div>
                    <div className='contentTitle3'><p>End Of Semester Rewards</p></div>
                </div>
                <div className="scMid1Container">
                    <div className='equivalentTitle'>
                        <p className='equivalentSub'>Each activities have equivalent points. Only 15 points are ligible to apply for EOSR.</p>
                    </div>
                    <table className='tables'>
                        <thead className='thead'>
                            <th>Events</th>
                            <th>POINTS</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    Tournaments<br/>
                                    Offline<br/>
                                    Online
                                </td>
                                <td>
                                    &nbsp;<br/>
                                    2.0 <br/>
                                    1.5 <br/>
                                </td>
                            </tr>
                            <tr>
                                <td><span>MSL University Offline Events (watch parties, etc.)</span></td>
                                <td>2.0</td>
                            </tr>
                            <tr>
                                <td>Surveys</td>
                                <td>1.0</td>
                            </tr>
                            <tr>
                                <td>Squad Leaderboards</td>
                                <td>1.5</td>
                            </tr>
                            <tr>
                                <td>Other MSL-sponsored Events</td>
                                <td>Varies</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="seppContentMid1">
                <div className='contentTitleSub2'>
                    <h4 className='contentTitle2'>diamonds</h4><br/>
                    <div className='contentTitle2Span'><span>rewards</span></div>
                    <div className='contentTitle3'><p>End Of Semester Rewards</p></div>
                </div>
                <div className="scMid1Container">
                    <div className='equivalentTitle'>
                        <p className='equivalentSub'>Grades equivalents will be calculated by your Student Leaders for evaluations.</p>
                    </div>
                    <table className='tables'>
                        <tbody>
                            <tr>
                                <td rowSpan={2} className='text-center'>RANGE</td>
                                <td colSpan={3}>
                                   <div className='titleTable'>
                                        <span>EQUIVALENT</span>
                                   </div>
                                </td>
                            </tr>
                            <tr className='text-center'>
                                <td>Level 3</td><td>Level 2</td><td>Level 1</td>
                            </tr>
                            <tr>
                                <td className='text-center'><span>98.01 - 100.00</span></td>
                                <td className='text-center'>3,500</td>
                                <td className='text-center'>2,800</td>
                                <td className='text-center'>2,100</td>
                            </tr>
                            <tr>
                                <td className='text-center'>95.01 - 98.00</td>
                                <td className='text-center'>2,500</td>
                                <td className='text-center'>2,000</td>
                                <td className='text-center'>1,500</td>
                            </tr>
                            <tr>
                                <td className='text-center'>90.00 - 95.00</td>
                                <td className='text-center'>1,500</td>
                                <td className='text-center'>1,200</td>
                                <td className='text-center'>900</td>
                            </tr>
                            <tr>
                                <td className='text-center'> &lt; 90.00</td>
                                <td colSpan={3}>No rewards</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    </div>
    </>
  )
}

export default EOSR