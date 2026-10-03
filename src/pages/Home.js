import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <h1>My homepage</h1>
      <p>
        <Link to="/products"> Go to products </Link>
      </p>
    </>
  );
}

export default HomePage;
