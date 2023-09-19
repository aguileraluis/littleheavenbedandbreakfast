import React from 'react';
import styled from 'styled-components';
import { Button } from './Button';
const Section = styled.section`
    padding: 2rem 0rem;
    display: flex;
    margin: 30px;
    flex-direction:column; 
    justify-content: center;
    border-radius: 5px;

    @media screen and (max-width: 768px) {
       padding: 1rem;
       display: flex;
       margin: 0;
       justify-content: center;
       border-radius: 5px;
    }
`;

const Container = styled.div`
    background: white; 
    margin: 2rem;
    padding: 1rem;
    position: relative;
    top: 0; 
    border-radius: 5px;

    @media screen and (max-width: 768px) {
        padding: 1rem;
        display: flex;
        margin: 0;
        justify-content: center;
        border-radius: 5px;
     }
`; 

const Wrap = styled.div`
    max-width: 900px;
    margin: 2px auto;

    @media screen and (max-width: 768px) {
        max-width: 700px;
        margin: 0;
     }
`;

const ColumnLeft = styled.div`
    position: relative;
    display: block;
    flex-wrap: wrap: 
    padding: 0px;
    justify-content: center

    @media screen and (max-width: 768px) {
        height: 200px; 
        -65px; 
        width: 80%; 
        margin: 0; 
    }
`;

const ColumnRight = styled.div`
    position: absolute; 
    top: -80px; 
    right: 0; 
    max-width: 850px; 
    height: 140%; width: 45%; 
    padding-left: 1rem; 

    @media screen and (max-width: 768px) {
        height: 320px; 
        -65px; 
        width: 80%; 
        margin: 0 auto; 
        left: 0;
    }
`;

const Content = styled.div`
    flex: 0 0 50%; 

    @media screen and (max-width: 768px) {
        flex: 0 0 100%; 
        max-width: 100%; 
        margin-top: 5px; 
    }
`; 

const Image = styled.img`
    height: auto; 
    width: 50%;
    border-radius: 10px;
    object-fit: cover; 
`; 

const Features = ({image, imagetwo, totalamount, roomdescriptiontwo, roomname}) => {

    let color = ''

    if (roomname == "Love Guest Room") {
        color = 'red';
    }

    if (roomname == "Joy Guest Room") {
        color = '#D56106'
    }
    if (roomname == "Hope Guest Room") {
        color = '#2206D5';
    }

    if (roomname == "Peace Guest Room") {
        color = '#95D8CE'
    }
    if (roomname == "Grace Guest Room") {
        color = '#CEA0E5';
    }

    if (roomname == "Faith Guest Room") {
        color = '#F3C731'
    }

    return (
        
        <Section style={{backgroundColor : `${color}`, marginTop: '20px', marginRight: '2px', marginLeft: '2px'}}>
            <Container >
                <Wrap>
                    <ColumnLeft>
                        <Content
                            data-aos='fade-right'
                            data-aos-duration='1200'
                            data-aos-delay='300'
                            data-aos-anchor-placement='center'
                        >
                            <h1 style={{color: `${color}`}}>{roomname}</h1>
                        
                            <h5 style={{color: `${color}`}}>{roomdescriptiontwo}</h5>
                            <br/>
                        
                    <p style={{color: `${color}`, textAlign: 'center'}}><b>Total : {totalamount}</b></p>
                    <Image style={{padding: '10px', borderRadius: '10%'}}
                          data-aos='fade-left'
                          data-aos-duration='1200'
                          data-aos-anchor-placement='center bottom'
                        src={image} 
                        alt="photographia"/>
                        
                    <Image style={{padding: '10px', borderRadius: '10%'}}
                          data-aos='fade-left'
                          data-aos-duration='1200'
                          data-aos-anchor-placement='center bottom'
                        src={imagetwo} 
                        alt="photographiados"/>
                        </Content>
                    </ColumnLeft>
                </Wrap>
            </Container>
        </Section>
    )
}

export default Features
