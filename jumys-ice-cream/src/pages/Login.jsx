// import React, { useState, useEffect } from 'react';
// import backgroundImage from "../assets/asset 50.jpeg";
// import { FaUser } from 'react-icons/fa';
// import Footer2 from '../Components/Footer2';
// import ScrollToTopButton from '../Components/TopButton';
// import axios from 'axios'

// const Login = () => {
//   const [passwordVisible, setPasswordVisible] = useState(false);
//   const [isPageLoaded, setIsPageLoaded] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsPageLoaded(true);
//     }, 100); 

//     return () => clearTimeout(timer);
//   }, []);

//   const togglePasswordVisibility = () => {
//     setPasswordVisible(!passwordVisible);
//   };

//   return (
//     <div className={`relative ${isPageLoaded ? 'fade-in' : ''}`}>
//       <div className="relative w-full h-60 sm:h-80 md:h-[400px]">
//         <img
//           src={backgroundImage}
//           alt="About Us Background"
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 flex items-center justify-center">
//           <div className="text-center text-white px-4 py-6">
//             <h1 className="text-3xl md:text-4xl text-black mb-2 " id="manufacture">My Account</h1>
//             <p className="text-sm md:text-base">
//               <a href="#" className="text-black hover:text-red-500">Home</a>{" "}
//               <span className="text-black">/</span>
//               <span className="text-red-500">My Account</span>
//             </p>
//           </div>
//         </div>
//       </div>

//       <div className="flex flex-col md:flex-row gap-8 p-6 md:p-10 mt-10">
//         {/* Login */}
//         <div className={`p-6 md:p-12 bg-white border border-gray-200 rounded-lg shadow-lg flex-1 slide-up`}>
//           <div className="flex items-center text-lg md:text-2xl gap-x-2 mb-6 underline">
//             <FaUser />
//             <h2 className="font-bold text-gray-800">Login</h2>
//           </div>
//           <form>
//             <div className="mb-4">
//               <label className="block mb-2 text-sm md:text-base text-gray-600">
//               Email Address <span className="text-red-500">*</span>
//               </label>
//               <input
//                 className="w-full px-3 py-2 border-2 border-gray-400 md:py-3 leading-tight text-gray-700 rounded-full focus:outline-none focus:shadow-outline"
//                 id="username"
//                 type="text"
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block mb-2 text-sm md:text-base text-gray-600">
//                 Password <span className="text-red-500">*</span>
//               </label>
//               <div className="relative">
//                 <input
//                   className="w-full px-3 py-2 border-2 border-gray-400 md:py-3 leading-tight text-gray-700 rounded-full focus:outline-none focus:shadow-outline"
//                   id="password"
//                   type={passwordVisible ? "text" : "password"}
//                   required
//                 />
//                 <button
//                   type="button"
//                   className="absolute inset-y-0 right-0 px-3 text-gray-700 focus:outline-none"
//                   onClick={togglePasswordVisibility}
//                 >
//                   <svg
//                     className="w-6 h-6"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
//                     />
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-.172.527-.376 1.032-.606 1.5M15 12a3 3 0 01-6 0"
//                     />
//                   </svg>
//                 </button>
//               </div>
//             </div>
//             <div className="flex items-center justify-between mb-6">
//               <div className="flex items-center">
//                 <input
//                   className="mr-2 leading-tight"
//                   type="checkbox"
//                   id="rememberMe"
//                 />
//                 <label className="text-sm text-gray-700" htmlFor="rememberMe">
//                   Remember Me
//                 </label>
//               </div>
//               <a
//                 className="text-sm font-bold text-blue-500 hover:text-blue-800"
//                 href="#"
//               >
//                 Lost Your Password?
//               </a>
//             </div>
//             <button
//               className="w-full px-4 py-2 font-bold text-white bg-black rounded-full hover:bg-red-500 transition duration-300 focus:outline-none focus:shadow-outline"
//               type="submit"
//             >
//               LOGIN
//             </button>
//           </form>
//         </div>

//         {/* Register */}
//         <div className={`p-6 md:p-12 bg-white border border-gray-200 rounded-lg shadow-lg flex-1 slide-up`}>
//           <div className="flex items-center text-lg md:text-2xl gap-x-2 mb-6 underline">
//             <FaUser />
//             <h2 className="font-bold text-gray-800">Register</h2>
//           </div>
//           <form>
//             <div className="mb-4">
//             <label className="block mb-2 text-sm md:text-base text-gray-600">
//                 User name <span className="text-red-500">*</span>
//               </label>
//               <input
//                 className="w-full px-3 py-2 border-2 border-gray-400  md:py-3 leading-tight text-gray-700 rounded-full focus:outline-none focus:shadow-outline"
//                 id="name"
//                 type="name"
//                 required
//               />
//               <label className="block mb-2 text-sm md:text-base text-gray-600">
//                 Email Address <span className="text-red-500">*</span>
//               </label>
//               <input
//                 className="w-full px-3 py-2 border-2 border-gray-400  md:py-3 leading-tight text-gray-700 rounded-full focus:outline-none focus:shadow-outline"
//                 id="email"
//                 type="email"
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block mb-2  text-sm md:text-base text-gray-600">
//                 Password <span className="text-red-500">*</span>
//               </label>
//               <div className="relative">
//                 <input
//                   className="w-full px-3 py-2 border-2 border-gray-400 md:py-3 leading-tight text-gray-700 rounded-full focus:outline-none focus:shadow-outline"
//                   id="registerPassword"
//                   type={passwordVisible ? "text" : "password"}
//                   required
//                 />
//                 <button
//                   type="button"
//                   className="absolute inset-y-0 right-0 px-3 text-gray-700 focus:outline-none"
//                   onClick={togglePasswordVisibility}
//                 >
//                   <svg
//                     className="w-6 h-6"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
//                     />
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-.172.527-.376 1.032-.606 1.5M15 12a3 3 0 01-6 0"
//                     />
//                   </svg>
//                 </button>
//               </div>
//             </div>
//             <button
//               className="w-full px-4 py-2 mt-6 font-bold text-white bg-gray-400 rounded-full hover:bg-red-500 transition duration-300 focus:outline-none focus:shadow-outline"
//               type="submit"
//             >
//               REGISTER
//             </button>
//           </form>
//         </div>
//       </div>

