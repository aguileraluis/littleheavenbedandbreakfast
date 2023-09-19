import React from 'react';
import styled from 'styled-components';



const Section = styled.section`
    display: flex
    height: 4rem;
    background-color: orange;
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
    padding: 1rem 2rem; 
    
    h3 {
        margin-bottom: 1rem;
        font-size: clamp(1.5rem, 6vw, 2rem);
    }

    p {
        margin-bottom: 2rem;
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

const InfoSection2 = ({heading, paragraphOne, paragraphTwo, reverse, delay}) => {
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
                <h3 style={{marginTop: '2rem'}}>{heading}</h3>
                <h4>{paragraphTwo}</h4>
                <br/>
           
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

export default InfoSection2
