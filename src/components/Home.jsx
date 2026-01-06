import { HConveyorsData, PHConveyorsData,NeanProductsVariousApplications,
OurFeaturesData } from "../Data";
import BrandScroll from "./BrandScroll";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import {Link} from 'react-router'

export default function Home() {
  return (
<>
<section className="Home">
 <div className="slider-container">
      <video
        className="background-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/assets/Video.mp4" type="video/mp4" />
    
      </video>


      <div className="HomeSlider_Con">
       <strong> <h1>Engineered <br/>for Precision.</h1></strong>
          <h2>Experience next-gen Conveyor Systems and Pre-Engineered Buildings built for precision, durability, and seamless productivity engineered to keep your operations moving forward without compromise. </h2>
        <div className="HomeSlider_btn">
          <Link to="/Conveyors">
            Conveyors

          </Link>
          <Link  to="/PEB" className="imgTop_btn">
          PEB
              
          </Link>
        </div>
      </div>
    </div>


    <div className="HomeAbout">
          <h1>
            Designed for excellence, Engineered to endure.
          </h1>

          <p>
            NeAn Industries is a leading steel engineering and fabrication enterprise delivering quality solutions in Conveyor Systems, Pre-Engineered Buildings (PEB), and Steel Structures.
  </p>
      
    
    </div>
    

<div className="NeanProductsVASection">
  <h1>Nean Products in various applications</h1>
<div className="div321">
  {NeanProductsVariousApplications.map((i)=>(
     <div className="div11">
    <img src={i.img} alt={i.name} />
    <p>{i.name}</p>
  </div>
  ))}
 </div>
</div>



<div className="OurFeaturesSection">
  {/* <h4>We care about our clients</h4> */}
  <h1>Our features</h1>

  <div className="FeaturesSection">
    {OurFeaturesData.map((i)=>(
     <div className="div1222">
      <img src={i.img} alt={i.name} />
      <div className="div12222">
        <h4>{i.name}</h4>
        <p>{i.txt}</p>
      </div>
    </div> 
    ))}
    
  </div>
</div>



<div className="HomeProjects">
      <h1>CONVEYOR SYSTEMS</h1>
    <Swiper
  cssMode={true}
  lazy={true}
  rewind={true}
  slidesPerView={3}
  autoplay={{
    delay: 2000,
    disableOnInteraction: false,
  }}
  modules={[Autoplay, Pagination]}
  className="mySwiper HomeProjectsSlide"
  spaceBetween={20}

  onSwiper={(swiper) => {
    const swiperEl = swiper.el;

    swiperEl.addEventListener("mouseenter", () => swiper.autoplay.stop());
    swiperEl.addEventListener("mouseleave", () => swiper.autoplay.start());
  }}

  breakpoints={{
    0: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
    1280: { slidesPerView: 3 },
    1536: { slidesPerView: 3 }
  }}
>
  {HConveyorsData.map((srv) => (
    <SwiperSlide key={srv.id} style={{ cursor: "pointer" }}>
      <img src={srv.img} loading="lazy" className="SrvImg" alt={srv.name} />
    </SwiperSlide>
  ))}
</Swiper>

    </div>

 <div className="HomeProjects">
      <h1>PRE -ENGINEERED BUILDINGS</h1>
   <Swiper
  cssMode={true}
  lazy={true}
  rewind={true}
  slidesPerView={3}
  autoplay={{
    delay: 2000,
    disableOnInteraction: false,
  }}
  modules={[Autoplay, Pagination]}
  className="mySwiper HomeProjectsSlide"
  spaceBetween={20}

  onSwiper={(swiper) => {
    const swiperEl = swiper.el;

    swiperEl.addEventListener("mouseenter", () => swiper.autoplay.stop());
    swiperEl.addEventListener("mouseleave", () => swiper.autoplay.start());
  }}

  breakpoints={{
    0: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
    1280: { slidesPerView: 3 },
    1536: { slidesPerView: 3 }
  }}
>
  {PHConveyorsData.map((srv) => (
    <SwiperSlide key={srv.id} style={{ cursor: "pointer" }}>
      <img src={srv.img} loading="lazy" className="SrvImg" alt={srv.name} />
    </SwiperSlide>
  ))}
</Swiper>

    </div>

      <div className="ProjectAboutSection">
    
    <BrandScroll/>
            </div>
</section>
</>
  )
}
