import Logo from "/assets/NeAn_Logo.png";

export default function Footer() {
  return (
   <footer>
    <div className="FooterSub">
    <div className="FooterTop">
        <img src={Logo} alt="NeAn Industries Pvt Ltd" />

        <h1>At Nean, every product is a promise of quality, of innovation, and of lasting performance</h1>
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
                <a href="http://" target="_blank">
                <address>
                  Plot No. 1,2,3 & 4, Phase-V, Industrial Park, Cherlapally, Hyderabad, Telangana 500051
                </address>
                </a>
            </div>
            
        </div>

                       <div className="div2">
            <h1>Terms & Conditions</h1>
                <a href="http://">Privacy Policy</a>
                 <a href="http://">Terms of Services</a>
                  <a href="http://">Service & Inspections</a>
        </div>


        <div className="div2">
            <h1>Office Hours</h1>
         <ul>
            <li>Mon: 9 AM to 5:30 PM</li>
            <li>Tue: 9 AM to 5:30 PM</li>
            <li>Wed: 9 AM to 5:30 PM</li>
            <li>Thr: 9 AM to 5:30 PM</li>
            <li>Fri: 9 AM to 5:30 PM</li>
            <li>Sat: 9 AM to 5:30 PM</li>
            <li>Sun: 9 AM to 5:30 PM</li>
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
