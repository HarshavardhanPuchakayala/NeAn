import {TeamNamesData} from "../Data";
import { RiCameraLensFill } from "react-icons/ri";
import { AiFillProduct } from "react-icons/ai";
import BrandScroll from "./BrandScroll";
export default function AboutUs() {
  return (
    <>
    <section className="AboutUsSection">
        <div className="AboutUsBanner"></div>


   <div className="Overmission">
            <div className="AboutUSiNTRO">

            <h1 className="Red">Who Are We?</h1>
            <h6>Engineering Strength. Delivering Precision</h6>
            
            <p >NeAn Industries is a distinguished, premier manufacturer of bulk and unit material handling systems. With over two decades of industrial experience, our excellence is depicted in our portfolio which consists of an extensive range of conveyor sub-assemblies, components and accessories like rollers, idler frames, pulleys/drums, skirt boards, scrappers, hoods and more to cater the needs of OEMs in steel, mining, power, cement, chemical, paper, infrastructure, packaging, fertilizers, and other industries. </p>
            <br />
            <p>Our latest unit focuses on the PEB segment, providing custom metal building solutions for a wide range of sectors including industrial, commercial, pharma, automobile, and other sectors. NeAn’s PEB centric machinery and workforce ensures custom-engineered, high-quality and cost-effective metal building systems. </p>
            <br />
            <p>NeAn products are designed and produced as per Indian and International Standards keeping us on par with market leaders in terms of quality. Our trademark is our ability to fulfil and cater to customized designs and providing technical as-well-as innovative solutions to individual customer requirements.</p>
            </div>
        </div>
        <div className="Overmission">
            <div className="AboutUSiNTRO">
            <h1 className="Red">Our Story</h1>
            <h6>From a Garage to Greatness</h6>
            <p >Founded in 2002 as   <span className="HITECH">Hi-Tech Hydraulic Engineers</span> , we began our journey in steel engineering and fabrication. Our consistent quality, reliable in-house designing, technical expertise, and customer-focused approach have earned us a strong reputation across India and International industrial sectors.</p><br/>
            <p>Today, with over two decades of experience, we have now evolved into NeAn Industries — a new identity that reflects our growth, modernization, and expanded capabilities.</p>
            </div>
            <div className="OverMissionGrid">
                <div className="div1">
                  <RiCameraLensFill className="MissionIcon"/>
                    <h1>Our Mission</h1>
                    <p>To deliver quality conveyor systems, sub-assemblies, and custom-engineered equipment with honesty, innovation, and reliability, ensuring on-time delivery, every time.</p>
                </div>
                <div className="div2">
                  <AiFillProduct className="MissionIcon"/>
                    <h1>Our Vision</h1>
                    <p>To achieve industrial leadership by combining innovation, technology, and excellence, transforming possibilities into lasting realities for industries worldwide.</p>
                </div>
            </div>
            <div className="CEOIntroGrid">
                <div className="CEOContent">
                   <h2>We believe in doing things with precision and purpose</h2>
                    <p>Our development approach is centred around innovation, customization, and continuous improvement. We don't just manufacture, we engineer solutions. By staying aligned with evolving industry needs and investing in skilled talent and modern infrastructure, NeAn Industries continues to scale sustainably, empowering industries and exceeding customer expectations at every stage.</p>
                </div>

                     <video
        className="CEOVideo"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/assets/Video.mp4" type="video/mp4" />
      </video>  
            </div>
        </div>
<div className="AboutUsTeamSection">
  <h1 className="Red">Our Experts</h1>
  <div className="AboutUsTeamGrid">
   {TeamNamesData.map((i)=>(
    <div className="Card">
      <img src={i.img} alt={i.name} />
      <h1>{i.name}</h1>
      <p>{i.txt}</p>
    </div>
    ))}
  </div>
</div>

        <div className="ProjectAboutSection">

<BrandScroll/>
        </div>
    </section>
    </>
  )
}
