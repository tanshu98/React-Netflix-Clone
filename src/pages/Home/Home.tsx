import React from 'react';
import './HomeStyles';  
import Navbar from '../../components/Navbar/Navbar';
import { HomeStyles } from './HomeStyles';
import heroBanner from '../../assets/hero_banner.jpg'
import heroTitle from '../../assets/hero_title.png'

const Home = () => {
  return (
    <div style={HomeStyles.mainContainer}>
    <Navbar />
    <div style={HomeStyles.hero}>
        <img src={heroBanner} alt="banner-img" style={HomeStyles.bannerImg} />
        <div style={HomeStyles.heroCaption}>
            <img src={heroTitle} alt="hero-title" />
            <p>
                Discovering his ties to secret ancient order, a young man living in the Istanbul embarks on the quest of saving the city from an immoratal enemy.
            </p>
        </div>
    </div>
    </div>
  )
}

export default Home