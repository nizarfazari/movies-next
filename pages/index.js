import Head from "next/head";
import Layouts from "../components/Layouts";
import Carousel from "react-bootstrap/Carousel";
import { FaStar } from "react-icons/fa";
import { BsChevronRight } from "react-icons/bs";
import Image from "next/image";
import Swipper from "../components/Swipper";
import { API_TMDB_URL, BASE_URL } from "../utils/api";
import axios from "axios";
import { useEffect, useState } from "react";
import Accordion from "../components/Accordion";

export default function Home({ dataMovies, dataTV }) {
  const [typesMovie, settypesMovie] = useState({
    activeMovie: "POPULAR",
    activeTV: "POPULAR",
    typeMovie: ["POPULAR", "COMING SOON", "TOP RATED"],
  });

  //animation on type of movies
  const toogleActive = (i, type) => {
    type === "movie" ? settypesMovie({ ...typesMovie, activeMovie: typesMovie.typeMovie[i] }) : settypesMovie({ ...typesMovie, activeTV: typesMovie.typeMovie[i] });
  };

  const toogleActiveStyles = (i, type) => {
    if (type === "movie") {
      if (typesMovie.typeMovie[i] === typesMovie.activeMovie) {
        return "type-movie-active";
      }
    }
    if (type === "tv") {
      if (typesMovie.typeMovie[i] === typesMovie.activeTV) {
        return "type-movie-active";
      }
    }
    return "";
  };

  return (
    <div className="relative">
      {/* {console.log(movie)} */}
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
                    <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec...</p>
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
                  {typesMovie.typeMovie.map((e, i) => {
                    return (
                      <li key={i} className={`cursor-pointer font-medium ${toogleActiveStyles(i, "movie")}`} onClick={() => toogleActive(i, "movie")}>
                        {e}
                      </li>
                    );
                  })}
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
                  {typesMovie.typeMovie.map((e, i) => {
                    return (
                      <li key={i} className={`cursor-pointer font-medium ${toogleActiveStyles(i, "tv")}`} onClick={() => toogleActive(i, "tv")}>
                        {e}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <Swipper movies={dataTV.results} />
            </div>
          </div>
        </section>

        <section className="show_movie mt-20">
          <div className="container mx-auto text-white grid grid-cols-2 pt-20 pb-20">
            <div>
              <h1 className="text-4xl font-semibold mb-4">Anime TV</h1>
              <iframe
                width="600"
                height="300"
                src="https://www.youtube.com/embed/v-AGjx0N24U"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div className="about-movie ml-20 mt-3">
              <h2 className="text-xl font-base text-center mb-4 border-b-2 border-solid pb-2">SPOTLIGHT CHARACTER</h2>
              <div className="flex mb-4">
                <Image src="/akame.jpg" alt="movies" width={250} height={250} />
                <div className="ml-10 flex flex-col justify-center">
                  <h3 className="text-xl font-medium">Ikuzo Samahadaku</h3>
                  <h4 className="text-lg font-light">ACTOR</h4>
                </div>
              </div>
              <div className="flex mb-4">
                <Image src="/akame.jpg" alt="movies" width={250} height={250} />
                <div className="ml-10 flex flex-col justify-center">
                  <h3 className="text-xl">Ikuzo Samahadaku</h3>
                  <h4 className="text-lg font-light">ACTOR</h4>
                </div>
              </div>
              <div className="flex mb-4">
                <Image src="/akame.jpg" alt="movies" width={250} height={250} />
                <div className="ml-10 flex flex-col justify-center">
                  <h3 className="text-xl">Ikuzo Samahadaku</h3>
                  <h4 className="text-lg font-light">ACTOR</h4>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="mt-20 pt-10">
          <div class="grid grid-cols-2 container mx-auto text-white">
            <div class="faqs__description">
              <h1 className="text-4xl mb-3 font-semibold">Frequently Asked Question</h1>
              <p className="font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
            <div class="faqs__accordion">
              <Accordion />
              <Accordion />
              <Accordion />
              <Accordion />
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
