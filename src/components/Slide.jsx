import { Link } from "react-router-dom";

const Slide = ({ image, text }) => {
  return (
    <div
      className="w-full bg-center bg-cover  h-[25rem] max-sm:h-[35rem]"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="flex items-center justify-center w-full h-full bg-gray-900/70">
        <div className="text-center">
          <h1 className="text-2xl max-sm:text-lg font-semibold text-white lg:text-3x1 w-[70%] mx-auto">
            {text}
          </h1>

          <br />

          <Link
            to="/allBlogs"
            className=" px-5 md:py-4 mt-4 text-sm font-medium text-gray-400 capitalize transition w-[70%] mx-auto"
          >
            Don&apos;t miss out! Read all our blogs and get in touch with the industry&apos;s latest tech today!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Slide;
