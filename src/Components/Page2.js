import React, { useState } from 'react'
import Page3 from './Page3'

function Page2(props) {

    const [EducationalDetails, setEducationalDetails] = useState({
        'College': '',
        'FromDate': '',
        'ToDate': '',
        'HigherQualification': '',
        'HigherDescription': '',
        'School': '',
        'SchoolFromDate': '',
        'SchoolToDate': '',
        'SchoolQualification': '',
        'SchoolDescription': ''
    })

    const validatePage = () => {
        props.validatePage(EducationalDetails);
    }

    return (
        <>
            {
                props.currentPage === 2 && <div className='container page2'>
                    <h5 className='text-center pt-2 mt-2'>Educational Details</h5>
                    <hr className='mt-0'/>
                    <div className='row'>
                        <div className='col-6'>
                            <div className="input-group mb-3">
                                <input type="text" required className="form-control br-0" minLength="1" maxLength="50" value={EducationalDetails.College} onChange={(event) => setEducationalDetails({ ...EducationalDetails, 'College': event.target.value })} placeholder="college / university *" />
                                <div className="input-group-append">
                                    <span className="input-group-text" id="basic-addon2">
                                        <i className="fas fa-graduation-cap"></i>
                                    </span>
                                </div>
                            </div>
                            <div className="input-group mb-3">
                                <input type="month" required className="form-control br-0" value={EducationalDetails.FromDate} onChange={(event) => setEducationalDetails({ ...EducationalDetails, 'FromDate': event.target.value })} placeholder="Joining Date *" />
                                <div className="input-group-append">
                                    <span className="input-group-text" id="basic-addon2">
                                        <i className="fas fa-calendar-day"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className="input-group mb-3">
                                <input type="text" required minLength="0" maxLength="25" className="form-control" value={EducationalDetails.HigherQualification} onChange={(event) => setEducationalDetails({ ...EducationalDetails, 'HigherQualification': event.target.value })} placeholder="Qualification *" />
                            </div>
                            <div className="input-group mb-3">
                                <input type="month" required className="form-control br-0" value={EducationalDetails.ToDate} onChange={(event) => setEducationalDetails({ ...EducationalDetails, 'ToDate': event.target.value })} placeholder="" />
                                <div className="input-group-append">
                                    <span className="input-group-text" id="basic-addon2">
                                        <i className="fas fa-calendar-day"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='col-12'>
                            <div className="input-group w-100 mb-4 h-4">
                                <input type="text" required className="form-control" minLength="1" value={EducationalDetails.HigherDescription} onChange={(event) => setEducationalDetails({ ...EducationalDetails, 'HigherDescription': event.target.value })} placeholder="Description *" />
                            </div>
                        </div>
                        <hr />
                        <div className='col-6'>
                            <div className="input-group mb-3">
                                <input type="text" required className="form-control br-0" minLength="1" maxLength="50" value={EducationalDetails.School} onChange={(event) => setEducationalDetails({ ...EducationalDetails, 'School': event.target.value })} placeholder="School *" />
                                <div className="input-group-append">
                                    <span className="input-group-text" id="basic-addon2">
                                        <i className="fas fa-graduation-cap"></i>
                                    </span>
                                </div>
                            </div>
                            <div className="input-group mb-3">
                                <input type="month" required className="form-control br-0" value={EducationalDetails.SchoolFromDate} onChange={(event) => setEducationalDetails({ ...EducationalDetails, 'SchoolFromDate': event.target.value })} placeholder="" />
                                <div className="input-group-append">
                                    <span className="input-group-text" id="basic-addon2">
                                        <i className="fas fa-calendar-day"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className="input-group mb-3">
                                <input type="text" minLength="0" maxLength="25" required className="form-control" value={EducationalDetails.SchoolQualification} onChange={(event) => setEducationalDetails({ ...EducationalDetails, 'SchoolQualification': event.target.value })} placeholder="Qualification *" />
                            </div>
                            <div className="input-group mb-3">
                                <input type="month" required className="form-control br-0" value={EducationalDetails.SchoolToDate} onChange={(event) => setEducationalDetails({ ...EducationalDetails, 'SchoolToDate': event.target.value })} placeholder="" />
                                <div className="input-group-append">
                                    <span className="input-group-text" id="basic-addon2">
                                        <i className="fas fa-calendar-day"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='col-12'>
                            <div className="input-group w-100 mb-3 h-4">
                                <input type="text" required className="form-control" minLength="1" value={EducationalDetails.SchoolDescription} onChange={(event) => setEducationalDetails({ ...EducationalDetails, 'SchoolDescription': event.target.value })} placeholder="Description *" />
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
            <Page3 backPage={props.backPage} validatePage={props.validatePage} currentPage={props.currentPage} />
        </>
    )
}

export default Page2
