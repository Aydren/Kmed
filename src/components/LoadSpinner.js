import Spinner from "react-bootstrap/Spinner";

function LoadSpinner() {
  return (
    <Spinner animation="border" role="status" id="spinner" className="m-auto">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
}

export default LoadSpinner;
