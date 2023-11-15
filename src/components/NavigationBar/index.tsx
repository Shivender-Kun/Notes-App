import React from "react";
import { NavLink } from "react-router-dom";
import NavigationOption from "../NavigationOption";

const options = [
  { name: "Signup", image: "", base: "", url: "" },
  { name: "Signin", image: "", base: "", url: "" },
];

const NavigationBar = () => {
  return (
    <nav className="flex flex-row justify-evenly w-1/4 gap-4 max-w-xs">
      {options.map((option, index) => (
        <NavigationOption key={index} {...option} />
      ))}
    </nav>
  );
};

export default NavigationBar;
