import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import styles from "./Container.module.css";

function Container() {
  return (
    <div className={styles.container}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{ delay: 3000 }} // Muda a imagem automaticamente a cada 3s
      >
        <SwiperSlide>
          <img src="/imgs/ia1.jpg" alt="Capa do site" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/imgs/ia2.jpg" alt="Segunda imagem" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/imgs/ia3.jpg" alt="Terceira imagem" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Container;
