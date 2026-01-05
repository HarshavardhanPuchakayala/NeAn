import { useRef } from "react";
import emailjs from '@emailjs/browser';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MdEmail } from "react-icons/md";
import { FaGlobe, FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { ToastContainer } from "react-toastify";

// import { MdEmail } from "react-icons/md";
// import { FaGlobe,FaLocationDot } from "react-icons/fa6";
// import { FaPhoneAlt } from "react-icons/fa";

export default function ContactUS() {
     const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jz6prs7",
        "template_u6pvpxh", 
        form.current,
        "ZYGd7No7nuK6-CdFL"
      )
      .then(
        () => {
          toast.success("Message Sent Successfully! 🎉");
          form.current.reset();
        },
        () => {
          toast.error("Something went wrong! ❌ Try again.");
        }
      );
  };
  return (
<>
   <section className="ContactUsSection">
    <div className="ContactBanner">
    <h1>Contact Us</h1>
    </div>

<h1 className="GetInTouch">Get in Touch</h1>

<div className="FormGrid">

    {/* <form action="">
        <div className="Form">
            <input type="text" name="Fname" className="name" placeholder="First Name"/>
            <input type="text" name="Sname" className="name" placeholder="Last Name"/>
        </div>
        <input type="tel" name="phone" className="phone" placeholder="Phone Number" 
           pattern="[0-9]{10}" maxlength="10" required />


    <select name="subject" className="select" required>
        <option value="">Select  Service</option>
        <option value="support">Idlers</option>
        <option value="feedback">Pulleys & Drums</option>
        <option value="business">PEB</option>
        <option value="other">Other Products</option>
    </select>
        <input type="email" name="email" className="email" placeholder="Email Address"/>
        <textarea name="textarea" placeholder="Message"></textarea>
        <button>Submit</button>
    </form> */}
 <form ref={form} onSubmit={sendEmail}>
          <div className="Form">
            <input type="text" name="Fname" className="name" placeholder="First Name" required />
            <input type="text" name="Sname" className="name" placeholder="Last Name" required />
          </div>

          <input type="tel" name="phone" className="phone"
            placeholder="Phone Number" pattern="[0-9]{10}" maxLength="10" required />

          <select name="subject" className="select" required>
            <option value="">Select Service</option>
            <option value="Idlers">Idlers</option>
            <option value="Pulleys & Drums">Pulleys & Drums</option>
            <option value="PEB">PEB</option>
            <option value="Other Products">Other Products</option>
          </select>

          <input type="email" name="email" className="email" placeholder="Email Address" required />
          <textarea name="message" placeholder="Message" required></textarea>

          <button type="submit">Submit</button>
        </form>
    <div className="FormContent">
        <h1>Contact Us</h1>
        <p>With over two decades of excellence, NeAn Industries leads in manufacturing bulk and unit material handling systems.
Our wide product range includes conveyor components such as rollers, idlers, pulleys, scrappers and hoods.
We serve OEMs across steel, mining, power, cement, chemical, paper, packaging and multiple industrial sectors.</p>
        <div className="ContactDetails">
           
            <div className="Div1">
                <h6>Email</h6>
                   
                <div className="Div1Content">
                     <MdEmail className="FormIcon"/>
                     <a href="mailto:info.peb@neanind.com">
                    <p>info.peb@neanind.com</p>
                    </a>
                </div>
            </div>

                        <div className="Div1">
                    <h6>Website</h6>
                <div className="Div1Content">
                    <FaGlobe className="FormIcon"/>
                    <a href="http://neanind.com/">
                    <p>www.NeAnind.com</p>
                    </a>
                </div>
            </div>

                        <div className="Div1">
                            <h6>Phone</h6>
                    
                <div className="Div1Content">
                    <FaPhoneAlt className="FormIcon"/>
                    <a href="tel:+918019890055">
                    <p>+91 8019890055</p>
                    </a>
                </div>
            </div>

                        <div className="Div1">
                            <h6>Location</h6>
                  
                <div className="Div1Content">
                      <FaLocationDot className="CIcon"/>

                      <div className="CAddressDiv">
  <a href="https://maps.app.goo.gl/o2xnqr5DZKD6qvp18" target="_blank">
              
                 <strong> Office & Unit 1</strong> - Plot No. 1,2,3 & 4, Phase-V,<br/> Industrial Park, Cherlapally,<br/> Hyderabad, Telangana 500051
                
                </a>

                            <a href="">
              
                  <strong>Unit 2 - </strong>Plot No. 53,54,55 & 56, Phase-1,<br/> Industrial Park, Cherlapally,<br/> Hyderabad, Telangana 500051
                
                </a>
                </div>
                </div>
            </div>
        </div>
    </div>
</div>
   </section>
   <ToastContainer position="top-right" autoClose={3000} />
</>
  )
}
