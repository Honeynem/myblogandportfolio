import { About, Home, Navbar, Portfolio, SocialLinks } from "./components";

export default function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Portfolio />

      <SocialLinks />
    </div>
  )
}