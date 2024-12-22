import { Link, useLoaderData } from "react-router-dom";

const RecentBlogPost = () => {
    const recentBlog = useLoaderData();

    return (
        <div className="my-10 w-[90%] mx-auto">
        <h1 className="text-center text-2xl font-bold my-6"> Checkout Some <br className="md:hidden" /> Recent Blog Post :</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {
         recentBlog.map((blog,idx) => <div key={idx} className="card card-compact bg-base-100 shadow-xl p-2">
          
          <div className="card-body">
            <h2 className="card-title">{blog.title}</h2>
            <p className="font-medium">Category : {blog.category}</p>
            <p className="text-sm">{blog.shortDescription}</p>
            <div className="card-actions justify-end">
            <Link>
                  <button className="btn btn-sm btn-primary">Explore Details</button>
            </Link>
            <Link>
                  <button className="btn btn-sm btn-primary">Add to Wishlist</button>
            </Link>
            </div>
          </div>
        </div>)
        }
        </div>
  
        
      </div>
    );
};

export default RecentBlogPost;