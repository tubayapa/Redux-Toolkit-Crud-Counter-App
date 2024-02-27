import { NavLink } from "react-router-dom";
import { toggleTheme } from "../redux/slices/counterSlice";
import { useDispatch } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();

  return (
    <div className="d-flex justify-content-between mb-3 p-4">
      <h4>Redux Toolkit</h4>
      <nav className="d-flex gap-3 align-items-center">
        <NavLink className="text-decoration-none text-primary " to={"/"}>
          COUNTER
        </NavLink>
        <NavLink className="text-decoration-none text-primary  " to={"/crud"}>
          CRUD
        </NavLink>
        <button
          className="rounded-3 bg-light text-wrap border border-primary text-primary "
          onClick={() => dispatch(toggleTheme())}
          style={{
            border: "none",
            outline: "none",
            width: "5rem",
            fontSize: "14px",
          }}
        >
          Change Theme
        </button>
      </nav>
    </div>
  );
};

export default Header;
