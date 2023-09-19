import React from 'react';
import CardItem from './Carditemtwo';
import './Cardstwo.css';
import image from '../images/loveten.jpg';
import image2 from '../images/loveeleven.png';
import image3 from '../images/lovetwelve.jpg';
import image4 from '../images/lovethirteen.jpg';


function Cardstwo() {
    return (
        <div className="cards">
            <h1>Yadkin Valley Wedding & Engagement Packages!</h1>
            <h2>Please call the lodge for pricing and more information.</h2>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src={image}
                            text="Explore the beautiful pond on the 10 acres of land"
                            texttwo="Couples Anniversary"
                    
                        />

                        <CardItem
                            src={image2}
                            text="Planning an engagement or recently engaged? Congratulations! Call us now!"
                            texttwo="Engagement Celebration"
        
                        />
                    </ul>
                    <br/>


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
                    <br/>
                    <ul className="cards__items">
                        <CardItem
                            src={image3}
                            text="Are you wanting to give your lover a romantic getaway?"
                            texttwo="Romantic Couple Getaway"
                            
                        />

                        <CardItem
                            src={image4}
                            text="Plan your wedding here and enjoy days in nature surrounded by the mountains!"
                            texttwo="Newly Weds Package"
                            
                        />
                    </ul>

                </div>
            </div>
        </div>
    )
}

export default Cardstwo