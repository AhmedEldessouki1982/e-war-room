//avatar to be used
import React from 'react';
import {LoginUser} from '../context/LoginContext'; 


function Participants() {
  let { loginState } =  React.useContext(LoginUser);

  
  return (
    <section className='md:flex ml-2 rounded-md gap-1 pt-5 md:pt-10 pb-24 md:mx-auto w-full md:w-7/12 h-full'>
      <div className='h-full flex-1 bg-dark-grey'>
        left side
      </div>
      <div className='h-full flex-2 bg-slate-100'>
        <h1 className='text-red text-4xl text-center'>Participants</h1>
        <ul>
          <li className='text-black'>{loginState.userName}</li>
        </ul>
      </div>
    </section>
  )
}

export default Participants