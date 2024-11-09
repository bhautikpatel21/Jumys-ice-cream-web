// import React, { useState, useEffect } from "react";
// import backgroundImage from "../assets/asset 50.jpeg";
// import { FaUser } from "react-icons/fa";
// import Footer2 from "../Components/Footer2";
// import ScrollToTopButton from "../Components/TopButton";
// import axios from "axios";

// const Login = () => {
//   const [passwordVisible, setPasswordVisible] = useState(false);
//   const [registerPasswordVisible, setRegisterPasswordVisible] = useState(false);
//   const [isPageLoaded, setIsPageLoaded] = useState(false);
//   const [loginEmail, setLoginEmail] = useState("");
//   const [loginPassword, setLoginPassword] = useState("");
//   const [registerUsername, setRegisterUsername] = useState("");
//   const [registerEmail, setRegisterEmail] = useState("");
//   const [registerPassword, setRegisterPassword] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [showLogin, setShowLogin] = useState(false);
//   const [userProfile, setUserProfile] = useState(null);
//   const [token, setToken] = useState(null);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsPageLoaded(true);
//     }, 100);
//     return () => clearTimeout(timer);
//   }, []);

//   const togglePasswordVisibility = () => {
//     setPasswordVisible(!passwordVisible);
//   };

//   const toggleRegisterPasswordVisibility = () => {
//     setRegisterPasswordVisible(!registerPasswordVisible);
//   };

//   const getUserProfile = async (userToken) => {
//     try {
//       const response = await axios.get("http://localhost:7410/api/user/login/get-user", {
//         headers: {
//           Authorization: `Bearer ${userToken}`,
//         },
//       });
//       setUserProfile(response.data);
//       console.log("User Profile Data:", response.data);
//     } catch (err) {
//       console.error("Failed to fetch user profile:", err);
//       alert("Could not load user profile.");
//     }
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");

//     try {
//       const response = await axios.post(
//         "http://localhost:7410/api/user/login/login-user",
//         {
//           email: loginEmail,
//           password: loginPassword,
//         }
//       );
//       console.log("Login Success:", response.data);
//       const userToken = response.data.token;
//       setToken(userToken);
//       await getUserProfile(userToken); 
//       alert("Login successful");
//     } catch (err) {
//       alert("Login failed. Please check your credentials.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");

//     try {
//       const response = await axios.post(
//         "http://localhost:7410/api/user/login/register",
//         {
//           username: registerUsername,
//           email: registerEmail,
//           password: registerPassword,
//         }
//       );
//       console.log("Registration Success:", response.data);
//       alert("Registered successfully. Please log in.");
//       setShowLogin(true);
//     } catch (err) {
//       alert("Registration failed. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleLogout = async () => {
//     try {
//       await axios.post("http://localhost:7410/api/user/login/logout-user", {}, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       localStorage.removeItem("authToken");
//       setToken(null); 
//       setUserProfile(null);
//       alert("Logged out successfully");
//     } catch (err) {
//       console.error("Logout failed:", err);
//       alert("Logout failed. Please try again.");
//     }
//   };

//   const UserProfile = () => (
//     <div className="w-full max-w-md mx-auto md:max-w-lg lg:max-w-xl xl:max-w-2xl p-6 md:p-12 bg-white border border-gray-200 rounded-lg shadow-lg flex-1 slide-up">
//       <h2 className="text-lg md:text-2xl font-bold text-gray-800 mb-4">User Profile</h2>
//       <p className="text-gray-700"><strong>Username:</strong> {userProfile?.username}</p>
//       <p className="text-gray-700"><strong>Email:</strong> {userProfile?.email}</p>
//       <button 
//         className="font-bold text-xl px-5 py-3 rounded-xl bg-red-500 text-white mt-4"
//         onClick={handleLogout}
//       >
//         Logout
//       </button>
//     </div>
//   );

//   return (
//     <div className={`relative ${isPageLoaded ? "fade-in" : ""}`}>
//       <div className="relative w-full h-60 sm:h-80 md:h-[400px]">
//         <img
//           src={backgroundImage}
//           alt="About Us Background"
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 flex items-center justify-center">
//           <div className="text-center text-white px-4 py-6">
//             <h1 className="text-3xl md:text-4xl text-black mb-2" id="manufacture">
//               My Account
//             </h1>
//             <p className="text-sm md:text-base">
//               <a href="#" className="text-black hover:text-red-500">
//                 Home
//               </a>{" "}
//               <span className="text-black">/</span>
//               <span className="text-red-500">My Account</span>
//             </p>
//           </div>
//         </div>
//       </div>

