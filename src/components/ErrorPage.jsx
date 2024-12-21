import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="text-center justify-center w-[90%] mx-auto pt-44">
            <img className="mx-auto mb-10" src="https://img.icons8.com/?size=100&id=KarJz0n4bZSj&format=png&color=000000" alt="" />
            <h2 className="font-bold text-4xl">404 Error</h2>
            <h2 className="font-bold text-4xl pt-3">Page Not Found!</h2>
            <Link to="/">
                  <button className="btn mt-10  btn-primary">
                    Go To Home Page
                  </button>
            </Link>
        </div>
    );
};

export default ErrorPage;