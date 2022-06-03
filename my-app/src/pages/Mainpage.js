import { Toast } from 'react-bootstrap';
import NavbarComponent from '../components/Navbar'

function Mainpage(){
    let search = window.location.search;
    let params = new URLSearchParams(search);
    let contact = params.get('contact');
    // console.log(contact);
    return (
        <>
            <NavbarComponent/>
            { (contact) ?
                <div class="companyPresentation">
                    <Toast>
                        <Toast.Header>
                            <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                            <strong className="me-auto">Bootstrap</strong>
                        </Toast.Header>
                        <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
                    </Toast>
                </div>
                :
                <div className='companyPresentation d-flex justify-content-center align-items-center'>
                    <div className="companyVision container d-flex flex-column py-3">
                        <div className="companyVisionTitle fs-1 fw-bold text-dark">
                            Keep energy moving.
                        </div>
                        <div className = "d-flex justify-content-start mt-3">
                            <a href="/contact" class="btn btn-success w-lg-25 p-3 fs-5">Get in Touch</a>
                        </div>
                    </div>
                </div>
            }
            
        </>
    );
}

export default Mainpage;