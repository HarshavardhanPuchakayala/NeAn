import {PPC,PPP} from "../Data.js";
export default function Portfolio() {
  return (
    <>
    <section className="PortfolioSection">
        <div className="PortfolioBanner">
            <h1>Production Line</h1>
        </div>

        <div className="PortfolioHeading">
            <h1> OUR STRENGTH </h1>
            <p>We take pride in combining state-of-the-art facilities with next-gen automation.
Some of our advanced setups include:</p>
        </div>
        
   </section>


       <div className="MachinerySection">
          <h1>Conveyor Systems Workshop</h1>
<ul>
  <li>CNC & Automatic Pipe Cutting Machines</li>
<li>CNC Double-End Pipe Boring Machines</li>
<li>Hydraulic Roller Assembly Machines</li>
<li>CNC Shaft Machining, Grinding & Milling Machines</li>
<li>Robotic Welding for Idler Frames</li>
<li>Automatic Shot Blasting & Finish Painting Lines</li>
<li>EOT Cranes with 10 & 20-ton capacity</li>
</ul>
  </div>
        <div className="PortfolioMenu">
          {PPC.map((i)=> (
        <img
          key={i.id}
          src={`/assets/${i.img}`}
        />
      ))}
           
 </div>
 

        <div className="MachinerySection">
          <h1>Pre-Engineered Buildings Workshop</h1>
<ul>
  <li>Laser Cutting Machine</li>
<li>Horizontal H-Beam Production Line Assembly</li>
<li>H-Beam Shot-Blasting & Cleaning Machine</li>
<li>CNC Marking, Punching & Drilling Machine</li>
<li>C-Z Interchangeable Purlin Machine </li>
<li>Slitting Machine</li>
<li>Roofing Roll Forming Machine</li>
<li>Standing Seam Roll Forming machine</li>
<li>Metal Deck Roll Forming Machine </li>
<li>Crimping & Curving Machine</li>
<li>Sheet Stacking & Packing Machine</li>
</ul>
  </div>
        <div className="PortfolioMenu">
          {PPP.map((i)=> (
        <img
          key={i.id}
          src={`/assets/${i.img}`}
        />
      ))}
           
 </div>
    </>
  )
}
