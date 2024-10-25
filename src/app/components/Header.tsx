"use client";
import logo from "../assets/Logo.png";
import Image from "next/image";
import { navLinks } from "../index";
import { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [toggle, setToggle] = useState(null);
  const [onClick, setOnClick] = useState(false);
  const [onClick2, setOnClick2] = useState(false);
  const handleToggle = (id) => {
    setToggle(id);
    console.log("clicked", id);
  };

  const handleOnClick = () => {
    setOnClick((prev) => !prev);
  };

  const handleOnClick2 = () => {
    setOnClick2((prev) => !prev);
  };
  return (
    <div>
      <div className="flex max-w-[1110px] m-auto justify-between my-5">
        <div>
          <Image src={logo} alt="Logo" width={170} height={38} />
        </div>
        <div className="">
          <ul className="bg-[#FFFFFF] rounded-xl flex w-full max-w-[500px] h-[55px] items-center px-6">
            {navLinks.map((link) => (
              <Link href={link.route}>
                <li
                  key={link.id}
                  className={`text-[#8987A1] px-3 cursor-pointer ${
                    toggle === link.id ? "text-black" : ""
                  }`}
                  onClick={() => handleToggle(link.id)}
                >
                  {link.title}
                </li>
              </Link>
            ))}
          </ul>
        </div>
        <div className="flex text-[#8987A1]">
          <button
            className={`w-[122px] h-[48px] rounded-xl ${
              onClick ? "bg-blue-600 text-white" : ""
            } `}
            onClick={handleOnClick}
          >
            <Link href="signIn">
            Sign In
            </Link>
          </button>
          <button
            className={`w-[122px] h-[48px] rounded-xl ${
              onClick2 ? "bg-blue-600 text-white" : ""
            } `}
            onClick={handleOnClick2}
          >
            <Link href="/singUp">
            Sign Up
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
