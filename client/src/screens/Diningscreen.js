import React from 'react'
import Hero from '../components/Hero'
import Cards from '../components/Cards'
import { SliderDataTwelve } from '../data/SliderData'
import TextSection from '../components/TextSection'
import InfoSection3 from '../components/InfoSection3'
import GalleryTwo from '../components/GalleryTwo'
import { InfoDataThree } from '../data/InfoData'


const Diningscreen = () => {
  return (
    <>

 
    <Hero slides={ SliderDataTwelve } />
    <br/>
    <br/>
    <br/>
    <br/>
    <h1>Yadkin Valley Dining</h1>
      <h4 style={{textAlign: 'center', color: 'darkorange'}}>Our Favorite Yadkin Valley NC Restaurants</h4>
      <TextSection paragraph="The Yadkin Valley is North Carolina’s first federally-recognized American Viticulture Area (AVA). There are many cities that make up the Yadkin Valley. Here is a list of restaurants that are spread out throughout the Yadkin Valley. Whether you want to eat small, local or go out to a fine dining restauarant, the Yadkin Valley will be sure to serve you what you are looking for. "/>
      <section className="section-title">
        <ul className="section-title">
          <li className="section-title">
          <a href="https://www.yadkinvalleync.com/attractions/?categories=&subcategories=fine-dining&town=" rel="noopener noreferrer" target="_blank"><h4>Explore Fine Dining</h4></a>
        </li><li className="section-title">
        <a href="https://visittheyadkinvalley.com/where-to-eat/" rel="noopener noreferrer" target="_blank"><h4>Explore Local Dining</h4></a>
        </li><li className="section-title">
        <a href="   https://www.visityadkin.com/dining" rel="noopener noreferrer" target="_blank"><h4>Explore Yadkin County Dining</h4></a>
        </li>
        </ul>
      </section>

  </>
  )
}

export default Diningscreen
