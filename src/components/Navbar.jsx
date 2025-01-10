import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut().then(() => {
      window.location.href = "/";
    });
  };
  const navOption = (
    <>
      <li>
        <NavLink to="/">
          <img
            src="https://img.icons8.com/?size=100&id=41651&format=png&color=000000"
            className="w-5 h-5"
          />
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/allBlogs">
          <img
            src="https://img.icons8.com/?size=100&id=41823&format=png&color=000000"
            className="w-5 h-5"
          />
          All Blogs
        </NavLink>
      </li>
      <li>
        <NavLink to="/featuredBlogs">
          <img
            src="https://img.icons8.com/?size=100&id=EOGZg7b548R6&format=png&color=000000"
            className="w-5 h-5"
          />
          Featured Blogs
        </NavLink>
      </li>

      {user && user?.email ? (
        <>
          <li>
            <NavLink to="/addBlog">
              <img
                src="https://img.icons8.com/?size=100&id=55004&format=png&color=000000"
                className="w-5 h-5"
              />
              Add Blog{" "}
            </NavLink>
          </li>

          <li>
            <NavLink to="/wishList">
              <img
                src="https://img.icons8.com/?size=100&id=uInPGSbVMJz8&format=png&color=000000"
                className="w-5 h-5"
              />
              WishList
            </NavLink>
          </li>
        </>
      ) : (
        ""
      )}
    </>
  );
  return (
    <div className="sticky top-0 z-50">
      <div className="navbar bg-gradient-to-r from-[#29dadd] to-[#787878] text-black  px-5  max-sm:pb-3">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2  shadow text-xs"
            >
              {navOption}
            </ul>
          </div>

          <Link
            to={"/"}
            className="btn btn-ghost max-sm:btn-sm text-lg max-sm:text-base "
          >
            <img
              className="w-8 h-8 max-sm:hidden"
              src="https://img.icons8.com/?size=100&id=n16PSBiTkMuV&format=png&color=000000"
              alt=""
            />
            KiloByte Tech{" "}
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal space-x-2 px-1 text-xs">
            {navOption}
          </ul>
        </div>
        <div className="navbar-end space-x-2">      
          {user && user?.email ? (
            <div className="dropdown dropdown-hover dropdown-left ">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost  btn-circle avatar "
            >
              <div className=" cursor-pointer avatar ring-primary ring-offset-base-100 w-10 rounded-full ring ring-offset-2" >
                  <img
                    src={user?.photoURL}
                    referrerPolicy="no-referrer"
                  />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow mt-6"
            >
              <li>
              <button
                onClick={handleLogOut}
                className="btn btn-sm text-xs mx-auto w-full"
              >
                Logout
              </button>
              </li>
            
            </ul>
          </div>
          </div>
          ) : (
            <>
              <div className="dropdown dropdown-hover dropdown-left ">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-sm text-xs bg-gradient-to-r from-sky-400 to-sky-300 hover:from-sky-500 hover:to-sky-600 "
            >
              <div >
                <button className="text-xs">Join Now</button>
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow "
            >
              <li>
              <Link
                to="/auth/login"
                className=" w-full justify-center "
              >
                Login
              </Link>
              </li>
              
              
              <li>
              <Link
                to="/auth/register"
                className=" w-full justify-center"
              >
                Registration
              </Link>
              </li>
            </ul>
          </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
