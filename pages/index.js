import Head from "next/head";
import Carousel from "react-bootstrap/Carousel";
import { FaStar } from "react-icons/fa";
import { BsChevronRight } from "react-icons/bs";
import Image from "next/image";
import { API_TMDB_URL, BASE_URL } from "../utils/api";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Accordion, Layouts, Swipper } from "../components";

export default function Home({ dataMovies, dataTV }) {
  const router = useRouter();
  const [movies, setMovies] = useState(dataMovies.results);
  const [tv, setTv] = useState(dataTV.results);
  const [typesMovie, settypesMovie] = useState({
    activeMovie: "POPULAR",
    activeTV: "POPULAR",
    typeMovie: ["POPULAR", "TOP RATED"],
    query: ["popular", "top_rated"],
  });

  //animation on type of movies
  const toogleActive = async (i, type) => {
    if (type === "movie") {
      settypesMovie({ ...typesMovie, activeMovie: typesMovie.typeMovie[i] });
      const dataMovies = await axios.get(`${BASE_URL}/movie/${typesMovie.query[i]}?api_key=${API_TMDB_URL}`);
      setMovies(dataMovies.data.results);
    } else {
      settypesMovie({ ...typesMovie, activeTV: typesMovie.typeMovie[i] });
      const dataTv = await axios.get(`${BASE_URL}/tv/${typesMovie.query[i]}?api_key=${API_TMDB_URL}`);
      setTv(dataTv.data.results);
    }
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
      <Head>
        <title>Movies</title>
        <meta name="movies" content="Movies Homepage" />
        <link rel="icon" href="./favicon.ico" />
      </Head>

      <Layouts>
        <Carousel indicators={false}>
          <Carousel.Item>
            <div className="carousel_wrapping">
              <div className="bg_nav h-full"></div>
              <div className="carousel_grid container mx-auto">
                <div className="text-white gap-y-5 flex flex-col column-1">
                  <div className="desc_genres justify-center xl:justify-start">
                    <span>SCI-FI</span>
                    <span>ADVENTURE</span>
                    <span>ACTION</span>
                  </div>
                  <div className="title">
                    <h1 className="text-5xl font-bold md:text-6xl">
                      KAKEGURUI <span className="text-4xl font-light font-['revert']">2017</span>
                    </h1>
                    <p className="mb-0 line-clamp-3">
                      Unlike many schools, attending Hyakkaou Private Academy prepares students for their time in the real world. Since many of the students are the children of the richest people in the world, the academy has its quirks
                      that separate it from all the others.
                    </p>
                  </div>
                  <div className="flex items-center text-xl font-sans justify-center xl:justify-start">
                    <FaStar className="text-yellow-300 mr-2" /> 7.2/10
                  </div>
                  <div className="flex justify-center xl:justify-start">
                    <button className="button_full font-medium">WATCH TRAILER</button>
                  </div>
                </div>
                <div className="flex justify-end items-center column-2">
                  <div>
                    <Image src="/images/kakegurui.jpg" alt="movies" width={500} height={500} priority />
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
          {/* <Carousel.Item>
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
                      Food Wars! Shokugeki no Soma <span className="text-4xl font-light font-['revert']">2014</span>
                    </h1>
                    <p className="mb-0">Souma Yukihira has been cooking alongside his father Jouichirou for as long as he can remember. As a sous chef at his father`s restaurant...</p>
                  </div>
                  <div className="flex items-center text-xl font-sans">
                    <FaStar className="text-yellow-300 mr-2" /> 7.4/10
                  </div>
                  <div>
                    <button className="button_full font-medium">WATCH TRAILER</button>
                  </div>
                </div>
                <div className="flex justify-end items-center">
                  <div>
                    <Image src="/images/shokugeki.jpg" alt="movies" width={500} height={500} priority />
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
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
                      AKAME GA KILL <span className="text-4xl font-light font-['revert']">2015</span>
                    </h1>
                    <p className="mb-0">
                      Night Raid is the covert assassination branch of the Revolutionary Army, an uprising assembled to overthrow Prime Minister Honest, whose avarice and greed for power has led him to take advantage of the child emperor`s
                      inexperience.
                    </p>
                  </div>
                  <div className="flex items-center text-xl font-sans">
                    <FaStar className="text-yellow-300 mr-2" /> 7.4/10
                  </div>
                  <div>
                    <button className="button_full font-medium">WATCH TRAILER</button>
                  </div>
                </div>
                <div className="flex justify-end items-center">
                  <div>
                    <Image src="/images/akame.jpg" alt="movies" width={500} height={500} priority />
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item> */}
        </Carousel>
        <section className="mt-20">
          <div className="container mx-auto">
            <div className="text-white relative">
              <div className="flex justify-between items-center mb-4">
                <h1 className="text-4xl mb-0 font-semibold">IN THEATHER</h1>
                <h3 className="text-lg mb-0 flex font-normal items-center cursor-pointer" onClick={() => router.push("/Movies")}>
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
              <Swipper movies={movies} type="movie" />
            </div>
            <div className="text-white mt-20 relative">
              <div className="flex justify-between items-center mb-4">
                <h1 className="text-4xl mb-0 font-semibold">ON TV</h1>
                <h3 className="text-lg mb-0 flex font-normal items-center cursor-pointer" onClick={() => router.push("/Movies")}>
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
              <Swipper movies={tv} type="tv" />
            </div>
          </div>
        </section>

        <section className="show_movie mt-20">
          <div className="container mx-auto text-white grid xl:grid-cols-2 pt-20 pb-20 grid-cols-1 justify-items-center">
            <div className="text-center text-h1">
              <h1 className="text-4xl font-semibold mb-4 ">Anime TV</h1>
              <iframe
                className="trailer-youtube"
                width="600"
                height="300"
                src="https://www.youtube.com/embed/v-AGjx0N24U"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div className="about-movie mt-3">
              <h2 className="text-xl font-base text-center mb-4 border-b-2 border-solid pb-2">SPOTLIGHT CHARACTER</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-5 xl:mt-0 sm:mt-10">
                <div className="flex justify-center">
                  <Image src="/images/akame_char.jpg" alt="movies" width={150} height={150} />
                  <div className="ml-10 flex flex-col justify-center">
                    <h3 className="text-xl">Sora Amamiya</h3>
                    <h4 className="text-lg font-light">Akame</h4>
                  </div>
                </div>
                <div className="flex justify-center">
                  <Image src="/images/tatsumi.jpg" alt="movies" width={150} height={150} />
                  <div className="ml-10 flex flex-col justify-center">
                    <h3 className="text-xl">Corey Hartzog</h3>
                    <h4 className="text-lg font-light">Tatsumi</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="mt-20 pt-10">
          <div class="grid grid-cols-1 lg:grid-cols-2  container mx-auto text-white">
            <div class="faqs__description">
              <h1 className="text-4xl mb-3 font-semibold">Frequently Asked Question</h1>
              <p className="font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
            <div class="faqs__accordion">
              <Accordion question="Apakah nizar itu keren ?" answer="iya, keren banget suwer gak boong" />
              <Accordion question="Apakah film yang di headline itu bagus ?" answer="Makanya nonton dulu gak usah banyak tanya!!" />
              <Accordion question="Bagaimana cara melihat film tersebut ?" answer="pakek matalahh" />
              <Accordion question="Hay nama kamu siapa?" answer="gak usah sok a6" />
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
