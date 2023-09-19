import React from 'react';
import styled from 'styled-components';
import { Button } from './Button';
import imageFourteen from '../images/ImageFourteen.jpg'; 

const Section = styled.section`
    display: inline-block;
    height: auto;
    background-image: url(${imageFourteen});
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-left: 4rem;

    @media screen and (max-width: 768px) {
        display: inline-block;
        position: relative;
        grid-template-columns: 1fr;
        justify-content: center;
        align-items: center;
        text-align: center;
        margin-right: 2rem;
        margin-left: 0rem;

    }
`;

const Container = styled.div`
    padding: 1rem;
    height: auto;
    display: inline-block;
    justify-content: center;
    align-items: center;
    text-align: center;
    grid-template-columns: 1fr;
    grid-template-rows: 500px;
    margin-left: 4rem;
  

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        margin-right: 2rem;
        margin-left: 0rem;
    }
`;

const ColumnLeft = styled.div`
    flex-direction: column; 
    position: relative;
    display: inline-block;
    justify-content: center;
    align-items: center;
    line-height: auto;
    padding: 1rem;
    
    h3 {
        margin-bottom: 1rem;
        font-size: clamp(1.5rem, 6vw, 2rem);
    }

    p {
        margin-bottom: 2rem;
    }

    @media screen and (max-width: 768px) {
        display: inline-block;
        position: relative;
        grid-template-columns: 1fr;
    }
`;

// const ColumnRight = styled.div`
//     padding: 1rem 2rem;
//     order: ${({ reverse }) => (reverse ? '1' : '2')};
//     display: flex;
//     justify-content: center;
//     align-items: center;

//     @media screen and (max-width: 768px) {
//         order: ${({ reverse }) => (reverse ? '2' : '1')};
//     }

//     img {
//         width: 100%;
//         height: 100%;
//         object-fit: cover;
        

//         @media screen and (max-width: 768px) {
//             width: 90%; 
//             height: 90%;
//         } 
//     }
// `;

const InfoSection8 = ({heading, paragraphOne, paragraphTwo, reverse, image, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, delay}) => {
  return (
    <Section>
        <Container>
            <ColumnLeft
                data-aos='fade-up'
                data-aos-duration='1000'
                data-aos-delay={delay}
                data-aos-anchor-placement='center center'
            >
                <br/> 
                <br/>
                <img style={{margin:"5px", height:"auto", width:"300px"}} src={image} alt="img" />    
              
                <img style={{margin:"5px", height:"auto", width:"300px"}} src={image2} alt="img" /> 

                <img style={{margin:"5px", height:"auto", width:"300px"}} src={image3} alt="img" />   
    
                <img style={{margin:"5px", height:"auto", width:"300px"}} src={image4} alt="img" />            
             
                <img style={{margin:"5px", height:"auto", width:"300px"}} src={image5} alt="img" />            
                <img style={{margin:"5px", height:"auto", width:"300px"}} src={image6} alt="img" />            
                <img style={{margin:"5px", height:"auto", width:"300px"}} src={image7} alt="img" />            
                <img style={{margin:"5px", height:"auto", width:"300px"}} src={image8} alt="img" />            
                <img style={{margin:"5px", height:"auto", width:"300px"}} src={image9} alt="img" />            
                <img style={{margin:"5px", height:"auto", width:"300px"}} src={image10} alt="img" />            
                <img style={{margin:"5px", height:"auto", width:"300px"}} src={image11} alt="img" />            
                <img style={{margin:"5px", height:"auto", width:"300px"}} src={image12} alt="img" />            
                       
                <br/>
                <br/>
               
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

export default InfoSection8
