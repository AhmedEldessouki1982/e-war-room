import React from 'react'

function Login() {
  return (
    <section className='ml-2 pt-5 md:pt-10 pb-24 md:mx-auto w-full md:w-7/12'>
        <nav>
            <span className='inline-block text-4xl -rotate-45 text-red mr-2'>e{" "}</span>
            <p className='inline text-3xl'>war<span className='text-red'>R</span>oom</p>
        </nav>

        <div className='flex flex-col justify-center items-center m-10 md:mx-auto md:w-1/2'>
          <h4 className='uppercase mb-10 text-sm md:text-2xl'>log in to electronic war room</h4>
          <input className='mt-10 mb-10 pb-5 bg-transparent outline-none border-b border-red text-red h-10 w-48 md:w-4/5 border-b-red placeholder:text-red' type="text" placeholder='User Name' />
          <input className='mt-10 mb-10 pb-5 bg-transparent outline-none border-b border-red text-red h-10 w-48 md:w-4/5 border-b-red placeholder:text-red' type="password" placeholder='Password' />
          <p className='mb-10 capitalize'>don't have account?</p>
          <button className='uppercase w-48 h-12 border-2 border-red outline-none text-red text-center'>login</button>
          <button className='uppercase mt-10 w-48 h-12 border-2 border-yellow-300 outline-none text-red text-center'>login with google</button>
        </div>
    </section>
  )
}
export default Login