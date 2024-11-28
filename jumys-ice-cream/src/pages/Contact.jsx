// import React, { useEffect, useState } from "react";
// import backgroundImage from "../assets/asset 50.jpeg";
// import Map from "../Components/Map";
// import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
// import { BiLogoBehance } from "react-icons/bi";
// import ScrollToTopButton from "../Components/TopButton";
// import Footer from "../Components/Footer";

// function Contact() {
//   const [isPageLoaded, setIsPageLoaded] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsPageLoaded(true);
//     }, 100);

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div className={`contact ${isPageLoaded ? 'fade-in' : ''}`}>
//       <div className="relative w-full h-60 sm:h-80 md:h-96">
//         <img
//           src={backgroundImage}
//           alt="About Us Background"
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
//           <h1 className="text-2xl sm:text-4xl md:text-5xl font-semibold text-black mb-2" id="conPage-t1">Contact</h1>
//           <p className="text-sm sm:text-base md:text-lg">
//             <a href="#" className="text-black hover:text-red-500">
//               Home
//             </a>{" "}
//             <span className="text-black">/</span>
//             <span className="text-red-500">Contact</span>
//           </p>
//         </div>
//       </div>

//       <Map />

//       <div className={`flex flex-col justify-center gap-16 md:flex-row px-4 py-10 md:px-10 md:py-20 ${isPageLoaded ? 'slide-up' : ''}`}>
//         <div className="flex-1 max-w-md">
//           <h2 className="text-2xl md:text-4xl font-bold mb-4">Get In Touch</h2>
//           <div className="text-xl mb-4">
//             <p>Rains HQ, Jens Olsens Vej 13, 8200 Aarhus N, Denmark</p>
//             <p>(02) 6188 8062</p>
//             <p>bdudhat293@Gmail.Com</p>
//           </div>
//           <div className="mb-4 text-xl">
//             <p>Open Hours:</p>
//             <p className="text-gray-500">Contact Our Customer Happiness Team</p>
//             <p className="text-gray-500">Monday-Friday 9am-5pm</p>
//           </div>

//           <p className="font-semibold text-2xl mb-2">Follow us:</p>
//           <div className="flex flex-wrap gap-2 text-3xl">
//             <a href="#" className="text-black hover:text-red-500">
//               <FaFacebook />
//             </a>
//             <a href="#" className="text-black hover:text-red-500">
//               <FaTwitter />
//             </a>
//             <a href="#" className="text-black hover:text-red-500">
//               <FaYoutube />
//             </a>
//             <a href="#" className="text-black hover:text-red-500">
//               <FaInstagram />
//             </a>
//             <a href="#" className="text-black hover:text-red-500">
//               <BiLogoBehance />
//             </a>
//           </div>
//         </div>

//         <div className="flex-1 max-w-md">
//           <form className="space-y-4">
//             <div>
//               <input
//                 className="w-full p-3 border border-gray-300 rounded-full"
//                 type="text"
//                 placeholder="Your Name *"
//               />
//             </div>
//             <div>
//               <input
//                 className="w-full p-3 border border-gray-300 rounded-full"
//                 type="email"
//                 placeholder="Your Email *"
//               />
//             </div>
//             <div>
//               <input
//                 className="w-full p-3 border border-gray-300 rounded-full"
//                 type="text"
//                 placeholder="Number Phone *"
//               />
//             </div>
//             <div>
//               <textarea
//                 className="w-full p-3 border border-gray-300 rounded-2xl"
//                 placeholder="Comment or Message *"
//                 rows="6"
//               ></textarea>
//             </div>
//             <button className="w-full px-4 py-3 bg-red-500 hover:bg-black text-white font-bold rounded-full transition duration-300">
//               Send Message
//             </button>
//           </form>
//         </div>
//       </div>

//       <ScrollToTopButton />
//       <Footer />
//     </div>
//   );
// }

// export default Contact;

import React, { useState } from "react";
import axios from "axios";
import backgroundImage from "../assets/asset 50.jpeg";
import Map from "../Components/Map";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { BiLogoBehance } from "react-icons/bi";
import ScrollToTopButton from "../Components/TopButton";
import Footer from "../Components/Footer";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post("http://localhost:7410/api/user/email/sendm", formData);
      setResponseMessage(response.data.message);
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      setResponseMessage("Failed to send message. Please try again.");
      console.error(error);
    }
  };

  return (
    <div className="contact">
      <div className="relative w-full h-60 sm:h-80 md:h-96">
        <img
          src={backgroundImage}
          alt="About Us Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-semibold text-black mb-2">
            Contact
          </h1>
          <p className="text-sm sm:text-base md:text-lg">
            <a href="#" className="text-black hover:text-red-500">
              Home
            </a>{" "}
            <span className="text-black">/</span>
            <span className="text-red-500">Contact</span>
          </p>
        </div>
      </div>

      <Map />

      <div className="flex flex-col justify-center gap-16 md:flex-row px-4 py-10 md:px-10 md:py-20">
        <div className="flex-1 max-w-md">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="text-xl mb-4">
            <p>Rains HQ, Jens Olsens Vej 13, 8200 Aarhus N, Denmark</p>
            <p>(02) 6188 8062</p>
            <p>bdudhat293@Gmail.Com</p>
          </div>
          <div className="mb-4 text-xl">
            <p>Open Hours:</p>
            <p className="text-gray-500">Contact Our Customer Happiness Team</p>
            <p className="text-gray-500">Monday-Friday 9am-5pm</p>
          </div>

          <p className="font-semibold text-2xl mb-2">Follow us:</p>
          <div className="flex flex-wrap gap-2 text-3xl">
            <a href="#" className="text-black hover:text-red-500">
              <FaFacebook />
            </a>
            <a href="#" className="text-black hover:text-red-500">
              <FaTwitter />
            </a>
            <a href="#" className="text-black hover:text-red-500">
              <FaYoutube />
            </a>
            <a href="#" className="text-black hover:text-red-500">
              <FaInstagram />
            </a>
            <a href="#" className="text-black hover:text-red-500">
              <BiLogoBehance />
            </a>
          </div>
        </div>

        <div className="flex-1 max-w-md">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <input
                className="w-full p-3 border border-gray-300 rounded-full"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name *"
                required
              />
            </div>
            <div>
              <input
                className="w-full p-3 border border-gray-300 rounded-full"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email *"
                required
              />
            </div>
            <div>
              <input
                className="w-full p-3 border border-gray-300 rounded-full"
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Number Phone *"
                required
              />
            </div>
            <div>
              <textarea
                className="w-full p-3 border border-gray-300 rounded-2xl"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Comment or Message *"
                rows="6"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-4 py-3 bg-red-500 hover:bg-black text-white font-bold rounded-full transition duration-300"
            >
              Send Message
            </button>
          </form>
          {responseMessage && <p className="mt-4 text-center">{responseMessage}</p>}
        </div>
      </div>

      <ScrollToTopButton />
      <Footer />
    </div>
  );
}

export default Contact;
