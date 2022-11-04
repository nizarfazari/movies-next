import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import { IMG_URL, IMG_URL_500 } from "../utils/api";
const Swipper = ({ movies }) => {
  return (
    <>
      <Swiper
        slidesPerView={5}
        spaceBetween={40}
        slidesPerGroup={5}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        style={{ position: "static" }}
      >
        {movies &&
          movies.map((movie) => {
            return (
              <SwiperSlide className="cursor-pointer" key={movie.id} onClick={() => navigate(`/movie/${movie.id}`)}>
                <div className="movie-card relative">
                  <Image className="rounded-xl" width={400} height={400} src={`${IMG_URL}${movie.poster_path}`} alt="movies" />

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
              </SwiperSlide>
            );
          })}
      </Swiper>
    </>
  );
};

export default Swipper;
