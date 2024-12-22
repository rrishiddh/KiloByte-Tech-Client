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
  return (
    <div>
      <div className="navbar bg-gradient-to-r from-[#29dadd] to-[#787878] text-black ">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2  shadow"
            >
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
                  <NavLink to="/addBlog">
                    <img
                      src="https://img.icons8.com/?size=100&id=55004&format=png&color=000000"
                      className="w-5 h-5"
                    />
                    Add Blog{" "}
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
                <li>
                  <NavLink to="/wishList">
                    <img
                      src="https://img.icons8.com/?size=100&id=uInPGSbVMJz8&format=png&color=000000"
                      className="w-5 h-5"
                    />
                    WatchList
                  </NavLink>
                </li>                
              </>
            </ul>
          </div>

          <Link to={"/"} className="btn btn-ghost text-xl max-sm:text-base">
            <img
              className="w-8 h-8 max-sm:hidden"
              src="https://img.icons8.com/?size=100&id=n16PSBiTkMuV&format=png&color=000000"
              alt=""
            />
            KiloByte Tech{" "}
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal space-x-2 px-1">
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
                  <NavLink to="/addBlog">
                    <img
                      src="https://img.icons8.com/?size=100&id=55004&format=png&color=000000"
                      className="w-5 h-5"
                    />
                    Add Blog{" "}
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
                <li>
                  <NavLink to="/wishList">
                    <img
                      src="https://img.icons8.com/?size=100&id=uInPGSbVMJz8&format=png&color=000000"
                      className="w-5 h-5"
                    />
                    WatchList
                  </NavLink>
                </li>                
              </>
          </ul>
        </div>
        <div className="navbar-end space-x-2">
        
          {user && user?.email ? (
          <div className="flex items-center space-x-4">
                            <img src={user?.photoURL} referrerPolicy="no-referrer" className="w-12 rounded-full cursor-pointer" />

            <button onClick={handleLogOut}  className="btn bg-gradient-to-r from-teal-200 to-blue-300 hover:from-pink-300 hover:to-[#d46b6bd4]">
              Logout
            </button>
          </div>
           ) : ( 
          <>
            <Link to="/auth/login"  className="btn max-sm:btn-sm bg-gradient-to-r from-teal-200 to-blue-300 hover:from-pink-300 hover:to-[#d46b6bd4] ">
              Login
            </Link>
            <Link  to="/auth/register" className="btn max-sm:btn-sm bg-gradient-to-r from-teal-200 to-blue-300 hover:from-pink-300 hover:to-[#d46b6bd4]">
              Registration
            </Link>
          </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
