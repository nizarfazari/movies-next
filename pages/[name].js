import axios from "axios";
import Head from "next/head";
import LayoutsBg from "../components/LayoutsBg";
import { API_TMDB_URL, BASE_URL, IMG_URL } from "../utils/api";
import { FaCircle } from "react-icons/fa";
import { useRouter } from "next/router";
import { MdBrokenImage, MdOutlineArrowDropDown } from "react-icons/md";
import Image from "next/image";
import { useEffect, useState } from "react";
const Movies = ({ dataMovies, dataGenres }) => {
  const [active, setActive] = useState(false);
  const [genres, setGenres] = useState([]);
  const [movies, setMovies] = useState([]);
  const router = useRouter();
  console.log(active);
  useEffect(() => {
    setMovies(dataMovies);
    setGenres(dataGenres);
  }, [dataMovies]);

  return (
    <div>
      <Head>
        <title>MOVIES</title>
        <meta name="movies" content="Movies Homepage" />
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <LayoutsBg>
        <main className="mt-10">
          <div className="grid grid-cols-12 text-white container mx-auto">
            <div className="col-span-2 flex flex-col hidden lg:flex">
              <h2 className="text-2xl font-medium mb-3 pt-2">Genres</h2>
              <div className="grid col-span-1 gap-y-3">
                {genres.map((e) => {
                  return (
                    <div
                      key={e.id}
                      className="flex items-center text-base text-gray-300 px-2 mr-2 cursor-pointer hover:rounded-full hover:border-2 hover:border-[#141e38] hover:font-medium"
                      style={{ maxWidth: "170px" }}
                      onClick={() => router.push(`/${e.name}?category=${e.id}`)}
                    >
                      <FaCircle className="mr-3 text-xs " />
                      <button className="text-start">{e.name}</button>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="lg:col-span-10 col-span-12 lg:pl-10 pl-0 border-l-0 lg:border-l-2">
              <div className="flex items-center justify-between">
                <h1 className="text-5xl font-semibold mb-4">{router.query.name}</h1>
                <div className="relative lg:hidden">
                  <button className="rounded-md border-2 min-w-[130px] flex items-center text-lg justify-between px-3 border-[#141e38]" onClick={() => setActive(!active)}>
                    Genres <MdOutlineArrowDropDown className="" />
                  </button>
                  <ul className={`absolute top-10 z-10 px-3 bg-[#141e38] min-w-[130px] max-h-[200px] overflow-y-scroll ${active ? "block" : "hidden"}`}>
                    {genres.map((e) => {
                      return (
                        <li className="py-2" key={e.id} onClick={() => router.push(`/${e.name}?category=${e.id}`)}>
                          {e.name}
                        </li>
                      );
                    })}
                  </ul>
                </div>
                {/* <select className="text-[#fff] min-w-[5rem] pl-2 bg-[#06121e] rounded-md border-2 v" name="cars" id="cars">
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="opel">Opel</option>
                  <option value="audi">Audi</option>
                </select> */}
              </div>
              <div className="grid xl:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-5">
                {movies.map((movie) => {
                  return (
                    <div className="movie-card relative" key={movie.id}>
                      {movie.poster_path ? (
                        <Image className="rounded-xl" width={500} height={500} src={`${IMG_URL}${movie.poster_path}`} alt="movies" />
                      ) : (
                        <div className="relative flex items-center justify-center">
                          <MdBrokenImage className="absolute text-6xl" />
                          <Image className="rounded-xl" width={500} height={500} src="/images/null.png" alt="pic-casts-broken" />
                        </div>
                      )}

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

export default Movies;

export async function getServerSideProps(context) {
  const { category, search, name } = context.query;
  if (category) {
    const res = await axios.get(`${BASE_URL}/discover/movie?api_key=${API_TMDB_URL}&with_genres=${category}`);
    const dataGenres = await axios.get(`${BASE_URL}/genre/movie/list?api_key=${API_TMDB_URL}`);
    return {
      props: {
        dataGenres: dataGenres.data.genres || [],
        dataMovies: res.data.results || [],
      },
    };
  } else if (search) {
    const dataMovies = await axios.get(`${BASE_URL}/search/movie?api_key=${API_TMDB_URL}&query=${search}`);
    const dataGenres = await axios.get(`${BASE_URL}/genre/movie/list?api_key=${API_TMDB_URL}`);
    return {
      props: {
        dataMovies: dataMovies.data.results || [],
        dataGenres: dataGenres.data.genres || [],
      },
    };
  } else if (name == "Movies") {
    const dataMovies = await axios.get(`${BASE_URL}/movie/popular?api_key=${API_TMDB_URL}`);
    const dataGenres = await axios.get(`${BASE_URL}/genre/movie/list?api_key=${API_TMDB_URL}`);
    return {
      props: {
        dataMovies: dataMovies.data.results || [],
        dataGenres: dataGenres.data.genres || [],
      },
    };
  } else if (name == "Genres") {
    const dataMovies = await axios.get(`${BASE_URL}/movie/popular?api_key=${API_TMDB_URL}`);
    const dataGenres = await axios.get(`${BASE_URL}/genre/movie/list?api_key=${API_TMDB_URL}`);
    return {
      props: {
        dataMovies: dataMovies.data.results || [],
        dataGenres: dataGenres.data.genres || [],
      },
    };
  } else {
    return {
      notFound: true,
    };
  }
}
