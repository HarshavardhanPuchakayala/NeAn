import {HomePortfolio} from "../Data.js";
export default function Portfolio() {
  return (
    <>
    <section className="PortfolioSection">
        <div className="PortfolioBanner">
            <h1>Portfolio</h1>
        </div>

        <div className="PortfolioHeading">
            <h1> Nean is built on <br/>Our founders unique<br/> Outlook on Construction </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis et nam amet quo consectetur fugit alias voluptate dolores consequatur at laborum minima exercitationem eligendi, sequi atque neque pariatur officia nisi.</p>
       
       
     
       
       
       
       
        </div>
        
   </section>


       <div className="MachinerySection">
          <h1>Our Machinery & Capabilities</h1>
          <p>We take pride in combining state-of-the-art facilities with next-gen automation.<br/> Some of our advanced setups include:
</p>
<ul>
  <li><strong className="Red st">CNC & Automatic Pipe Cutting Machines </strong>for precision of any length & diameter</li>
<li><strong className="Red st">CNC Double-End Pipe Boring Machines</strong> for simultaneous accuracy</li>
<li><strong className="Red st">Hydraulic Roller Assembly Machines</strong> for efficient large-scale output</li>
<li><strong className="Red st">CNC Shaft Machining, Grinding & Milling Machines</strong></li>
<li><strong className="Red st">Robotic Welding</strong> for Idler Frames (our mark of manufacturing excellence)</li>
<li><strong className="Red st">Automatic Shot Blasting & Finish Painting Lines</strong></li>
<li><strong className="Red st">EOT Cranes</strong> with 10 & 20-ton capacity for heavy handling</li>
</ul>
<p>With this Hi-Tech achieves unmatched productivity—manufacturing over <strong className="Red st">1,500<br/> rollers per day</strong> in multiple dimensions and delivering <strong className="Red st">250+ heavy-duty pulleys per month.</strong></p>
        </div>
        <div className="PortfolioMenu">
            {/* {HomePortfolio.map((i)=>(
                <img src={i.img} key={i.id}/>
            ))} */}

          {Array.from({ length: 19 }, (_, i) => (
        <img
          key={i}
          src={`/assets/a${i + 1}.jpeg`}
          alt={`a${i + 1}`}
        />

      ))}
           
 </div>
 
    </>
  )
}
