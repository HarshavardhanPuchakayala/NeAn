import {Idlers} from "../Data";

export default function Idlers() {
  return (
    <section className="ANeansection">
  <div className="ANeanBanner">
      <h1>Idle</h1>
  </div>

  <div className="ANeanContentDiv">
  
      <h1>Idler Rollers</h1>
  <p>Hitech has been manufacturing Idler Rollers and Brackets as per Indian/International standards and of-course customized requirements too.Hitech's manufacturing facility covers Idlers for capacities between 50TPH to 8000TPH.

Typically Roller diameter ranges from 63.5mm to 219mm for 500mm to 2400mm width belt conveyors. The rollers are designed as per IS 8598/ISO 1537 specifications. ERW or seamless (HFS&CDS) steel tubes are used for the barrel of idlers as per IS 9295.Hi-Tech can make rollers to other standards too like DIN/JIS/CEMA etc., Deep drawing special quality CRCA steel sheets are used for forming the bearing housings, which are light self-weight, in order to reduce the power consumption of conveyor. The housings are automatic press-fitted and welded with the barrel by manipulator process, to form mono-block, simultaneously from both ends on rotating heads to ensure absolute concentricity and less inner welds tress and deformation.
    </p>
       <img src="" alt=""/>
  </div>

 <div className="ANeanContentDiv">
    <h1>Idler Frames</h1>
    <p>
      Idler Frames are manufactured as per the standard IS 8598/ISO 1537 details.Structural Steels (channels,angles and flats) of high tensile strength as per standards are used for forming the sturdy,strong and robust frames.Special jigs and fixers are used for the production of frames to ensure uniform dimensions and tolerances and to facilitate the fast/mass production.

Hitech's ROBOT welding methods for frames are very unique in this kind of industries and the result of which is the high quality/uniform welding with minimum deformation. Welding is absolutely free from cracks/porosity which is a normal phenomena in the conventional welding process
    </p>
    
 
    <img src="" alt=""/>
  </div>

  <div className="ANeanGalleryDiv">
    <h1>
      Our Gallery
    </h1>
    <div className="ANeanGallery">
      {
        Idlers.map((i)=>(
          <div className="ANeanCard" key={i.id}>
          <img src={i.img} alt={i.name}/>
          <p>{i.name}</p>
        </div>
        ))
      }
 
    </div>
  </div>
</section>
  )
}
