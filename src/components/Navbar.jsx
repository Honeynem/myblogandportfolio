import React, { useState } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import {Link} from 'react-scroll';

const Navbar = () => {

    // use states for flipping the menus in different screens
    const [nav, setNav] = useState(false)

    //defining navbar items
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
            link: 'experience'
        },
        {
            id: 5,
            link: 'contact'
        }
    ]


  return (
    <div className='flex justify-between items-center w-full h-20 px-4 text-[#2C3E50] bg-gradient-to-b from-[#DFF5E3] via-[#A0DAB5] to-[#68B57A] fixed z-50'>
        <div>
            <h1 className='text-5xl font-signature ml-2 '>Honey</h1>
        </div>

        <ul className='hidden md:flex'>
            {links.map(({id, link}) => (<li key={id} className='px-4 capitalize cursor-pointer text-[#2C3E50] text-medium hover:scale-105 duration-200'>
            <Link to={link} smooth duration={500}>{link}</Link>
            </li>))}
            
        </ul>


        {/* mobile and smaller screen menu */}
        <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 text-[#2C3E50]  md:hidden'>
            {nav ? <FaTimes size={30} />: <FaBars size={30} />}
        </div>

        {nav && (

        <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-[#DFF5E3] from-black to-gray-500 text-[#2C3E50]'>
        {links.map(({id, link}) => (<li key={id} className='px-4 cursor-pointer capitalize py-6 text-4xl'>
        <Link onClick={()=> setNav(!nav)} to={link} smooth duration={500}>{link}</Link>
        </li>))}

        </ul>)
        }
    </div>
  )
}

export default Navbar
