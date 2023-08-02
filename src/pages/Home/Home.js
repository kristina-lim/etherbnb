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
          src=""
          title="Online Experiences"
          description="Unique activities friends or family can do together, led by a world of hosts."
        />
        <Card 
          src=""
          title="Unique Stays"
          description="Spaces that are more than just a place to sleep."
        />
        <Card 
          src=""
          title="Entire Homes"
          description="Comfortable private places, with room for friends or family."
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