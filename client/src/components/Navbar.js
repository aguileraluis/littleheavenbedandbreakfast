import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components'
import { Link, useLocation } from 'react-router-dom';
import { menuData } from '../data/MenuData'
import { Button } from './Button';
import { FaBars } from 'react-icons/fa';
import logo from '../video/breakfast.png';
import image from '../images/FooterImage.jpg';

const Nav = styled.nav`
    height: 100px; 
    display: block;
    // background-color: rgba(280, 200, 29, 0.897);
    // background-color: rgba(237, 167, 29, 5);
    background-image: url(${image});
    justify-content: space-between;
    z-index: 100;
    position: sticky;
    width: 100%;
    border-style: inset;
    border-width: 15px;
    border-height: 15px;
    border-color: rgba(237, 167, 29, 0.897); 
    right: 0;
`;

const NavLink = css`
    color: white;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    text-decoration: none;
    font-size: 30px;
    &:hover {
        color: orange;
    }
`



const Logo = styled(Link)`
${NavLink}
color: #fff;
font-style: italic;
font-weight: bold;
margin-top: 30px;
margin-left: 20px;
position: sticky;
`;

const MenuBars = styled(FaBars)`
    display: none;
    color: rgba(237, 167, 29, 0.897);

    @media screen and (max-width: 768px) {
        display: block;
        background-image: url(${FaBars});
        background-size: contain;
        height: 40px;
        width: 40px; 
        cursor: pointer;
        position: absolute; 
        top: 0;
        right: 0;
        transform: translate(-50%, 25%);
        color: white;
    }
`;

const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -48px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

const NavMenuLinks = styled(Link)`
    color: white;
    ${ NavLink }
`;

const NavBtn = styled.div`
    display: flex;
    align-items: center;
    margin-right: 24px;
    text-decoration: none;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;


const Navbar = ({toggle}) => {

    const [Navbar, setNavbar] = useState(false); 
    const location = useLocation(); 

    const changeBackground = () => {
        if(window.pageYOffset >= 60) {
            setNavbar(true); 
        } else {
            setNavbar(false); 
        }
    }

    useEffect(() => {
        const watchScroll = () => {
            window.addEventListener('scroll', changeBackground) 
        }

        watchScroll(); 

        return () => {
            window.removeEventListener('scroll', 
            changeBackground); 
        };
    }, []); 

    let style = {
        display: location.pathname !== '/landing' ? 'flex' : 'relative',
        transition: '0.4s'
    }

    return (
        <Nav style={style}>
            <Logo to="/yadkinvalleywinecountry"><img src={logo} alt="logo" style={{position: "fixed", height: "170px", marginLeft: "80px"}}/></Logo>
            <MenuBars style={{marginRight: '40px'}}onClick={toggle}/>
            <NavMenu>
                { menuData.map((item, index) => (
                    <NavMenuLinks to={item.link} key={index}>
                        { item.title }
                    </NavMenuLinks>
                ))}
            </NavMenu>

            <NavBtn >
            <Button className='newsletter' to='/signup' primary="true">
                    <h6 style={{textDecoration: 'none'}} className='newsletter'>Newsletter</h6>
            </Button>
            </NavBtn>
        </Nav>
    )
}; 

export default Navbar; 
//     <div>
//       <nav className="navbar navbar-expand-lg">
//         <a className="navbar-brand" href="/"><img className="logoimg" src={logo} alt="logo"/></a>
//         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon"> </span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav mr-5">

//                 <a className="navbar-brand" href="/login">*</a> 
//           </ul>
//         </div>
//       </nav>
//     </div>
//   )
// }

// export default Navbar

// import React, { Component } from 'react';
// import logo from '../video/breakfast.png';
// import { FaAlignRight } from 'react-icons/fa';
// import { NavLink } from 'react-router-dom';

// export default class Navbar extends Component {

//     state = {
//         isOpen: false,
//     }

//     handleToggle = () => {
//         this.setState({ isOpen: !this.state.isOpen })
//     }


//     render() {

//         const activePage = window.location.pathname;
//         console.log(activePage);

//         const navLinks = document.querySelectorAll('nav-links a').forEach(link => {
//             if (link.href.includes(`${activePage}`)) {
//                 link.classList.add('active');
//             }
//         })

//         return (
//             <nav className="navbar">
//                 <div className="navbar-header">

//                     <NavLink to="/landing">
//                         <img style={{ position: 'absolute', height: "200px"}} src={logo} alt="bedandbreakfast" />
//                     </NavLink>
//                     <button
//                         type="button"
//                         className="nav-btn"
//                         onClick={this.handleToggle}
//                     >
//                         <FaAlignRight className='nav-icon' />
//                     </button>


//                     <ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}>
                       
//                         <li>
//                             <NavLink to="/Lodge" style={{ fontSize: '25px', fontWeight: 'bold' }}>The Lodge</NavLink>
//                         </li>

//                         <li>
//                             <NavLink to="/Home" style={{ fontSize: '25px', fontWeight: 'bold' }}>Lodging</NavLink>
//                         </li>
//                         <li>
//                             <NavLink to="/Weddings" style={{ fontSize: '25px', fontWeight: 'bold' }}>Weddings</NavLink>
//                         </li>
//                         <li>
//                             <NavLink to="/Packages" style={{ fontSize: '25px', fontWeight: 'bold' }}>Packages</NavLink>
//                         </li>
//                         <li>
//                             <NavLink to="/Specialevents" style={{ fontSize: '25px', fontWeight: 'bold' }}>Special Events</NavLink>
//                         </li>
//                         <li>
//                             <NavLink to="/login" style={{ fontSize: '25px', fontWeight: 'bold' }}>*</NavLink>
//                         </li>



//                     </ul>

//                 </div>
//             </nav>
//         )
//     }
// }

