
import gif from "../../../public/giphy.gif"


const ErrorPage = () => {
  return (
    <div className="error-container">
      <h1 className="error-heading">Oops! Something went wrong.</h1>
      <p className="error-message">
        We apologize for the inconvenience. Please try again later.
      </p>
      <img src={gif} alt="Error GIF" className="error-gif" />
    </div>
  );
};

export default ErrorPage;
