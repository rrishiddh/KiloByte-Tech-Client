import { useContext, useState } from "react";
import { AuthContext } from "./AuthProvider";
import Swal from "sweetalert2";

const AddBlog = () => {
  const { user } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    title: "",
    imageUrl: "",
    category: "Cybersecurity",
    longDescription: "",
    shortDescription: "",
    postingDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const currentDateTime = new Date().toISOString();

    const addToBlog = {
      ...formData,
      postingDate: currentDateTime,
      userEmail: user.email,
      userName: user.displayName,
    };

    fetch("http://localhost:5000/allBlog", {
      method: "POST",
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
        setFormData({
          title: "",
          imageUrl: "",
          category: "Cybersecurity",
          longDescription: "",
          shortDescription: "",
          postingDate: "",
        });
      });
  };

  return (
    <>
      <div className="min-h-screen justify-center items-center">
        <h2 className="text-2xl font-semibold pt-2 text-center">
          {" "}
          Add New Blog Post!
        </h2>
        <p className="font-light text-center py-2 mb-6">
          Share What New Is Happening In The Industry!
        </p>
        <div className="flex justify-center items-center">
          <div className="card  bg-base-200 mb-6 border-2 md:w-full max-w-[80%] shrink-0 p-10">
            <form onSubmit={handleSubmit} className="card-body">
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
                    value={formData.title}
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
                    value={formData.imageUrl}
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
                    value={formData.shortDescription}
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
                    value={formData.category}
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
                    value={formData.longDescription}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
              </div>
              <div className="form-control w-[50%] mx-auto mt-6">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default AddBlog;
