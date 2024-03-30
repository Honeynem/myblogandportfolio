import React from 'react';
import { FaGit, FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdOutlineMail } from "react-icons/md";
import { IoPersonCircle } from "react-icons/io5";

// import {HiOutlineMail} from 'react-icons/hi'
// import {BsFillPersonLine} from 'react-icons/bs

const SocialLinks = () => {
    const links =[
        {
            id: 1,
            child: (
                <>
            LinkedIn<FaLinkedin size={30}/>
                </>
            ),
            href: 'https://www.linkedin.com/in/hanieh-neamani-312674163',
            style: "rounded-tr-lg"
        },
        {
            id: 2,
            child: (
                <>
            gitHub<FaGithub size={30}/>
                </>
            ),
            href: 'https://github.com/Honeynem',
        },
        {
            id: 3,
            child: (
                <>
            Mail<MdOutlineMail size={30} />
                </>
            ),
            href: 'mailto:hanienemani137@gmail.com',
        },
        {
            id: 4,
            child: (
                <>
            Resume<IoPersonCircle size={30} />
                </>
            ),
            href: './resume.pdf',
            style: "rounded-br-md",
            download: true,
        },
        
    ]

  return (
    <div className='hidden lg:flex flex-col left-0 top-[35%] fixed'>
      <ul>
        {links.map(({id, child, href, style, download})=>(
              <li key={id} className={"flex items-center justify-between w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-[-10px] hover:rounded duration-300"+" "+ style}>
              <a href={href} className='flex justify-between w-full text-white' download={download}
              target='_blank' rel='noreferrer'>
                {/* using target property for opening the new tab */}
              {child}
              </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SocialLinks
