import React from 'react'
import './Home.css'
import Navbar from '../../Componants/Navbar/Navbar'
import hero_banner from  '../../assets/hero_banner.jpg'
import hero_title from  '../../assets/hero_title.png'
import Play_icon from  '../../assets/play_icon.png'
import info__icon from  '../../assets/info_icon.png'
import TitleCard from '../../Componants/TitleCards/TitleCard'
import Footer from '../../Componants/Footer/Footer'
  
const Home = () => {
  return (
    <div>
      <Navbar/>
      <div className="hero">
        <img src={hero_banner} alt="" className='banner-img' />
        <div className="hero-caption">
          <img src={ hero_title} alt="" className='caption-img' />
          <p>Discovering his ties to a secret ancient order , a young man living in morden Istanbul embarks on a quest to save the city from an immortal enemy.</p>
        <div className="hero-btns">
          <button className='btn'><img src={Play_icon} alt="" />Play</button>
          <button className='btn dark-btn'><img src={info__icon} alt="" />More Info</button>
        </div>
        <TitleCard/>
        </div>
      </div>
      <div className="more-cards">
      <TitleCard  title={"Blockbuster Movies"} category={"top_rated"}/>
      <TitleCard  title={"Only on Netflix"}category={"popular"}/>
      <TitleCard  title={"Upcoming"}category={"upcoming"}/>
      <TitleCard  title={"Top Pics for You"}category={"now_playing"}/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home
