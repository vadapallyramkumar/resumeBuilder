import React, { useState } from 'react'
import Page5 from './Page5'

function Page4(props) {

    const [experience, setexperience] = useState({
        'experienceOrg': '',
        'experiencePosition': '',
        'experienceDuration': '',
        'experienceDescription': '',
        'experience2Org': '',
        'experience2Position': '',
        'experience2Duration': '',
        'experience2Description': ''
    })

    const validatePage = () => {
        props.validatePage(experience);
    }

    return (
        <>
            {
                props.currentPage === 4 && <div className='container page1' id='page4'>
                    <h5 className='text-center pt-2 mt-2'>Experience Details</h5>
                    <hr className='mt-0'/>
                    <div className='row'>
                        <p className='text-center m-0'>Experience 1</p>
                        <div className='col-6 mt-3'>
                            <div className="input-group mb-3">
                                <input type="text" required className="form-control br-0" minLength="1" maxLength="100" 
                                value={experience.experienceOrg} onChange={(event) => setexperience({ ...experience, 'experienceOrg': event.target.value })} 
                                placeholder="Institute/Organisation" />
                                <div className="input-group-append">
                                    <span className="input-group-text" id="basic-addon2">
                                        <i className="fas fa-heading"></i>
                                    </span>
                                </div>
                            </div>
                            <div className="input-group mb-3">
                                <input type="text" required className="form-control br-0"  placeholder="Duration" 
                                value={experience.experienceDuration} onChange={(event) => setexperience({ ...experience, 'experienceDuration': event.target.value })} />
                                <div className="input-group-append">
                                    <span className="input-group-text" id="basic-addon2">
                                    <i className="fas fa-clock"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='col-6 mt-3'>
                            <div className="input-group mb-3">
                                <input type="text" required className="form-control br-0" minLength="1" maxLength="100"  placeholder="Position" 
                                value={experience.experiencePosition} onChange={(event) => setexperience({ ...experience, 'experiencePosition': event.target.value })} />
                                <div className="input-group-append">
                                    <span className="input-group-text" id="basic-addon2">
                                        <i className="fas fa-couch"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='col-12'>
                            <div className="input-group description mb-4">
                                <input type="text" required className="form-control br-0" minLength="1" maxLength="450"  placeholder="Description" 
                                value={experience.experienceDescription} onChange={(event) => setexperience({ ...experience, 'experienceDescription': event.target.value })} />
                                <div className="input-group-append">
                                    <span className="input-group-text" id="basic-addon2">
                                        <i className="fas fa-file-word"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <p className='text-center m-0'>Experience 2</p>
                        <div className='col-6 mt-3'>
                            <div className="input-group mb-3">
                                <input type="text" required className="form-control br-0" minLength="1" maxLength="100" 
                                value={experience.experience2Org} onChange={(event) => setexperience({ ...experience, 'experience2Org': event.target.value })} 
                                placeholder="Institute/Organisation" />
                                <div className="input-group-append">
                                    <span className="input-group-text" id="basic-addon2">
                                        <i className="fas fa-heading"></i>
                                    </span>
                                </div>
                            </div>
                            <div className="input-group mb-3">
                                <input type="text" required className="form-control br-0"  placeholder="Duration" 
                                value={experience.experience2Duration} onChange={(event) => setexperience({ ...experience, 'experience2Duration': event.target.value })} />
                                <div className="input-group-append">
                                    <span className="input-group-text" id="basic-addon2">
                                    <i className="fas fa-clock"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='col-6 mt-3'>
                            <div className="input-group mb-3">
                                <input type="text" required className="form-control br-0" minLength="1" maxLength="100"  placeholder="Position" 
                                value={experience.experience2Position} onChange={(event) => setexperience({ ...experience, 'experience2Position': event.target.value })} />
                                <div className="input-group-append">
                                    <span className="input-group-text" id="basic-addon2">
                                        <i className="fas fa-couch"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='col-12'>
                            <div className="input-group mb-4 description">
                                <input type="text" required className="form-control br-0" minLength="1" maxLength="450"  placeholder="Description" 
                                value={experience.experience2Description} onChange={(event) => setexperience({ ...experience, 'experience2Description': event.target.value })} />
                                <div className="input-group-append">
                                    <span className="input-group-text" id="basic-addon2">
                                        <i className="fas fa-file-word"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='col-6 back-btn mb-2'>
                            <button className='btn btn-primary' onClick={(event) => props.backPage(event)}> Back </button>
                        </div>
                        <div className='col-6 next-btn mb-2'>
                            <button className='btn btn-primary' onClick={validatePage}> Validate Page {props.currentPage} </button>
                        </div>
                    </div>
                </div>
            }
            <Page5 backPage={props.backPage} validatePage={props.validatePage} currentPage={props.currentPage} />
        </>
    )
}

export default Page4
