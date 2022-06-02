import NavbarComponent from '../components/Navbar'

function Mainpage(){
    return (
        <>
            <NavbarComponent/>
            <div className='companyPresentation d-flex flex-column justify-content-center'>
                <div className="companyVision container d-flex flex-column py-3">
                    <div className="companyVisionTitle fs-1 fw-bold text-dark">
                        Empowering the energy industry.
                    </div>
                    <div className = "d-flex justify-content-start mt-3">
                        <a href="/contact" class="btn btn-success w-lg-25 p-3 fs-5">Get in Touch</a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Mainpage;