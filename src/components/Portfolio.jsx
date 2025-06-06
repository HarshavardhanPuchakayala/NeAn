import {PortfolioImgs} from "../Data.js";
export default function Portfolio() {
  return (
    <>
    <section className="PortfolioSection">
        <div className="PortfolioBanner">
            <h1>Portfolio</h1>
        </div>

        <div className="PortfolioHeading">
            <h1> Vandemar is built on <br/>Our founders unique<br/> Outlook on Construction </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis et nam amet quo consectetur fugit alias voluptate dolores consequatur at laborum minima exercitationem eligendi, sequi atque neque pariatur officia nisi.</p>
        </div>

        <div className="Portfolio">
            <div className="PortfolioGrid">
                <h1>Idlers</h1>
                <div className="PortfolioImgsGrid">
                    {PortfolioImgs.map((i)=>(
                        <img src={i.img} alt={i.id} key={i.id} />
                    ))}
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
