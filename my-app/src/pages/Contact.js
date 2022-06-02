import React from 'react'
import NavbarComponent from '../components/Navbar'
import { BiTargetLock } from 'react-icons/bi';

function ContactPage() {
  return (
    <>
    <NavbarComponent/>
    <div className="contactPage">
        <div class="contactPageHeader d-flex justify-content-center align-items-center">
            <h1 class="fw-bold text-white mt-3">Contact Us</h1>
        </div>
        
        <div class="contactPageInfo mt-4">
            <form class="contactPageForm container">
                <div class="mb-3 container row">
                    <div class="col-md-6 col-12 mb-3">
                        <div class="d-flex">
                            <label for="inputName" class="form-label text-dark">Name</label><div class="text-danger">*</div>
                        </div>
                        <input type="text" class="form-control" id="inputName" placeholder="Enter your name" required/>
                    </div>
                    <div class="col-md-6 col-12">
                        <div class="d-flex">
                            <label for="inputEmail" class="form-label text-dark">Email</label><div class="text-danger">*</div>
                        </div>
                        <input type="email" class="form-control" id="inputEmail" placeholder="Enter your email" required/>
                    </div>
                </div>
                <div class="mb-3 container row">
                    <div class="col-md-6 col-12 mb-3">
                        <label for="inputPhone" class="form-label text-dark">Phone</label>
                        <input type="tel" class="form-control" id="inputPhone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" placeholder="Enter your phone number"></input>
                    </div>
                    <div class="col-md-6 col-12">
                        <div class="d-flex">
                            <label for="inputSubject" class="form-label text-dark">Subject</label><div class="text-danger">*</div>
                        </div>
                        <input type="text" class="form-control" id="inputSubject" placeholder="Main topic of your message" required/>
                    </div>
                </div>
                <div class="mb-4 container row">
                    <div class="d-flex">
                        <label for="inputTextarea" class="form-label text-dark">Message</label><div class="text-danger">*</div>
                    </div>
                    <textarea class="form-control" id="inputTextarea" rows="5" required></textarea>
                </div>
                <div class="d-flex justify-content-center">
                    <button type="submit" class="btn btn-outline-success mb-3">Submit</button>
                </div>
            </form>
        </div>
    </div>
    </>
  )
}

export default ContactPage