import React from 'react'
import Header from './Header'
import MainContainer from "./MainContainer"
import SecondaryContainer from "./SecondaryContainer"

import useNowPlayingMovies from "../hooks/useNowPlayingMovies"

const Browse = () => {

  // Fetching Data from the movies api's
  useNowPlayingMovies()

  return (
    <div>
      <Header />
      {/* 
        - Main Container
          - Video Backgroun
          - Vdeo Title
        - Secondary Container
          - MovieList * n
          - cards * n
      */}
      <MainContainer />
      <SecondaryContainer />
    </div>
  )
}

export default Browse