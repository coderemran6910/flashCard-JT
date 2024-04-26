import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <NavLink to={"/"}> Home </NavLink>
          {/* <a>Home</a></li> */}
        </li>
        <li><a>Flashcard</a></li>
        <li><a> Contact</a></li>
        <li><a> FAQ</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">
        <img src="logo.png" alt="" />
    </a>
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal px-1">

        <li>
          <NavLink to={"/"}> Home </NavLink>
        </li>
        <li>
          <NavLink to={"/flashcard"}> Flashcard </NavLink>
        </li>
        <li>
          <NavLink to={"/contact"}> Contact </NavLink>
        </li>
        <li>
          <NavLink to={"/faq"}> FAQ </NavLink>
        </li>
      
    </ul>

<button className=" btn rounded-2xl font-extrabold bg-[#0C378D] text-white "> Login </button>

  </div>
</div>
        </div>
    );
};

export default Navbar;