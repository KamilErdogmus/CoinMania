import { Link, NavLink } from "react-router-dom";

const HeaderView = () => {
  return (
    <header>
      <Link to={"/"} className="h-logo">
        <img src="../../public/c-logo.png" alt="" />
        <h3 className="text-white">CoinMania</h3>
      </Link>
      <div className="buttons">
        <NavLink
          className="d-flex justify-content-center align-items-center"
          to={"/home"}
        >
          Home
        </NavLink>
        <NavLink
          className="d-flex justify-content-center align-items-center text-center"
          to={"/"}
        >
          Sign Up
        </NavLink>
      </div>
    </header>
  );
};

export default HeaderView;
