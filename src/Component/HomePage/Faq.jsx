import { useEffect, useState } from "react";

const Faq = () => {
    // state
//   const [errorMessage, setErrorMessage] = useState(null);
//   const [faq, setFaq] = useState([]);

  const toggleAccordion = (event) => {
    const items = document.querySelectorAll(".accordion button");
    const itemToggle = event.currentTarget.getAttribute('aria-expanded');

    for (let i = 0; i < items.length; i++) {
      items[i].setAttribute('aria-expanded', 'false');
    }

    if (itemToggle === 'false') {
      event.currentTarget.setAttribute('aria-expanded', 'true');
    }
  };

  useEffect(() => {
    const container = document.querySelector(".faq_row_style");
    const image = container.querySelector("img");
    //   mousemove event handler
    const handleMouseMove = (e) => {
      const x = (e.clientX - container.offsetLeft) / container.offsetWidth;
      const y = (e.clientY - container.offsetTop) / container.offsetHeight;

      const moveX = (x - 0.3) * 7; // Adjust the multiplier for desired movement range
      const moveY = (y - 0.3) * 7; 

      image.style.transform = `translate(${moveX}px, ${moveY}px)`;
    };

    const handleMouseLeave = () => {
      image.style.transform = "none"; // Reset image position when mouse leaves the container
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    // Cleanup function to remove event listeners when component unmounts
    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);
  return (
    <>     
     
{/* demo about start */}

      <div className="common-div-style faq_row_style">
        <div className="container faq_container_style">
        <div className="col_text_style header-one-style">
            <strong><span>FAQ</span></strong>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-6 faq_col_image_style">
              <img
                src="Images/banner/faq.png"
                alt="banner_img4.png"
                className=""
              />
            </div>

            <div className="col-sm-12 col-md-6 about_col_text_style col_text_style">
              
          <div className="accordion">



<div className="accordion-item">
  <button id="accordion-button" aria-expanded="false" onClick={toggleAccordion}>
    <span className="accordion-title">What is TOJO Global?</span>
    <span className="icon" aria-hidden="true"></span>
  </button>
  <div className="accordion-content">
    <p>Cryptocurrency operates on decentralized networks based on blockchain technology. Transactions are recorded on a public ledger and validated by a network of computers (nodes) through a process called mining.</p>
  </div>
</div>
<div className="accordion-item">
  <button id="accordion-button" aria-expanded="false" onClick={toggleAccordion}>
    <span className="accordion-title">What services we provide? </span>
    <span className="icon" aria-hidden="true"></span>
  </button>
  <div className="accordion-content">
    <p>Cryptocurrency operates on decentralized networks based on blockchain technology. Transactions are recorded on a public ledger and validated by a network of computers (nodes) through a process called mining.</p>
  </div>
</div>
<div className="accordion-item">
  <button id="accordion-button" aria-expanded="false" onClick={toggleAccordion}>
    <span className="accordion-title">What services we provide? </span>
    <span className="icon" aria-hidden="true"></span>
  </button>
  <div className="accordion-content">
    <p>Cryptocurrency operates on decentralized networks based on blockchain technology. Transactions are recorded on a public ledger and validated by a network of computers (nodes) through a process called mining.</p>
  </div>
</div>
<div className="accordion-item">
  <button id="accordion-button" aria-expanded="false" onClick={toggleAccordion}>
    <span className="accordion-title">What services we provide? </span>
    <span className="icon" aria-hidden="true"></span>
  </button>
  <div className="accordion-content">
    <p>Cryptocurrency operates on decentralized networks based on blockchain technology. Transactions are recorded on a public ledger and validated by a network of computers (nodes) through a process called mining.</p>
  </div>
</div>
<div className="accordion-item">
  <button id="accordion-button" aria-expanded="false" onClick={toggleAccordion}>
    <span className="accordion-title">What services we provide? </span>
    <span className="icon" aria-hidden="true"></span>
  </button>
  <div className="accordion-content">
    <p>Cryptocurrency operates on decentralized networks based on blockchain technology. Transactions are recorded on a public ledger and validated by a network of computers (nodes) through a process called mining.</p>
  </div>
</div>
<div className="accordion-item">
  <button id="accordion-button" aria-expanded="false" onClick={toggleAccordion}>
    <span className="accordion-title">What services we provide? </span>
    <span className="icon" aria-hidden="true"></span>
  </button>
  <div className="accordion-content">
    <p>Cryptocurrency operates on decentralized networks based on blockchain technology. Transactions are recorded on a public ledger and validated by a network of computers (nodes) through a process called mining.</p>
  </div>
</div>


</div>



            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Faq
