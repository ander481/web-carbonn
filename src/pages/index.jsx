import * as React from "react"
import '../assets/styles/reset.css'
import '../assets/styles/main.scss'
import Hero from '../components/Hero'
import About from '../components/About'
import Methodology from "../components/Methodology"
import Difference from "../components/Difference"
import Roadmap from "../components/Roadmap"
import Team from "../components/Team"


const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <Methodology />
      <Difference />
      <Roadmap />
      <Team />
    </main>
  )
}

export default Home

export const Head = () => <title>CARBONN Credit - Alternative carbon credit project</title>
