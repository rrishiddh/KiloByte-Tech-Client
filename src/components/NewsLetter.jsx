import { toast } from "react-toastify";

const NewsLetter = () => {
  
    const handleSubscribe = (e) => {
        e.preventDefault();
        toast.success("Thank you for subscribing to our newsletter!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      };
  return (
    <div>    
      <form onSubmit={handleSubscribe}>      
        <div className=" my-20 w-[80%] mx-auto bg-gradient-to-r from-blue-100 to-orange-100 py-16 rounded-lg text-center text-black outline  outline-offset-8 outline-white">
                  <h2 className="text-3xl font-bold my-4">
                    Subscribe to Our Newsletter
                  </h2>
                  <p className="mb-6 text-lg">
                    Get the latest updates and news right in your inbox!
                  </p>
                  <div className="flex justify-center">
                    <input
                    required
                      type="email"
                      placeholder="Your Email.."
                      className="input input-bordered input-lg rounded-l-lg w-[40%]"
                    />                    
                    <button className="btn btn-lg bg-gradient-to-r from-pink-400 to-yellow-400  font-semibold rounded-r-lg">
                      Subscribe
                    </button>
                  </div>
                </div>
      </form>
    </div>
    
  );
};

export default NewsLetter;
