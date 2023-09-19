import React from 'react'
import InfoSection3 from '../components/InfoSection3'
import { InfoDataThree } from '../data/InfoData'
import TextSection from '../components/TextSection'
import { SliderDataFourteen } from '../data/SliderData'
import Hero from '../components/Hero'

const Localwineriesscreen = () => {
  return (
    <>
    <Hero slides={ SliderDataFourteen } />
    <br/>
    <br/>
    <br/>
    <h2>Explore all the abundance of wineries around the area!</h2>
    <br/>
      <h4 style={{textAlign: 'center', color: 'darkorange'}}>Our Favorite Yadkin Valley Wineries</h4>
      <TextSection paragraph="With seven counties in the Yadkin Valley, we have more than 35 local wineries. While most North Carolina wines were typically sweet muscadine, it is in the Yadkin Valley that you can find dry and delicious European-style wines. Enjoy fine dining as well as wine with most of these places. The following links will navigate you to somoe of the best pages for finding local wineries."/>
      <section className="section-title">
        <ul className="section-title">
          <li className="section-title">
          <a href="https://www.yelp.com/search?cflt=wineries&find_loc=Yadkin+County%2C+NC#:~:text=Top%2010%20Best%20Wineries%20Near%20Yadkin%20County%2C%20North,Creek%20Vineyard%204.5%20%2821%20reviews%29%20...%20More%20items" rel="noopener noreferrer" target="_blank"><h4>Ten of our Best Ones!</h4></a>
        </li><li className="section-title">
        <a href="https://www.yadkinvalleync.com/attractions/?subcategories=wineries" rel="noopener noreferrer" target="_blank"><h4>Explore All the Wineries</h4></a>
        </li><li className="section-title">
        <a href="https://www.nctripping.com/surry-county-wine-trail-vineyards/" rel="noopener noreferrer" target="_blank"><h4>Want to go Wine Tasting All Day?</h4></a>
        </li>
        </ul>
      </section>
</>
  )
}
export default Localwineriesscreen
