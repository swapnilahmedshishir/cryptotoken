import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const JobOffer = (props) => {
  // props
  const { jobTitle, position, jobTime } = props.JobOffer;
  return (
    <div className="job_section_div">
      <div className="job_section_list">
        <ul>
          <li className="job_title">{jobTitle}</li>
          <li className="job_item">{position}</li>
          <li className="job_item">{jobTime}</li>
          <li>
            <Link to="">
              <button className="apply_btn">Apply</button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
JobOffer.propTypes = {
  JobOffer: PropTypes.shape({
    jobTitle: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    jobTime: PropTypes.string.isRequired,
  }).isRequired,
};

export default JobOffer;
