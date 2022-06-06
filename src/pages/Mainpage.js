import { useState } from 'react';
import { Toast, ToastContainer } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import NavbarComponent from '../components/Navbar';

function Mainpage(){
    const location = useLocation();
    let message = location?.state?.message;
    // console.log(message);
    const [aux, setAux] = useState(true);

    return (
        <>
            <NavbarComponent/>
            <div className='companyPresentation d-flex flex-column justify-content-center'>
                <div className="companyVision container d-flex flex-column py-3">
                    <div className="companyVisionTitle fs-1 fw-bold text-dark">
                        Keep energy moving.
                    </div>
                    <div className = "d-flex justify-content-start mt-3">
                        <a href="/contact" className="btn btn-success w-lg-25 p-3 fs-5">Get in Touch</a>
                    </div>
                </div>
            </div>
            {
                message && 
                <ToastContainer className="toastAlert container" position="top-end">
                    <Toast show={aux} onClose={() => setAux(false)}>
                        <Toast.Header>
                            <strong className="toastAlertTitle me-auto">Message</strong>
                        </Toast.Header>
                        <Toast.Body>{message}</Toast.Body>
                    </Toast>
                </ToastContainer>
            }
        </>
    );
}

export default Mainpage;