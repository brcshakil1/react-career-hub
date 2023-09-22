import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <h2>Oops!</h2>

      <button>
        <Link to="/">Go back home</Link>
      </button>
    </div>
  );
};

export default ErrorPage;
