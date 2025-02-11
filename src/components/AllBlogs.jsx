import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "./AuthProvider";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const AllBlogs = () => {
  const [allBlogPost, setAllBlogPost] = useState([]);
  const [filterBlogs, setFilterBlogs] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filterCategory, setFilterCategory] = useState("All");
  const { user } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBlogPost = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://kilo-byte-tech-server.vercel.app/allBlogPost?searchText=${searchText}`
        );
        const data = await response.json();
        setAllBlogPost(data);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogPost();
  }, [searchText]);

  useEffect(() => {
    let posts = [...allBlogPost];

    if (filterCategory !== "All") {
      posts = posts.filter((post) => post.category === filterCategory);
    }

    setFilterBlogs(posts);
  }, [filterCategory, allBlogPost]);

  const handleAddToWishlist = async (post) => {
    const postData = {
      postId: post._id,
      title: post.title,
      imageUrl: post.imageUrl,
      category: post.category,
      longDescription: post.longDescription,
      shortDescription: post.shortDescription,
      postingDate: post.postingDate,
      userEmail: user.email,
      userName: user.displayName,
    };

    await fetch("https://kilo-byte-tech-server.vercel.app/wishList", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "Post is already in WishList") {
          Swal.fire({
            title: "This Post is already in your WishList.",
            icon: "warning",
          });
        } else {
          Swal.fire({
            title: "Added to WishList successfully!",
            icon: "success",
          });
        }
      })
      .catch((error) => {
        Swal.fire({
          title: `An error occurred while adding to WishList. ${error}`,
          icon: "error",
        });
      });
  };

  return (
    <div className="my-10 min-h-screen ">
      <div className="w-[90%] mx-auto" >
        <h1 className="text-center text-2xl max-md:text-xl  font-bold my-6">
          Checkout All Latest Posts!
        </h1>

        <div className="flex max-sm:flex-col max-sm:w-[60%] max-sm:mx-auto justify-center mb-6">
          <input
            type="text"
            placeholder="Search by Title"
            className="input input-bordered mx-2 mb-4"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />

          <select
            onChange={(e) => setFilterCategory(e.target.value)}
            className="select select-bordered mx-2"
          >
            <option value="All">Filter by Category:</option>
            {allBlogPost.length > 0 &&
              [...new Set(allBlogPost.map((post) => post.category))].map(
                (category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                )
              )}
          </select>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 max-sm:grid-cols-1 gap-4 min-h-screen  max-sm:w-[90%]  mx-auto">
          {isLoading ? (
            Array.from({ length: 3 }).map((_,idx) => (
              <div key={idx} className="card w-[90%] mx-auto shadow-xl p-2">
                <div className="grid md:grid-cols-3 gap-4">
                  <Skeleton height={150} width={"100%"} />
                  <div>
                    <Skeleton count={3} />
                    <Skeleton width={"50%"} height={30} />
                  </div>
                </div>
              </div>
            ))
          ) : filterBlogs.length > 0 ? (
            filterBlogs.map((post) => (
              <div
                key={post._id}
                className="card  mx-auto  dark:border bg-base-100 shadow-xl p-2 grid-cols-1 grid  gap-1"
              >
                <figure className="h-[200px] w-[100%] mx-auto object-cover">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="object-fit max-sm:mt-4 rounded-lg mx-auto my-auto "
                    />
                </figure>
                <div className="card-body">
                  <p className="absolute top-0 right-0 border text-xs bg-base-200  btn btn-xs ">{post.category}</p>
                  <h2 className="card-title text-base">{post.title}</h2>
                  <p className="text-sm font-light">
                    Description : {post.shortDescription}
                  </p>
                  <div className="card-actions justify-end">
                    {user && user.email ? (
                      <button
                        className="btn btn-sm text-xs bg-gradient-to-r from-sky-400 to-sky-300 hover:from-sky-500 hover:to-sky-600"
                        onClick={() => handleAddToWishlist(post)}
                      >
                        Add to Wishlist
                      </button>
                    ) : (
                      <button className="text-xs font-thin my-auto">
                        Please Login To <br /> Add On Your WishList
                      </button>
                    )}
                    <Link to={`/allBlogPosts/${post._id}`}>
                      <button className="btn btn-sm text-xs bg-gradient-to-r from-sky-400 to-sky-300 hover:from-sky-500 hover:to-sky-600">
                        Explore Details
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center pt-10 text-xl font-semibold">
              No Posts Found!
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllBlogs;
