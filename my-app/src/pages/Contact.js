import React from 'react'
import NavbarComponent from '../components/Navbar'
import { send } from 'emailjs-com';
import { Spinner } from 'react-bootstrap';


function ContactPage() {
  function sendMail(params) {
    send("service_zeus.gis","template_e1kbzlh", params, "I8-Gx5hL0KRllxSQp")
      .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        window.location.href = "/?contact=true";
    }, function(error) {
        console.log('FAILED...', error);
        window.location.reload();
    });
  }

  function onSubmit(event) {
    event.preventDefault()

    const submitButton = document.querySelector(".submitButton");

    submitButton.insertAdjacentHTML(
        'beforeend',
        <Spinner class="loadingAfterSubmit ms-2" animation="border" variant="success" role="status"></Spinner>,
    );

    const from_name = document.querySelector("#inputName").value
    const from_email = document.querySelector("#inputEmail").value
    const phone = document.querySelector("#inputPhone").value || "No phone"
    const subject = document.querySelector("#inputSubject").value
    const message = document.querySelector("#inputTextarea").value

    const params = {
      from_name,
      from_email,
      phone,
      subject,
      message
    }

    sendMail(params)
  }

  return (
    <>
    <NavbarComponent/>
    <div className="contactPage">
        <div class="contactPageHeader d-flex flex-column justify-content-center align-items-center">
            <div class="contactPageHeaderTitle ">
                <h1 class="fw-bold text-white mt-3">Contact Us</h1>
            </div>
            <div class="contactPageTeamInfo row mt-4">
                <div class="contactPageTeamInfoLocation col-md-6">
                    <h4 class="text-white">Location</h4>
                    <p class="text-white">
                        FEUP, B332
                    </p>
                </div>
                <div class="contactPageTeamInfoEmail col-md-6">
                    <h4 class="text-white">Email</h4>
                    <p class="text-white">
                        zeus.gis@outlook.com
                    </p>
                </div>
            </div>
        </div>
        
        <div class="contactPageInfo mt-4">
            <form class="contactPageForm container" onSubmit={onSubmit}>
                <div class="mb-3 container row">
                    <div class="col-md-6 col-12 mb-3">
                        <div class="d-flex">
                            <label htmlFor="inputName" class="form-label text-dark">Name</label><div class="text-danger">*</div>
                        </div>
                        <input type="text" class="form-control border-dark" id="inputName" name="from_name" placeholder="Enter your name" required/>
                    </div>
                    <div class="col-md-6 col-12">
                        <div class="d-flex">
                            <label htmlFor="inputEmail" class="form-label text-dark">Email</label><div class="text-danger">*</div>
                        </div>
                        <input type="email" class="form-control border-dark" id="inputEmail" name="from_email" placeholder="Enter your email" required/>
                    </div>
                </div>
                <div class="mb-3 container row">
                    <div class="col-md-6 col-12 mb-3">
                        <label htmlFor="inputPhone" class="form-label text-dark">Phone</label>
                        <input type="tel" class="form-control border-dark" id="inputPhone" name="phone" placeholder="Enter your phone number"></input>
                    </div>
                    <div class="col-md-6 col-12">
                        <div class="d-flex">
                            <label htmlFor="inputSubject" class="form-label text-dark">Subject</label><div class="text-danger">*</div>
                        </div>
                        <input type="text" class="form-control border-dark" id="inputSubject" name="subject" placeholder="Main topic of your message" required/>
                    </div>
                </div>
                <div class="mb-4 container row">
                    <div class="d-flex">
                        <label htmlFor="inputTextarea" class="form-label text-dark">Message</label><div class="text-danger">*</div>
                    </div>
                    <textarea class="form-control border-dark" id="inputTextarea" rows="5" name="message" required></textarea>
                </div>
                <div class="submitButton d-flex justify-content-center">
                    <button type="submit" class="btn btn-outline-success mb-3">Submit</button>
                    
                </div>
            </form>
        </div>
    </div>
    </>
  )
}

export default ContactPage