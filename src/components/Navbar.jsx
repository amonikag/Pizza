import { BsCart } from "react-icons/bs";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-300">
      <div className="flex-1">
        <Link to="/">
          <a className="btn btn-ghost normal-case text-xl">🍕 Awesome Pizzas</a>
        </Link>
      </div>

      <Link to="/cart">
        <div className="flex-none w-20">
          <button className="btn btn-square btn-ghost text-md w-20">
            <p>
              Cart <BsCart className="ml-2 text-xl inline" />
            </p>
          </button>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
