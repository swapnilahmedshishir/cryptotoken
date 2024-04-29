import PropTypes from "prop-types";

const FaqItem = (props) => {
    // props
    const {title, content } = props.accordion ;


    // state
  const toggleAccordion = (event) => {
    const items = document.querySelectorAll(".accordion button");
    const itemToggle = event.currentTarget.getAttribute("aria-expanded");

    for (let i = 0; i < items.length; i++) {
      items[i].setAttribute("aria-expanded", "false");
    }

    if (itemToggle === "false") {
      event.currentTarget.setAttribute("aria-expanded", "true");
    }
  };

  return (
    <>
<div className="accordion-item">
                  <button
                    id="accordion-button"
                    aria-expanded="false"
                    onClick={toggleAccordion}
                  >
                    <span className="accordion-title">
                      {title}
                    </span>
                    <span className="icon" aria-hidden="true"></span>
                  </button>
                  <div className="accordion-content">
                    <p>
                     {content}
                    </p>
                  </div>
                </div>
    </>
  )
}

FaqItem.propTypes = {
    accordion: PropTypes.shape({
        title: PropTypes.string.isRequired ,
        content: PropTypes.string.isRequired 

    } ).isRequired ,
    
};

export default FaqItem