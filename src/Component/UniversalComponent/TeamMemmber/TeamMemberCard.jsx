import { FaXTwitter, FaLinkedin } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import PropTypes from "prop-types";

const TeamMemberCard = (props) => {
  const {
    avator,
    name,
    position,
    description,
    likdeProfile,
    twProfile,
    fbProfile,
  } = props.temMemberDetails;

  return (
    <>
      <div className="col-sm-4 col-md-4 col-lg-4 team_col_style">
        <div className="services_col_div_style">
          <div className="team_col_text_style">
            <div className="team_col_image_circle_style">
              <img src={`/Images/profileImage/${avator}`} alt="keyVector1" />
            </div>
            <div className="team_text_style">
              <strong>{name}</strong>
              <h5>{position}</h5>
              <p>{description}</p>
            </div>
            <div className="social_media">
              <a
                href={`https://www.linkedin.com/in/${likdeProfile}`}
                target="_blank"
              >
                <FaFacebookF className="bx bxl-twitter" />
              </a>
              <a href={`https://www.facebook.com/${fbProfile}`} target="_blank">
                <FaXTwitter className="bx bxl-twitter" />
              </a>
              <a href={`https://www.twitter.com/${twProfile}`}>
                <FaLinkedin className="bx" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
TeamMemberCard.propTypes = {
  temMemberDetails: PropTypes.shape({
    avator: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    likdeProfile: PropTypes.string.isRequired,
    twProfile: PropTypes.string.isRequired,
    fbProfile: PropTypes.string.isRequired,
  }).isRequired,
};

export default TeamMemberCard;
