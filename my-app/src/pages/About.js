import React from 'react'
import NavbarComponent from '../components/Navbar'
import { BiTargetLock } from 'react-icons/bi';

function AboutPage() {
  return (
    <>
    <NavbarComponent/>
    <div className="aboutPage row">
      <div class="col-lg-6 aboutPageHeader d-flex flex-column justify-content-center align-items-center">
        <div class="aboutPageIcon">
          <BiTargetLock size={70}/>
        </div>
        <div class="aboutPageHeaderTitle">
          <h1 class="fw-bold text-white">Who we are.</h1>
        </div>
        <div class="aboutPageHeaderText container text-center mt-3">
          <h5 class="text-white">
            We want to empower the energy industry through the use
            of technology, providing cleaner and more profitable means of production.
          </h5>
        </div>
      </div>
      <div class="col-lg-6 mt-lg-0 mt-4 mainGoal d-flex flex-column justify-content-center align-items-center">
        <div class="mainGoalIcon">
          <BiTargetLock size={70}/>
        </div>
        <div class="mainGoalHeader">
          <h1 class="fw-bold">Our goal.</h1>
        </div>
        <div class="mainGoalText container text-center mt-3">
          <h5>
            Our aim is to help solve the world’s energy problems by providing members 
            of the energy industry with the necessary tools to help them
            manage their assets.
          </h5>
        </div>
      </div>
    </div>
    <div class="teamMembers mt-5">
      <div class="teamMembersHeader d-flex justify-content-center">
        <h1 class="fw-bold">Meet the team.</h1>
      </div>
      <div class="teamMembersPhoto mt-3">
        <img class="img-fluid" src="../images/team.jpg" alt="Team"></img>
      </div>
    </div>
    <div class="ourClient mt-5">
      <div class="ourClientHeader">
        <h1 class="fw-bold text-center">Our client.</h1>
      </div>
      <div class="ourClientDescription mt-3 d-flex justify-content-center flex-column align-items-center">
        <div class="ourClientLogo">
          <img class="img-fluid" src="../images/client.jpg" alt="Client"></img>
        </div>
        <div class="ourClientText mt-3 mb-4 container">
          <h5 class="text-center">
            On a mission to unlock the potential of artificial intelligence for the benefit
            of humans and humanity, by building 'machines of assistance'.
          </h5> 
        </div>
      </div>
    </div>
    </>
  )
}

export default AboutPage