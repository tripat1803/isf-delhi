import React, { Fragment } from 'react'
import Events from '../components/Home/Events'
import Hero from '../components/Home/Hero'
import About from '../components/Home/About'
// import Itinerary from '../components/Home/Itinerary'
import ItineraryUpdated from '../components/Home/ItineraryUpdated'

export default function Home() {
  return (
    <Fragment>
        <Hero/>
        <About/>
        <Events/>
        <ItineraryUpdated/>
    </Fragment>
  )
}
