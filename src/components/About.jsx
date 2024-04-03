import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full overflow-y-auto'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
        </div>

        <p className='mt-20 text-xl'>I build beautiful and functional web experiences.
            I'm a passionate front-end developer with a drive to create innovative and user-friendly interfaces. I'm constantly pushing myself to learn new technologies and stay ahead of the curve. Currently, I'm diving deep into the world of <span className='font-bold'>Tailwind CSS, React, TypeScript, and Next.js</span>, building interactive and performant web applications.
        </p>
        <br />
        <p className='text-xl'>

            My ultimate goal is to land a position on a collaborative and innovative team, where I can collaborate with talented developers and contribute to solving complex problems. My eagerness to learn extends beyond code. I'm constantly expanding my knowledge of design principles and user experience (UX) best practices, striving to create a seamless experience for users.
        </p>
        <br />
        <p className='text-xl'>

            Beyond the technical aspects, I bring a positive and enthusiastic attitude to thetable. I'm a team player who thrives in collaborative environments. Ifyou're looking for a front-end developer who is always learning,passionate about new technologies, and eager to contribute to asuccessful team, then let's connect!
        </p>
      </div>
    </div>
  )
}

export default About
