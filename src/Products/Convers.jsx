import { Link } from "react-router";
import {ProductsData} from "../Data";

export default function Convers() {
  return (
         <>
    <section className="ANeansection">
  <div className="CANeanBanner">
      <p>Conveyors</p>
  </div>

  <div className="ANeanContentDiv">
  <div className="ANeanCardss">
      <h1>Conveyors</h1>
  <p>NeAn is engaged in design and manufacturing of bulk & unit handling conveyor sub-assemblies, components, spares and accessories like rollers, idler-frames, pulleys/drums, skirt boards, scrappers, hoods and others parts mainly to cater the needs of OEMs in steel, mining, power, cement, chemical, paper, infrastructure, packaging, fertilizers, and other industries.
</p><p>
With a focus on precision engineering and quality assurance, NeAn’s components are manufactured to withstand the toughest material handling applications. Whether for mining, cement, power plants, or bulk material conveyors, our products are designed to deliver long-lasting performance, minimize spillage, and enhance overall system efficiency.
    </p>
    </div>
       <img src="/assets/CBesideText.jpeg" alt="Idler Rollers"/>
  </div>



   <div className="OurProductsGrid QW">
        <h1>Our Products</h1>
        <div className="Div1">
        {ProductsData.map((i)=>(
          <Link to={i.link}>
            <div className="Div2">
                <img src={i.img} alt={i.name} />
                <p>{i.para}</p>
                <h3>{i.name}</h3>
            </div>
            </Link>
        ))}
            
        </div>
    </div>
</section>

</>
  )
}
