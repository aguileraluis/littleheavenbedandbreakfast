import React from 'react'; 
import styled from 'styled-components';
import { Link } from 'react-router-dom'; 
import { IoMdArrowRoundForward } from 'react-icons/io'; 
import HomeOne from "../images/HomeOne.jpg";
import HomeTwo from "../images/HomeTwo.jpg";
import imageFourteen from "../images/ImageFourteen.jpg";

const Section = styled.section`
    width: 100%;
    height: 100%; 
    padding: 5rem calc((100vw - 1300px) / 2);
    background-image: url(${imageFourteen});
    margin-right: 0;
`; 

const Container = styled.div`
    height: '100%;
    width: '100%';
    padding: 2rem;


`;

const Heading = styled.div`
    font-size: 1.5rem;
    padding: 2rem 1rem;
    margin-bottom: 40px;

    @media screen and (max-width: 768px) {
        text-align: start;
    }
`;

const InfoRow = styled.div`
    display: flex;
    flex-direction: row;
    padding: 1rem 0rem;

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`;

const InfoWrap = styled.div`
    padding: 0rem 1rem;
    min-height: 550px;
    height: 100%;


    h2 {
        font-size: 90px;
    }

    @media screen and (max-width: 768px) {
        margin-bottom: 1rem;
`;

const Image = styled.img`
    width: 100%; 
    height: 100%;
    max-width: 600px;
    max-height: 600px; 
    object-fit: cover; 
    margin-bottom: 1rem;
`;

const InfoLink = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #000d1a;
   
    

`
const Arrow = styled(IoMdArrowRoundForward)`
    margin-left: 10px;
`;

const Listings = () => {
  return (
    <Section style={{backgroundColor: 'blue', marginRight: '0'}}>
        <Container>
       <Heading style={{textAlign: 'center'}}>
                <h2
                data-aos='fade-right'
                data-aos-duration='1000'
                data-aos-anchor-placement='center bottom'
                >A stay to remember</h2>
            </Heading>
           

            <InfoRow >
                <InfoWrap 
                 data-aos='fade-right'
                 data-aos-duration='1000'
                 data-aos-anchor-placement='center bottom'
                >
                    <Image src={HomeOne} alt="home" />
                    <InfoLink to="/homes">
                        <h3>View our amazing rooms</h3>
                        <Arrow />
                    </InfoLink>
                </InfoWrap>
                <InfoWrap
                data-aos='zoom-out-up'
                data-aos-duration='1200'
                data-aos-anchor-placement='center bottom'>
                    <Image src={HomeOne} alt="home" />
                  
                    <InfoLink to="/homes">
                        <h3>Explore our delicious menu</h3>
                        <Arrow />
                    </InfoLink>
                </InfoWrap>
                <InfoWrap
                 data-aos='zoom-out-down'
                 data-aos-duration='1200'
                 data-aos-anchor-placement='center bottom'>
                    <Image src={HomeOne} alt="home" />
                  
                    <InfoLink to="/homes">
                        <h3>View Details</h3>
                        <Arrow />
                    </InfoLink>
                </InfoWrap>
                <InfoWrap
                 data-aos='zoom-out-down'
                 data-aos-duration='1300'
                 data-aos-anchor-placement='center bottom'>
                    <Image src={HomeTwo} alt="home" />
                  
                    <InfoLink to="/homes">
                        <h3>View Details</h3>
                        <Arrow />
                    </InfoLink>
                </InfoWrap>
              
             
            </InfoRow>
        </Container>
    </Section>
    
  )
}

export default Listings;