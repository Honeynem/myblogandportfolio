import React from 'react';
import Ui1 from '../assets/portfolio/ui1.png'
import Ui3 from '../assets/portfolio/ui3.png'
import Ui4 from '../assets/portfolio/ui4.png'
import Ui5 from '../assets/portfolio/ui5.png'
import Ui6 from '../assets/portfolio/ui6.png'
import Ui7 from '../assets/portfolio/ui7.png'
import Ui8 from '../assets/portfolio/ui8.png'

const Portfolio = () => {
    
    const portfolios = [
        {
            id: 1,
            src: Ui1,
            link: ()=>{window.open('https://github.com/Honeynem/How-to-create-header-in-HTML-and-CSS.git')}
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
        {
            id: 6,
            src: Ui6,
            link: ()=>{window.open('https://dribbble.com/shots/24615286-ShoeShop-UI-SneakZ?utm_source=Clipboard_Shot&utm_campaign=HoneyNemany&utm_content=ShoeShop%20UI-SneakZ&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=HoneyNemany&utm_content=ShoeShop%20UI-SneakZ&utm_medium=Social_Share')}
        },
        {
            id: 7,
            src: Ui7,
            link: ()=>{window.open('https://dribbble.com/shots/24615286-ShoeShop-UI-SneakZ?utm_source=Clipboard_Shot&utm_campaign=HoneyNemany&utm_content=ShoeShop%20UI-SneakZ&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=HoneyNemany&utm_content=ShoeShop%20UI-SneakZ&utm_medium=Social_Share')}
        },
        {
            id: 8,
            src: Ui8,
            link: ()=>{window.open('https://www.behance.net/gallery/210386273/UIUX-case-study-for-a-forum-app')}
        },
    ]
  return (
    <div name='portfolio' className='bg-[#DFF5E3] from-black to-gray-800 w-full text-[#2C3E50] min-h-screen'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full overflow-y-auto'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-[#2C3E50]'>Portfolio</p>
            <p className='py-6'>Chekout some of my works here!</p>
        </div>

        {/* forming the cards */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
            {portfolios.map(({id , src, link}) => (
            <div key={id} className='shadow-md shadow-gray-600 rounded-lg bg-gradient-to-r from-[#DFF5E3] to-[#FFE8F1] text-[#4D6654]'>
                <img src={src} alt="" className='rounded-md duration-200 hover:scale-105'/>
                <div className='flex justify-center items-center'>
                {/* <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button> */}
                    
                <button onClick={link} className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>View Code Or Design</button>
                    
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
