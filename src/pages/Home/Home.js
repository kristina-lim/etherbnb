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
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}