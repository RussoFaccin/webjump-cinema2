import { api, API_CONFIG } from "services/api";
import { Movie } from 'shared/types';
import { DataType } from './types';

export const Data: DataType = {
  async getMovieList(urlKey) {
    const movieList = await api.get(`/${urlKey}`, API_CONFIG);
    return movieList.data.results;
  },
  formatDataAPI(dataEntry, qtyLimit = 0): Movie[] {
    enum ImageSizes {
      BACKDROP = "w780",
      POSTER = "w342",
    }

    const BACKDROP_URL = `https://image.tmdb.org/t/p/${ImageSizes.BACKDROP}`;
    const POSTER_URL = `https://image.tmdb.org/t/p/${ImageSizes.POSTER}`;

    const tmpList = dataEntry.map((movie: Movie) => {
      movie.backdrop_path = `${BACKDROP_URL}${movie.backdrop_path}`;
      movie.poster_path = `${POSTER_URL}${movie.poster_path}`;

      return movie;
    });

    return qtyLimit === 0 ? dataEntry : tmpList.slice(0, qtyLimit);
  },
};
