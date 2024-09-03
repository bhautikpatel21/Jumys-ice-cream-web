// import React from "react";
// import { BiLogoBehance } from "react-icons/bi";
// import {
//   MDBFooter,
//   MDBContainer,
//   MDBRow,
//   MDBCol,
//   MDBIcon,
// } from "mdb-react-ui-kit";
// import { FaArrowRight, FaBeer, FaFacebook, FaInstagram, FaUser, FaYoutube } from 'react-icons/fa';

// function HomeFooter() {
//   return (
//     <MDBFooter
//       bgColor="black"
//       className="text-lg-start text-muted h-[450px] "
//     >
//       <section className="pb-5 text-white ">

//         <MDBContainer className="px-40 pt-14 ">

//           <MDBRow className="flex items-center mx-2">

//             <MDBCol className="py-7 mr-52">
//               <h6 className="text-white font-serif text-xl fw-bold mb-4 ">
//                 <MDBIcon icon="gem" className="me-3" />
//                 Our Newsletter
//               </h6>
//               <p className="text-gray-500 text-lg ">
//                 Product announcements, promotions, and more!
//               </p>
//               <div className="border-b-2  text-white">
//               <input type="email" id="email" name="email" placeholder="Your Email" className=" bg-black h-[40px] w-[90%] mt-5" />

//              </div>
//               <div className="bg-[#e10914] duration-300 hover:bg-gray-50 text-gray-50 hover:text-gray-950 flex justify-center items-center text-2xl text-center w-14  h-14 rounded-full mt-4">
//                 <FaArrowRight />
//               </div>
//             </MDBCol>

//             <MDBCol md="2" lg="2" xl="2"  className="mx-auto mb-4 ">
//               <h6 className="text-2xl py-5">Information</h6>
//               <ul className="list-disc flex flex-col space-y-2 text-gray-400">
//                <a href="#"><li className="hover:text-red-600">Help Center</li></a>
//                <a href="#"><li className="hover:text-red-600">Shipping</li></a>
//                <a href="#"><li className="hover:text-red-600">Returns</li></a>
//                <a href="#"><li className="hover:text-red-600">Policies</li></a>
//                <a href="#"><li className="hover:text-red-600">Gift Cards</li></a>
//               </ul>
//             </MDBCol>

//             <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4 ">
//               <h6 className="text-2xl py-5 ">Shop</h6>
//               <ul className="list-disc flex flex-col space-y-2 text-gray-400">
//                <a href="#"><li className="hover:text-red-600">All Flavors</li></a>  
//                <a href="#"><li className="hover:text-red-600">Collections</li></a>   
//                <a href="#"><li className="hover:text-red-600">Pint Club</li></a>  
//                <a href="#"><li className="hover:text-red-600">Merch</li></a>    
//                <a href="#"><li className="hover:text-red-600">Corporate Gifts</li></a>    
//               </ul>
//             </MDBCol>

//             <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
//               <h6 className="text-2xl py-5">About Us</h6>
//               <ul className="list-disc flex flex-col space-y-2 text-gray-400">
//               <a href="#"> <li className="hover:text-red-600">Our story</li></a>         
//               <a href="#"> <li className="hover:text-red-600">Contact</li> </a>
//               <a href="#"> <li className="hover:text-red-600">Affiliate Program</li></a>  
//               <a href="#"> <li className="hover:text-red-600">Referral Program</li></a>       
//               <a href="#"> <li className="hover:text-red-600">Careers</li></a>       
//               </ul>
//             </MDBCol>
//           </MDBRow>
//         </MDBContainer>
//       </section>
//       <div className="border border-[#fbfafa] opacity-15"></div>
//       <div className=" md:mt-0 flex justify-between h-[70px] items-end px-3">
//         <div className="flex left-0 space-x-5 items-end ">
//           <div className="">
//             <p className=" text-base text-white pl-40">
//               &copy; 2024 - Jumys. All Rights Reserved.
//             </p>
//           </div>
//         </div>
//         <div className="flex space-x-4 text-white text-2xl px-40">
//           <a href="" className="cursor-pointer"><FaFacebook/></a>
//           <a href="" className="cursor-pointer"><FaUser/></a>
//           <a href="" className="cursor-pointer"><FaYoutube/></a>
//           <a href="" className="cursor-pointer"><FaInstagram/></a>
//           <a href="" className="cursor-pointer"><BiLogoBehance/></a>
//         </div>
//       </div>
//     </MDBFooter>
//   );
// }

// export default HomeFooter

import React from "react";
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
  return (
    <MDBFooter bgColor="black" className="text-lg-start text-muted">
      <section className="pb-5 text-white">
        <MDBContainer className="px-4 sm:px-6 lg:px-8 pt-14">
          <MDBRow className="flex flex-col md:flex-row justify-around">
            <MDBCol md="6" lg="3" className="py-7 mb-4 ">
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
                />
              </div>
              <div className="bg-[#e10914] hover:bg-gray-700 text-white flex justify-center items-center text-xl w-12 h-12 rounded-full cursor-pointer transition duration-300">
                <FaArrowRight />
              </div>
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
                <li><a href="#" className="hover:text-red-600
                                ">Our Story</a></li>
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
