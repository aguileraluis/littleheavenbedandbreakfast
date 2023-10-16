import React from 'react'; 
import styled from 'styled-components';
import { Link } from 'react-router-dom'; 
import { IoMdArrowRoundForward } from 'react-icons/io'; 
import HomeOne from "../images/dining.jpg";
import HomeTwo from "../images/thingstodo.jpg";
import HomeThree from "../images/localwine.jpg";
import imageFourteen from "../images/ImageFourteen.jpg";


const Section = styled.section`
    width: 100%;
    height: auto; 
    padding: 4rem calc((100vw - 1400px) / 2);
    background-image: url(${imageFourteen});
    text-align: center,
`; 

const Container = styled.div`
align-content: center;
    height: 100%;
    width: 100%';
    padding: 2rem;
    margin: 2rem;
    position: relative;
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
text-align: center;
    display: inline-flex;
    flex-direction: row;
    padding-right: 14rem;

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`;

const InfoWrap = styled.div`
text-align: center;
    padding-right: 7rem;
    margin: 2rem;
    min-height: 850px;
    height: 100%;

    h4 {
        font-size: 90px;
        margin-bottom: 1rem;
        font-weight: 400;
    }

    @media screen and (max-width: 768px) {
        margin-bottom: 1rem;
    }

    h2 {
        font-size: 90px;
        color: darkorange;
    }

    h3 {
        color: darkorange;
    }
`;

const Image = styled.img`
text-align: center;
    width: 200%; 
    height: 100%;
    position: inline-block;
    padding-right: 70px;
    max-width: 1800px;
    max-height: 800px; 
    object-fit: cover; 
    margin-bottom: 1rem;
    margin: 30px;
`;

const InfoLink = styled(Link)`
text-align: center;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: orange;
    padding-right: 10px;

`
const Arrow = styled(IoMdArrowRoundForward)`
    margin-left: 10px;
`;

const Packages = () => {
  return (
    <Section style={{backgroundColor: 'blue'}}>
        <Container >
        <div>
                <section>
                    <div>
                        <h2>Explore the Yadkin Valley Wine Country</h2>
                        <br/>
                        <h4 style={{textDecoration: 'italics', textAlign: 'center'}}>Whether you want to go hiking, biking, fishing, boating, dining, dancing, or go shopping, the Yadkin Valley will have something for everyone.</h4>
                    </div>
                </section>
            </div>
        </Container>
        <Container>
           
            <Heading style={{textAlign: 'center'}}>
                <h2
                data-aos='fade-right'
                data-aos-duration='1000'
                data-aos-anchor-placement='center bottom'
                >A stay to remember</h2>
            </Heading>
          
            <InfoRow>
                <InfoWrap
                 data-aos='fade-right'
                 data-aos-duration='1200'
                 data-aos-anchor-placement='center bottom'
                >
                    <Image src={HomeOne} alt="home" />
               
                    <h3 style={{textAlign:'center'}}>Yadkin Valley Dining</h3>
                    <InfoLink to="/dining">
                        <h2>Explore</h2>
                        <Arrow />
                    </InfoLink>
                </InfoWrap>
    
                <InfoWrap
                data-aos='zoom-out-up'
                data-aos-duration='1200'
                data-aos-anchor-placement='center bottom'>
                    <Image src={HomeTwo} alt="home" />
                    <h3 style={{textAlign:'center'}}>Things to do</h3>
                    <InfoLink to="/thingstodo">
                    <h2>Explore</h2>
                        <Arrow />
                    </InfoLink>
                </InfoWrap>
                <InfoWrap 
                 data-aos='zoom-in-down'
                 data-aos-duration='1300'
                 data-aos-anchor-placement='center bottom'>
                    <Image src={HomeThree} alt="home" />
                    <h3 style={{textAlign:'center'}}>Local Wineries</h3>
                    <InfoLink to="/localwineries">
                    <h2>Explore</h2>
                        <Arrow />
                    </InfoLink>
                </InfoWrap>
            </InfoRow>
        </Container>
    </Section>
    
  )
}

export default Packages;
