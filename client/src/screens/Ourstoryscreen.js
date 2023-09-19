import React from 'react'
import InfoSection7 from '../components/InfoSection7'
import { InfoDataNine } from '../data/InfoData'
import { InfoDataTen } from '../data/InfoData'
import { InfoDataEleven } from '../data/InfoData'
import TextSection from '../components/TextSection'

const Ourstoryscreen = () => {
  return (
    <div style={{backgroundColor: 'orange'}}>
        <br/>
        <h1>Our Story</h1>
        <br/>
        <InfoSection7 {...InfoDataNine}/>
        <br/>
        <TextSection paragraph="The story of how Little Heaven Bed & Breakfast came into existence is one of Faith. Jonathan and Maria met each other in February of 2016. They knew right away that they were meant to be together. By June of 2016 they were married. Maria had 4 daughters and Jonathan had 2 daughters when they first met. Neither of them had much growing up or really even when they met each other, but God changed all of that for them once they were together. They bought a few properties to try and do short term rentals and it really took off."/>
        <br/>
        <InfoSection7 {...InfoDataTen}/>
        <br/>
        <TextSection paragraph="They started traveling and seeing what was out there and enjoyed it. One day while they were in vacation at Pigeon Forge Tennesee on Christmas Season, they had the thought about having their own bed and breakfast. They went to a couple of Bed & Breakasts' to experience it and they fell in love with the idea of having their very own Bed & Breakfast. They sold two investment properties and their very first house to open what is now known as Little Heaven Bed & Breakfast. They looked and prayed for several months to find the place until they found 'TUCKDA WAY'. When they saw this place they immediately knew that it was THE ONE! The name LITTLE HEAVEN came for the beautiful views of mountains, blue heaven and the feel in the atmosphere of the green forest and of course the amazing views of so many acres of vine of wineries. They started the process of the bed and breakfast and thought that it was going to be a quick process to remodel and open Little Heaven but boy were they wrong. They bought the Cabin with 10 acres of land and a pond in December of 2021. With many challenges and shortages of labor it took much longer than they thought. Each step of the way they relied on God and their Faith that it was all part of his plan to take this long. One thing that Jonathan and Maria Hunt have always held strong to is their Faith through it all. That is why each room is named after the things that God spoke about in the Bible."/>
        <br/>
        
        <section className="section-title">
        <ol className="section-title">
          <li className="section-title">
          <h4>LOVE</h4>
        </li><li className="section-title">
        <h4>FAITH</h4>
        </li><li className="section-title">
        <h4>GRACE</h4>
        </li>
        <li className="section-title">
        <h4>PEACE</h4>
        </li>
        <li className="section-title">
        <h4>JOY</h4>
        </li><li className="section-title">
        <h4>HOPE</h4>
        </li>
        </ol>
      </section>
      <TextSection paragraph="These are the 6 rooms at Little Heaven Bed & Breakfast. Each room has something a little different that you will like than the other. We can't wait for you to come and experience the peacefulness of Little Heaven Bed & Breakfast with us. We feel if you come and experience Little Heaven with us once you WILL want to come back numerous times. It's literally a Little Piece of Heaven."/>
      <InfoSection7 {...InfoDataEleven}/>
      <TextSection paragraph="We deeply thank you for your business and for choosing to cabin with us. You will absolutely love your stay."/>

<TextSection paragraph="-  Maria and Jonathan Hunt"/>
   </div>
  )
}

export default Ourstoryscreen
