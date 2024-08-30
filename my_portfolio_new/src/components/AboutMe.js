import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import colorSharp from '../assets/img/color-sharp.png';
import profile from '../assets/img/profile.jpg';



function AboutMe() {
  const [showMore, setShowMore] = useState(false);

  const handleReadMore = () => {
    setShowMore(!showMore);
  };

  return (
    <section className='skill' id='about'>
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>About Me</h2>
              {/* <div className="about-img">
                <img src={htmlIcon} alt='HTML' />
          
              </div> */}



              <br/>
              <p style={{ fontSize: '20px' }}>
                I am Malki Yasodhara ,a Computer Science Undergraduate of University of Colombo School of Computing.
                <br/>
                As a dedicated Web and Mobile Developer, I have a solid background in creating dynamic, responsive applications. I embrace challenges and am always keen to explore and master new technologies, ensuring I remain up-to-date with the latest industry advancements. My continuous learning mindset and quick adaptability enable me to take on diverse development projects and make a valuable impact within innovative teams.


        
              </p>

              {/* {showMore && (
                <p>
                  I believe that a well-designed website or mobile app should not only look visually appealing but also provide a smooth and enjoyable interaction for users. When starting a new project, I thoroughly research and analyze the target audience and the client's specific requirements. This enables me to tailor my designs to meet their expectations and deliver a unique online presence that aligns with their brand identity.
                </p>
              )}

              <button className='read-more' onClick={handleReadMore}>
                <span>{showMore ? 'Show Less' : 'Read More'}</span>
              </button> */}
            </div>
          </Col>
        </Row>
      </Container>

      <img className='background-image-left' src={colorSharp} alt="Background Decoration" />
    </section>
  );
}

export default AboutMe;
