import React from 'react'
import './Template2.css'

function Template2(props) {
    return (
        <div className='container bg-light' id='captureContainer2'>
            <div className='row template-two'>
                <div className='col-12'>
                    <h2 className='t2-firstName bold my-2'>{props.page1Details.FirstName}</h2>
                    <h3 className='t2-secondName highlight sm-bold'>{props.page1Details.SecondName}</h3>
                    <p className='py-3 Experience_desc m-0'>
                    {props.overview}
                    </p>
                </div>
                <div className='col-12 strip'>
                    <ul>
                    <li>
                        <label><i class="fa fa-envelope" aria-hidden="true"></i></label>
                        <p className='px-2'>{props.page1Details.Email}</p>
                    </li>
                    <li>
                        <label><i class="fa fa-phone" aria-hidden="true"></i></label>
                        <p className='px-2'>{props.page1Details.PhoneNumber}</p>
                    </li>
                    {
                        props.page1Details.Website && <li>
                            <label><i class="fa fa-globe" aria-hidden="true"></i></label>
                            <p className='px-2'>{props.page1Details.Website}</p>
                        </li>
                    }
                    {
                        props.page1Details.GitHub && <li>
                        <label>
                            <i class="fab fa-github" aria-hidden="true"></i>
                            </label>
                            <p className='px-2'>{props.page1Details.GitHub}</p>
                        </li>
                    }
                    {
                        props.page1Details.LinkedIn && <li>
                            <label><i class="fab fa-linkedin" aria-hidden="true"></i></label>
                            <p className='px-2'>{props.page1Details.LinkedIn}</p>
                        </li>
                    }
                    {
                        props.page1Details.Twitter && <li>
                            <label><i class="fab fa-twitter" aria-hidden="true"></i></label>
                            <p className='px-2'>{props.page1Details.Twitter}</p>
                        </li>
                    }
                    {
                        props.page1Details.Facebook && <li>
                            <label><i class="fab fa-facebook" aria-hidden="true"></i></label>
                            <p className='px-2'>{props.page1Details.Facebook}</p>
                        </li>
                    }
                    </ul>
                </div>
                <div className="col-12 t2-skills">
                    <h3 className='t2-secondName highlight py-2 sm-bold'>SKILLS</h3>
                    <ul className='pb-2'>
                        <li className='py-2'>{props.skills.skill1}</li>
                        <li className='py-2'>{props.skills.skill2}</li>
                        <li className='py-2'>{props.skills.skill3}</li>
                        <li className='py-2'>{props.skills.skill4}</li>
                        {
                            props.skills.skill5 && <li className='py-2'>{props.skills.skill5}</li>
                        }
                        {
                            props.skills.skill6 && <li className='py-2'>{props.skills.skill6}</li>
                        }
                    </ul>
                </div>
                <div className='col-12 education'>
                    <h3 className='t2-secondName highlight py-2 sm-bold'>EDUCATION</h3>
                        <div className='row'>
                        <div className='col-8'>
                            <h5 className='sm-bold'>{props.EducationalDetails.College} / {props.EducationalDetails.HigherQualification}</h5>
                        </div>
                        <div className='col-4 text-right'>
                            <p className='inclin fs-d'>{props.EducationalDetails.FromDate} - {props.EducationalDetails.ToDate}</p>
                        </div>
                        <p className='education_descrip py-2 mb-0'>
                            {props.EducationalDetails.HigherDescription}
                        </p>
                        </div>
                        <div className='row mt-2 mb-3'>
                        <div className='col-8'>
                            <h5 className='sm-bold'>{props.EducationalDetails.School} / {props.EducationalDetails.SchoolQualification}</h5>
                        </div>
                        <div className='col-4 text-right'>
                            <p className='inclin fs-d'>{props.EducationalDetails.SchoolFromDate} - {props.EducationalDetails.SchoolToDate}</p>
                        </div>
                        <p className='education_descrip py-2 mb-0'>
                            {props.EducationalDetails.SchoolDescription}
                        </p>
                        </div>
                </div>
                <div className='col-12 experience'>
                    <h3 className='t2-secondName highlight py-2 sm-bold'>WORK EXPERIENCE</h3>
                    <>
                        <h5 className='Experience_role sm-bold'>{props.experience.experiencePosition}</h5>
                        <h6 className='Experience_org highlight inclin'>{props.experience.experienceOrg} / {props.experience.experienceDuration}</h6>
                        <p className='py-3 Experience_desc'>
                            {props.experience.experienceDescription}
                        </p>
                    </>
                    <>
                        {
                            props.experience.experience2Position && <h5 className='Experience_role sm-bold'>{props.experience.experience2Position}</h5>
                        }
                        {
                            props.experience.experience2Org && <h6 className='Experience_org highlight inclin'>{props.experience.experience2Org} / {props.experience.experience2Duration}1</h6>
                        }
                        {
                            props.experience.experience2Description && <p className='py-3 Experience_desc'>
                                {props.experience.experience2Description}
                            </p>
                        }    
                    </>
                </div>
                <div className='col-12 projects'>
                    <h3 className='t2-secondName highlight py-3 sm-bold'>PROJECTS</h3>
                    <>
                        <h5 className='Experience_role sm-bold'>{props.projects.project1Title}</h5>
                        {
                            props.projects.project1Link && <h6 className='Experience_org highlight inclin'>{props.projects.project1Link}</h6>
                        }
                        <p className='py-3 Experience_desc'>
                            {props.projects.project1Decsription}
                        </p>
                    </>
                    <>
                    {
                        props.projects.project2Title && <h5 className='Experience_role sm-bold'>{props.projects.project2Title}</h5>
                    }
                    {
                        props.projects.project2Link && <h6 className='Experience_org highlight inclin'>{props.projects.project2Link}</h6>
                    }
                    {
                        props.projects.project2Decsription && <p className='py-3 Experience_desc'>
                            {props.projects.project2Decsription}
                        </p>
                    }
                    </>
                </div>
                <div className="col-12 t2-skills">
                    <h3 className='t2-secondName highlight py-2 sm-bold'>INTERESTS</h3>
                    <ul className='pb-2'>
                        <li className='py-2'>{props.interests.interest1}</li>
                        <li className='py-2'>{props.interests.interest2}</li>
                        <li className='py-2'>{props.interests.interest3}</li>
                        <li className='py-2'>{props.interests.interest4}</li>
                        {
                            props.interests.interest5 && <li className='py-2'>{props.interests.interest5}</li>
                        }
                        {
                            props.interests.interest6 && <li className='py-2'>{props.interests.interest6}</li>
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Template2
