import React from 'React';
import './Card.css';

export default function Card({ src, title, description, price }) {
  return (
    <div className='card'>
      <img src={src} alt='' />
    </div>
  )
}