import {useEffect} from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";

const useTrailerVideo = (movie_id) => {

  const dispatch = useDispatch()

  const getMovieVideo = async () => {
    const movie_data = await fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}/videos?language=en-US`,
      API_OPTIONS
    );
    const movie_json = await movie_data.json();
    // console.log(movie_json);

    //filter data according to movie type
    const filteredData = movie_json.results.filter((m) => {
      return m.type === "Trailer";
    });

    const trailer = filteredData[0] ? filteredData[0] : movie_json.results[0];

    // console.log(trailer);

    //add trailer to redux storwe
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMovieVideo();
  }, []);
};

export default useTrailerVideo;
