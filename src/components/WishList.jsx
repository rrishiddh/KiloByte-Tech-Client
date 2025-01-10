import { useContext, useState, useEffect } from "react";
import { AuthContext } from "./AuthProvider";
import Swal from "sweetalert2";
import axios from "axios";

const WishList = () => {
  const [myWishList, setMyWishList] = useState([]);
  const { user } = useContext(AuthContext);

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
    if (user?.email) {
      axios
  .get(`https://kilo-byte-tech-server.vercel.app/wishList?email=${user.email}`, {
    withCredentials: true,
  })
  .then((response) => {
    setMyWishList(response.data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
    }
  }, [user]);

  const handleDelete = (id) => {
    if (id) {
      axios
        .delete(`https://kilo-byte-tech-server.vercel.app/wishList/${id}`)
        .then(() => {
          Swal.fire({
            title: "Deleted!",
            text: "Wishlist item deleted successfully!",
            icon: "success",
          });
          setMyWishList(myWishList.filter((wishList) => wishList._id !== id));
        })
        .catch((error) => {
          console.error("Error deleting wishlist item:", error.message);
        });
    }
  };

  return (
    <div className="min-h-screen my-10 ">
      <div className="w-[90%] mx-auto ">
      <div className="text-center">
        <h1 className="my-6 text-2xl">Here Is Your WishList!</h1>
      </div>
      {myWishList && myWishList?.length ? (
        <div className="overflow-x-auto w-[90%] mx-auto">
          <table className="table table-xs table-pin-rows table-pin-cols">
            <thead>
              <tr>
                <th></th>
                <td>Blog Title</td>
                <td>Category</td>
                <td>Short Description</td>
                <td>Long Description</td>
                <td>Posting Date</td>
                <td>Actions</td>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {myWishList.map((post, idx) => (
                <tr key={idx}>
                  <th>{idx + 1}</th>
                  <td>{post.title}</td>
                  <td>{post.category}</td>
                  <td>{post.shortDescription}</td>
                  <td>{post.longDescription}</td>
                  <td>{formatDate(post.postingDate)}</td>
                  <td>
                    <div className="grid grid-cols-1 gap-2 my-auto">
                      <button
                        className="btn btn-sm"
                        onClick={() => handleDelete(post._id)}
                      >
                        <img
                          src="https://img.icons8.com/?size=100&id=99940&format=png&color=000000"
                          className="w-3 h-3 rounded-full"
                        />
                      </button>
                    </div>
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
                <td>Posting Date</td>
                <td>Actions</td>
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
    </div>
  );
};

export default WishList;
