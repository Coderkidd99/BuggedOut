import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useState } from 'react';

function MyCalendar() {
  const [date, setDate] = useState(new Date());

  const onChange = (value) => {
    setDate(value);
  };

  return (
    <div className='p-2'>
      <h2 className="  border-radius px-1 text-lg text-amber-500">Due Date<span className="text-red-700">*</span> </h2>
      <Calendar onChange={onChange} value={date} />

     <h2 className='text-amber-600 mt-5'>
       Picked: {date.toDateString()}     
      </h2>
    </div>
  );
  
}


export default MyCalendar