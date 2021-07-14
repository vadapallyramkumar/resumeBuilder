import React, { useState } from 'react'
import '../Assets/Styles/Main.css'
import Page1 from './Page1'
import Template1 from '../Templates/Template1/Template1'
import Template2 from '../Templates/Template2/Template2'
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import Logo from '../Assets/Images/Logo.png'


function Main() {

    const [currentPage, setcurrentPage] = useState(1);
    const [allDetails, setallDetails] = useState({
        'personaldetails': '',
        'EducationalDetails': '',
        'projects': '',
        'experience': '',
        'skills' : '',
        'interests': '',
        'overview': ''
    })

    const backPage = (event) => {
        event.preventDefault()
        if(currentPage > 1) {
            setcurrentPage(currentPage - 1);
        }
    }

    const validatePage = (details, interests = null) => {
        switch(currentPage) {
            case 1:
                page1Validation(details);
                break;
            case 2:
                page2Validation(details);
                break;
            case 3:
                page3Validation(details);
                break;
            case 4:
                page4Validation(details);
                break;
            case 5:
                page5Validation(details, interests);
                break;
            case 6:
                page6Validation(details);
                break;
            case 7:
                page7Validation(details);
                break;
            default:
                console.log(`Need to implement !`)
        }
    }

    const page1Validation = (details) => {
        if(details.FirstName && details.SecondName 
            && details.Email && details.PhoneNumber){
            setcurrentPage(2);
            setallDetails({ ...allDetails,
                'personaldetails' : details,
            });
        } else {
            snackbar()
            // alert('Enter required details !')
        }
        
    }
    const page2Validation = (EducationalDetails) => {
        if(EducationalDetails.College && 
            EducationalDetails.FromDate && 
            EducationalDetails.ToDate && 
            EducationalDetails.HigherDescription &&
            EducationalDetails.School &&
            EducationalDetails.SchoolFromDate &&
            EducationalDetails.SchoolToDate &&
            EducationalDetails.SchoolDescription){
            setcurrentPage(3);
            setallDetails({ ...allDetails,
                'EducationalDetails' : EducationalDetails,
            });
        } else {
            snackbar();
        }
    }
    const page3Validation = (projects) => {
        if(projects.project1Title && projects.project1Decsription) {
            setcurrentPage(4);
            setallDetails({ ...allDetails,
                'projects' : projects,
            });
        } else {
            snackbar();
        }
    }
    const page4Validation = (details) => {
        setcurrentPage(5);
        setallDetails({ ...allDetails,
            'experience' : details,
        });
    }
    const page5Validation = (skills, interests) => {
        if(skills.skill1 && skills.skill2 && skills.skill3 && skills.skill4 && interests.interest1
            && interests.interest2 && interests.interest3 && interests.interest4) {
            setcurrentPage(6);
            setallDetails({ ...allDetails,
                'skills' : skills,
                'interests': interests
            });
        } else {
            snackbar();
        }
    }
    const page6Validation = (overview) => {
        if(overview.length) {
            setcurrentPage(7);
            setallDetails({ ...allDetails,
                'overview' : overview,
            });
        } else {
            snackbar();
        }
    }
    const page7Validation = (page) => {
        if(page) {
            handlePdf(page)
        }
    }

    function snackbar() {
        var x = document.getElementById("snackbar");
        x.className = "show";
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
    }

    const handlePdf = (page) => {
        var elem = document.getElementById(page);
        var width = window.getComputedStyle(elem, null).getPropertyValue("width").replace('px', '');
        var height = window.getComputedStyle(elem, null).getPropertyValue("height").replace('px', '');
        var HTML_Width = Number(width);
        var HTML_Height = Number(height);
        var top_left_margin = 15;
        var PDF_Width = HTML_Width + (top_left_margin * 2);
        var PDF_Height = (PDF_Width * 1.5) + (top_left_margin * 2);
        var canvas_image_width = HTML_Width;
        var canvas_image_height = HTML_Height;
        var totalPDFPages = Math.ceil(HTML_Height / PDF_Height) - 1;
        html2canvas(document.getElementById(page), { allowTaint: true }).then(function (canvas) {
            canvas.getContext('2d');
            console.log(canvas.height + "  " + canvas.width);
            var imgData = canvas.toDataURL('image/jpeg').replace('image/jpeg', 'image/octet-stream');
            const pdf = new jsPDF('p', 'pt', [PDF_Width, PDF_Height]);
            pdf.addImage(imgData, 'JPG', top_left_margin, top_left_margin, canvas_image_width, canvas_image_height);
            for (var i = 1; i <= totalPDFPages; i++) {
                pdf.addPage([PDF_Width, PDF_Height]);
                pdf.addImage(imgData, 'JPG', top_left_margin, -(PDF_Height * i) + (top_left_margin * 4), canvas_image_width, canvas_image_height);
            }
            pdf.save(`${allDetails.personaldetails.FirstName}.pdf`);
        });
        // html2canvas(document.getElementById(page), { allowTaint: true, useCORS: true }).then(function (canvas) {
        //     canvas.toBlob(function (blob) {
        //         var wid;
        //         var hgt;
        //         var img = canvas.toDataURL('image/jpeg').replace('image/jpeg', 'image/octet-stream', wid = canvas.width, hgt = canvas.height);
        //         console.log(img);
        //         var hratio = hgt / wid
        //         var doc = new jsPDF('p', 'px', 'a4');
        //         var width = doc.internal.pageSize.width;
        //         var height = width * hratio
        //         doc.addImage(img, 'JPEG', 10, 10, width - 20, height - 20);
        //         doc.save(`${allDetails.personaldetails.FirstName}.pdf`);
        //     });
        // });
    };

    return (
        <>
        <div className='layered-container'>
            <h4>Resume Builder !</h4>
            <div className='MainContainer'>
                <div className='row w-100 h-100 m-0'>
                    <div className='col-4 p-0 left'>
                        <div  className={'b-5 leftPage' + currentPage}>
                            <img src={Logo} alt='Resume Builder' className='Logo' />
                        </div>
                    </div>
                    <div className='col-8 right'>
                        <Page1 
                            backPage={backPage} 
                            validatePage={validatePage}
                            currentPage={currentPage}/>
                    </div>
                </div>
            </div>
        </div>
        {
            currentPage === 7 && <Template1 page1Details={allDetails.personaldetails} skills={allDetails.skills} interests={allDetails.interests} overview={allDetails.overview} EducationalDetails={allDetails.EducationalDetails} projects={allDetails.projects} experience={allDetails.experience} />
        }
        {
            currentPage === 7 && <Template2 page1Details={allDetails.personaldetails} skills={allDetails.skills} interests={allDetails.interests} overview={allDetails.overview} EducationalDetails={allDetails.EducationalDetails} projects={allDetails.projects} experience={allDetails.experience} />
        }
        <div id="snackbar">Enter required details !</div>
        </>
    )
}

export default Main
