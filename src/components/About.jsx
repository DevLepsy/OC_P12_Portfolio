import React from "react";
import aboutImg from "../assets/portrait_2.jpg";
import { ABOUT_TEXT } from "../constants";

const About = () => {
  return (
    <div className="border-b boder-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">
        A propos
        <span className="text-neutral-500"> de moi</span>
      </h2>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flzx items-center justify-center">
            <img className="rounded-2xl" src={aboutImg} alt="portrait" />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-x-xl py-80">{ABOUT_TEXT}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
