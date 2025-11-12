import { WhatWeDoHomeData,HomeBrands,HomePortfolio,HomeWork,TeamNamesData,TeamProfileData } from "../Data";

import CountDown from "./CountDown";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
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

      <div className="slider-content">
       
      </div>
    </div>


    <div className="HomeAbout">
          <h1>
            Precision in Every Piece. Innovation in Every Idea
          </h1>

          <p>
            At Nean Industries, our story is built on grit, innovation, and a vision to transform possibilities into realities. What started in a modest garage has evolved into a benchmark for quality and engineering in India’s manufacturing landscape.
              <br/>
               <br/>
          We began by doing what was necessary, then mastered what was possible—and now, we’re proud to deliver what was once thought impossible.
          </p>
      
    
    </div>
    <CountDown/>


    <div className="HomeWhatWeDo">
      <div className="Content">
        <h2>WHAT WE DO</h2>
        <h4>Innovative factory and industry</h4>
        <h3>Solutions today</h3>
        <div className="WhatweDoGrid">
          {WhatWeDoHomeData.map((i)=>(
            <div className="card">
            <img src={i.img} alt={i.name} />
            <p>{i.name}</p>
          </div> 
          ))}
        </div>
      </div>

      <img src="/assets/AboutUsHome.jpg" alt="What we do" className="WhatWeDoImg"/>
    </div>

 

    {/* <div className="Brands">
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
      className="mySwiper BrandsSlider"
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
  }}>

{HomeBrands.map((srv)=>(
  <SwiperSlide key={srv.id}>
          <img src={srv.img}
          loading="lazy"
            className='BrandsImg'
            alt={srv.id}/>
        </SwiperSlide>
))}
   
       

    </Swiper>
    </div> */}

        {/* <div className="HomeProjects">
      <h1>OUR PORTFOLIO</h1>
 <Swiper
      cssMode={true}
      lazy={true}
      rewind={true}
      slidesPerView={3}
    
      autoplay={{
        delay: 8000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
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

{HomePortfolio.map((srv)=>(
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
    </div> */}


    {/* <div className="HomePEWSection">
      <img src="/assets/PEW.png" alt="PRE-ENGINEERING BUILDINGS" />
      <div className="HomwPEWContent">
        {/* <h1>PRE-ENGINEERING <br/>BUILDING</h1> */}
        {/* <h1>Pre-Engineered Building (PEB) Solutions</h1>
        <h2>Smart Structures. Fast Execution. Long-Term Reliability.</h2>
        <p>At Nean Industries, we bring precision engineering and modern construction together with our <b>Pre-Engineered Building (PEB) solutions</b> a perfect blend of speed, strength, and sustainability. Designed for quick deployment and structural efficiency, our PEB structures are ideal for <b>industrial sheds, warehouses, manufacturing plants, logistics hubs, and commercial spaces.</b>
        <br />
        <br />
        With in-house fabrication, CNC-enabled production lines, and expert structural engineers, we deliver <b>custom-designed PEBs</b> that meet exact client specifications while ensuring <b>durability, scalability, and cost-effectiveness.</b> From concept to commissioning, Nean Industries is your trusted partner for turnkey steel building solutions that stand the test of time.
        </p>

      </div> */}
    {/* </div> */}

    {/* <div className="HomeWork">
      <h1>Why work with us</h1>

      <div className="WorkGrid">
        {HomeWork.map((i)=>(
          <div className="card">
          <h1>{i.name}</h1>
          <p>{i.txt}</p>
        </div> 
        ))}
       
      </div>
    </div> */}


    {/* <div className="ServicesHome">
      <img src="/assets/ServicesHome.png" alt="NeAn Industries Pvt Ltd" />

      <div className="Div1">
        <h1>We believe in doing things with precision and purpose</h1>
        <p>At Nean Industries, every project is powered by engineering excellence, attention to detail, and a passion for innovation.
           Our work culture blends traditional craftsmanship with modern automation, ensuring consistent quality and continuous improvement.
        From product design to final delivery, we focus on efficiency, customer satisfaction, and scalable growth—building not just components,
         but lasting partnerships.

          <br />
          <br />

          Our development approach is centered around innovation, customization, and continuous improvement.
           We don't just manufacture we engineer solutions. By staying aligned with evolving industry needs and
            investing in skilled talent and modern infrastructure, Nean Industries continues to scale sustainably,
             empowering industries and exceeding customer expectations at every stage.
        </p>
      </div>
    </div> */}

    {/* <div className="TeamSection">
      <h1>Meet Our Team</h1>

      <div className="TeamGrid">

        <div className="TeamNameGrid">
          {TeamNamesData.map((i)=>(
          <div className="TeamCard" key={i.id}>
            <h1>{i.name}</h1>
            <p>{i.txt}</p>
          </div>
                   ))}
       </div> 

        <div className="TeamProfileGrid">
          {TeamProfileData.map((i)=>(
                   <div className="TeamCard">
          <img src={i.img} alt={i.id} />
          </div>
          ))}
         
        </div>


      </div>
      
    </div> */}


    {/* <div className="ClientSection">
      <h1>Client Reviews</h1>

      <div className="ClientTestimonialCards">
        <div className="Testimonial1">
          <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit maiores nesciunt asperiores facere placeat dignissimos in saepe sapiente, quasi sunt totam optio unde quibusdam. Quod beatae sunt nam recusandae doloribus.</h6>
          <p>--Jean and Julian Marsh</p>
        </div>
                <div className="Testimonial1">
          <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit maiores nesciunt asperiores facere placeat dignissimos in saepe sapiente, quasi sunt totam optio unde quibusdam. Quod beatae sunt nam recusandae doloribus.</h6>
          <p>--Jean and Julian Marsh</p>
        </div>
                <div className="Testimonial1">
          <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit maiores nesciunt asperiores facere placeat dignissimos in saepe sapiente, quasi sunt totam optio unde quibusdam. Quod beatae sunt nam recusandae doloribus.</h6>
          <p>--Jean and Julian Marsh</p>
        </div>
      </div>
    </div> */}
</section>
</>
  )
}
