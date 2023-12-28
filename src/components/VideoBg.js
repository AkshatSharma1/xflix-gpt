import React from "react";
import { useSelector } from "react-redux";
import useTrailerVideo from "../hooks/useTrailerVideo";
// import { addTrailerVideo } from "../utils/movieSlice";

const VideoBg = ({ movie_id }) => {
  //useSelectopr to get trailerVideo
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);

  //fetch the Trailer clip from movie video (given id)
  useTrailerVideo(movie_id);

  return (
    <div className="w-screen">
      {/* render the trailer */}
      <iframe
        className="w-screen aspect-video "
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?controls=0&rel=0&autoplay=1&mute=1`} //trailer is in my redux store. so need of state variables
        frameBorder="0"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBg;
