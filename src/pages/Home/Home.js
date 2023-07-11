import React from 'react';
import './Home.css';
import Banner from '../../components/Banner/Banner';
import Card from '../../components/Card/Card';

export default function Home() {
  return (
    <div className='home'>
      <Banner />
      <div className='home__section'>
        <Card />
        <Card />
        <Card />
      </div>
      <div className='home__section'>
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}