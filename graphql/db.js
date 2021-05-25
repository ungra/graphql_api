import axios from "axios";
const BASE_URL = "https://yts.am/api/v2/";
const LIST_MOVIES_URL = "https://yts.mx/api/v2/list_movies.json?q";
const MOVIE_DETAILS_URL = "https://yts.mx/api/v2/movie_details.json";
const MOVIE_SUGGESTIONS_URL = "https://yts.mx/api/v2/movie_suggestions.json";

export const getMovies = async (limit, rating) => {
  const {
    data: {
      data: { movies },
    },
  } = await axios(LIST_MOVIES_URL, {
    params: {
      limit, minimum_rating: rating
    }
  });
  return movies;
};

export const getMovie = async (id) => {
  const {
    data: {
      data: { movie },
    },
  } = await axios(MOVIE_DETAILS_URL, {
    params: {
      movies_id: id,
    },
  });
  return movie;
};

export const getSuggestions = async id => {
  const {
    data: {
      data: {movies}
    }
  } = await axios(MOVIE_SUGGESTIONS_URL, {
    params: {
      movie_id: id
    }
  })
  return movies
}