import React from 'react';
import styled from 'styled-components';
import { menuData } from '../data/MenuData';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa'

const DropdownContainer = styled.div`
    position: absolute; 
    z-index: 999;
    width: 100%; 
    height: 100%;
    background: #cd853f;
    display: grid;
    align-items: center;
    justify-content: center;
    align-content: center;
    top: 0;
    left: 0;
    right: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({isOpen}) => (isOpen ? '1' : '0')};
    top: ${({isOpen}) => (isOpen ? '0' : '-100%')};
`

const Icon = styled.div`
    position: relative;
    right: 4rem;
    left: 1.5;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`;

const CloseIcon = styled(FaTimes)`
    color: #000d1a;
`;

const DropdownWrapper = styled.div`
    text-align: center
`;

const DropdownMenu = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 80px); 
    text-align: center;
    justify-content: center;
    align-items: center;
    margin-bottom: 4rem;
    margin-right: 0rem;

    @media screen and (max-width 480px) {
        grid-template-rows: repeat(4, 60px)
    }
`;

const DropdownLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #fff;
    font-size: 1.5rem;
    text-decoration: none; 
    lsit-style: none;
    color: #fff;
    cursor: pointer;
    transition; 0.2s ease-in-out;
    text-align: center;

    &:hover{
        color: #000d1a;
    }
`;

const BtnWrap = styled.div`
    display; flex; 
    justify-content: center !important;
    align-items: center;
    text-align: center;
    margin-right: 0rem;
`;

const Dropdown = ({isOpen, toggle}) => {
    return (
        <DropdownContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>

            <DropdownWrapper>
                <DropdownMenu>
                    {menuData.map((item, index) => (
                        <DropdownLink to={item.link} key={index}>
                            {item.title}
                        </DropdownLink>
                    ))}
                </DropdownMenu>
                <BtnWrap style={{justifyContent: 'center'}}>
                    <Button primary="true" round="true" big="true" to="/signup" style={{ textDecoration: 'none'}}>
                    Newsletter 
                    </Button>
                </BtnWrap>
            </DropdownWrapper>
        </DropdownContainer>
    )
}

export default Dropdown
