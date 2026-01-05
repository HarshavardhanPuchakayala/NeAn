import "./InfiniteScroll.css";
import { BrandsSlider } from "../Data";

// export default function BrandScroll() {
//   const duration = 150;
//   const itemWidth = 200;
//   const count = BrandsSlider.length;
//   return (
//     <>
//       <div className="TrustPatners">
//         <h1>Our Trusted Clients</h1>
//       </div>
//             <div className="wrapper">
//               {BrandsSlider.map((brand, index) => (
//                 <div
//                   key={index}
//                   className="item"
//                   style={{
//                     backgroundImage: brand.img
//                       ? `url(/assets/${brand.img})`
//                       : "none",
//                     animationDuration: `${duration}s`,
//                     left: `max(calc(${itemWidth * count}px), 100%)`,
//                     animationDelay: `calc(${duration}s / ${count} * (${count} - ${
//                       index + 1
//                     }) * -1)`,
//                   }}
//                 />
//               ))}
//             </div>
//     </>
//   );
// }






import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

export default function  BrandScroll() {
  return (
    <>
     <div className="TrustPatners">
         <h1>Our Trusted Clients</h1>
    </div>
    <div className="BrandSwiper">
      <Swiper
        slidesPerView={5}
        spaceBetween={20}
        loop={true}
        speed={4000}             
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="BrandSlider"
      >
        {BrandsSlider.map((i) => (
       <SwiperSlide key={i.name}>
  <img src={`/assets/${i.img}`} alt={i.name} className="BrandImg" />
</SwiperSlide>
        ))}
      </Swiper>
    </div>
      </>
  );

}
