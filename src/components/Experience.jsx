import React from 'react'
import html from '../assets/html.png'
import cssImage from '../assets/cssImage.png'
import javascript from '../assets/javascript.png'
import reactImage from '../assets/react.png'
import tailwind from '../assets/tailwind.png'
import gitHub from '../assets/github.png'
import figma from '../assets/figma.png'

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
            id : 8,
            src : gitHub,
            title : 'Github',
            style : 'shadow-gray-400'
        },
        {
            id : 9,
            src : figma,
            title : 'Figma',
            style : 'shadow-green-400'
        },

    ]
    const works = [
        {
            id: 1,
            title: 'ًWordpress developer',
            company: 'Fact Coins-Trading online Magazine',
            duration: 'March 2022 - May 2022',
            description: 'Worked on creating responsive web designs and improving user experience.',
            link: 'https://factcoins.com'
        },
        {
            id: 2,
            title: 'UI Designer',
            company: 'Setare Online Magazine',
            duration: 'Oct 2023 - March 2024',
            description: 'Redesigned complete web pages while learning and utilizing the Bricks theme in WordPress to create optimized and modern layouts.',
            link: 'https://setare.com'
        },
        {
            id: 3,
            title: 'UI/UX Designer- Wix Developer',
            company: 'Embark Potential- Online Psychology and Behavioral Suppport Services',
            duration: 'Nov 2024 - Jan 2025',
            description: 'Comprehensive course on user experience design.',
            link: 'https://www.embarkpotential.com.au'
        },
        {
            id: 4,
            title: 'Course: Google UX Design',
            company: 'Google',
            duration: 'Completed Jan 2025',
            description: 'Comprehensive course on user experience design.',
            link: 'https://coursera.org/google-ux'
        }
    ];


  return (
    <div name='experience' className='bg-[#DFF5E3] from-gray-800 to-black min-h-screen w-full text-[#2C3E50]'>
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
        <div className="mt-12">
                    <p className="text-3xl font-bold inline border-b-4 border-gray-500">Work History</p>
                    <div className="mt-8 grid gap-8">
                        {works.map(({ id, title, company, duration, description, link }) => (
                            <div key={id} className="shadow-lg rounded-lg bg-[#DFF5E3] p-6 transform transition-transform duration-500 hover:scale-105 z-10">
                                <h3 className="text-2xl font-semibold">{title}</h3>
                                <p className="text-gray-600">{company}</p>
                                <p className="text-gray-500">{duration}</p>
                                <p className="text-gray-700 mt-4">{description}</p>
                                <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline mt-4 block">
                                    Learn more
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
      </div>
    </div>
  )
}

export default Experience
