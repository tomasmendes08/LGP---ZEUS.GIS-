import React from 'react'
import NavbarComponent from '../components/Navbar'
import { BiTargetLock } from 'react-icons/bi';

function ContactPage() {
  return (
    <>
    <NavbarComponent/>
    <div className="contactPage container w-75">
        <div class="contactPageContainer mt-5">
            <div class="contactPageHeader d-flex justify-content-center">
                <h1 class="fw-bold text-white mt-3">Contact Us</h1>
            </div>
            <div class="contactPageInfo mt-3">
                <form class="contactPageForm container">
                    <div class="mb-3 container">
                        <label for="inputName" class="form-label text-white">Name*</label>
                        <input type="text" class="form-control" id="inputName" placeholder="Enter your name" required/>
                    </div>
                    <div class="mb-3 container">
                        <label for="inputEmail" class="form-label text-white">Email*</label>
                        <input type="email" class="form-control" id="inputEmail" placeholder="Enter your email" required/>
                    </div>
                    <div class="mb-3 container">
                        <label for="inputPhone" class="form-label text-white">Phone</label>
                        <input type="tel" class="form-control" id="inputPhone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" placeholder="Enter your phone number"></input>
                    </div>
                    <div class="mb-4 container">
                        <label for="inputTextarea" class="form-label text-white">Message*</label>
                        <textarea class="form-control" id="inputTextarea" rows="5" required></textarea>
                    </div>
                    <div class="d-flex justify-content-center">
                        <button type="submit" class="btn btn-light mb-3">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default ContactPage