import React from 'react'
import './Template1.css'

function Template1(props) {
    console.log(props);
    return (
        <div className='capturepage1' id='captureContainer1'>
                <div className='row h-100'>

                    {/* Left side Bar */}
                    <div className='col-4 h-100' style={{ backgroundColor: 'lightblue' }}>
                        <h2 className='firstName mx-3 mt-5 mb-2'>{props.page1Details.FirstName}</h2>
                        <h3 className='secondName mx-3 pb-5 '>{props.page1Details.SecondName}</h3>
                        <div className='list py-4'>
                            <ul>
                                <li className='mx-3 my-4'>
                                    <label><i className="fa fa-envelope" aria-hidden="true"></i></label>
                                    <p>{props.page1Details.Email}</p>
                                </li>
                                <li className='mx-3 my-4'>
                                    <label><i className="fa fa-phone" aria-hidden="true"></i></label>
                                    <p>{props.page1Details.PhoneNumber}</p>
                                </li>
                                {
                                    props.page1Details.Website && <li className='mx-3 my-4'>
                                        <label><i className="fa fa-globe" aria-hidden="true"></i></label>
                                        <p>{props.page1Details.Website}</p>
                                    </li>
                                }
                                {
                                    props.page1Details.GitHub && <li className='mx-3 my-4'>
                                        <label><i className="fab fa-github" aria-hidden="true"></i></label>
                                        <p>{props.page1Details.GitHub}</p>
                                    </li>
                                }
                                {
                                    props.page1Details.LinkedIn && <li className='mx-3 my-4'>
                                        <label><i className="fab fa-linkedin" aria-hidden="true"></i></label>
                                        <p>{props.page1Details.LinkedIn}</p>
                                    </li>
                                }
                                {
                                    props.page1Details.Twitter && <li className='mx-3 my-4'>
                                        <label><i className="fab fa-twitter" aria-hidden="true"></i></label>
                                        <p>{props.page1Details.Twitter}</p>
                                    </li>
                                }
                                {
                                    props.page1Details.Facebook && <li className='mx-3 my-4'>
                                        <label><i className="fab fa-facebook" aria-hidden="true"></i></label>
                                        <p>{props.page1Details.Facebook}</p>
                                    </li>
                                }
                                {
                                    props.page1Details.Instagram && <li className='mx-3 my-4'>
                                        <label><i className="fab fa-instagram" aria-hidden="true"></i></label>
                                        <p>{props.page1Details.Instagram}</p>
                                    </li>
                                }
                            </ul>
                        </div>
                        <div className='list skills py-4'>
                            <h4 className='mx-3 text-bold'>Skills</h4>
                            <ul>
                                <li className='mx-3 my-4'>
                                    <p>{props.skills.skill1}</p>
                                </li>
                                <li className='mx-3 my-4'>
                                    <p>{props.skills.skill2}</p>
                                </li>
                                <li className='mx-3 my-4'>
                                    <p>{props.skills.skill3}</p>
                                </li>
                                <li className='mx-3 my-4'>
                                    <p>{props.skills.skill4}</p>
                                </li>
                                {
                                    props.skills.skill5 && <li className='mx-3 my-4'>
                                        <p>{props.skills.skill5}</p>
                                    </li>
                                }
                                {
                                    props.skills.skill6 && <li className='mx-3 my-4'>
                                        <p>{props.skills.skill6}</p>
                                    </li>
                                }
                            </ul>
                        </div>
                        <div className='list Interests pt-4 pb-2'>
                            <h4 className='mx-3 text-bold'>Interests</h4>
                            <ul>
                                <li className='mx-3 my-4'>
                                    <p>{props.interests.interest1}</p>
                                </li>
                                <li className='mx-3 my-4'>
                                    <p>{props.interests.interest2}</p>
                                </li>
                                <li className='mx-3 my-4'>
                                    <p>{props.interests.interest3}</p>
                                </li>
                                <li className='mx-3 my-4'>
                                    <p>{props.interests.interest4}</p>
                                </li>
                                {
                                    props.interests.interest5 && <li className='mx-3 my-4'>
                                        <p>{props.interests.interest5}</p>
                                    </li>
                                }
                                {
                                    props.interests.interest6 && <li className='mx-3 my-4'>
                                        <p>{props.interests.interest6}</p>
                                    </li>
                                }
                            </ul>
                        </div>
                    </div>
                    {/* Left side bar */}

                    {/* Right Side Bar */}

                    <div className='col-8 h-100' style={{ backgroundColor: '#fff' }}>
                        <div className='w-100 h-100 py-4' style={{ color: 'black' }}>

                            {/* Over view */}
                            <div className='h-20'>
                                <h3 className='type'>Overview</h3>
                                <hr />
                                <p className='py-3 Experience_desc'>
                                    {props.overview}
                                </p>
                            </div>
                            {/* Over view */}

                            {/* Education */}
                            <div className='w-100 h-35 mb-4'>
                                <h3 className='type'>Education:</h3>
                                <hr />
                                <div className='row mt-4'>
                                    <div className='col-8'>{props.EducationalDetails.College} / {props.EducationalDetails.HigherQualification}</div>
                                    <div className='col-4 text-right'>{props.EducationalDetails.FromDate} - {props.EducationalDetails.ToDate}</div>
                                    <p className='education_descrip py-2 mb-0'>
                                        {props.EducationalDetails.HigherDescription}
                                    </p>
                                </div>
                                <div className='row mt-2 mb-3'>
                                    <div className='col-8'>{props.EducationalDetails.School} / {props.EducationalDetails.SchoolQualification}</div>
                                    <div className='col-4 text-right'>{props.EducationalDetails.SchoolFromDate} - {props.EducationalDetails.SchoolToDate}</div>
                                    <p className='education_descrip py-2 mb-0'>
                                        {props.EducationalDetails.SchoolDescription}
                                    </p>
                                </div>
                            </div>
                            {/* Education */}

                            {/* experience */}
                            <div>
                                <h3 className='type'>Experience</h3>
                                <hr />
                                <>
                                    <h4 className='Experience_role'>{props.experience.experiencePosition}</h4>
                                    <h6 className='Experience_org'>{props.experience.experienceOrg} / {props.experience.experienceDuration}</h6>
                                    <p className='pt-2 pb-3 Experience_desc'>
                                        {props.experience.experienceDescription}
                                    </p>
                                </>
                                <>
                                    {
                                        props.experience.experience2Position && <h4 className='Experience_role'>{props.experience.experience2Position}</h4>
                                    }
                                    {
                                        props.experience.experience2Org && <h6 className='Experience_org'>{props.experience.experience2Org} / {props.experience.experience2Duration}</h6>
                                    }
                                    {
                                        props.experience.experience2Description && <p className='pt-2 pb-3 Experience_desc'>{props.experience.experience2Description}</p>
                                    }
                                </>
                            </div>
                            {/* experience */}

                            {/* projects */}
                            <div>
                                <h3 className='type'>Projects</h3>
                                <hr />
                                <>
                                    <h4 className='Experience_role'>{props.projects.project1Title}</h4>
                                    {
                                        props.projects.project1Link && <h6 className='Experience_org'>{props.projects.project1Link}</h6>
                                    }
                                    <p className='pt-2 pb-3 Experience_desc'>
                                        {props.projects.project1Decsription}
                                    </p>
                                </>
                                <>
                                    {
                                        props.projects.project2Title && <h4 className='Experience_role'>{props.projects.project2Title}</h4>
                                    }
                                    {
                                        props.projects.project2Link && <h6 className='Experience_org'>{props.projects.project2Link}</h6>
                                    }
                                    {
                                        props.projects.project2Decsription && <p className='pt-2 pb-3 Experience_desc'>{props.projects.project2Decsription}</p>
                                    }
                                </>
                            </div>
                            {/* projects */}

                        </div>
                    </div>

                    {/* Right side bar */}


                </div>
            </div>
    )
}

export default Template1