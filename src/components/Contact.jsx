import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full overflow-y-auto'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
            <p className='py-6'>Let's get in touch!</p>
        </div>
        <div className='flex justify-center items-center'>
            <form action="https://getform.io/f/paygkvxa" method='POST' className='w-full flex flex-col md:w-1/2'>
                <input 
                type="text" 
                name='name' 
                placeholder='Enter Your Name' 
                className='p-2 bg-transparent text-white border-2 rounded-md focus:outline-none' />
                <input 
                type="text" 
                name='email' 
                placeholder='Enter Your Email'
                className='my-4 p-2 bg-transparent text-white border-2 rounded-md focus:outline-none' />
                <textarea 
                name="message" 
                placeholder='Enter Your Message' 
                rows="10" 
                className='p-2 bg-transparent text-white border-2 rounded-md focus:outline-none'></textarea>
                <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">Submit</button>
            </form>

        </div>
      </div>
    </div>
  )
}

export default Contact
