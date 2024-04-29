import PropTypes from "prop-types";

const ClinetImage = ({ imgName }) => {
  return (
    <>
      <div className="col-6 col-sm-6 col-md-4 client_item">
        <img src={`Images/logos/${imgName}`} alt={imgName} />
      </div>
    </>
  );
};

ClinetImage.propTypes = {
    imgName: PropTypes.string.isRequired // Change `propTypes` to `PropTypes`
};

export default ClinetImage;
