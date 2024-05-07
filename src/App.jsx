import { About, Blog, Contact, Experience, Home, Navbar, Portfolio, SocialLinks } from "./components";

export default function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
      {/* <Blog /> */}

      <SocialLinks />
    </div>
  )
}