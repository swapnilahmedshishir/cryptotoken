import { Link } from "react-router-dom";

const Erro = () => {
  return (
    <>
      <div className="erro_page_div">
        <div className="container text-center">
          <div className="erro_text_div">
            <strong className="erro-text-fof">404</strong>
            <h5>
              The Page Your are <br /> Looking for doesn&#39;t exist
            </h5>
            <Link to="/">
              <button className="custombtn"> Back to Home</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Erro;
