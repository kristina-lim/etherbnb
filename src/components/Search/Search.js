import React from 'react';
import './Search.css';
import { DateRangePicker } from 'react-date-range';
// Main style file
import 'react-date-range/dist/styles.css';
// theme css file
import 'react-date-range/dist/theme/default.css';


// Date picker component
export default function Search() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  
  return (
    <div className='search'>
      
    </div>
  )
}