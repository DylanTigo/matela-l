import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/main.scss";
import { LuChevronDown } from "react-icons/lu";

// eslint-disable-next-line react/prop-types
export function Button({children, btnType }) {
  
  if (btnType === "secondary") {
    return (
      <>
        <button className="btn btn-secondary rounded-pill">{children}</button>
      </>
    );
  } else if (btnType === "dropdown") {
    return (
      <button className="btn btn-secondary rounded-pill d-flex gap-2 align-items-center">
        {children}
        <LuChevronDown />
      </button>
    );
  }
  return (
    <>
      <button className="btn btn-primary rounded-pill text-secondary d-block m-auto px-4 py-2">
        {children}
      </button>
    </>
  );
}