//       {/* Footer */}
//       <Footer2 />
//       <ScrollToTopButton/>
//     </div>
//   );
// }

// export default Login;

// //////////////////////////////////////////////////////////////////////


import React, { useState, useEffect } from 'react';
import backgroundImage from "../assets/asset 50.jpeg";
import { FaUser } from 'react-icons/fa';
import Footer2 from '../Components/Footer2';
import ScrollToTopButton from '../Components/TopButton';
import axios from 'axios';

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [registerUsername, setRegisterUsername] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPageLoaded(true);
    }, 100); 

    return () => clearTimeout(timer);
  }, []);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await axios.post('http://localhost:7410/api/user/login/login-user', {
        email: loginEmail,
        password: loginPassword,
      });
      console.log('Login Success:', response.data);
      alert('Login successfully');
      // Handle successful login, e.g., redirect or store token
    } catch (err) {
      alert('Login failed. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await axios.post('http://localhost:7410/api/user/login/register', {
        username: registerUsername,
        email: registerEmail,
        password: registerPassword,
      });
      console.log('Registration Success:', response.data);
      alert('Register successfully..... please do login')
      // Handle successful registration, e.g., redirect or show success message
    } catch (err) {
      alert('Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`relative ${isPageLoaded ? 'fade-in' : ''}`}>
      <div className="relative w-full h-60 sm:h-80 md:h-[400px]">
        <img
          src={backgroundImage}
          alt="About Us Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4 py-6">
            <h1 className="text-3xl md:text-4xl text-black mb-2 " id="manufacture">My Account</h1>
            <p className="text-sm md:text-base">
              <a href="#" className="text-black hover:text-red-500">Home</a>{" "}
              <span className="text-black">/</span>
              <span className="text-red-500">My Account</span>
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8 p-6 md:p-10 mt-10">
        {/* Login */}
        <div className={`p-6 md:p-12 bg-white border border-gray-200 rounded-lg shadow-lg flex-1 slide-up`}>
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
                  className="absolute inset-y-0 right-0 px-3 text-gray-700 focus:outline-none"
                  onClick={togglePasswordVisibility}
                >
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <input
                  className="mr-2 leading-tight"
                  type="checkbox"
                  id="rememberMe"
                />
                <label className="text-sm text-gray-700" htmlFor="rememberMe">
                  Remember Me
                </label>
              </div>
              <a
                className="text-sm font-bold text-blue-500 hover:text-blue-800"
                href="#"
              >
                Lost Your Password?
              </a>
            </div>
            {error && <div className="text-red-500">{error}</div>}
            <button
              className={`w-full px-4 py-2 font-bold text-white bg-black rounded-full hover:bg-red-500 transition duration-300 focus:outline-none focus:shadow-outline ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
              type="submit"
              disabled={loading}
            >
              {loading ? 'Loading...' : 'LOGIN'}
            </button>
          </form>
        </div>

        {/* Register */}
        <div className={`p-6 md:p-12 bg-white border border-gray-200 rounded-lg shadow-lg flex-1 slide-up`}>
          <div className="flex items-center text-lg md:text-2xl gap-x-2 mb-6 underline">
            <FaUser />
            <h2 className="font-bold text-gray-800">Register</h2>
          </div>
          <form onSubmit={handleRegister}>
            <div className="mb-4">
              <label className="block mb-2 text-sm md:text-base text-gray-600">
                User name <span className="text-red-500">*</span>
              </label>
              <input
                className="w-full px-3 py-2 border-2 border-gray-400  md:py-3 leading-tight text-gray-700 rounded-full focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                value={registerUsername}
                onChange={(e) => setRegisterUsername(e.target.value)}
                required
              />
              <label className="block mb-2 text-sm md:text-base text-gray-600">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                className="w-full px-3 py-2 border-2 border-gray-400  md:py-3 leading-tight text-gray-700 rounded-full focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                value={registerEmail}
                onChange={(e) => setRegisterEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2  text-sm md:text-base text-gray-600">
                Password <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  className="w-full px-3 py-2 border-2 border-gray-400 md:py-3 leading-tight text-gray-700 rounded-full focus:outline-none focus:shadow-outline"
                  id="registerPassword"
                  type={passwordVisible ? "text" : "password"}
                  value={registerPassword}
                  onChange={(e) => setRegisterPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 px-3 text-gray-700 focus:outline-none"
                  onClick={togglePasswordVisibility}
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
                       d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-.172.527-.376 1.032-.606 1.5M15 12a3 3 0 01-6 0"
                     />
                   </svg>
                </button>
              </div>
            </div>
            <button
              className={`w-full px-4 py-2 mt-6 font-bold text-white bg-gray-400 rounded-full hover:bg-red-500 transition duration-300 focus:outline-none focus:shadow-outline ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
              type="submit"
              disabled={loading}
            >
              {loading ? 'Loading...' : 'REGISTER'}
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <Footer2 />
      <ScrollToTopButton />
    </div>
  );
}

export default Login;