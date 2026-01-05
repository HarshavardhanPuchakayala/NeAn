import {PEBBData,PEBComponets} from "../Data";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
export default function PEB() {
  return (
    <>
   <section className="PEBsection">
    <div className="PEBBanner"></div>
    <div className="PEBAboutusDiv">
        <div className="Content">
            <h1>Pre-Engineered Building (PEB) Solutions</h1>
             <p>At NeAn Industries, we bring precision engineering and modern construction together with our <b>Pre-Engineered Building (PEB) solutions</b> a perfect blend of speed, strength, and sustainability. Designed for quick deployment and structural efficiency, our PEB structures are ideal for <b>industrial sheds, warehouses, manufacturing plants, logistics hubs, and commercial spaces.</b>
        <br />
        <br />
        With in-house fabrication, CNC-enabled production lines, and expert structural engineers, we deliver <b>custom-designed PEBs</b> that meet exact client specifications while ensuring <b>durability, scalability, and cost-effectiveness.</b> From concept to commissioning, NeAn Industries is your trusted partner for turnkey steel building solutions that stand the test of time.
        </p>
        </div>

        <img src="/assets/PEBBG.png" alt="PEB" />
    </div>

    <div className="PebComponets">
      <h1>A pre-engineered steel building is composed of the following main components</h1>

      <div className="ComponetsDiv">
        {PEBComponets.map((i)=>(

    
        <div className="CCard">
          <img src={i.img} alt={i.name} />
          <h6>{i.name}</h6>
        </div>
            ))}
      </div>
    </div>

   <div className="HomeProjects">
      <h1>Projects</h1>
 <Swiper
      cssMode={true}
      lazy={true}
      rewind={true}
      slidesPerView={3}
    
      autoplay={{
        delay: 8000,
        disableOnInteraction: false,
      }}
    
      modules={[Autoplay, Pagination]}
      className="mySwiper HomeProjectsSlide"
      spaceBetween={20}
       breakpoints={{
    0: {
      slidesPerView: 1, 
    },
    768: {
      slidesPerView: 2, 
    },
    1024: {
      slidesPerView: 3, 
    },
    1280: {
      slidesPerView: 3, 
    },
    1536: {
      slidesPerView: 3, 
    }
  }}
    >
{PEBBData.map((srv)=>(
   <SwiperSlide
         key={srv.id}
            
            style={{ cursor: "pointer" }}>
          <img src={srv.img} 
          loading="lazy"
            className='SrvImg'
            alt={srv.name}/>

          <div className="SrvContent">
            <h1>{srv.name}</h1>
          </div>
        </SwiperSlide>
))}

      

    </Swiper>
    </div>

   </section>
    </>
  )
}
