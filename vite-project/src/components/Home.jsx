import React from 'react';
import HeroImage from '../assets/heroImage.png';
import { FaArrowRight } from "react-icons/fa";

const Home = () => {
  return (
    <div>
     <div>
        <div>
            <h2>I'm a junior Front End Developer</h2>
            <p>I started web app design journey about 1 year ago.
                Currently, I love to work on web using technologies like 
                React, Tailwind, Next.
            </p>
            <div>
                <button>
                    Portfolio
                    <span>
                        <FaArrowRight />
                    </span>
                </button>
            </div>
        </div>
     </div>
    </div>
  )
}

export default Home
