import Logo from "/assets/NeAn_Logo.png";
import {Link} from "react-router";
export default function Footer() {
  return (
   <footer>
    <div className="footer_Div"></div>
    
    <div className="FooterSub">

    <div className="FooterTop">
    <Link to="/">
        <img src={Logo} alt="NeAn Industries Pvt Ltd" />
</Link>
        <h1>At NeAn, every product is a promise of quality,  innovation, and  lasting performance</h1>
    </div>


    <div className="FooterBottom">
        <div className="div1">
            <h1>CONNECT WITH US</h1>
            <div className="FooterLinks">
            <a href="http://" target="_blank">Instagram</a>
            <a href="http://" target="_blank">Twitter</a>
            <a href="http://" target="_blank">Facebook</a>
            <a href="http://" target="_blank">Linkedin</a>
            </div>
        </div>
        <div className="div2">
            <h1>OUR LOCATIONS</h1>
            <div className="Address">
                <div className="AddressDiv">
                <a href="https://maps.app.goo.gl/o2xnqr5DZKD6qvp18" target="_blank">
                <p>
                 <strong> Office & Unit 1</strong> - Plot No. 1,2,3 & 4, Phase-V,<br/> Industrial Park, Cherlapally,<br/> Hyderabad, Telangana 500051
                </p>
                </a>

                            <a href="">
                <p>
                  <strong>Unit 2 - </strong>Plot No. 53,54,55 & 56, Phase-1,<br/> Industrial Park, Cherlapally,<br/> Hyderabad, Telangana 500051
                </p>
                </a>
                
            </div>
            
        </div>
        </div>

                       <div className="div2898">
            <h1>Terms & Conditions</h1>
                <a href="http://">Privacy Policy</a>
                 <a href="http://">Terms of Services</a>
                  <a href="http://">Service & Inspections</a>
        </div>


        <div className="div2">
            <h1>Office Hours</h1>
         <ul>
            <li>Mon - Sat : 9 AM to 5:30 PM</li>
         <h1 className="heightheight"></h1>
         </ul>
        </div>



    </div>
    
</div>
 <div className="CopyrightsDiv">
    <p className="copyRights">© {new Date().getFullYear()} NeAn Industries Pvt Ltd | All rights reserved.</p>
    <p className="Editor">Crafted by <a href="https://www.advayapixelworks.com/" target="_blank">ADVaya Pixel Works</a></p>
    </div>
   </footer>
  )
}
