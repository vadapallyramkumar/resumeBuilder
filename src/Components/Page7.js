import React, { useState } from 'react'
import template1 from '../Assets/Images/template1.jpg'
import template2 from '../Assets/Images/template2.png'

function Page7(props) {

    const [template, settemplate] = useState();

    const validatePage = (id) => {
        settemplate(id)
        props.validatePage(template);
    }

    return (
        <> 
           {
               props.currentPage === 7 && <div className='container page1' id='page6'>
                    <h5 className='text-center pt-2 mt-2'>Download Resume</h5>
                    <hr className='mt-0'/>
                    <div className='row'>
                        <div className='col-xs-6 col-sm-6 col-md-4 col-12 text-center' >
                            <img src={template1} className='w-100'
                            alt="Template 1" />
                            <button className='btn btn-primary download mt-2' onClick={() => validatePage('captureContainer1')}>Download Resume</button>
                        </div>
                        <div className='col-xs-6 col-sm-6 col-md-4 col-12 text-center' >
                            <img src={template2} className='w-100'
                            alt="Template 2" />
                            <button className='btn btn-primary download mt-2' onClick={() => validatePage('captureContainer2')}>Download Resume</button>
                        </div>
                    </div>
                    <div className='row mt-4'>
                        <div className='col-12 back-btn mb-2 text-center'>
                            <button className='btn btn-primary' onClick={(event) => props.backPage(event)}> Back </button>
                        </div>
                    </div>
               </div>
           } 
        </>
    )
}

export default Page7
