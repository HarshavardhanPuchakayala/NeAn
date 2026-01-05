
import {PulleysHoverData} from "../Data";
import {PulleysHoverData2, PulleysData111} from "../Data";

export default function Pulleys() {
  return (
     <>
    <section className="PPANeansection">
  <div className="PPANeanBanner">
      <p>Pulleys & Drums</p>
  </div>

  <div className="ANeanContentDiv">
  <div className="ANeanCardss">
      <h1>Pulleys & Drums</h1>
  <p>NeAn's belt conveyor pulleys are designed/manufactured as per IS 8531 with diameters up to 2000mm and face length up to 2600mm. Conveyor pulleys are fabricated from steel shells/plates as per IS 2062 with welded end-plates and hubs keyed/fitted direct/through taper sleeve on the shaft. Rolled/Forged shafts conforming to EN-8/C-40 as per BS 970/1S 1570 machined to accurate tolerances are used as the axle for the pulleys.
</p><p>
The shell thickness after machining shall be kept minimum of 8mm and varies up to a maximum of 25mm depending on the varying design parameters. The distance between the hubs is selected based on the respective bearing centers and by ensuring the distance between the hub and bearing center to as minimum possible to reduce shaft flexing. Pulleys with cast-steel end diaphragms (as per IS 1030) and taper locking arrangements are also been provided as per customer specific requirements.
    </p>
    </div>
       <img src="/assets/PPBT1.jpeg" alt="Idler Rollers"/>
  </div>

<div className="ANeanSpecificationsDiv">
  <h1>DIFFERENT TYPES OF PULLEYS</h1>
    <div className="ANeanSpecifc">
      {PulleysHoverData .map((m) => (
        <div className="itemWrap" key={m.id}>
          <img src={m.img} alt={m.para} className="idlerImg"/>
          <p className="main_btn">{m.para}</p>
          </div>
      ))}
    </div>
</div>


 <div className="ANeanContentDiv  ANeanReverse">

  <img src="/assets/PPBT2.jpg" alt="Idler Frames"/>
   <div className="ANeanCardss">
    <h1>Our Equipment & Our Techniques</h1>
    <p>The diameter of the pulleys is selected based upon the specification of the belt which in turn depends upon the power being transmitted. </p>
    <p>
Drive/Tail/Takeup pulleys have machined crowned faces to train and reduce wear on belt while other pulleys are straight faced
</p><p>
Plain/grooved rubber lagging being done on the pulleys to ensure additional friction between pulley and the belt. Lagging thickness may vary from 10-20mm and the lagging shore hardness normally maintained between 55 to 65.
    </p>
    <p>
      The pulleys are supplied as plain surface, hot or cold vulcanised rubber lagging of herringbone, diamond groove and ceramic lagging as per the requirement.
    </p>
    </div>
 
  </div>


<div className="ANeanSpecificationsDiv">
  <h1>DIFFERENT PROCESSES INVLOVED IN MANUFACTURING PULLEYS</h1>
      <div className="ANeanSpecifc">
      {PulleysHoverData2.map((m) => (
        <div className="itemWrap" key={m.id}>
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
        PulleysData111.map((i)=>(
      
          <img src={i.img} key={i.id} alt={i.name} className="ANeanCard"/>

        ))
      }
 
    </div>
  </div>
</section>

</>
  )
}
