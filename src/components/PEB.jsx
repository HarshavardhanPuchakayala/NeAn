import {PEBProcess,HomeWork} from "../Data";

export default function PEB() {
  return (
    <>
   <section className="PEBsection">
    <div className="PEBBanner"></div>

    <div className="PEBAboutusDiv">
        <div className="Content">
            <h1>Pre-Engineered Building (PEB) Solutions</h1>
             <p>At Nean Industries, we bring precision engineering and modern construction together with our <b>Pre-Engineered Building (PEB) solutions</b> a perfect blend of speed, strength, and sustainability. Designed for quick deployment and structural efficiency, our PEB structures are ideal for <b>industrial sheds, warehouses, manufacturing plants, logistics hubs, and commercial spaces.</b>
        <br />
        <br />
        With in-house fabrication, CNC-enabled production lines, and expert structural engineers, we deliver <b>custom-designed PEBs</b> that meet exact client specifications while ensuring <b>durability, scalability, and cost-effectiveness.</b> From concept to commissioning, Nean Industries is your trusted partner for turnkey steel building solutions that stand the test of time.
        </p>
        </div>

        <img src="/assets/PEBBG.png" alt="PEB" />
    </div>


    <div className="PEBProcess">
        <h1>Our Process</h1>
        <div className="PEBProcessGrid">
            {PEBProcess.map((i)=>(
                <div className="Card" key={i.id}>
            <img src={`/assets/${i.img}`} alt={i.txt} />
            <p>{i.txt}</p>
            </div>  
            ))}
          
        </div>
    </div>


        <div className="HomeWork ">
            <h1>Why work with us</h1>
            <div className="PEBDiv">
            <img src="/assets/PEB.png" alt="PEB" srcset="" />
      <div className="WorkGrid Extra">
        {HomeWork.map((i)=>(
          <div className="card">
          <h1>{i.name}</h1>
          <p>{i.txt}</p>
        </div> 
        ))}
       
      </div>
      </div>
    </div>
   </section>
    </>
  )
}
