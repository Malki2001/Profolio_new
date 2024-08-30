import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import contactImg from '../assets/img/contact-img.svg';

function Contact() {
    const formInitialDetails = {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
    };

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText('Sending...');
        let response = await fetch("http://localhost:3000/contact", {
            method: 'POST',
            headers: {
                "Content-type": "Application/json;charset=utf-8",
            },
            body: JSON.stringify(formDetails),
        });
        setButtonText('Send');
        let result = await response.json();
        setFormDetails(formInitialDetails);

        if (result.code === 200) {
            setStatus({ success: true, message: 'Message sent successfully' });
        } else {
            setStatus({ success: false, message: 'Something went wrong. Please try again later' });
        }
    };

    return (
        <section className='contact' id='contact'>
            <Container>
                <Row className='align-items-center'>
                    <Col md={5}>
                        <img src={contactImg} alt='Contact-Us' />
                    </Col>
                    <Col md={7}>
                        <h2>Get In Touch</h2>

                        <Col className='contact-info'>

                        <Col md={8} className='contact-item'>
                        <div className='contact-icon'>
                            <FaEnvelope />
                        </div>
                        <a href="mailto:your-email@example.com">malkiyasodhara18@gmail.com</a>
                       </Col>

                       <Col md={4} className='contact-item'>
                        <div className='contact-icon'>
                            <FaPhone />
                        </div>
                        <a href="tel:+123456789">+94 77 107 2446</a>
                    </Col>
                    <Col md={6} className='contact-item'>
                        <div className='contact-icon'>
                            <FaMapMarkerAlt />
                        </div>
                        <span>Ahangama,Galle,Sri Lanka</span>
                    </Col>

                    
                </Col>

                        {/* <form onSubmit={handleSubmit}>
                            <Row>
                                <Col sm={6} className='px-1'>
                                    <input type='text' value={formDetails.firstName} placeholder='Name' onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                                </Col>
                                <br/>
                                <Col sm={6} className='px-1'>
                                    <input type='email' value={formDetails.email} placeholder='Email' onChange={(e) => onFormUpdate('email', e.target.value)} />
                                </Col>
                                <br/>
                                <Col>
                                    <textarea rows={6} value={formDetails.message} placeholder='Message' onChange={(e) => onFormUpdate('message', e.target.value)} />
                                    <button type='submit'><span>{buttonText}</span></button>
                                </Col>
                                {status.message &&
                                    <Col>
                                        <p className={status.success === false ? 'danger' : 'success'}>{status.message}</p>
                                    </Col>
                                }
                            </Row>
                        </form> */}
                    </Col>
                </Row>
               
            </Container>
        </section>
    );
}

export default Contact;
