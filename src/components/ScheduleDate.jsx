import React from 'react'
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

const ScheduleDate = () => {
  return (
    <div className='h-max w-max flex flex-col items-start'>
      <p className='font-semibold text-2xl'>Select a date for meeting</p>
      <p className='font-roboto text-xl py-2 text-gray/90'>The following date will be set for the meeting:</p>

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar views={['day']} className='!m-0' />
      </LocalizationProvider>

      <button className='mt-8 py-2 px-14 rounded-md bg-red text-white'>Next</button>

    </div>
  )
}

export default ScheduleDate