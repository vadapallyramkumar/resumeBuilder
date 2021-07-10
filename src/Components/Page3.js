import React, { useState } from 'react'
import Page4 from './Page4'

function Page3(props) {

    const [projects, setprojects] = useState({
        'project1Title': '',
        'project1Link': '',
        'project1Decsription': '',
        'project2Title': '',
        'project2Link': '',
        'project2Decsription': '',
    })

    const validatePage = () => {
        props.validatePage(projects);
    }

    return (
        <>
            {
                props.currentPage === 3 && <div className='container page1' id='page3'>
                    <h5 className='text-center pt-2 mt-2'>Projects Developed</h5>
                    <hr className='mt-0'/>
                    <div className='row'>
                        <p className='text-center m-0'>Project 1</p>
                        <div className='col-6 mt-4'>
                            <div className="input-group mb-3">
                                <input type="text" required className="form-control br-0" 
                                minLength="1" maxLength="100" placeholder="Title *"
                                value={projects.project1Title} onChange={(event) => setprojects({ ...projects, 'project1Title': event.target.value })} />
                                <div className="input-group-append">
                                    <span className="input-group-text" id="basic-addon2">
                                        <i className="fas fa-heading"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='col-6 mt-4'>
                            <div className="input-group mb-3">
                                <input type="text" required className="form-control br-0" minLength="1" placeholder="Link" 
                                value={projects.project1Link} onChange={(event) => setprojects({ ...projects, 'project1Link': event.target.value })}/>
                                <div className="input-group-append">
                                    <span className="input-group-text" id="basic-addon2">
                                        <i className="fas fa-link"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='col-12'>
                            <div className="input-group w-100 description mb-4 h-4">
                                <input type="text" required className="form-control br-0" minLength="1" placeholder="Description *" 
                                value={projects.project1Decsription} onChange={(event) => setprojects({ ...projects, 'project1Decsription': event.target.value })}/>
                                <div className="input-group-append">
                                    <span className="input-group-text" id="basic-addon2">
                                        <i className="fas fa-file-word"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <p className='text-center m-0'>Project 2</p>
                        <div className='col-6 mt-4'>
                            <div className="input-group mb-3">
                                <input type="text" required className="form-control br-0" minLength="1"  placeholder="Title" 
                                value={projects.project2Title} onChange={(event) => setprojects({ ...projects, 'project2Title': event.target.value })}/>
                                <div className="input-group-append">
                                    <span className="input-group-text" id="basic-addon2">
                                        <i className="fas fa-heading"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='col-6 mt-4'>
                            <div className="input-group mb-3">
                                <input type="text" required className="form-control br-0" minLength="1" placeholder="Link" 
                                value={projects.project2Link} onChange={(event) => setprojects({ ...projects, 'project2Link': event.target.value })}/>
                                <div className="input-group-append">
                                    <span className="input-group-text" id="basic-addon2">
                                        <i className="fas fa-link"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='col-12'>
                            <div className="input-group description w-100 mb-3">
                                <input type="text" required className="form-control br-0" minLength="1" placeholder="Decsription" 
                                value={projects.project2Decsription} onChange={(event) => setprojects({ ...projects, 'project2Decsription': event.target.value })}/>
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
            <Page4 backPage={props.backPage} validatePage={props.validatePage} currentPage={props.currentPage} />
        </>
    )
}

export default Page3
