import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillTwitterSquare } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { IoLogoYoutube } from "react-icons/io";

const Footer = () => {
  return (
    <>
    <footer className="text-center py-3">
        <div class="container Footercontent  justify-content-evenly py-3 footerterms">
        <div class="row">
                <div class="col-lg-3 col-md-6">
                    <h5 class="text-uppercase border-start border-5 border-success ps-3 mb-4">Desi Test</h5>
                    <p >Enjoy best test with special Deserts</p>
                    <p>123 floor 12 india </p>
                    <p >altafk6198gmail.com</p>
                    <p >+91 8888947628</p>
                </div>
                <div class="col-lg-3 col-md-6">
                    <h5 class="text-uppercase border-start border-5 border-success  mb-4">Quick Links</h5>
                    <div class="d-flex flex-column justify-content-start">
                        <a  >Home</a>
                        <a  >About Us</a>
                        <a  >Our Services</a>
                        <a  >Meet The Team</a>
                        <a  >Latest Blog</a>
                        <a >Contact Us</a>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <h5 class="text-uppercase border-start border-5 border-success ps-3 mb-4">Popular Links</h5>
                    <div class="d-flex flex-column justify-content-start">
                        <a  >Home</a>
                        <a  >About Us</a>
                        <a  >Our Services</a>
                        <a  >Meet The Team</a>
                        <a  >Latest Blog</a>
                        <a >Contact Us</a>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <h5 class="text-uppercase border-start border-5 border-success ps-3 mb-4">Newsletter</h5>
                    
                    <h6 class="text-uppercase mt-4 mb-3">Follow Us</h6>
                    <div class="d-flex justify-content-center icons">
                        <FaFacebookSquare className="icon" />
                        <AiFillLinkedin className="icon" />
                        <AiFillTwitterSquare className="icon" />
                        <IoLogoYoutube className="icon" />
                    </div> 
                </div>
                <div class="col-12 text-center ">
                    <a >Terms & Conditions</a>
                    <span class="mx-1">|</span>
                    <a>Privacy Policy</a>
                    <span class="mx-1">|</span>
                    <a>Customer Support</a>
                    <span class="mx-1">|</span>
                    <a>Payments</a>
                    <span class="mx-1">|</span>
                    <a>Help</a>
                    <span class="mx-1">|</span>
                    <a>FAQs</a>
                </div>
            </div>
        </div>
         <hr/>
         <p>@{new Date().getFullYear()} Designed and Developed by Altaf Ismail Khan</p>
        
      </footer>
    </>
  )
}

export default Footer