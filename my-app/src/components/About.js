import React from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap'
import NavbarComponent from './Navbar'
import { BiTargetLock } from 'react-icons/bi';

function AboutPage() {
  return (
    <>
    <NavbarComponent/>
    <div class="aboutPageHeader d-flex flex-column justify-content-center align-items-center">
      <div class="aboutPageHeaderTitle">
        <h1 class="fw-bold text-white">Who we are.</h1>
      </div>
      <div class="aboutPageHeaderText container text-center mt-3">
        <h5 class="text-white">
          We want to empower the energy industry through the use
          of technology, providing cleaner and more profitable means of production. 
          {/* Our aim is to help solve the world’s energy problems by providing members 
          of the energy industry with the necessary tools to help them
          manage their assets. */}
        </h5>
      </div>
    </div>
    <div class="mainGoal mt-4 d-flex justify-content-center">
      <div class="mainGoalHeader">
        <BiTargetLock size={80}/>
      </div>
    </div>
    </>
  )
}

export default AboutPage