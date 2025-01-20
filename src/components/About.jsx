import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full min-h-screen bg-gradient-to-w from-gray-800 to-black text-'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full overflow-y-auto'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
        </div>

        <p className='mt-20 text-xl'>Although I really don’t want to have an "About Me" section (it always feels a bit too self-absorbed), I guess I have no choice but to share a bit about myself! 
        </p>
        <br />
        <p className='text-xl'>

        I’m a learning enthusiast—a curious mind who fell in love with the web during my undergraduate years when I was first introduced to programming. But honestly, I didn’t stick with coding for too long because I found it a bit boring. That’s when I discovered the world of UI/UX, and I’ve been hooked ever since
        </p>
        <br />
        <p className='text-xl'>

        Now, I’m all about creating designs that are both delightful and effortless, focusing on the Next Billion Users. I truly believe this group holds immense potential to either make or break businesses, and I’m excited to be part of that journey!
        </p>
      </div>
    </div>
  )
}

export default About
