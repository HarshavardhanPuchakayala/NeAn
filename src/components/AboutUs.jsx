import {ClientSered,FocusData} from "../Data";

export default function AboutUs() {
  return (
    <>
    <section className="AboutUsSection">
        <div className="AboutUsBanner"></div>

        <div className="Overmission">
            <div className="AboutUSiNTRO">
            <h1>About Our<br/> Organization</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque minima quis fuga reiciendis, autem deserunt porro! Rerum eum doloribus et quis odit molestiae, dolorum vitae ut, libero, accusantium ab minima!</p>
            </div>
            <div className="OverMissionGrid">
                <div className="div1">
                    <h1>Our Mission</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis hic ipsum natus soluta esse dicta et doloribus totam, facere culpa dignissimos ea dolorum, porro neque, numquam iusto atque magni quidem?</p>
                </div>
                <div className="div2">
                    <h1>Our Vision</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime praesentium assumenda sit ullam odit perspiciatis ratione incidunt optio obcaecati quia, molestiae ea earum consequuntur quasi aperiam atque sed! Labore, magnam.</p>
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
                    <h1>Foreword</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum reiciendis animi voluptate quaerat obcaecati hic eaque. Tenetur eveniet quidem ducimus nam voluptate. Accusamus officia magni dolorum nulla deserunt, dicta eaque! <br /><br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, facere! Fuga dolore obcaecati ducimus, rem reprehenderit, sit voluptatem doloremque ex iure, dolorem magni illo voluptate quisquam maxime quia aspernatur deleniti! <br /><br />
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates aliquam dolor molestias! Aperiam animi atque quidem, fugiat sint eos expedita blanditiis ut fuga placeat porro sequi dignissimos laborum eum earum!</p>
                </div>
            </div>
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


        {/* <div className="ProjectAboutSection">
          <h1>Our Projects</h1>

        </div> */}


        <div className="NextFocusSection">
          <div className="Div1">
            <h1>Our Next Focus</h1>
            <img src="/assets/focus.png" alt="Nean Industries Pvt Ltd" />
          </div>
          <div className="Div2">
            <ul>
              {FocusData.map((i)=>(
               <li key={i.id}>{i.name}</li>  
              ))}
            </ul>
          </div>
        </div>

        {/* <div className="ClientDataAbout">
          <h1>As Seen On</h1>
          <div className="Div1">

          </div>
        </div> */}


       
    </section>
    </>
  )
}
