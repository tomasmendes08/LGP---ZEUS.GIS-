import React from 'react'
import NavbarComponent from '../components/Navbar'
import { BiTargetLock } from 'react-icons/bi';

function ContactPage() {
  return (
    <>
    <NavbarComponent/>
    <div className="contactPage container">
        <div class="contactPageContainer mt-5 rounded">
            <div class="contactPageHeader d-flex justify-content-center">
                <h1 class="fw-bold text-white mt-3">Contact Us</h1>
            </div>
            <div class="contactPageInfo mt-3">
                <form class="contactPageForm container">
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label text-white">Email</label>
                        <input type="email" class="form-control" id="inputEmail" placeholder="Enter your email"/>
                    </div>
                    <button type="submit" class="btn btn-primary mb-3">Submit</button>
                </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default ContactPage