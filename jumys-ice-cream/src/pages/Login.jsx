import React, { useState, useEffect } from "react";
import backgroundImage from "../assets/asset 50.jpeg";
import { FaUser } from "react-icons/fa";
import Footer2 from "../Components/Footer2";
import ScrollToTopButton from "../Components/TopButton";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

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
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [showChangePasswordForm, setShowChangePasswordForm] = useState(false);
  const [updatedUsername, setUpdatedUsername] = useState("");
  const [updatedEmail, setUpdatedEmail] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);


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
      const response = await axios.get(
        "http://localhost:7410/api/user/login/get-user",
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        }
      );
      setUserProfile(response.data);
      setUpdatedUsername(response.data.username);
      setUpdatedEmail(response.data.email);
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
      const userToken = response.data.token;
      setToken(userToken);
      await getUserProfile(userToken);
      alert("Login successful");
      console.log("Login Success:", response.data);
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
    setShowLogoutModal(true);
  };

  const confirmLogout = async () => {
    try {
      await axios.post(
        "http://localhost:7410/api/user/login/logout-user",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      localStorage.removeItem("authToken");
      setToken(null);
      setUserProfile(null);
      setShowLogoutModal(false);
    } catch (err) {
      console.error("Logout failed:", err);
      alert("Logout failed. Please try again.");
      setShowLogoutModal(false);
    }
  };

  const cancelLogout = () => {
    setShowLogoutModal(false);
  };

  const handleUpdateUser = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.put(
        "http://localhost:7410/api/user/login/update-user",
        {
          username: updatedUsername,
          email: updatedEmail,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      await getUserProfile(token);
      alert("Profile updated successfully!");
      console.log("Update Success:", response.data);
      setShowEditForm(false);
    } catch (err) {
      alert("Failed to update profile. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.put(
        `http://localhost:7410/api/user/login/update-password?userId=${userProfile._id}`,
        {
          oldPassword,
          newPassword,
          confirmPassword,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert("Password updated successfully!");
      setShowChangePasswordForm(false);
    } catch (err) {
      alert(
        err.response?.data?.message ||
          "Failed to update password. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const UserProfile = () => (
    <div className="w-full max-w-md mx-auto p-6 bg-white border rounded-lg shadow-lg">
      <h2 className="text-lg font-bold mb-4">User Profile</h2>
      <p>
        <strong>Username:</strong> {userProfile?.username}
      </p>
      <p>
        <strong>Email:</strong> {userProfile?.email}
      </p>

      <button
        className="bg-blue-500 text-white px-4 py-2 mt-4 rounded mr-3"
        onClick={() => setShowEditForm(true)}
      >
        Edit
      </button>
      <button
        className="bg-red-500 text-white px-4 py-2 mt-4 rounded mr-3"
        onClick={handleLogout}
      >
        Logout
      </button>
      <button
        className="bg-green-500 text-white px-4 py-2 mt-4 rounded"
        onClick={() => setShowChangePasswordForm(true)}
      >
        Change Password
      </button>
    </div>
  );

  const ConfirmationModal = ({ onConfirm, onCancel }) => (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-50 z-50">
      <div className="bg-white p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 rounded-lg shadow-lg max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl w-full">
        <p className="text-center text-lg sm:text-xl md:text-2xl font-semibold mb-4">
          Are you sure you want to log out?
        </p>
        <div className="mt-4 flex justify-center gap-3 sm:gap-4">
          <button
            onClick={onConfirm}
            className="px-4 py-2 sm:px-6 sm:py-3 bg-blue-500 text-white rounded-full text-sm sm:text-base md:text-lg"
          >
            Yes
          </button>
          <button
            onClick={onCancel}
            className="px-4 py-2 sm:px-6 sm:py-3 bg-gray-300 text-black rounded-full text-sm sm:text-base md:text-lg"
          >
            No
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
            <h1
              className="text-3xl md:text-4xl text-black mb-2"
              id="manufacture"
            >
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
      <div className="flex flex-col items-center gap-8 p-6 mt-10">
        {userProfile ? (
          showEditForm ? (
            <div className="w-full max-w-md mx-auto p-6 bg-white border rounded-lg shadow-lg">
              <h2 className="text-lg font-bold mb-4">Update Profile</h2>
              <form onSubmit={handleUpdateUser}>
                <input
                  className="w-full mb-4 p-2 border rounded"
                  type="text"
                  value={updatedUsername}
                  onChange={(e) => setUpdatedUsername(e.target.value)}
                  required
                  placeholder="Username"
                />
                <input
                  className="w-full mb-4 p-2 border rounded"
                  type="email"
                  value={updatedEmail}
                  onChange={(e) => setUpdatedEmail(e.target.value)}
                  required
                  placeholder="Email"
                />
                <button
                  className="w-full bg-blue-500 text-white py-2 rounded"
                  type="submit"
                >
                  {loading ? "Updating..." : "Update Profile"}
                </button>
              </form>
            </div>
          ) : showChangePasswordForm ? (
            <div className="w-full max-w-md mx-auto p-6 bg-white border rounded-lg shadow-lg">
      <h2 className="text-lg font-bold mb-4">Change Password</h2>
      <form onSubmit={handleChangePassword}>
        <div className="relative mb-4">
          <input
            className="w-full p-2 border rounded"
            type={showOldPassword ? "text" : "password"}
            placeholder="Current Password"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            required
          />
          <button
            type="button"
            className="absolute right-2 top-2 text-gray-600"
            onClick={() => setShowOldPassword(!showOldPassword)}
          >
            <FontAwesomeIcon icon={showOldPassword ? faEyeSlash : faEye} />
          </button>
        </div>

        <div className="relative mb-4">
          <input
            className="w-full p-2 border rounded"
            type={showNewPassword ? "text" : "password"}
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
          <button
            type="button"
            className="absolute right-2 top-2 text-gray-600"
            onClick={() => setShowNewPassword(!showNewPassword)}
          >
            <FontAwesomeIcon icon={showNewPassword ? faEyeSlash : faEye} />
          </button>
        </div>

        <div className="relative mb-4">
          <input
            className="w-full p-2 border rounded"
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <button
            type="button"
            className="absolute right-2 top-2 text-gray-600"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            <FontAwesomeIcon icon={showConfirmPassword ? faEyeSlash : faEye} />
          </button>
        </div>

        <button
          className="w-full bg-green-500 text-white py-2 rounded"
          type="submit"
        >
          {loading ? "Changing Password..." : "Change Password"}
        </button>
      </form>
    </div>
          ) : (
            <UserProfile />
          )
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
                  className="w-full py-3 px-4 bg-red-500 text-white rounded-xl hover:bg-red-400"
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
                  className="w-full py-3 px-4 bg-red-500 text-white rounded-xl hover:bg-red-400"
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

      <Footer2 />
      <ScrollToTopButton />

      {showLogoutModal && (
        <ConfirmationModal onConfirm={confirmLogout} onCancel={cancelLogout} />
      )}
    </div>
  );
};

export default Login;
