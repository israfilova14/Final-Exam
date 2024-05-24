 import "../carusel/Carusel.scss"
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const Carusel = () => {
  return (
    <div className="carusel-box">
         <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <div className="background-1">
           <h1>Food and more <span>.</span></h1>
           <p>By Chef Francis Smith</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="background-2">
           <h1>Special Dish <span>.</span></h1>
           <p>By Chef Francis Smith</p>
      </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="background-3">
            <h1>Hygienic Food <span>.</span></h1>
            <p>By Chef Francis Smith</p>
        </div>
      </SwiperSlide>
   
      ...
    </Swiper>
    </div>
  )
}

export default Carusel