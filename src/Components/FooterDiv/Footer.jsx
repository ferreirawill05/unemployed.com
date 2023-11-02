import React from "react";
import insta from "../../assets/instagram (2).png"
import face from "../../assets/facebook (2).png"
import x from "../../assets/icons8-twitterx-50.png"

const Footer = () => {

  return(
    <div className="footer p-[5rem] mb-4 bg-blueColor rounded-[10px] gap-8 grid grid-cols-5 m-auto items-center justify-center">

      <div>
        <div className="logoDiv">
            <h1 className="logo text-[25px] pb-[1.5rem] text-white"><strong>Un</strong>Employed</h1>
        </div>
        <p className="text-white pb-[13px] opacity-70 leading-7">
          We always make out seekers and companies find the best jobs and employers find the best candidates.
        </p>
      </div>

      <div className="grid">
        <span className="divTittle text-[18px] font-semibold pb-[1.5rem] text-white">
          Company
        </span>
        <div className="grid gap-3">
          <li className="text-white opacity-[.7] hover:opacity-[1]">About Us</li>
          <li className="text-white opacity-[.7] hover:opacity-[1]">Features</li>
          <li className="text-white opacity-[.7] hover:opacity-[1]">News</li>
          <li className="text-white opacity-[.7] hover:opacity-[1]">FAQ</li>
        </div>
      </div>

      <div className="grid">
        <span className="divTittle text-[18px] font-semibold pb-[1.5rem] text-white">
          Resources
        </span>
        <div className="grid gap-3">

          <li className="text-white opacity-[.7] hover:opacity-[1]">Account</li>
          <li className="text-white opacity-[.7] hover:opacity-[1]">Support Center</li>
          <li className="text-white opacity-[.7] hover:opacity-[1]">Feedback</li>
          <li className="text-white opacity-[.7] hover:opacity-[1]">Contact Us</li>

        </div>
      </div>

      <div className="grid">
        <span className="divTittle text-[18px] font-semibold pb-[1.5rem] text-white">
          Support
        </span>
        <div className="grid gap-3">

          <li className="text-white opacity-[.7] hover:opacity-[1]">Events</li>
          <li className="text-white opacity-[.7] hover:opacity-[1]">Promo</li>
          <li className="text-white opacity-[.7] hover:opacity-[1]">Req Demo</li>
          <li className="text-white opacity-[.7] hover:opacity-[1]">Carrers</li>

        </div>
      </div>

      <div className="grid">
        <span className="divTittle text-[18px] font-semibold pb-[1.5rem] text-white">
          Contact Info
        </span>
        <div>
          <small className="text-[14px] text-white">
            will@email.com
          </small>
          <div className="icons flex gap-4 py-[1rem]">
            <img src={insta} alt="" className="bg-white p-[5px] w-[35px] h-[35px] rounded-full icon"/>
            <img src={face} alt="" className="bg-white p-[5px] h-[35px] w-[35px] rounded-full icon"/>
            <img src={x} alt="" className="bg-white p-[5px] h-[35px] w-[35px] rounded-full icon"/>
          </div>
        </div>
      </div>

    </div>
  ) 
}

export default Footer