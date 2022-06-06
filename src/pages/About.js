import React from 'react'
import NavbarComponent from '../components/Navbar'
import { BiTargetLock } from 'react-icons/bi';
import { RiTeamFill } from 'react-icons/ri';

function AboutPage() {
  return (
    <>
    <NavbarComponent/>
    <div className="aboutPage row">
      <div className="col-lg-6 aboutPageHeader d-flex flex-column justify-content-center align-items-center">
        <div className="aboutPageIcon">
          <RiTeamFill size={70} color="white"/>
        </div>
        <div className="aboutPageHeaderTitle">
          <h1 className="fw-bold text-white">Who we are.</h1>
        </div>
        <div className="aboutPageHeaderText container text-center mt-3">
          <h5 className="text-white">
            We want to empower the energy industry through the use
            of technology, providing cleaner and more profitable means of production.
          </h5>
        </div>
      </div>
      <div className="col-lg-6 mt-lg-0 mt-4 mainGoal d-flex flex-column justify-content-center align-items-center">
        <div className="mainGoalIcon">
          <BiTargetLock size={70}/>
        </div>
        <div className="mainGoalHeader">
          <h1 className="fw-bold">Our goal.</h1>
        </div>
        <div className="mainGoalText container text-center mt-3">
          <h5>
            Our aim is to help solve the world’s energy problems by providing members 
            of the energy industry with the necessary tools to help them
            manage their assets.
          </h5>
        </div>
      </div>
    </div>
    <div className="teamMembers mt-5">
      <div className="teamMembersHeader d-flex justify-content-center">
        <h1 className="fw-bold">Meet the team.</h1>
      </div>
      <div className="teamMembersPhoto mt-3">
        <img className="img-fluid" src="../images/team.jpg" alt="Team"></img>
      </div>
    </div>
    <div className="ourClient mt-5">
      <div className="ourClientHeader">
        <h1 className="fw-bold text-center">Our client.</h1>
      </div>
      <div className="ourClientDescription mt-3 d-flex justify-content-center flex-column align-items-center">
        <div className="ourClientLogo">
          <a href="https://www.deus.ai/">
            <img className="img-fluid" src="../images/client.jpg" alt="Client"></img>
          </a>
        </div>
        <div className="ourClientText mt-3 mb-5 container">
          <h5 className="text-center">
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