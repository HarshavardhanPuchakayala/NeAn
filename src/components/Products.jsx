import {ProductsData} from "../Data.js";
export default function Products() {
  return (
  <>
  <section className="ProductsSection">
    <div className="ProductsBanner">

    </div>
    <div className="ProductsIntro">
        <div className="ProductsIntroDiv">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, magnam! Repudiandae ratione quia labore ipsam, temporibus natus harum perspiciatis hic sint exercitationem velit accusamus? Doloremque porro aspernatur perspiciatis laudantium quo.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, fugit corporis ea recusandae, veritatis delectus quae consequuntur repellendus sit aspernatur neque modi qui nam harum, labore doloribus repellat iusto accusamus.</p>
        </div>
        <img src="/assets/ProductsIntro.png" alt="" />
    </div>

    <div className="OurProductsGrid">
        <h1>Our Products</h1>
        <div className="Div1">
        {ProductsData.map((i)=>(
            <div className="Div2">
                <img src={i.img} alt={i.name} />
                <p>{i.name}</p>
            </div>
        ))}
            
        </div>
    </div>


    {/* <div className="IdlersIntro">
        <img src="/assets/Portfolio1.png" alt="Idlers"/>
        <div className="Context">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium provident, quas vero nesciunt reprehenderit in perspiciatis est rem similique consequuntur porro ducimus minus repellat maiores, labore corporis eius illo officia?</p>
            <br/>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum, deleniti natus, voluptas minima officia, commodi non ad fugit iusto eveniet reiciendis ipsam adipisci qui! Molestiae quam quibusdam atque laudantium magnam.</p>
        </div>
    </div>

        <div className="IdlersIntro reverse">

        <div className="Context">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium provident, quas vero nesciunt reprehenderit in perspiciatis est rem similique consequuntur porro ducimus minus repellat maiores, labore corporis eius illo officia?</p>
            <br/>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum, deleniti natus, voluptas minima officia, commodi non ad fugit iusto eveniet reiciendis ipsam adipisci qui! Molestiae quam quibusdam atque laudantium magnam.</p>
        </div>
                <img src="/assets/Product2.png" alt="Idlers"/>
    </div> */}
  </section>
  </>
  )
}