//       <div className="flex flex-col md:flex-row gap-8 p-6 md:p-10 mt-10 items-center">
//         {userProfile ? (
//           <UserProfile />
//         ) : showLogin ? (
//           <div className="w-full max-w-md mx-auto md:max-w-lg lg:max-w-xl xl:max-w-2xl p-6 md:p-12 bg-white border border-gray-200 rounded-lg shadow-lg flex-1 slide-up">
//             <div className="flex items-center text-lg md:text-2xl gap-x-2 mb-6 underline">
//               <FaUser />
//               <h2 className="font-bold text-gray-800">Login</h2>
//             </div>
//             <form onSubmit={handleLogin}>
//               <div className="mb-4">
//                 <label className="block mb-2 text-sm md:text-base text-gray-600">
//                   Email Address <span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   className="w-full px-3 py-2 border-2 border-gray-400 md:py-3 leading-tight text-gray-700 rounded-full focus:outline-none focus:shadow-outline"
//                   id="username"
//                   type="text"
//                   value={loginEmail}
//                   onChange={(e) => setLoginEmail(e.target.value)}
//                   required
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block mb-2 text-sm md:text-base text-gray-600">
//                   Password <span className="text-red-500">*</span>
//                 </label>
//                 <div className="relative">
//                   <input
//                     className="w-full px-3 py-2 border-2 border-gray-400 md:py-3 leading-tight text-gray-700 rounded-full focus:outline-none focus:shadow-outline"
//                     id="password"
//                     type={passwordVisible ? "text" : "password"}
//                     value={loginPassword}
//                     onChange={(e) => setLoginPassword(e.target.value)}
//                     required
//                   />
//                   <button
//                     type="button"
//                     className="absolute inset-y-0 right-0 px-3 text-gray-700 focus:outline-none"
//                     onClick={togglePasswordVisibility}
//                   >
//                     <svg
//                       className="w-6 h-6"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="2"
//                         d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
//                       />
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="2"
//                         d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
//                       />
//                     </svg>
//                   </button>
//                 </div>
//               </div>

//               <button
//                 type="submit"
//                 className="w-full bg-blue-500 text-white py-2 rounded-full mt-4 hover:bg-blue-600 transition duration-300"
//               >
//                 Login
//               </button>
//               {error && <div className="text-red-500 mt-2">{error}</div>}
//             </form>
//           </div>
//         ) : (
//           <div className="w-full max-w-md mx-auto md:max-w-lg lg:max-w-xl xl:max-w-2xl p-6 md:p-12 bg-white border border-gray-200 rounded-lg shadow-lg flex-1 slide-up">
//             <div className="flex items-center text-lg md:text-2xl gap-x-2 mb-6 underline">
//               <FaUser />
//               <h2 className="font-bold text-gray-800">Create an Account</h2>
//             </div>
//             <form onSubmit={handleRegister}>
//               <div className="mb-4">
//                 <label className="block mb-2 text-sm md:text-base text-gray-600">
//                   Username <span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   className="w-full px-3 py-2 border-2 border-gray-400 md:py-3 leading-tight text-gray-700 rounded-full focus:outline-none focus:shadow-outline"
//                   type="text"
//                   value={registerUsername}
//                   onChange={(e) => setRegisterUsername(e.target.value)}
//                   required
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block mb-2 text-sm md:text-base text-gray-600">
//                   Email Address <span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   className="w-full px-3 py-2 border-2 border-gray-400 md:py-3 leading-tight text-gray-700 rounded-full focus:outline-none focus:shadow-outline"
//                   type="email"
//                   value={registerEmail}
//                   onChange={(e) => setRegisterEmail(e.target.value)}
//                   required
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block mb-2 text-sm md:text-base text-gray-600">
//                   Password <span className="text-red-500">*</span>
//                 </label>
//                 <div className="relative">
//                   <input
//                     className="w-full px-3 py-2 border-2 border-gray-400 md:py-3 leading-tight text-gray-700 rounded-full focus:outline-none focus:shadow-outline"
//                     type={registerPasswordVisible ? "text" : "password"}
//                     value={registerPassword}
//                     onChange={(e) => setRegisterPassword(e.target.value)}
//                     required
//                   />
//                   <button
//                     type="button"
//                     className="absolute inset-y-0 right-0 px-3 text-gray-700 focus:outline-none"
//                     onClick={toggleRegisterPasswordVisibility}
//                   >
//                     <svg
//                       className="w-6 h-6"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="2"
//                         d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
//                       />
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="2"
//                         d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
//                       />
//                     </svg>
//                   </button>
//                 </div>
//               </div>

