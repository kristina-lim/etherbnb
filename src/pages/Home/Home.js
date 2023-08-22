import React from 'react';
import './Home.css';
import Banner from '../../components/Banner/Banner';
import Card from '../../components/Card/Card';

export default function Home() {
  return (
    <div className='home'>
      <Banner />
      <div className='home__section'>
        <Card 
          src='https://i.imgur.com/f01vLuW.jpg'
          title='Online Experiences'
          description='Unique activities friends or family can do together, led by a world of hosts.'
        />
        <Card 
          src='https://i.imgur.com/lBkv49n.jpg'
          title='Unique Stays'
          description='A space that is more than just a place to sleep.'
        />
        <Card 
          src='https://i.imgur.com/OerKnPt.jpg'
          title='Entire Homes'
          description='Comfortable private places, with room for friends or family.'
        />
      </div>
      <div className='home__section'>
        <Card 
          src='https://i.imgur.com/hNu2Qwp.png'
          title='3 Bedroom Flat in Los Angeles'
          description='Superhost with a stunning view of the Hollywood sign in sunny Los Angeles.'
          price='$130/night'
        />
        <Card 
          src='https://i.imgur.com/wbXJ30b.jpg'
          title='Penthouse in London'
          description='Enjoy the amazing sights of London with this stunning penthouse.'
          price='$350/night'
        />
        <Card 
          src='https://i.imgur.com/2LiNfxU.jpg'
          title='1 Bedroom in Palm Springs'
          description='Superhost with great amenities and a luxurious shopping center nearby.'
          price='$85/night'
        />
      </div>
    </div>
  )
}