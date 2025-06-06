import Logo from "/assets/NeAn_Logo.png";

export default function Footer() {
  return (
   <footer>
    <div className="FooterSub">
    <div className="FooterTop">
        <img src={Logo} alt="NeAn Industries Pvt Ltd" />

        <h1>Your final impact statements goes here.Make it memorable!</h1>
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
                    123 Anywhere St.,<br/>
                    Any City, ST 1234
                </address>
                </a>
                <a href="http://" target="_blank">
                    <address>
                    123 Anywhere St.,<br/>
                    Any City, ST 1234
                </address>
                </a>
                <a href="http://" target="_blank">
                    <address>
                    123 Anywhere St.,<br/>
                    Any City, ST 1234
                </address>
                </a>
            </div>
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
