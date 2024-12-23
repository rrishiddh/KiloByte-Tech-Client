import { useContext, useState, useEffect } from "react";
import { useLoaderData, useParams, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const BlogDetails = () => {
  const { user } = useContext(AuthContext);
  const data = useLoaderData();
  const { id } = useParams();
  const navigate = useNavigate();
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const selectedPost = data.find((post) => post._id === id);
  
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
    const fetchComments = async () => {
      try {
        const response = await fetch(`http://localhost:5000/comments?blogId=${id}`);
        const data = await response.json();
        setComments(data);
      } catch (error) {
        console.error("Failed to fetch comments:", error);
      }
    };

    fetchComments();
  }, [id,newComment]);

 
  const handlePostComment = async () => {
    if (!newComment.trim()) return;
    try {
      const response = await fetch("http://localhost:5000/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          blogId: id,
          userName: user.displayName,
          userImage: user.photoURL,
          comment: newComment,
        }),
      });

      if (response.ok) {
        const addedComment = await response.json();
        setComments((prev) => [...prev, addedComment]);
        setNewComment("");
      }
    } catch (error) {
      console.error("Failed to post comment:", error);
    }
  };

  return (
    <div>
      <h1 className="my-6 font-bold text-2xl text-center w-[80%] mx-auto">
        FindOut Details About :- {selectedPost.title}
      </h1>
      <div className="card w-[80%] mb-10 mx-auto bg-base-100 shadow-xl p-2 grid grid-cols-1 md:grid-cols-2">
        <div className="card w-[90%] mb-10 mx-auto bg-base-100 shadow-xl p-2 grid grid-cols-1">
          <figure className="w-[50%] mx-auto">
            <img
              src={selectedPost.imageUrl}
              alt={selectedPost.title}
              className="w-[50%] h-[100%] rounded-xl object-contain"
            />
          </figure>
          <div className="card-body text-center">
            <h2 className="text-center font-bold text-xl">{selectedPost.title}</h2>
            <p className="font-medium text-start">Category: {selectedPost.category}</p>
            <p className="text-sm font-medium text-start">Short Description: {selectedPost.shortDescription}</p>
            <p className="text-sm font-light text-start">Long Description: {selectedPost.longDescription}</p>
            <p className="text-sm font-medium text-end">Posting Date: {formatDate(selectedPost.postingDate)}</p>
            <p className="text-sm font-medium italic text-end">Posted By: {selectedPost.userName}</p>
            <p className="text-sm font-medium italic text-end">Post Creator Email: {selectedPost.userEmail}</p>
            <div className="card-actions justify-center">
              {user?.email === selectedPost.userEmail ? (
                <p className="ml-20 text-xs text-red-500 italic">Cannot comment on your own blog</p>
              ) : user ? (
                <div className="flex items-center gap-2">
                  <textarea
                    className="textarea textarea-info"
                    placeholder="Any thoughts..?"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                  ></textarea>
                  <button className="btn btn-sm btn-primary" onClick={handlePostComment}>
                    Post Comment
                  </button>
                </div>
              ) : (
                <p className="text-sm italic">Please login to add a comment</p>
              )}
              {user?.email === selectedPost.userEmail && (
                <button
                  className="btn btn-sm btn-warning mt-4"
                  onClick={() => navigate(`/updateBlog/${id}`)}
                >
                  Update Blog
                </button>
              )}
            </div>
          </div>
        </div>
        <div className="w-[90%] mx-auto">
          <h3 className="text-lg font-bold my-4">What Other Says :</h3>
          <div className="space-y-4 ">
            {comments.map((comment, idx) => (
              <div key={idx} className="flex items-start gap-4 p-2 bg-gray-100 rounded-lg shadow-sm">
                <img
                  src={comment.userImage}
                  alt={comment.userName}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-medium">{comment.userName}</p>
                  <p className="text-sm">{comment.comment}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
