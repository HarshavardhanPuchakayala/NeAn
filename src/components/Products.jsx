import { HomeProjects,ProductsData } from "../Data"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
export default function Products() {
  return (
  <>
  <section className="ProductsSection">
    <div className="ProductsBanner">
        <h1>Our Products</h1>
    </div>
    <div className="OurProductsGrid">
        <h1>Conveyor Systems</h1>

        <div className="Div1">
        {ProductsData.map((i)=>(
            <div className="Div2">
                <img src={i.img} alt={i.name} />
                <h4>{i.name}</h4>
                <p>{i.txt}</p>
            </div>
        ))}
            
        </div>
    </div>
      <div className="HomeProjects PPEWW">
      <h1 className="PPEW">Pre Engineered Buildings</h1>
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
        </SwiperSlide>
))}

      

    </Swiper>
    </div>
  </section>
  </>
  )
}
