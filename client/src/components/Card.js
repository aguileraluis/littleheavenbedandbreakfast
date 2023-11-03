import React from 'react'; 
import styled from 'styled-components';
import { Link } from 'react-router-dom'; 
import { IoMdArrowRoundForward } from 'react-icons/io'; 
import HomeOne from "../images/HomeOne.jpg";
import HomeTwo from "../images/HomeTwo.jpg";
import imageFourteen from "../images/ImageFourteen.jpg";

//// Connecting with MailChimp
// curl --request GET \
// --url 'https://us21.api.mailchimp.com/3.0/' \
// --user 'anystring:9780fa5fb0bb2e1ab596756b9db9803d-us21
// 9780fa5fb0bb2e1ab596756b9db9803d-us21

export default function Card() {
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
