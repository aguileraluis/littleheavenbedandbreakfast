import React from 'react';
import Hero from '../components/Hero';
import { SliderDataSix } from '../data/SliderData';
import Packages from '../components/Packages';
import TextSection from '../components/TextSection';

const Packagesscreen = () => {
  return (
    <>
      <Hero slides={ SliderDataSix } />
      <Packages />
      <TextSection title="Little Heaven Bed & Breakfast Reviews" paragraph="- Hidden gem!! My husband and I stayed here for a much needed weekend getaway - we thought it looked cute online, but our expectations were blown away! It's in a great location, 10 minutes from nearby wineries and <15 min from the cute downtown area of Elkin. We stayed in the 'Love' room, which was luxurious and spacious, with gorgeous views all around. The bed was super comfortable, and amenities were top notch (snacks upon arrival, beautiful fireplace, large TV, quality towels, robes, various bathroom items, etc). The best part about staying at Little Heaven was the gracious hosts, Maria & Jonathan. They are so welcoming, caring, and a joy to talk with. You can tell how much love went into building this B&B, and they truly care about giving guests unique, wonderful experiences. They made sure we had everything we could ever want, while still giving us privacy. Last but certainly not least, THE FOOD was amazing!! Maria has a passion for cooking and it shows in the freshness and quality of the meals she served us all weekend. I will be dreaming about her tortillas for months. We can't wait to come back again! -Lauren Ranallo"/>
      <TextSection paragraph="- All around a wonderful experience! I took a self care trip and it was exactly what I needed! The name for this bed and breakfast could not be more fitting as it is a little slice of heaven on earth! Breakfast was phenomenal!! Both Jonathan and Maria are so kind and helpful! 10/10 recommend!!!! -Kathryn Eller"/>
      <TextSection paragraph="- We absolutely loved our weekend here. The rooms are very nice with and comfortable with a fireplace and individual heating/cooling. The breakfast was delicious and we enjoyed coffee on the front porch with the beautiful views. We will definitely be back and will recommend this place to friends and family. -Mark Brooks"/>
      <TextSection paragraph="- I attended a baby shower at Little Heaven Bed & Breakfast and the venue was just beautiful and the food was absolutely AMAZING!! Definitely planning a stay here. - Leslie" />
      <TextSection paragraph="'I met Maria at Breakfastime restaurant in Jonesville NC, she shared her journey of opening Little Heaven Bed & Breakfast and I just knew that God wanted me to help her. I developed and designed this website for her and Jonathan. Stepping foot on the cabin during the renovations  definitley brought me back to the country that I so much adore and love. Every time we would meet we would enjoy delicious  hot coffee at the kitchen bar. The final results are incredible. I've personally have seen the amount of time, effort, faith and love that they have poured into this bed and breakfast. I personally LOVE breakfast and coffee. There is something about breakfast that reminds me of home. Maria and Jonathan have made this bed and breakfast their home, and I am more than honored to have been able to see first hand the exquisite transformation. Their goal has always been you, the guest. They have done everything possible so that you can enjoy your stay here with them. Maria and Jonathan just radiate love and acceptance. I invite you to stay at Little Heaven Bed & Breakfast and truly feel that love and acceptance that they have to offer, whether it be in a cup of coffee or a plate of food. I love you guys, always. Congratulations on such a MAGNIFICENT bed and breakfast! I can't wait to enjoy more of Maria's cooking and stop by for coffee just to say hello.' -Luis Aguilera"/>
    </>
  )
}
export default Packagesscreen
