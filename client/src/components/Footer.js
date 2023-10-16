import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import { IoMdArrowRoundForward } from 'react-icons/io';
import { FaInstagram, FaFacebookF, FaTiktok } from 'react-icons/fa';
import image from '../images/FooterImage.jpg';

const Section = styled.section`
background-image: url(${image});
  color: #fff;
  width: 100%; 
  padding: 1rem calc((100vw - 1300px) /2 ); 
  backgroundImage: "../images/FooterImage.jpg"
  position: sticky;
  margin-top: 0;
  border-style: inset;
  border-width: 15px;
  border-height: 15px;
  
`;

const Container = styled.div`
  width: 100%; 
  
`;

const FooterTop = styled.div`
  flex-direction: row; 


  @media screen and (max-width: 768px) {
    flex-direction; column
  }
`;

const Quote = styled.div`
  flex: 1;


  h3 {
    font-size: clamp(2rem, 8vw, 5rem);
    text-align: center;
  }
`;

const FooterInfo = styled.div`

  line-height: 3;
  display: flex;
  flex-direction: column;


  align-items: center;
  text-align: center;

  a {
    color: #fff;
    text-decoration: none;
  }

  @media screen and (max-width: 768px) {
    padding: 0rem 0rem;
  }
`;

const FooterBottom = styled.div`
  display: flex; 
 

  @media screen and (max-width: 768px) {
    flex-direction: column;
  } 
`;

const SocialIcons = styled.div`
  display: flex; 
  width: 50%;
  margin-left: 50px;
  padding-bottom: 15px;

  @media screen and (max-width: 768px) {
    margin-bottom: 1rem;
    width: 100%; 
  }
`;

const Icons = css`
  font-size: clamp(1rem, 6vw, 2rem); 
  margin-left: 50px; 
  color: white;
`

const Instagram = styled(FaInstagram)`
  ${Icons}
`;

const Facebook = styled(FaFacebookF)`
${Icons}
`;

const TikTok = styled(FaTiktok)`
${Icons}
`;

const Contact = styled.div`
  width: 50%; 
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media screen and (max-width: 768px) {
    width: 100%;
    justify-content: flex-start;
  }
`;

const Footer = () => {
  return (
    <Section >
      <Container>
        <FooterTop>
          <Quote>
          <h4 style={{ textAlign: 'center' }}><b>Little Heaven Bed & Breakfast</b></h4>
            <h5 style={{ textAlign: 'center' }}><b>Address:  </b>1065 Tuckda Way </h5> <h5 style={{ textAlign: 'center' }}>Hamptonville NC, 27020</h5>
            <h5 style={{ textAlign: 'center' }}><b>Email:  </b>littleheavenlodge@gmail.com</h5>
            <h5 style={{ textAlign: 'center' }}><b>Cabin Phone Number:  </b>336-468-2300</h5>
            <h5 style={{ textAlign: 'center' }}><b>Boutique Phone Number:  </b>336-615-5173</h5>
          </Quote>
          <FooterInfo>
            <Link to="/littleheavenbedandbreakfast"><h4>View Our Rooms</h4></Link>
            <Link to="/story"><h4>Our Story</h4></Link>
          </FooterInfo>
        </FooterTop>
        <FooterBottom>
          <SocialIcons>
            <a href="//tiktok.com/@littleheavenbandb?lang=en" rel="noopener noreferrer" target="_blank">
              <TikTok />
            </a>
            <a href="//instagram.com/littleheavenbedbreakfast?igshid=NTc4MTIwNjQ2YQ==" rel="noopener noreferrer" target="_blank">
              <Instagram />
            </a>
            <a href="//facebook.com/littleheavenbedandbreakfast?mibextid=2JQ9oc" rel="noopener noreferrer" target="_blank">
              <Facebook />
            </a>
          </SocialIcons>
          <Contact>
            <Button to="/signup" style={{ color: 'white', marginLeft: '130px', backgroundColor: 'black'}}>
              Newsletter <IoMdArrowRoundForward />
            </Button>
          </Contact>
        </FooterBottom>
      </Container>
    </Section>

  )
}

export default Footer
