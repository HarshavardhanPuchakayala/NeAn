import { WhatWeDoHomeData,HomeProjects,HomeBrands,HomePortfolio,HomeWork,TeamNamesData,TeamProfileData } from "../Data";

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
        Your browser does not support the video tag.
      </video>

      <div className="slider-content">
        <h1>Your final impact statement goes here. Make it memorable!</h1>
      </div>
    </div>


    <div className="HomeAbout">
          <h1>
            Sometimes, all we need is a push in the right direction.
          </h1>

          <p>
            Stronger Spirit is a non-profit foundation dedicated to supporting and empowering anyone recovering from alcohol addiction. Our founders have been where you are now. We understand what you need without you saying it.
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

      <img src="/assets/AboutUsHome.png" alt="What we do" className="WhatWeDoImg"/>
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
{HomeProjects.map((srv)=>(
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

    <div className="Brands">
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
    </div>

        <div className="HomeProjects">
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
    </div>


    <div className="HomePEWSection">
      <img src="/assets/PEW.png" alt="PRE-ENGINEERING BUILDINGS" />
      <div className="HomwPEWContent">
        <h1>PRE-ENGINEERING <br/>BUILDING</h1>
        <h2>We handle projects from start to finish, including design, permits and construction management.</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam blanditiis asperiores labore incidunt. Architecto reiciendis consequuntur libero est aliquam voluptatum quae aperiam sed esse tempora perspiciatis, enim voluptatibus, corporis recusandae?</p>
      </div>
    </div>

    <div className="HomeWork">
      <h1>Why work with us</h1>

      <div className="WorkGrid">
        {HomeWork.map((i)=>(
          <div className="card">
          <h1>{i.name}</h1>
          <p>{i.txt}</p>
        </div> 
        ))}
       
      </div>
    </div>


    <div className="ServicesHome">
      <img src="/assets/ServicesHome.png" alt="NeAn Industries Pvt Ltd" />

      <div className="Div1">
        <h1>YOUR PRE-TITLE GOES HERE</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, fugit odio quasi quidem unde assumenda at eos, similique eum culpa explicabo. Inventore enim provident illum perferendis maiores fugiat numquam. Molestiae!
        </p>
      </div>
    </div>

    <div className="TeamSection">
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
      
    </div>


    <div className="ClientSection">
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
    </div>
</section>
</>
  )
}
