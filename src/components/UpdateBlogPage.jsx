import { useContext, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "./AuthProvider";

const UpdateBlogPage = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const selectedPost = data.find((post) => post._id === id);
  const { user } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    title: selectedPost.title,
    imageUrl: selectedPost.imageUrl,
    category: selectedPost.category,
    longDescription: selectedPost.longDescription,
    shortDescription: selectedPost.shortDescription,
    postingDate: selectedPost.postingDate,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleUpdate = (e) => {
    e.preventDefault();
    const currentDateTime = new Date().toISOString();

    const addToBlog = {
      ...formData,
      postingDate: currentDateTime,
    };

    fetch(`https://assignment11-client-side.vercel.app/allBlog/${selectedPost._id}?email=${user.email}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(addToBlog),
      credentials: "include",
    })
      .then((res) => res.json())
      .then(() => {
        Swal.fire({
          title: "Post Added Successfully!",
          icon: "success",
        });
      });
  };

  return (
    <div>
      <div className="w-[80%] mx-auto my-10">
        <h3 className="font-bold text-center mb-6 text-2xl my-6">
          Update Your Post
        </h3>
        <div className="flex justify-center items-center">
          <div className="card  bg-base-200 mb-6 border-2 md:w-full max-w-[80%] shrink-0 p-10">
            <form onSubmit={handleUpdate} className="card-body ">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Title */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Blog Title</span>
                  </label>
                  <input
                    name="title"
                    type="text"
                    placeholder="title"
                    className="input input-bordered"
                    defaultValue={selectedPost.title}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* image */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Post Thumbnail</span>
                  </label>
                  <input
                    name="imageUrl"
                    type="text"
                    placeholder="thumbnail-URL"
                    className="input input-bordered"
                    defaultValue={selectedPost.imageUrl}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* shortDescription */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Short Description</span>
                  </label>
                  <input
                    name="shortDescription"
                    placeholder="add only 10 words"
                    className="textarea textarea-bordered"
                    defaultValue={selectedPost.shortDescription}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* category */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Category</span>
                  </label>
                  <select
                    name="category"
                    className="select select-bordered"
                    defaultValue={selectedPost.category}
                    onChange={handleChange}
                    required
                  >
                    <option value="Cybersecurity">Cybersecurity</option>
                    <option value="Artificial Intelligence">
                      Artificial Intelligence
                    </option>
                    <option value="Web Development">Web Development</option>
                    <option value="Software Development">
                      Software Development
                    </option>
                    <option value="General Tech">General Tech</option>
                  </select>
                </div>

                {/* longDescription */}
                <div className="form-control md:col-span-2">
                  <label className="label">
                    <span className="label-text">Long Description</span>
                  </label>
                  <textarea
                    name="longDescription"
                    placeholder="write in details..."
                    className="textarea textarea-bordered "
                    defaultValue={selectedPost.longDescription}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
              </div>
              <div className="form-control items-end mt-6">
                <button type="submit" className="btn btn-primary">
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateBlogPage;
