import React, { useState } from 'react'
import Page7 from './Page7'

function Page6(props) {

    const [overview, setoverview] = useState();

    const validatePage = () => {
        props.validatePage(overview);
    }

    return (
        <>
            {
                props.currentPage === 6 && <div className='container page1' id='page6'>
                    <h5 className='text-center pt-2 mt-2'>Overview</h5>
                    <hr className='mt-0'/>
                    <div className='row'>
                        <div className='col-12'>
                            <textarea minLength='100'
                                value={overview} onChange={(event) => setoverview(event.target.value)} 
                                className='my-4' style={{width: '100%', padding: '10px', fontSize: '0.8rem', height: '150px', border: '1px solid black', borderRadius: '5px'}}></textarea>
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
            <Page7 backPage={props.backPage} validatePage={props.validatePage} currentPage={props.currentPage} />
        </>
    )
}

export default Page6
