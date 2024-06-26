import React from 'react'
import html from '../assets/html.png'
import cssImage from '../assets/cssImage.png'
import javascript from '../assets/javascript.png'
import reactImage from '../assets/react.png'
import tailwind from '../assets/tailwind.png'
import next from '../assets/nextjs.png'
import typescript from '../assets/typescript.png'
import gitHub from '../assets/github.png'

const Experience = () => {
    const techs = [
        {
            id : 1,
            src : html,
            title : 'HTML',
            style : 'shadow-orange-500'
        },
        {
            id : 2,
            src : cssImage,
            title : 'CSS',
            style : 'shadow-blue-500'
        },
        {
            id : 3,
            src : javascript,
            title : 'JavaScript',
            style : 'shadow-yellow-500'
        },
        {
            id : 4,
            src : reactImage,
            title : 'React.js',
            style : 'shadow-blue-300'
        },
        {
            id : 5,
            src : tailwind,
            title : 'Tailwind',
            style : 'shadow-sky-400'
        },
        {
            id : 6,
            src : next,
            title : 'Next.js',
            style : 'shadow-white'
        },
        {
            id : 7,
            src : typescript,
            title : 'TypeScript',
            style : 'shadow-blue-500'
        },
        {
            id : 8,
            src : gitHub,
            title : 'Github',
            style : 'shadow-gray-400'
        },

    ]
  return (
    <div name='experience' className='bg-gradient-to-b from-gray-800 to-black min-h-screen w-full text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full overflow-y-auto'>
        <div>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500 p-2'>Experience</p>
            <p className='py-6'>These are the technologies I've worked with.</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 px-12 py-8 text-center sm:px-0'>
            {
                techs.map(({id, src, title, style})=> (
                    <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                    <img src={src} alt="" className='w-20 mx-auto'/>
                    <p className='mt-4'>{title}</p>
                    </div>
                ))
            }
        </div>
      </div>
    </div>
  )
}

export default Experience
