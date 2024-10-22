import React, { useState } from "react";
import { BiLogoBehance } from "react-icons/bi";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import { FaArrowRight, FaFacebook, FaInstagram, FaUser, FaYoutube } from 'react-icons/fa';

function HomeFooter() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailPattern.test(email)) {
      setMessage('Thank You for subscribing!');
      setEmail('');
    } else {
      setMessage('Please enter a valid email address.');
    }
  };

  return (
    <MDBFooter bgColor="black" className="text-lg-start text-muted">
      <section className="pb-5 text-white">
        <MDBContainer className="px-4 sm:px-6 lg:px-8 pt-14">
          <MDBRow className="flex flex-col md:flex-row justify-around">
            <MDBCol md="6" lg="3" className="py-7 mb-4">
              <h6 className="text-white font-serif text-xl md:text-2xl lg:text-3xl fw-bold mb-4">
                <MDBIcon icon="gem" className="me-2" />
                Our Newsletter
              </h6>
              <p className="text-gray-500 text-base md:text-lg mb-4">
                Product announcements, promotions, and more!
              </p>
              <div className="border-b-2 mb-4">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  className="bg-black text-white placeholder-gray-400 h-10 w-full md:w-3/4 px-3 focus:outline-none"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="bg-[#e10914] hover:bg-gray-700 text-white flex justify-center items-center text-xl w-12 h-12 rounded-full cursor-pointer transition duration-300" onClick={handleSubscribe}>
                <FaArrowRight />
              </div>
              {message && <p className="mt-4 text-green-400">{message}</p>}
            </MDBCol>

            <MDBCol md="3" lg="2" className="mb-4">
              <h6 className="text-xl md:text-2xl lg:text-3xl py-5">Information</h6>
              <ul className="list-disc space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-red-600">Help Center</a></li>
                <li><a href="#" className="hover:text-red-600">Shipping</a></li>
                <li><a href="#" className="hover:text-red-600">Returns</a></li>
                <li><a href="#" className="hover:text-red-600">Policies</a></li>
                <li><a href="#" className="hover:text-red-600">Gift Cards</a></li>
              </ul>
            </MDBCol>

            <MDBCol md="3" lg="2" className="mb-4">
              <h6 className="text-xl md:text-2xl lg:text-3xl py-5">Shop</h6>
              <ul className="list-disc space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-red-600">All Flavors</a></li>
                <li><a href="#" className="hover:text-red-600">Collections</a></li>
                <li><a href="#" className="hover:text-red-600">Pint Club</a></li>
                <li><a href="#" className="hover:text-red-600">Merch</a></li>
                <li><a href="#" className="hover:text-red-600">Corporate Gifts</a></li>
              </ul>
            </MDBCol>

            <MDBCol md="6" lg="3">
              <h6 className="text-xl md:text-2xl lg:text-3xl py-5">About Us</h6>
              <ul className="list-disc space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-red-600">Our Story</a></li>
                <li><a href="#" className="hover:text-red-600">Contact</a></li>
                <li><a href="#" className="hover:text-red-600">Affiliate Program</a></li>
                <li><a href="#" className="hover:text-red-600">Referral Program</a></li>
                <li><a href="#" className="hover:text-red-600">Careers</a></li>
              </ul>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
      <div className="border border-[#fbfafa] opacity-15"></div>
      <div className="flex flex-col md:flex-row justify-between items-center px-4 sm:px-6 lg:px-8 py-4">
        <div className="text-base text-white mb-4 md:mb-0">
          &copy; 2024 - Jumys. All Rights Reserved.
        </div>
        <div className="flex space-x-4 text-white text-2xl">
          <a href="#" className="hover:text-red-600"><FaFacebook /></a>
          <a href="#" className="hover:text-red-600"><FaUser /></a>
          <a href="#" className="hover:text-red-600"><FaYoutube /></a>
          <a href="#" className="hover:text-red-600"><FaInstagram /></a>
          <a href="#" className="hover:text-red-600"><BiLogoBehance /></a>
        </div>
      </div>
    </MDBFooter>
  );
}

export default HomeFooter;
