import React from 'react';
import CardItem from './Carditemtwo';
import './Cardstwo.css';
import image from '../images/historic.jpg';
import image2 from '../images/shopping.jpg';
import image3 from '../images/golfing.jpg';
import image4 from '../images/spa.jpg';
import image5 from '../images/frontyard.png';
import image6 from '../images/festivals.jpg';


function Cardsthree() {
    return (
        <div className="cards">
            <h1>There is something to do in the Yadkin Valley for everyone!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                    <div style={{display: 'relative'}} className="cards_container">
                        <a href="https://www.yadkinarts.org/">Arts</a>
                        </div>
                        <CardItem
                            src={image5}
                            text="From Performing Arts to Visual Arts, Yadkin Valley has it all"
                            label="Arts"
    
                        />
                        
                        <div style={{display: 'relative'}} className="cards_container">
                        <a href="https://www.yadkinvalleync.com/attractions/?categories=&subcategories=shopping&town=">Shopping</a>
                        </div>
                        <CardItem
                            src={image2}
                            text="Explore local shopping in all the small shops around the Valley"
                            label="Shopping"
                      
                        />
<div style={{display: 'relative'}} className="cards_container">
                        <a href="https://www.golflink.com/golf-courses/nc/yadkinville/">Golf</a>
                        </div>
                        <CardItem
                            src={image3}
                            text="Home to some beautiful golf courses"
                            label="Golf"
                           
                        />
                    </ul>
                    <br />


                    {/* <ul className="cards__items">
                        <CardItem
                            src={image3}
                            text="Explore the hidden waterfall deep inside the Amazon Jungle"
                            label="Adventure"
                            path="/home"
                        />

                        <CardItem
                            src={image4}
                            text="Travel through the Islands of Balie in a Private Cruise"
                            label="Luxury"
                            path="/services"
                        />

                        <CardItem
                            src={image5}
                            text="Travel through the Islands of Balie in a Private Cruise"
                            label="Luxury"
                            path="/services"
                        />
                    </ul> */}
                    <br />
                    <ul className="cards__items">
                    <div style={{display: 'relative'}} className="cards_container">
                        <a href="https://visittheyadkinvalley.com/what-to-do/recreation-relaxation/">Spa</a>
                        </div>
                        <CardItem
                            src={image4}
                            text="Want to enjoy a day at the spa?"
                            label="Spas"
                      
                        />
<div style={{display: 'relative'}} className="cards_container">
                        <a href="https://visittheyadkinvalley.com/what-to-do/historic-attractions/">Historic Sites</a>
                        </div>
                        <CardItem
                            src={image}
                            text="Historical sites are within driving distances"
                            label="Historical"
                       
                        />
                        <div style={{display: 'relative'}} className="cards_container">
                        <a href="https://www.yelp.com/search?cflt=festivals&find_loc=Yadkin+County%2C+NC#:~:text=Top%2010%20Best%20Festivals%20Near%20Yadkin%20County%2C%20North,Balloon%20Fest%203.0%20%2828%20reviews%29%20...%20More%20items">Festivals</a>
                        </div>

<CardItem
                            src={image6}
                            text="Every year we have tons of festivals and shows!"
                            label="Festivals"
                      
                        />

                    </ul>
    

                </div>
            </div>
        </div>
    )
}

export default Cardsthree