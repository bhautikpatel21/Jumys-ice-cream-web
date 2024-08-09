import React from "react";
import { BiLogoBehance } from "react-icons/bi";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import { FaArrowRight, FaBeer, FaFacebook, FaInstagram, FaUser, FaYoutube } from 'react-icons/fa';

function HomeFooter() {
  return (
    <MDBFooter
      bgColor="black"
      className="text-lg-start text-muted h-[450px] "
    >
      <section className="pb-5 text-white ">

        <MDBContainer className="px-40 pt-14 ">

          <MDBRow className="flex items-center mx-2">

            <MDBCol className="py-7 mr-52">
              <h6 className="text-white font-serif text-xl fw-bold mb-4 ">
                <MDBIcon icon="gem" className="me-3" />
                Our Newsletter
              </h6>
              <p className="text-gray-500 text-lg ">
                Product announcements, promotions, and more!
              </p>
              <div className="border-b-2  text-white">
              <input type="email" id="email" name="email" placeholder="Your Email" className=" bg-black h-[40px] w-[90%] mt-5" />

             </div>
              <div className="bg-[#e10914] duration-300 hover:bg-gray-50 text-gray-50 hover:text-gray-950 flex justify-center items-center text-2xl text-center w-14  h-14 rounded-full mt-4">
                <FaArrowRight />
              </div>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2"  className="mx-auto mb-4 ">
              <h6 className="text-2xl py-5">Information</h6>
              <ul className="list-disc flex flex-col space-y-2 text-gray-400">
               <a href="#"><li className="hover:text-red-600">Help Center</li></a>
               <a href="#"><li className="hover:text-red-600">Shipping</li></a>
               <a href="#"><li className="hover:text-red-600">Returns</li></a>
               <a href="#"><li className="hover:text-red-600">Policies</li></a>
               <a href="#"><li className="hover:text-red-600">Gift Cards</li></a>
              </ul>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4 ">
              <h6 className="text-2xl py-5 ">Shop</h6>
              <ul className="list-disc flex flex-col space-y-2 text-gray-400">
               <a href="#"><li className="hover:text-red-600">All Flavors</li></a>  
               <a href="#"><li className="hover:text-red-600">Collections</li></a>   
               <a href="#"><li className="hover:text-red-600">Pint Club</li></a>  
               <a href="#"><li className="hover:text-red-600">Merch</li></a>    
               <a href="#"><li className="hover:text-red-600">Corporate Gifts</li></a>    
              </ul>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-2xl py-5">About Us</h6>
              <ul className="list-disc flex flex-col space-y-2 text-gray-400">
              <a href="#"> <li className="hover:text-red-600">Our story</li></a>         
              <a href="#"> <li className="hover:text-red-600">Contact</li> </a>
              <a href="#"> <li className="hover:text-red-600">Affiliate Program</li></a>  
              <a href="#"> <li className="hover:text-red-600">Referral Program</li></a>       
              <a href="#"> <li className="hover:text-red-600">Careers</li></a>       
              </ul>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
      <div className="border border-[#fbfafa] opacity-15"></div>
      <div className=" md:mt-0 flex justify-between h-[70px] items-end px-3">
        <div className="flex left-0 space-x-5 items-end ">
          <div className="">
            <p className=" text-base text-white pl-40">
              &copy; 2024 - Jumys. All Rights Reserved.
            </p>
          </div>
        </div>
        <div className="flex space-x-4 text-white text-2xl px-40">
          <a href="" className="cursor-pointer"><FaFacebook/></a>
          <a href="" className="cursor-pointer"><FaUser/></a>
          <a href="" className="cursor-pointer"><FaYoutube/></a>
          <a href="" className="cursor-pointer"><FaInstagram/></a>
          <a href="" className="cursor-pointer"><BiLogoBehance/></a>
        </div>
      </div>
    </MDBFooter>
  );
}

export default HomeFooter