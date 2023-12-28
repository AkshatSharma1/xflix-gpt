import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from "./VideoTitle"
import VideoBg from "./VideoBg"

const MainContainer = () => {

  //get movies
  const movies = useSelector((store)=>store.movies.nowPlayingMovies)
  if(!movies) return; //realy return
  
  const mainMovie = movies[0]; //movue used for bg
  console.log(mainMovie);

  const { original_title, overview, id } = mainMovie

  return (
    <div>
        <VideoTitle title={original_title} overview={overview} />
        <VideoBg movie_id={id} />
    </div>
  )
}

export default MainContainer