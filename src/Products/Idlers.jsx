import { Idlers } from "../Data";
import {IdlersHoverData} from "../Data";
import {IdlersHoverData2} from "../Data";


export default function Idlerss() {
  return (
    <>
    <section className="IANeansection">
  <div className="IANeanBanner">
      <p>Idlers</p>
  </div>

  <div className="ANeanContentDiv">
  <div className="ANeanCardss">
      <h1>Idler Rollers</h1>
  <p>NeAn has been manufacturing idler rollers and brackets as per Indian/International standards as-well-as catering to customized requirements too. NeAn's manufacturing facility covers Idlers for capacities between 50TPH to 8000TPH.
</p><p>
Typically, roller diameter ranges from 63.5mm to 219mm for 500mm to 2400mm width belt conveyors. The rollers are designed as per IS 8598/1SO 1537 specifications. ERW or seamless (HFS & CDS) steel are used for the barrel of idlers as per IS 9295. NeAn can make rollers as per other standards too like DIN / JIS / CEMA etc.
    </p>
    <p>
      Deep drawing special quality CRCA steel sheets are used for forming the bearing housings, which are light self-weight, in order to reduce the power consumption of conveyor. The housings are automatic press-fitted and welded with the barrel by manipulator process, to form mono-block, simultaneously from both ends on rotating heads to ensure absolute concentricity and less inner welds tress and deformation.
    </p>
    </div>
       <img src="/assets/Itext.jpg" alt="Idler Rollers"/>
  </div>
  <div className="WeProduceDiv">
     <h1 className="Red">We produce</h1>
  </div>
 
<div className="ANeanSpecificationsDiv">
  <h1>various types of idlers for industrial applications</h1>

  <div className="ANeanSpecifc">
    {IdlersHoverData.map((m) => (
      <div className="itemWrap" key={m.id}>
        <img src={m.img} alt={m.para} className="idlerImg"/>
        <p className="main_btn">{m.para}</p>
        </div>
    ))}
  </div>

</div>



 <div className="ANeanContentDiv  ANeanReverse">

  <img src="/assets/Icover.png" alt="Idler Frames"/>
   <div className="ANeanCardss">
    <h1>Idler Frames</h1>
    <p>
      Idler Frames are manufactured as per the standard IS 8598/ISO 1537 details.Structural Steels (channels,angles and flats) of high tensile strength as per standards are used for forming the sturdy,strong and robust frames.Special jigs and fixers are used for the production of frames to ensure uniform dimensions and tolerances and to facilitate the fast/mass production.
</p><p>
NeAn’s unique ROBOT welding methods for frames result in high quality/uniform welding with minimum deformation. Welding is absolutely free from cracks/porosity which is a normal occurance in the conventional welding process.
    </p>
    </div>

  </div>
 <div className="ANeanSpecificationsDiv">
  <h1>Our Portable Testing Systems</h1>
    {/* <div className="ANeanSpecifc">
    {IdlersHoverData2.map((m) => (
      <div className="itemWrap" key={m.id}>
        <p className="main_btn">{m.para}</p>
        </div>
    ))}
  </div> */}
 <div className="ANeanSpecifc">
    {IdlersHoverData2.map((m) => (
      <div className="itemWrap" key={m.id}>
        <img src={m.img} alt={m.para} className="idlerImg"/>
        <p className="main_btn">{m.para}</p>
        </div>
    ))}
  </div>

</div>


  <div className="ANeanGalleryDiv">
    <h1>
      Our Gallery
    </h1>
    <div className="ANeanGallery">
      {
        Idlers.map((i)=>(
      
          <img src={i.img} key={i.id} alt={i.name} className="ANeanCard"/>

        ))
      }
 
    </div>
  </div>
</section>

</>
  )
}
