import { React, useState } from 'react'
import NavbarComponent from '../components/Navbar'
import { send } from 'emailjs-com';
import { Spinner } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


function ContactPage() {
    const navigate = useNavigate();

    function sendMail(params) {
    send("service_zeus.gis","template_e1kbzlh", params, "I8-Gx5hL0KRllxSQp")
      .then(function(response) {
        //console.log('SUCCESS!', response.status, response.text);
        navigate('/', { state: { message: 'Your message has been sent. Thanks for contacting us!' } });
    }, function(error) {
        console.log('FAILED...', error);
        window.location.reload();
    });
  }

  function onSubmit(event) {
    event.preventDefault()
    setLoading(true);

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

  const [loading, setLoading] = useState(false);

  return (
    <>
    <NavbarComponent/>
    <div className="contactPage">
        <div className="contactPageHeader d-flex flex-column justify-content-center align-items-center">
            <div className="contactPageHeaderTitle ">
                <h1 className="fw-bold text-white mt-3">Contact Us</h1>
            </div>
            <div className="contactPageTeamInfo row mt-4">
                <div className="contactPageTeamInfoLocation col-md-6">
                    <h4 className="text-white">Location</h4>
                    <p className="text-white">
                        FEUP, B332
                    </p>
                </div>
                <div className="contactPageTeamInfoEmail col-md-6">
                    <h4 className="text-white">Email</h4>
                    <p className="text-white">
                        zeus.gis@outlook.com
                    </p>
                </div>
            </div>
        </div>
        
        <div className="contactPageInfo mt-4">
            <form className="contactPageForm container" onSubmit={onSubmit}>
                <div className="mb-3 container row">
                    <div className="col-md-6 col-12 mb-3">
                        <div className="d-flex">
                            <label htmlFor="inputName" className="form-label text-dark">Name</label><div className="text-danger">*</div>
                        </div>
                        <input type="text" className="form-control border-dark" id="inputName" name="from_name" placeholder="Enter your name" required/>
                    </div>
                    <div className="col-md-6 col-12">
                        <div className="d-flex">
                            <label htmlFor="inputEmail" className="form-label text-dark">Email</label><div className="text-danger">*</div>
                        </div>
                        <input type="email" className="form-control border-dark" id="inputEmail" name="from_email" placeholder="Enter your email" required/>
                    </div>
                </div>
                <div className="mb-3 container row">
                    <div className="col-md-6 col-12 mb-3">
                        <label htmlFor="inputPhone" className="form-label text-dark">Phone</label>
                        <input type="tel" className="form-control border-dark" id="inputPhone" name="phone" placeholder="Enter your phone number"></input>
                    </div>
                    <div className="col-md-6 col-12">
                        <div className="d-flex">
                            <label htmlFor="inputSubject" className="form-label text-dark">Subject</label><div className="text-danger">*</div>
                        </div>
                        <input type="text" className="form-control border-dark" id="inputSubject" name="subject" placeholder="Main topic of your message" required/>
                    </div>
                </div>
                <div className="mb-4 container row">
                    <div className="d-flex">
                        <label htmlFor="inputTextarea" className="form-label text-dark">Message</label><div className="text-danger">*</div>
                    </div>
                    <textarea className="form-control border-dark" id="inputTextarea" rows="5" name="message" required></textarea>
                </div>
                {
                    loading ?
                    <div className="loadingSpinner d-flex justify-content-center">
                        <Spinner animation="border" variant="success" className="mb-3"/>
                    </div>
                    :
                    <div className="submitButton d-flex justify-content-center">
                        <button type="submit" className="btn btn-outline-success mb-3">Submit</button>
                    </div>
                }
            </form>
        </div>
    </div>
    </>
  )
}

export default ContactPage