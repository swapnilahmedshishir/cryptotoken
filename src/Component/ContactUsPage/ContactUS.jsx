import HeroText from "../UniversalComponent/HeroText/HeroText";
import { MdMarkEmailRead, MdCall } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { useFormik } from "formik";
import { useState } from "react";
import axios from "axios";

const ContactUS = () => {

  // state
  const [errorMessage, setErrorMessage] = useState(null);
  const [submiteMessage, setSubmiteMessage] = useState("");

  // use fromik method
  const formik = useFormik({
    initialValues: {
      fullName: "",
      phoneNumber: "",
      email: "",
      subject: "",
      message: "",
    },
    onSubmit: async (values, { resetForm }) => {
console.log(values);
      try {
        const response = await axios.post(
          "http://localhost:8005/admin/message/submited",
          values          
        );
        if (response.data.Status) {
          setErrorMessage(null);   
          setSubmiteMessage("free consultation requset successfull");
              
        }
      } catch (error) {
        setErrorMessage(`${error}`);
        setSubmiteMessage('');
      }

      resetForm();
    },
  });

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
                  {errorMessage && errorMessage ? <p className="error-message">{errorMessage}</p> : <p className="success-message">{submiteMessage}</p> }
                  <form 
                   onSubmit={formik.handleSubmit}
                   encType="multipart/form-data" >
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      onChange={formik.handleChange}
                      value={formik.values.fullName}
                      required
                      placeholder="Full Name *"
                      className="contactus_input_fild"
                    />
                    <input
                      type="tel"
                      id="phoneNumber"
                      name="phoneNumber"
                      onChange={formik.handleChange}
                      value={formik.values.phoneNumber}
                      required
                      placeholder="Phone Number *"
                      className="contactus_input_fild"
                    />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      onChange={formik.handleChange}
                      value={formik.values.email}
                      required
                      placeholder="Work Email *"
                      className="contactus_input_fild"
                    />
                    <input
                      type="text"
                      id="emailSubject"
                      name="subject"
                      onChange={formik.handleChange}
                      value={formik.values.subject}
                      required
                      placeholder="Subject"
                      className="contactus_input_fild"
                    />
                    <textarea
                    name='message'
                    onChange={formik.handleChange}
                    value={formik.values.message}
                    required >Message</textarea>

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
