import React from "react";
import backImg from "../../../assets/images/appointment.png";
import Button from "../../../components/Button/Button";

const ContactUs = () => {
  return (
    <div
      className="mt-20 p-14"
      style={{
        background: `url(${backImg})`,
      }}
    >
      <div className="text-center pt-6">
        <h4 className="text-primary text-xl">Contact Us</h4>

        <h2 className="text-4xl text-gray-400 mt-3 mb-6 ">Stay connected with us</h2>
      </div>
      <div className="flex justify-center text-start">
        <div className="">
          <div>
            <input
              type="email"
              name=""
              id=""
              placeholder="Email"
              className="border mt-2 p-2 w-[250px] lg:w-[400px]"
            />{" "}
            <br />
            <input
              type="text"
              name=""
              id=""
              placeholder="Subject"
              className="border mt-2 p-2 w-[250px]  lg:w-[400px]"
            />
          </div>
          <textarea
            className="textarea mt-2 w-[250px] lg:w-[400px] rounded-sm textarea-bordered"
            placeholder="Bio"
          ></textarea>
        </div>
      </div>
      <div className="mt-4 flex justify-center">
        <Button>Submit</Button>
      </div>
    </div>
  );
};

export default ContactUs;
