import {OtherProductsData,OtherData} from "../Data";

export default function OtherProducts() {
  return (
         <>
    <section className="ANeansection">
  <div className="OPANeanBanner">
      <p>Other Products</p>
  </div>

  <div className="ANeanContentDiv">
  <div className="ANeanCardss">
      <h1>Sub Assemblies, Skirt Boards, Hoods, Scrappers</h1>
  <p>NeAn manufactures a wide range of conveyor skirt boards, hoods, and scrapers, all designed and built to meet specific customer requirements. Our skirt boards are fabricated using IS 2062 grade steel as the base material and are lined with premium wear-resistant materials such as SAIL HARD, TISCROL, Stainless Steel (SS), UHMW, or HARDOX. This combination ensures excellent durability, reduced maintenance, and superior performance in demanding industrial environments
</p><p>
NeAn can make custom built heavy fabricated equipments like crane booms, pressure vessels, cones, rings, bevelled shapes etc., and conveyor assemblies like head/tail end assemblies, drive-base assemblies, impact beds, gantry assemblies etc.
    </p>
    <p>
      Our product identification/marking methods are very systematic ensuring nil traceability issues at site and absolute traceability at the process line. Packing, forwarding and loading of each product are performed to the highest level of quality standards and utmost dedication.
    </p>
    </div>
       <img src="/assets/OT1.jpg" alt="Idler Rollers"/>
  </div>

<div className="ANeanSpecificationsDiv">
  <h1>We Also Manufacture</h1>

  <div className="ANeanSpecifc">
    {OtherData.map((m) => (
      <div className="itemWrap" key={m.id}>
        <img src={m.img} alt={m.para} className="idlerImg"/>
        <p className="main_btn">{m.para}</p>
        </div>
    ))}
    {/* <p>Flap Gates</p>
    <p>2 way/3 way Divertor Gates</p>
    <p>Manual/Side/Rod Gates</p>
    <p>Rack and Pinion Gates</p>
    <p>Conveyor Hoods</p>
    <p>Deck Plates</p>
    <p>Skirt Boards</p>
    <p>Scrappers</p>
    <p>Interconnecting and Discharge Chutes</p>
    <p>Structural Items</p>
    <p>EOT Cranes</p> */}
  </div>
</div>


 <div className="ANeanContentDiv  ANeanReverse">

  <img src="/assets/OT2.jpeg" alt="Idler Frames"/>
   <div className="ANeanCardss">
    <p>NeAn can make custom built heavy fabricated equipments like crane booms/pressure vessels/cones/rings/beveled shapes etc., and the conveyor assemblies like Head/Tail end assemblies, drive-base assemblies, Impact Beds, Gantry Assemblies etc.</p>
    <p>
      NeAn's Product identification/marking methods are very systematic and this will ensure nil traceability issues at site and absolute traceability at the process line. Packing, forwarding and loading of each product are being performed to the highest level of quality standards and utmost dedication.
</p>
    </div>
 
  </div>

  <div className="ANeanGalleryDiv">
    <h1>
      Our Gallery
    </h1>
    <div className="ANeanGallery">
      {
        OtherProductsData.map((i)=>(
      
          <img src={i.img} key={i.id} alt={i.name} className="ANeanCard"/>

        ))
      }
 
    </div>
  </div>
</section>

</>
  )
}
