import { About, Contact, Experience, Home, Navbar, Portfolio, SocialLinks } from "./components";

export default function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <Contact />

      <SocialLinks />
    </div>
  )
}