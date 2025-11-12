import {ClientSered,FocusData,TeamNamesData} from "../Data";
import { RiCameraLensFill } from "react-icons/ri";
import { AiFillProduct } from "react-icons/ai";
import { FaArrowRightLong } from "react-icons/fa6";
import BrandScroll from "./BrandScroll";
export default function AboutUs() {
  return (
    <>
    <section className="AboutUsSection">
        <div className="AboutUsBanner"></div>

        <div className="Overmission">
            <div className="AboutUSiNTRO">

            <h1 className="Ext">Our <h1 className="Red">Story</h1></h1>
            <h6>From a Garage to Greatness</h6>
            
            <p >What began in a modest garage in 2002 has today evolved into <strong className="Red st">NeAn;</strong> trusted, customer-centric, ISO 9001:2008 certified company located in the heart of <strong className="Red st">Cherlapally Industrial Park, Hyderabad.</strong> Over the decades, our journey has been driven by a simple philosophy: start with what’s necessary, master what’s possible, and then deliver the impossible.<br/>
Spread across <strong className="Red st">55,000 sq. ft.</strong>, powered with <strong className="Red st">250 HP backup systems,</strong> and equipped with cutting-edge technology, NeAn has grown into a brand synonymous with <strong className="Red st">quality, innovation, and reliability</strong> in India’s manufacturing landscape.
</p>
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

                     <video
        className="CEOVideo"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/assets/Video.mp4" type="video/mp4" />
    
      </video>

                <div className="CEOContent">
                    <h1>What We Do:</h1>
                    <p>At Hi-Tech, we design and manufacture <strong className="Red st">bulk and unit handling conveyor sub-assemblies, rollers, idler frames, pulleys, drums, skirt boards, scrapers, hoods, spares, and accessories.</strong> Our products are trusted by <strong className="Red st"> OEMs and industries spanning Mining, Steel, Fertilizers, Power, Cement, Chemicals, Paper, Infrastructure, and Packaging.</strong><br/>
Every solution is built to <strong className="Red st">Indian and International standards,</strong> with customized <p className="Red">designs and innovative engineering</p> that address unique customer needs, making customization our <strong className="Red st">signature strength.</strong>
</p>
                </div>
            </div>

        </div>

      


<div className="StrenthSection">
  <h1>Our <strong className="Red st">Strenth</strong></h1>
  <img src="/assets/StrengthImg.png" alt="Our Strength" />
</div>

        {/* <div className="NetworkSection">
          <h1>Our <p>Growing</p>network</h1>

          <div className="Boxes">
            <div className="Box1"><h4>Charlapally</h4><h2>+9%</h2></div>
            <div className="Box2"><h4>Charlapally</h4><h2>+9%</h2></div>
            <div className="Box3"><h4>Charlapally</h4><h2>+9%</h2></div>
            <div className="Box4"><h4>Charlapally</h4><h2>+9%</h2></div>
            <div className="Box5"><h4>Charlapally</h4><h2>+9%</h2></div>
            <div className="Box6"><h4>Charlapally</h4><h2>+9%</h2></div>
          </div>
        </div> */}

        <div className="Servedsection">
          <FaArrowRightLong className="ServedIcon"/>
          <div className="ContentText">
            <h1>Our Impact</h1>
            <p>Turning insights into action has driven our impact on clients and communities over the years.</p>
          </div>

          <div className="ContentGrid">
            {ClientSered.map((i)=>(
              <div className="Div1" key={i.id}>
              <h1>{i.num}</h1>
              <p>{i.name}</p>
            </div> 
            ))}
           

          </div>
        </div>


        <div className="ProjectAboutSection">
          {/* <h1>Our <strong className="Red st">Clients</strong></h1> */}
<BrandScroll/>
        </div>


<div className="OurEdgeSection">
  <div className="OurEdgeSectionDiv">
  <h1>Our Edge</h1>
  <p>Behind every machine is our highly trained, experienced, and motivated team of professionals who ensure that process excellence, product precision, and after-sales service remain uncompromised.<br/>
Our unwavering focus on customer satisfaction and continuous improvement has made NeAn “The Brand of Customer’s Choice” in the manufacturing sector.
</p>

<em>Engineering Strength. Delivering Precision. Building Trust.</em>
</div>
</div>


<div className="AboutUsTeamSection">
  <h1>Our <strong className="Red st">Experts</strong></h1>
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


       
    </section>
    </>
  )
}
