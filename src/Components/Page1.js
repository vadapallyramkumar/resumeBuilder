import React, { useState } from 'react'
import Page2 from './Page2'

function Page1(props) {

    const [page1Details, setpage1Details] = useState({
        'FirstName': '',
        'SecondName': '',
        'Email': '',
        'PhoneNumber': '',
        'Website': '',
        'GitHub': '',
        'LinkedIn': '',
        'Twitter': '',
        'Facebook': '',
        'Instagram': ''
    });

    const validatePage1 = () => {
        props.validatePage(page1Details);
    }

    return (
        <>
            {
                props.currentPage === 1 && <div className='container page1' id='page1'>
                    <h5 className='text-center pt-2 mt-2'>Personal Details</h5>
                    <hr className='mt-0'/>
                    <div className='row'>

                        <div className='col-6'>
                            <div className="input-group mb-3">
                                <input type="text" required className="form-control" minLength="1" maxLength="28" value={page1Details.FirstName} onChange={(event) => setpage1Details({ ...page1Details, 'FirstName': event.target.value })} placeholder="First Name *" />
                            </div>
                            <div className="input-group mb-3">
                                <input type="email" required className="form-control br-0" minLength="1" maxLength="28" value={page1Details.Email} onChange={(event) => setpage1Details({ ...page1Details, 'Email': event.target.value })} placeholder="Email *" />
                                <div className="input-group-append">
                                    <span className="input-group-text" id="basic-addon2">
                                        <i className="fas fa-envelope"></i>
                                    </span>
                                </div>
                            </div>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control br-0" minLength="1" maxLength="28" placeholder="Your Website" value={page1Details.Website} onChange={(event) => setpage1Details({ ...page1Details, 'Website': event.target.value })} />
                                <div className="input-group-append">
                                    <span className="input-group-text" id="basic-addon2">
                                        <i className="fas fa-globe"></i>
                                    </span>
                                </div>
                            </div>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control br-0" minLength="1" maxLength="28" placeholder="Linked In" value={page1Details.LinkedIn} onChange={(event) => setpage1Details({ ...page1Details, 'LinkedIn': event.target.value })}  />
                                <div className="input-group-append">
                                    <span className="input-group-text" id="basic-addon2">
                                        <i className="fab fa-linkedin"></i>
                                    </span>
                                </div>
                            </div>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control br-0" minLength="1" maxLength="28" placeholder="Facebook" value={page1Details.Facebook} onChange={(event) => setpage1Details({ ...page1Details, 'Facebook': event.target.value })}  />
                                <div className="input-group-append">
                                    <span className="input-group-text" id="basic-addon2">
                                        <i className="fab fa-facebook-square"></i>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className='col-6'>
                            <div className="input-group mb-3">
                                <input type="text" required className="form-control" minLength="1" maxLength="28" value={page1Details.SecondName} onChange={(event) => setpage1Details({ ...page1Details, 'SecondName': event.target.value })} placeholder="Second Name *" />
                            </div>
                            <div className="input-group mb-3">
                                <input type="number" className="form-control br-0" minLength="10" maxLength="10" placeholder="Phone Number *" value={page1Details.PhoneNumber} onChange={(event) => setpage1Details({ ...page1Details, 'PhoneNumber': event.target.value })} />
                                <div className="input-group-append">
                                    <span className="input-group-text" id="basic-addon2">
                                        <i className="fas fa-phone-alt"></i>
                                    </span>
                                </div>
                            </div>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control br-0" minLength="1" maxLength="28" placeholder="GitHub" value={page1Details.GitHub} onChange={(event) => setpage1Details({ ...page1Details, 'GitHub': event.target.value })} />
                                <div className="input-group-append">
                                    <span className="input-group-text" id="basic-addon2">
                                        <i className="fab fa-github"></i>
                                    </span>
                                </div>
                            </div>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control br-0" minLength="1" maxLength="28" placeholder="Twitter" value={page1Details.Twitter} onChange={(event) => setpage1Details({ ...page1Details, 'Twitter': event.target.value })}  />
                                <div className="input-group-append">
                                    <span className="input-group-text" id="basic-addon2">
                                        <i className="fab fa-twitter-square"></i>
                                    </span>
                                </div>
                            </div>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control br-0" minLength="1" maxLength="28" placeholder="Instagram" value={page1Details.Instagram} onChange={(event) => setpage1Details({ ...page1Details, 'Instagram': event.target.value })}  />
                                <div className="input-group-append">
                                    <span className="input-group-text" id="basic-addon2">
                                        <i className="fab fa-instagram-square"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row mb-2'>
                        <div className='col-12 text-center'>
                            <button className='btn btn-primary' onClick={validatePage1}> Validate Page {props.currentPage} </button>
                        </div>
                    </div>
                </div>
            }
            <Page2 backPage={props.backPage} validatePage={props.validatePage} currentPage={props.currentPage} />
        </>
    )
}

export default Page1
