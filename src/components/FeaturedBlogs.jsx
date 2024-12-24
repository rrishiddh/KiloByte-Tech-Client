import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const FeaturedBlogs = () => {
  const [topBlogs, setTopBlogs] = useState([]);

  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    return date.toLocaleDateString(undefined, {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };
  useEffect(() => {
    const fetchTopBlogs = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/featuredBlogPosts"
        );
        setTopBlogs(response.data);
      } catch (error) {
        console.error("Error fetching top blogs:", error);
      }
    };

    fetchTopBlogs();
  }, []);

  return (
    <div className="min-h-screen">
      <div className="text-center">
        <h1 className="my-6 text-2xl">Find Out Top 10 Posts!</h1>
      </div>
      {topBlogs && topBlogs?.length ? (
        <div className="overflow-x-auto w-[90%] mx-auto">
          <table className="table table-xs table-pin-rows table-pin-cols">
            <thead>
              <tr>
                <th></th>
                <td>Blog Title</td>
                <td>Category</td>
                <td>Short Description</td>
                <td>Long Description</td>
                <td>View Post</td>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {topBlogs.map((post, idx) => (
                <tr key={idx}>
                  <th>{idx + 1}</th>
                  <td>{post.title}</td>
                  <td>{post.category}</td>
                  <td>{post.shortDescription}</td>
                  <td>{post.longDescription}</td>
                  <td>
                    {" "}
                    <Link to={`/allBlogPosts/${post._id}`}>
                      <button className="btn btn-active btn-ghost btn-xs">
                        Click..
                      </button>
                    </Link>{" "}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <th></th>
                <td>Blog Title</td>
                <td>Category</td>
                <td>Short Description</td>
                <td>Long Description</td>
                <td>View Post</td>
                <th></th>
              </tr>
            </tfoot>
          </table>
        </div>
      ) : (
        <div className="text-center text-xl text-red-500 py-10">
          No Data Available, Add WishList First!
        </div>
      )}
    </div>
  );
};

export default FeaturedBlogs;
