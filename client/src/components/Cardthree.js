import React from 'react'; 
import styled from 'styled-components';
import { Link } from 'react-router-dom'; 
import { IoMdArrowRoundForward } from 'react-icons/io'; 
import HomeOne from "../images/HomeOne.jpg";
import HomeTwo from "../images/HomeTwo.jpg";
import imageFourteen from "../images/ImageFourteen.jpg";

export default function Cardthree() {
    <article className="room">
        <div className="img-container">
            <img src={HomeOne} alt="single card"/>
            <div className="price-top">
                <h6>This is it</h6>
                <p>Como se siente?</p>
            </div>
            <Link to={'/packages'} className="btn-primary room-link">
                View More
            </Link>
        </div>
        <p className="room-info">This is what its about</p>
    </article>
}
