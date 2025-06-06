import { MdEmail } from "react-icons/md";
import { FaGlobe,FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";

export default function ContactUS() {
  return (
<>
   <section className="ContactUsSection">
    <div className="ContactBanner">
    <h1>Contact Us</h1>
    </div>

<h1 className="GetInTouch">Get in Touch</h1>

<div className="FormGrid">

    <form action="">
        <div className="Form">
            <input type="text" name="Fname" className="name" placeholder="First Name"/>
            <input type="text" name="Sname" className="name" placeholder="Last Name"/>
        </div>
        <input type="email" name="email" className="email" placeholder="Email Address"/>
        <textarea name="textarea" placeholder="Message"></textarea>
        <button>Submit</button>
    </form>

    <div className="FormContent">
        <h1>Contact Us</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores nostrum officia earum dolorem aliquam rerum et iusto ex nam, explicabo in blanditiis expedita pariatur. Ipsam sint veritatis voluptatibus vero dicta.</p>
        <div className="ContactDetails">
           
            <div className="Div1">
                    <MdEmail className="FormIcon"/>
                <div className="Div1Content">
                    <h6>Email</h6>
                    <p>Info@NeAnindia.com</p>
                </div>
            </div>

                        <div className="Div1">
                    <FaGlobe className="FormIcon"/>
                <div className="Div1Content">
                    <h6>Website</h6>
                    <p>www.NeAnindia.com</p>
                </div>
            </div>

                        <div className="Div1">
                    <FaPhoneAlt className="FormIcon"/>
                <div className="Div1Content">
                    <h6>Phone</h6>
                    <p>+91 123456789</p>
                </div>
            </div>

                        <div className="Div1">
                    <FaLocationDot className="FormIcon"/>
                <div className="Div1Content">
                    <h6>Location</h6>
                    <p>123 Anywhere St,<br/>
                    Hyderbad, TG 500001
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>
   </section>
</>
  )
}
