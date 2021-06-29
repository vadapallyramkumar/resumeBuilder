import React, { useState } from 'react'
import Page6 from './Page6'

function Page5(props) {

    const [skills, setskills] = useState({
        'skill1': '',
        'skill2': '',
        'skill3': '',
        'skill4': '',
        'skill5': '',
        'skill6': '',
    })
    const [interests, setinterests] = useState({
        'interest1': '',
        'interest2': '',
        'interest3': '',
        'interest4': '',
        'interest5': '',
        'interest6': '',
    })

    const validatePage = () => {
        props.validatePage(skills, interests);
    }

    return (
        <>
            {
                props.currentPage === 5 && <div className='container page1' id='page1'>
                    <h5 className='text-center pt-2 mt-2'>Skills</h5>
                    <hr className='mt-0'/>
                    <div className='row'>
                        <div className='col-6'>
                            <div className="input-group mb-3">
                                <input type="text" required className="form-control br-0"  placeholder="Skill 1 *" 
                                value={skills.skill1} onChange={(event) => setskills({ ...skills, 'skill1': event.target.value })} />
                                <div className="input-group-append">
                                    <span className="input-group-text" id="basic-addon2">
                                    <i className="fas fa-clock"></i>
                                    </span>
                                </div>
                            </div>
                            <div className="input-group mb-3">
                                <input type="text" required className="form-control br-0"  placeholder="Skill 3 *" 
                                value={skills.skill3} onChange={(event) => setskills({ ...skills, 'skill3': event.target.value })} />
                                <div className="input-group-append">
                                    <span className="input-group-text" id="basic-addon2">
                                    <i className="fas fa-clock"></i>
                                    </span>
                                </div>
                            </div>
                            <div className="input-group mb-3">
                                <input type="text" required className="form-control br-0"  placeholder="Skill 5" 
                                value={skills.skill5} onChange={(event) => setskills({ ...skills, 'skill5': event.target.value })} />
                                <div className="input-group-append">
                                    <span className="input-group-text" id="basic-addon2">
                                    <i className="fas fa-clock"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className="input-group mb-3">
                                <input type="text" required className="form-control br-0"  placeholder="Skill 2 *" 
                                value={skills.skill2} onChange={(event) => setskills({ ...skills, 'skill2': event.target.value })} />
                                <div className="input-group-append">
                                    <span className="input-group-text" id="basic-addon2">
                                    <i className="fas fa-clock"></i>
                                    </span>
                                </div>
                            </div>
                            <div className="input-group mb-3">
                                <input type="text" required className="form-control br-0"  placeholder="Skill 4 *" 
                                value={skills.skill4} onChange={(event) => setskills({ ...skills, 'skill4': event.target.value })} />
                                <div className="input-group-append">
                                    <span className="input-group-text" id="basic-addon2">
                                    <i className="fas fa-clock"></i>
                                    </span>
                                </div>
                            </div>
                            <div className="input-group mb-3">
                                <input type="text" required className="form-control br-0"  placeholder="Skill 6" 
                                value={skills.skill6} onChange={(event) => setskills({ ...skills, 'skill6': event.target.value })} />
                                <div className="input-group-append">
                                    <span className="input-group-text" id="basic-addon2">
                                    <i className="fas fa-clock"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                    <h5 className='text-center pt-2'>Interests</h5>
                    <hr className='mt-0'/>
                        <div className='col-6'>
                            <div className="input-group mb-3">
                                <input type="text" required className="form-control br-0"  placeholder="Interests 1 *" 
                                value={interests.interest1} onChange={(event) => setinterests({ ...interests, 'interest1': event.target.value })} />
                                <div className="input-group-append">
                                    <span className="input-group-text" id="basic-addon2">
                                    <i className="fas fa-clock"></i>
                                    </span>
                                </div>
                            </div>
                            <div className="input-group mb-3">
                                <input type="text" required className="form-control br-0"  placeholder="Interests 3 *" 
                                value={interests.interest3} onChange={(event) => setinterests({ ...interests, 'interest3': event.target.value })} />
                                <div className="input-group-append">
                                    <span className="input-group-text" id="basic-addon2">
                                    <i className="fas fa-clock"></i>
                                    </span>
                                </div>
                            </div>
                            <div className="input-group mb-3">
                                <input type="text" required className="form-control br-0"  placeholder="Interests 5" 
                                value={interests.interest5} onChange={(event) => setinterests({ ...interests, 'interest5': event.target.value })} />
                                <div className="input-group-append">
                                    <span className="input-group-text" id="basic-addon2">
                                    <i className="fas fa-clock"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className="input-group mb-3">
                                <input type="text" required className="form-control br-0"  placeholder="Interests 2 *" 
                                value={interests.interest2} onChange={(event) => setinterests({ ...interests, 'interest2': event.target.value })} />
                                <div className="input-group-append">
                                    <span className="input-group-text" id="basic-addon2">
                                    <i className="fas fa-clock"></i>
                                    </span>
                                </div>
                            </div>
                            <div className="input-group mb-3">
                                <input type="text" required className="form-control br-0"  placeholder="Interests 4 *" 
                                value={interests.interest4} onChange={(event) => setinterests({ ...interests, 'interest4': event.target.value })} />
                                <div className="input-group-append">
                                    <span className="input-group-text" id="basic-addon2">
                                    <i className="fas fa-clock"></i>
                                    </span>
                                </div>
                            </div>
                            <div className="input-group mb-3">
                                <input type="text" required className="form-control br-0"  placeholder="Interests 6" 
                                value={interests.interest6} onChange={(event) => setinterests({ ...interests, 'interest6': event.target.value })} />
                                <div className="input-group-append">
                                    <span className="input-group-text" id="basic-addon2">
                                    <i className="fas fa-clock"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='col-6 back-btn mb-2' >
                            <button className='btn btn-primary' onClick={(event) => props.backPage(event)}> Back </button>
                        </div>
                        <div className='col-6 next-btn mb-2'>
                            <button className='btn btn-primary' onClick={validatePage}> Validate Page {props.currentPage} </button>
                        </div>
                    </div>
                </div>
            }
            <Page6 backPage={props.backPage} validatePage={props.validatePage} currentPage={props.currentPage} />
        </>
    )
}

export default Page5
