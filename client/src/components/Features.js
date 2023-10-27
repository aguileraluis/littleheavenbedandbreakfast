import React from 'react';
import styled from 'styled-components';
import { Button } from './Button';
const Section = styled.section`
    padding: 1rem;
    display: flex;
    margin: auto;
    flex-direction:column; 
    justify-content: center;
    border-radius: 5px;

    @media screen and (max-width: 768px) {
       padding: 1rem;
       display: flex;
       margin: auto;
       padding: auto;
       justify-content: center;
    }
`;

const Container = styled.div`
    background: white; 
    margin: 1rem;
    padding: 1rem;
    position: relative;
    top: 0; 
    border-radius: 5px;

    @media screen and (max-width: 768px) {
        padding: auto;
        display: flex;
        margin: auto;
        justify-content: center;
        border-radius: 5px;
     }
`; 

const Wrap = styled.div`
    max-width: 1700px;
    margin: auto;

     @media screen and (max-width: 768px) {
        height: auto; 
        max-width: 1700px;
        margin: auto; 
        padding: auto;
    }
`;

const ColumnLeft = styled.div`
    position: relative;
    display: block;
    flex-wrap: wrap: 
    padding: 0px;
    justify-content: center

    @media screen and (max-width: 768px) {
        height: 800px; 
        width: 100%; 
        padding-right: -10px;
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

    @media screen and (max-width: 768px) {
        display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  height: auto;
  padding: auto;
  padding-top: 10px;
  align-items: center;
    }
`; 

const Features = ({image, imagetwo, totalamount, roomdescriptiontwo, roomname}) => {

    let color = ''

    if (roomname == "Love Suite ") {
        color = 'red';
    }

    if (roomname == "Joy Suite") {
        color = '#D56106'
    }
    if (roomname == "Hope Suite") {
        color = '#2206D5';
    }

    if (roomname == "Peace Suite") {
        color = '#95D8CE'
    }
    if (roomname == "Grace Suite") {
        color = '#CEA0E5';
    }

    if (roomname == "Faith Suite") {
        color = '#F3C731'
    }

    return (
        
        <Section style={{backgroundColor : `${color}`, marginTop: '5px'}}>
            <Container >
                <Wrap>
                    <ColumnLeft>
                        <Content
                            data-aos='fade-right'
                            data-aos-duration='1200'
                            data-aos-delay='300'
                            data-aos-anchor-placement='center'
                        >
                            <h2 style={{color: `${color}`}}>{roomname}</h2>
                            <p style={{color: `${color}`, textAlign: 'center'}}><b>Total : {totalamount}</b></p>
                            <Image style={{paddingLeft: '10px', borderRadius: '10%'}}
                          data-aos='fade-left'
                          data-aos-duration='1200'
                          data-aos-anchor-placement='center bottom'
                        src={image} 
                        alt="photographia"/>
                        
                    <Image style={{paddingLeft: '10px', borderRadius: '10%'}}
                          data-aos='fade-left'
                          data-aos-duration='1200'
                          data-aos-anchor-placement='center bottom'
                        src={imagetwo} 
                        alt="photographiados"/>
                        <br/>
                        <br/>
                            <h5 style={{color: 'black'}}>{roomdescriptiontwo}</h5>
                            <br/>
                        
                    
                  
                        </Content>
                    </ColumnLeft>
                </Wrap>
            </Container>
        </Section>
    )
}

export default Features
