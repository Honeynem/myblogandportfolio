import React from 'react';
import Ui1 from '../assets/portfolio/ui1.png'
import Ui2 from '../assets/portfolio/ui2.png'
import Ui3 from '../assets/portfolio/ui3.png'
import Ui4 from '../assets/portfolio/ui4.png'
import Ui5 from '../assets/portfolio/ui5.png'

const Portfolio = () => {
    
    const portfolios = [
        {
            id: 1,
            src: Ui1,
            link: ()=>{window.open('https://github.com/Honeynem/How-to-create-header-in-HTML-and-CSS.git')}
        },
        {
            id: 2,
            src: Ui2,
            link: ()=>{window.open('https://github.com/Honeynem/How-to-create-footer-in-HTML-and-CSS.git')}
        },
        {
            id: 3,
            src: Ui3,
            link: ()=>{window.open('https://github.com/Honeynem/How-to-create-sidebar-in-HTML-and-CSS.git')}
        },
        {
            id: 4,
            src: Ui4,
            link: ()=>{window.open('https://github.com/Honeynem/How-to-create-a-complete-responsive-webpage-in-HTML-and-CSS.git')}
        },
        {
            id: 5,
            src: Ui5,
            link: ()=>{window.open('https://github.com/Honeynem/How-to-create-wabpage-with-bootstrap.git')}
        },
    ]
  return (
    <div name='portfolio' className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
            <p className='py-6'>Chekout some of my works here!</p>
        </div>

        {/* forming the cards */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
            {portfolios.map(({id , src, link}) => (
            <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                <img src={src} alt="" className='rounded-md duration-200 hover:scale-105'/>
                <div className='flex justify-center items-center'>
                {/* <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button> */}
                    
                <button onClick={link} className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
                    
                </div>
            </div>
            ))}
        </div>
        {/* forming the cards */}

      </div>
    </div>
  )
}

export default Portfolio
