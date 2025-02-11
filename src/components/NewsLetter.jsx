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
        <div className=" my-20 w-[80%] mx-auto bg-gradient-to-r from-[#29daddc0] to-[#78787882] py-16 rounded-lg text-center text-black outline  outline-offset-8 outline-white">
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
                      placeholder="Write Your Email Here..."
                      className="input input-bordered input-lg rounded-l-lg w-[40%]"
                    />                    
                    <button className="btn btn-lg dark:text-black bg-gradient-to-r from-sky-400 to-sky-300 hover:from-sky-500 hover:to-sky-600  font-semibold rounded-r-lg">
                      Subscribe
                    </button>
                  </div>
                </div>
      </form>
    </div>
    
  );
};

export default NewsLetter;
