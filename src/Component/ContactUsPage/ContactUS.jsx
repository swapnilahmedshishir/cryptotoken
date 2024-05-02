import HeroText from "../UniversalComponent/HeroText/HeroText";
import { MdMarkEmailRead, MdCall } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const ContactUS = () => {
  return (
    <>
      <div className="univarsal_div">
        <div className="container">
          <HeroText
            heroText={{ text1: "CONTACT", text2: "US", description: "" }}
          />

          {/* other text contactus*/}
          <div className="contactus_text_section">
            <div className="row">
              <div className="col-sm-12 col-md-6 contactus_text_div">
                <h2 className="contactus_text_heading">
                  Ready to Turn Your Vision into Reality?
                </h2>
                <p className="contactus_text_para">
                  Let us know details&#34; is informative, consider a more
                  action-oriented phrase like &#34;Get Your Free Crypto
                  Marketing Strategy&#34; or &#34;Start Your Crypto Marketing
                  Journey Today.
                </p>
                <div className="contactus_Services">
                  <div className="contactus_Services_icon_div">
                    <div className="contactus_Services_icon">
                      <MdCall className="contactus_icon" />
                    </div>
                    <div className="contactus_Services_icon">
                      <MdMarkEmailRead className="contactus_icon" />
                    </div>

                    <div className="contactus_Services_icon">
                      <FaLocationDot className="contactus_icon" />
                    </div>
                  </div>
                  <div className="contactus_Services_text_div">
                    <div className="contactus_Services_text">
                      <p>+1 202 4567 568</p>
                    </div>
                    <div className="contactus_Services_text">
                      <p>hello@tojoglobal.com</p>
                    </div>
                    <div className="contactus_Services_text">
                      <p>123 Street Address City-12345</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6">
                <div className="contactus_input_section">
                  <h3 className="text-center">Book a Free Consultation</h3>

                  <form action="/action_page.php">
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      placeholder="Full Name *"
                      className="contactus_input_fild"
                    />
                    <input
                      type="tel"
                      id="phoneNumber"
                      name="phoneNumber"
                      placeholder="Phone Number *"
                      className="contactus_input_fild"
                    />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Work Email *"
                      className="contactus_input_fild"
                    />
                    <input
                      type="text"
                      id="emailSubject"
                      name="subject"
                      placeholder="Subject"
                      className="contactus_input_fild"
                    />
                    <textarea>Message</textarea>

                    <input type="submit" value="Submit" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUS;
