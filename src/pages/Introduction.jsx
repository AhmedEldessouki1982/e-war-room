import React from 'react';
import Addbutton from '../components/Addbutton';
import Calenderbutton from '../components/Calenderbutton';

function Introduction() {
  return (
    <section className='w-3/4 h-1/3 md:w-1/2 md:h-3/6 bg-indigo-400 mx-auto my-20 rounded-lg p-10'>
        <span className='text-black text-sm md:text-3xl'>Easy way to prepare and <span className='text-red'>run</span> successful <span className='text-red'>meeting</span> </span>

        <div className='relative flex justify-between md:w-80 mx-auto md:my-14 h-32'>
          <Addbutton size = {"text-8xl"}/>
          <Calenderbutton size = {"text-8xl"}/>
        </div>
        
    </section>
  )
}

export default Introduction