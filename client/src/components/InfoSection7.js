import React from 'react';
import styled from 'styled-components';
import { Button } from './Button';
import imageFourteen from '../images/ImageFourteen.jpg'; 

const Section = styled.section`
    display: flex
    height: 4rem;
    background-image: url(${imageFourteen});
    justify-content: center;
    align-items: center;
    text-align: center;
`;

const Container = styled.div`
    padding: 2rem;
    height: 6%;
    display: grid;
    justify-content: center;
    align-items: center;
    text-align: center;
    grid-template-columns: 1fr;
    grid-template-rows: 500px;
  

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

const ColumnLeft = styled.div`
    flex-direction: column; 
    justify-content: center;
    align-items: flex-start;
    line-height: 1.4;
    
    h3 {
        margin-bottom: 1rem;
        font-size: clamp(1.5rem, 6vw, 2rem);
    }

    p {
        margin-bottom: 2rem;
    }
`;


const InfoSection7 = ({heading, paragraphOne, paragraphTwo, reverse, image, delay}) => {
  return (
    <Section>
        <Container>
            <ColumnLeft
                data-aos='fade-up'
                data-aos-duration='1000'
                data-aos-delay={delay}
                data-aos-anchor-placement='center center'
            >

                <img style={{height:"auto", width:"300px"}} src={image} alt="img" />           
               
            </ColumnLeft>
            {/* <ColumnRight reverse={reverse}>
                <img src={image} alt="room" 
                data-aos='zoom-out'
                data-aos-duration='1000'
                data-aos-delay={delay}
                data-aos-anchor-placement='center bottom'
                />
            </ColumnRight> */}
        </Container>
    </Section>
  )
}

export default InfoSection7
