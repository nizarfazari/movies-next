import { Layouts } from "../../components";
import Image from "next/image";
import { API_TMDB_URL, BASE_URL, IMG_URL } from "../../utils/api";
import { FaStar } from "react-icons/fa";
import { MdBrokenImage } from "react-icons/md";
import { BsFileEarmarkText } from "react-icons/bs";
import axios from "axios";
import { useRouter } from "next/router";
const Movie = ({ dataMovies, dataCasts, dataReview }) => {
  const router = useRouter();
  const year = dataMovies.release_date ? dataMovies.release_date.split("-") : "";
  return (
    <div>
      <Layouts>
        <main>
          <section className="detail-movie relative pt-5 pb-5">
            <div className="bg_nav"></div>
            <div className="grid grid-cols-3 container mx-auto justify-items-center">
              <div className="lg:col-span-1 col-span-3">
                <Image className="rounded-xl" width={300} height={300} src={`${IMG_URL}${dataMovies.poster_path}`} alt="movies" />
              </div>
              <div className="desc-movie text-white col-span-2 ml-5 xl:ml-0 lg:col-span-2 col-span-3 lg:mt-0 mt-10">
                <div className="desc_genres  justify-center lg:justify-start">
                  {dataMovies.genres.map((genre) => {
                    return <span key={genre.id}>{genre.name.toUpperCase()}</span>;
                  })}
                </div>

                <h1 className="text-6xl font-bold mt-2">
                  {dataMovies.original_title ? dataMovies.original_title : dataMovies.original_name} <span className="text-4xl font-light font-['revert']">{year ? year[0] : ""}</span>
                </h1>
                <h2 className="mt-4">The Synopsis is : </h2>
                <p className="mb-0 line-clamp-3">{dataMovies.overview}</p>
                <div className="flex items-center text-xl font-sans mt-2 justify-center lg:justify-start">
                  <FaStar className="text-yellow-300 mr-2" />
                  Rating : {Math.min(dataMovies.vote_average).toFixed(1)}/10
                </div>
                <div className="mt-4">
                  <button className="button_full font-medium">WATCH TRAILER</button>
                </div>
              </div>
            </div>
          </section>

          <section className="text-white container mx-auto" style={{ marginTop: "100px" }}>
            <h2 className="mb-10 font-bold">The Casters is</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
              {dataCasts.cast.slice(0, 8).map((cast) => {
                return (
                  <div className="movie-card relative" key={cast.id}>
                    {cast.profile_path ? (
                      <Image className="rounded-xl" width={500} height={500} src={`${IMG_URL}${cast.profile_path}`} alt="movies" />
                    ) : (
                      <div className="relative flex items-center justify-center">
                        <MdBrokenImage className="absolute text-6xl" />
                        <Image className="rounded-xl" width={500} height={500} src="/images/null.png" alt="pic-casts-broken" />
                      </div>
                    )}
                    <h3 className="font-semibold text-2xl mt-4">{cast.name}</h3>
                    <h4 className="font-base text-xl">{cast.character}</h4>
                  </div>
                );
              })}
            </div>
          </section>

          <section className="text-white mt-20 container mx-auto">
            <h2 className="mb-10 font-bold">Reviews</h2>
            <div>
              {dataReview.length > 0 ? (
                dataReview.slice(0, 3).map((e) => {
                  return (
                    <div className="bg-[#06121e] rounded-xl px-5 py-10 mb-4" key={e.id}>
                      <div className="flex mb-4">
                        <img className="rounded-full mr-4" width={50} height={40} src={`https://ui-avatars.com/api/?name=${e.author}`} alt="movies" />
                        <h2>{e.author}</h2>
                      </div>
                      <p>{e.content}</p>
                    </div>
                  );
                })
              ) : (
                <div className="bg-[#06121e] rounded-xl px-5 py-10 mb-4 relative flex justify-center items-center" style={{ minHeight: "300px" }}>
                  <div className="absolute flex flex-col items-center">
                    <BsFileEarmarkText className="text-6xl" />
                    <p className="mt-4 font-medium">There is not data</p>
                  </div>
                </div>
              )}
            </div>
            {/* <Reviews /> */}
          </section>
        </main>
      </Layouts>
    </div>
  );
};

export default Movie;

export async function getServerSideProps(context) {
  const test = context.query;

  const { type, id } = context.query;
  console.log(test);
  if (type == "movie") {
    const dataMovies = await axios.get(`${BASE_URL}/movie/${id}?api_key=${API_TMDB_URL}`);
    const dataCasts = await axios.get(`${BASE_URL}/movie/${id}/credits?api_key=${API_TMDB_URL}`);
    const dataReview = await axios.get(`${BASE_URL}/movie/${id}/reviews?api_key=${API_TMDB_URL}`);

    return {
      props: {
        dataMovies: dataMovies.data || [],
        dataCasts: dataCasts.data || [],
        dataReview: dataReview.data.results || [],
      },
    };
  } else {
    const dataMovies = await axios.get(`${BASE_URL}/tv/${id}?api_key=${API_TMDB_URL}`);
    const dataCasts = await axios.get(`${BASE_URL}/tv/${id}/credits?api_key=${API_TMDB_URL}`);
    const dataReview = await axios.get(`${BASE_URL}/tv/${id}/reviews?api_key=${API_TMDB_URL}`);

    return {
      props: {
        dataMovies: dataMovies.data || [],
        dataCasts: dataCasts.data || [],
        dataReview: dataReview.data.results || [],
      },
    };
  }
}
