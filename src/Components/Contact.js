import React from "react";
import { Styles } from "../Utils/Style";
import contact from "../Assets/contact-me.png";

function Contact() {
  return (
    <div>
      <div
        className="flex-row items-center pl-5 justify-center pt-3"
        id="Contact"
      >
        <span className={Styles.sectionHeadText}>Contact</span>
        <hr className="w-[35%]" />
      </div>
      <div className="mt-5">
        <div className="flex flex-wrap flex-row justified-around">
          <div className="lg:w-[40%] ">
            <form className="m-5 flex flex-col gap-3">
              <label className="flex flex-col gap-3">
                <span className="text-orange-800 font-medium mb-2">
                  Your Name
                </span>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className=" outline-orange-500 hover:outline-orange-300 bg-orange-200 py-4 px-6 placeholder:text-secondary text-orange-600 rounded-lg outline-none border-none font-medium shadow-2xl shadow-orange-800 hover:shadow-xl hover:shadow-orange-400"
                ></input>
              </label>

              <label className="flex flex-col gap-3">
                <span className="text-orange-800 font-medium mb-2">Email</span>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  className=" outline-orange-500 hover:outline-orange-300 bg-orange-200 py-4 px-6 placeholder:text-secondary text-orange-600 rounded-lg outline-none border-none font-medium shadow-2xl shadow-orange-800 hover:shadow-xl hover:shadow-orange-400"
                ></input>
              </label>

              <label className="flex flex-col gap-3">
                <span className="text-orange-800 font-medium mb-2">
                  Your Message
                </span>
                <textarea
                  rows={5}
                  name="text"
                  placeholder="Write your message here"
                  className=" outline-orange-500 hover:outline-orange-300 bg-orange-200 py-4 px-6 placeholder:text-secondary text-orange-600 rounded-lg outline-none border-none font-medium shadow-2xl shadow-orange-800 hover:shadow-xl hover:shadow-orange-400"
                ></textarea>
              </label>

              <button
                type="submit"
                className="shadow-xl border-orange-700 hover:shadow-xl hover:shadow-orange-400 shadow-orange-800 py-3 px-8 mb-4 m-4 rounded-xl w-fit text-black font-bold outline outline-2 outline-orange-700 hover:outline-orange-400"
              >
                Submit
              </button>
            </form>
          </div>
          <div className="lg:w-[40%]">
            <img src={contact} alt="any img" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
