import { Link } from "react-router-dom";
import logo from "../../assets/MLa_Logo.png";

// eslint-disable-next-line react/prop-types
export function Logo({ height }) {
  let currentheight = 45;
  if (height) {
    currentheight = height;
  }

  return (
    <Link to="/" className=" d-inline-flex justify-content-center  ">
      <img
        src={logo}
        alt="Machine Learning Algorithm Logo"
        style={{ height: currentheight }}
      />
    </Link>
  );
}
