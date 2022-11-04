import axios from "axios";
import Head from "next/head";
import LayoutsBg from "../components/LayoutsBg";
import { API_TMDB_URL, BASE_URL, IMG_URL } from "../utils/api";
import Image from "next/image";
const movies = ({ dataMovies, dataGenres }) => {
  console.log(dataGenres);
  return (
    <div>
      <Head>
        <title>MOVIES</title>
        <meta name="movies" content="Movies Homepage" />
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <LayoutsBg>
        <main className="mt-10">
          <div className="grid grid-cols-8 text-white container mx-auto">
            <div className="col-span-1 flex flex-col">
              <h2 className="text-xl font-base mb-4 pt-2">Genres</h2>
              <div className="grid col-span-1 gap-y-3">
                {dataGenres.genres.map((e) => {
                  return (
                    <button className="text-start" key={e.id}>
                      {e.name}
                    </button>
                  );
                })}
              </div>
            </div>
            <div className="col-span-7">
              <h1 className="text-4xl font-semibold mb-4">All Movies</h1>
              <div className="grid grid-cols-4 gap-5">
                {dataMovies.results.map((movie) => {
                  return (
                    <div className="movie-card relative" key={movie.id}>
                      <Image className="rounded-xl" width={500} height={500} src={`${IMG_URL}${movie.poster_path}`} alt="movies" />

                      {/* <div className="movie-description absolute">
                    <h4 className="font-bold text-lg text-white mb-3">{movie.original_title}</h4>
                    <p
                      className="
                       text-sm text-white mb-3 flex items-center "
                    >
                      <AiFillStar className="mr-2" style={{ color: "#fcd34d" }} /> {Math.min(movie.vote_average).toFixed(1)} / 10
                    </p>
                  </div> */}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </main>
      </LayoutsBg>
    </div>
  );
};

export default movies;

export async function getStaticProps() {
  const dataMovies = await axios.get(`${BASE_URL}/movie/popular?api_key=${API_TMDB_URL}`);
  const dataGenres = await axios.get(`${BASE_URL}/genre/movie/list?api_key=${API_TMDB_URL}`);

  return {
    props: {
      dataMovies: dataMovies.data || [],
      dataGenres: dataGenres.data || [],
    },
  };
}
