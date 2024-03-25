import React from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'

const Navbar = () => {
    const links = [
        {
            id: 1,
            link: 'home'
        },
        {
            id: 2,
            link: 'about'
        },
        {
            id: 3,
            link: 'portfolio'
        },
        {
            id: 4,
            link: 'blog'
        },
        {
            id: 5,
            link: 'contact'
        }
    ]


  return (
    <div className='flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed'>
        <div>
            <h1 className='text-5xl font-signature ml-2 '>Honey</h1>
        </div>

        <ul className='hidden md:flex'>
            {links.map(({id, link}) => (<li key={id} className='px-4 capitalize cursor-pointer text-gray-400 text-medium hover:scale-105 duration-200'>{link}</li>))}
            
        </ul>


        {/* mobile and smaller screen menu */}
        <div className='cursor-pointer pr-4 z-10 text-gray-400'>
            <FaBars size={30} />
        </div>
    </div>
  )
}

export default Navbar
