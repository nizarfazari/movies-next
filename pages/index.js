import Head from "next/head";
import Layouts from "../components/Layouts";
import Carousel from "react-bootstrap/Carousel";
import { FaStar } from "react-icons/fa";
import { BsChevronRight } from "react-icons/bs";
import Image from "next/image";
import Swipper from "../components/Swipper";
import { API_TMDB_URL, BASE_URL } from "../utils/api";
import axios from "axios";

export default function Home({ dataMovies, dataTV }) {
  return (
    <div className="relative">
      <Head>
        <title>Create Next App</title>
        <meta name="movies" content="Movies Homepage" />
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <Layouts>
        <div className="bg_img"></div>
        <Carousel indicators={false}>
          <Carousel.Item>
            <div className="carousel_wrapping">
              <div className="carousel_grid container mx-auto">
                <div className="text-white gap-y-5 flex flex-col">
                  <div className="desc_genres">
                    <span>SCI-FI</span>
                    <span>ADVENTURE</span>
                    <span>ACTION</span>
                  </div>
                  <div>
                    <h1 className="text-6xl font-bold">
                      GUARDIAN OF THE GALAXY <span className="text-4xl font-light font-['revert']">2015</span>
                    </h1>
                  </div>
                  <div className="flex items-center text-xl font-sans">
                    <FaStar className="text-yellow-300 mr-2" /> 7.4/10
                  </div>
                  <div>
                    <button className="button_full font-medium">WATCH TRAILER</button>
                  </div>
                </div>
                <div className="flex justify-end">
                  <Image src="/akame.jpg" alt="movies" width={500} height={300} />
                </div>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
        <section className="mt-20">
          <div className="container mx-auto">
            <div className="text-white relative">
              <div className="flex justify-between items-center mb-4">
                <h1 className="text-4xl mb-0 font-semibold">IN THEATHER</h1>
                <h3 className="text-lg mb-0 flex font-normal items-center cursor-pointer">
                  VIEW ALL <BsChevronRight className="ml-1" />
                </h3>
              </div>
              <div className="mb-3">
                <ul className="flex gap-x-4 pl-0 type-movies">
                  <li className="cursor-pointer font-medium type-movie-active">POPULAR</li>
                  <li className="cursor-pointer font-medium">COMING SOON</li>
                  <li className="cursor-pointer font-medium">TOP RATED</li>
                </ul>
              </div>
              <Swipper movies={dataMovies.results} />
            </div>
            <div className="text-white mt-20 relative">
              <div className="flex justify-between items-center mb-4">
                <h1 className="text-4xl mb-0 font-semibold">ON TV</h1>
                <h3 className="text-lg mb-0 flex font-normal items-center cursor-pointer">
                  VIEW ALL <BsChevronRight className="ml-1" />
                </h3>
              </div>
              <div className="mb-3">
                <ul className="flex gap-x-4 pl-0 type-movies">
                  <li className="cursor-pointer font-medium type-movie-active">POPULAR</li>
                  <li className="cursor-pointer font-medium">COMING SOON</li>
                  <li className="cursor-pointer font-medium">TOP RATED</li>
                </ul>
              </div>
              <Swipper movies={dataTV.results} />
            </div>
          </div>
        </section>
      </Layouts>
    </div>
  );
}

export async function getStaticProps() {
  const dataMovies = await axios.get(`${BASE_URL}/movie/popular?api_key=${API_TMDB_URL}`);
  const dataTV = await axios.get(`${BASE_URL}/tv/popular?api_key=${API_TMDB_URL}`);

  return {
    props: {
      dataMovies: dataMovies.data || [],
      dataTV: dataTV.data || [],
    },
  };
}