//               <button
//                 type="submit"
//                 className="w-full bg-blue-500 text-white py-2 rounded-full mt-4 hover:bg-blue-600 transition duration-300"
//               >
//                 Create Account
//               </button>
//               <div className="mt-6 text-center">
//                   <p className="text-gray-600 text-sm md:text-base">
//                     Already have an account?{" "}
//                     <button
//                       className="text-red-500 hover:text-red-700"
//                       onClick={() => setShowLogin(true)}
//                     >
//                       Login here
//                     </button>
//                   </p>
//                 </div>
//             </form>
//           </div>
//         )}
//       </div>

//       <Footer2 />
//       <ScrollToTopButton />
//     </div>
//   );
// };

// export default Login;

//////////////////////////////////////////////////////////////////////////////

import React, { useState, useEffect } from "react";
import backgroundImage from "../assets/asset 50.jpeg";
import { FaUser } from "react-icons/fa";
import Footer2 from "../Components/Footer2";
import ScrollToTopButton from "../Components/TopButton";
import axios from "axios";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [registerPasswordVisible, setRegisterPasswordVisible] = useState(false);
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [userProfile, setUserProfile] = useState(null);
  const [token, setToken] = useState(null);
  const [showLogoutModal, setShowLogoutModal] = useState(false); // State to control logout modal

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPageLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleRegisterPasswordVisibility = () => {
    setRegisterPasswordVisible(!registerPasswordVisible);
  };

  const getUserProfile = async (userToken) => {
    try {
      const response = await axios.get("http://localhost:7410/api/user/login/get-user", {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });
      setUserProfile(response.data);
      console.log("User Profile Data:", response.data);
    } catch (err) {
      console.error("Failed to fetch user profile:", err);
      alert("Could not load user profile.");
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await axios.post(
        "http://localhost:7410/api/user/login/login-user",
        {
          email: loginEmail,
          password: loginPassword,
        }
      );
      console.log("Login Success:", response.data);
      const userToken = response.data.token;
      setToken(userToken);
      await getUserProfile(userToken); 
      alert("Login successful");
    } catch (err) {
      alert("Login failed. Please check your credentials.");
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await axios.post(
        "http://localhost:7410/api/user/login/register",
        {
          username: registerUsername,
          email: registerEmail,
          password: registerPassword,
        }
      );
      console.log("Registration Success:", response.data);
      alert("Registered successfully. Please log in.");
      setShowLogin(true);
    } catch (err) {
      alert("Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    setShowLogoutModal(true); // Show the logout confirmation modal
  };

  const confirmLogout = async () => {
    try {
      await axios.post("http://localhost:7410/api/user/login/logout-user", {}, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      localStorage.removeItem("authToken");
      setToken(null); 
      setUserProfile(null);
      alert("Logged out successfully");
      setShowLogoutModal(false); // Close the modal
    } catch (err) {
      console.error("Logout failed:", err);
      alert("Logout failed. Please try again.");
      setShowLogoutModal(false); // Close the modal
    }
  };

  const cancelLogout = () => {
    setShowLogoutModal(false); // Close the modal without doing anything
  };

  const UserProfile = () => (
    <div className="w-full max-w-md mx-auto md:max-w-lg lg:max-w-xl xl:max-w-2xl p-6 md:p-12 bg-white border border-gray-200 rounded-lg shadow-lg flex-1 slide-up">
      <h2 className="text-lg md:text-2xl font-bold text-gray-800 mb-4">User Profile</h2>
      <p className="text-gray-700"><strong>Username:</strong> {userProfile?.username}</p>
      <p className="text-gray-700"><strong>Email:</strong> {userProfile?.email}</p>
      <button 
        className="font-bold text-xl px-5 py-3 rounded-xl bg-red-500 text-white mt-4"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );

  // Modal for logout confirmation
  const ConfirmationModal = ({ onConfirm, onCancel }) => (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <p>Are you sure you want to log out?</p>
        <div className="mt-4">
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-blue-500 text-white rounded mr-2"
          >
            OK
          </button>
          <button
            onClick={onCancel}
            className="px-4 py-2 bg-gray-300 text-black rounded"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className={`relative ${isPageLoaded ? "fade-in" : ""}`}>
      <div className="relative w-full h-60 sm:h-80 md:h-[400px]">
        <img
          src={backgroundImage}
          alt="About Us Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4 py-6">
            <h1 className="text-3xl md:text-4xl text-black mb-2" id="manufacture">
              My Account
            </h1>
            <p className="text-sm md:text-base">
              <a href="#" className="text-black hover:text-red-500">
                Home
              </a>{" "}
              <span className="text-black">/</span>
              <span className="text-red-500">My Account</span>
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8 p-6 md:p-10 mt-10 items-center">
        {userProfile ? (
          <UserProfile />
        ) : showLogin ? (
          <div className="w-full max-w-md mx-auto md:max-w-lg lg:max-w-xl xl:max-w-2xl p-6 md:p-12 bg-white border border-gray-200 rounded-lg shadow-lg flex-1 slide-up">
            <div className="flex items-center text-lg md:text-2xl gap-x-2 mb-6 underline">
              <FaUser />
              <h2 className="font-bold text-gray-800">Login</h2>
            </div>
            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <label className="block mb-2 text-sm md:text-base text-gray-600">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  className="w-full px-3 py-2 border-2 border-gray-400 md:py-3 leading-tight text-gray-700 rounded-full focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-sm md:text-base text-gray-600">
                  Password <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    className="w-full px-3 py-2 border-2 border-gray-400 md:py-3 leading-tight text-gray-700 rounded-full focus:outline-none focus:shadow-outline"
                    id="password"
                    type={passwordVisible ? "text" : "password"}
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute top-2 right-2 text-gray-600"
                  >
                    <svg
                       className="w-6 h-6"
                       fill="none"
                       stroke="currentColor"
                       viewBox="0 0 24 24"
                       xmlns="http://www.w3.org/2000/svg"
                     >
                       <path
                         strokeLinecap="round"
                         strokeLinejoin="round"
                         strokeWidth="2"
                         d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                       />
                       <path
                         strokeLinecap="round"
                         strokeLinejoin="round"
                         strokeWidth="2"
                         d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                       />
                     </svg>
                  </button>
                </div>
              </div>
              <div className="flex justify-center mb-6 mt-4">
                <button
                  className="w-full py-3 px-4 bg-red-500 text-white rounded-lg hover:bg-red-400"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? "Loading..." : "Login"}
                </button>
              </div>
              <p className="text-center text-sm text-gray-600">
                Don't have an account?{" "}
                <span
                  className="text-red-500 cursor-pointer"
                  onClick={() => setShowLogin(false)}
                >
                  Register Here
                </span>
              </p>
            </form>
          </div>
        ) : (
          <div className="w-full max-w-md mx-auto md:max-w-lg lg:max-w-xl xl:max-w-2xl p-6 md:p-12 bg-white border border-gray-200 rounded-lg shadow-lg flex-1 slide-up">
            <div className="flex items-center text-lg md:text-2xl gap-x-2 mb-6 underline">
              <FaUser />
              <h2 className="font-bold text-gray-800">Register</h2>
            </div>
            <form onSubmit={handleRegister}>
              <div className="mb-4">
                <label className="block mb-2 text-sm md:text-base text-gray-600">
                  Username <span className="text-red-500">*</span>
                </label>
                <input
                  className="w-full px-3 py-2 border-2 border-gray-400 md:py-3 leading-tight text-gray-700 rounded-full focus:outline-none focus:shadow-outline"
                  type="text"
                  value={registerUsername}
                  onChange={(e) => setRegisterUsername(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-sm md:text-base text-gray-600">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  className="w-full px-3 py-2 border-2 border-gray-400 md:py-3 leading-tight text-gray-700 rounded-full focus:outline-none focus:shadow-outline"
                  type="email"
                  value={registerEmail}
                  onChange={(e) => setRegisterEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-sm md:text-base text-gray-600">
                  Password <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    className="w-full px-3 py-2 border-2 border-gray-400 md:py-3 leading-tight text-gray-700 rounded-full focus:outline-none focus:shadow-outline"
                    type={registerPasswordVisible ? "text" : "password"}
                    value={registerPassword}
                    onChange={(e) => setRegisterPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    onClick={toggleRegisterPasswordVisibility}
                    className="absolute top-2 right-2 text-gray-600"
                  >
                    <svg
                       className="w-6 h-6"
                       fill="none"
                       stroke="currentColor"
                       viewBox="0 0 24 24"
                       xmlns="http://www.w3.org/2000/svg"
                     >
                       <path
                         strokeLinecap="round"
                         strokeLinejoin="round"
                         strokeWidth="2"
                         d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                       />
                       <path
                         strokeLinecap="round"
                         strokeLinejoin="round"
                         strokeWidth="2"
                         d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                       />
                     </svg>
                  </button>
                </div>
              </div>
              <div className="flex justify-center mb-6 mt-4">
                <button
                  className="w-full py-3 px-4 bg-red-500 text-white rounded-lg hover:bg-red-400"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? "Loading..." : "Register"}
                </button>
              </div>
              <p className="text-center text-sm text-gray-600">
                Already have an account?{" "}
                <span
                  className="text-red-500 cursor-pointer"
                  onClick={() => setShowLogin(true)}
                >
                  Login Here
                </span>
              </p>
            </form>
          </div>
        )}
      </div>

      <ScrollToTopButton />

      <Footer2 />

      {/* Confirmation Modal */}
      {showLogoutModal && (
        <ConfirmationModal onConfirm={confirmLogout} onCancel={cancelLogout} />
      )}
    </div>
  );
};

export default Login;
