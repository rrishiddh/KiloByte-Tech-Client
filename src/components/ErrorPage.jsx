import { Link } from "react-router-dom";
import error1 from "./../assets/error1.gif";

const ErrorPage = () => {
  return (
    <div className=" text-center justify-center flex min-h-screen ">
      <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 my-auto ">
        <div>
          <img className="mx-auto mb-10" src={error1} />
        </div>
        <div className="my-auto">
          <h2 className="font-bold text-3xl pt-3">Page Not Found!</h2>
          <Link to="/">
            <button className="btn mt-10  bg-gradient-to-r from-[#8ed79f] to-[#71b280]">
              Go To Home Page
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
