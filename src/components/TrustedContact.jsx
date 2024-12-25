import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const TrustedContact = () => {
  const images = [
    "https://i.ibb.co.com/X7S4g4M/1.png",
    "https://i.ibb.co.com/G5MVdDW/2.png",
    "https://i.ibb.co.com/RzTyLmh/3.png",
    "https://i.ibb.co.com/2c8Pc8V/4.png",
    "https://i.ibb.co.com/FnkJr0B/5.png",
    "https://i.ibb.co.com/30CRZ3H/6.png",
    "https://i.ibb.co.com/7X2Bywh/7.png",
    "https://i.ibb.co.com/VmR3s8n/8.png",
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-10 w-[90%] mx-auto">
      <div>
        <h1 className="text-xl font-bold mb-4">Company Earned Our Trust:</h1>
        <PhotoProvider
          speed={() => 800}
          easing={(type) =>
            type === 2
              ? "cubic-bezier(0.36, 0, 0.66, -0.56)"
              : "cubic-bezier(0.34, 1.56, 0.64, 1)"
          }
        >
          <div className="grid grid-cols-4 gap-2">
            {images.map((src, index) => (
              <PhotoView key={index} src={src}>
                <img
                  className="w-30 h-30 object-contain cursor-pointer border border-black p-1"
                  src={src}
                  alt={`Photo ${index + 1}`}
                />
              </PhotoView>
            ))}
          </div>
        </PhotoProvider>
      </div>
      <div className="mx-auto w-[90%] my-auto">
        <h1 className="text-xl font-bold mb-4">Consult with Our Experts:</h1>
        <p className="font-thin mb-4">
          Reach out to our experienced professionals for reliable advice and
          tailored solutions to meet your needs.
        </p>
        <p>
          {" "}
          <b>Email:</b> support@abc.com
        </p>
        <p>
          {" "}
          <b>Phone:</b> +880-1911-KILOBYTE-TECH
        </p>
        <p>
          {" "}
          <b>Address:</b> 1 Gulshan Circle, Dhaka City.
        </p>
        <div className="items-center mt-4 ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29204.88962097372!2d90.37730962192968!3d23.796855529941773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7a7ba38543b%3A0x91d5f14ad296d72e!2sGulshan%202%2C%20Dhaka%201212!5e0!3m2!1sen!2sbd!4v1733569556715!5m2!1sen!2sbd"
            className="h-[100%] w-[100%] rounded-xl ring ring-sky-500 ring-offset-2"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default TrustedContact;
