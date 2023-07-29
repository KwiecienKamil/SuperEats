import React, { useState } from "react";
import axios from "axios";

const SignIn = () => {
  const [emailReg, setEmailReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");

  const register = () => {
    if (emailReg.length > 0 && passwordReg.length > 0) {
      axios
        .post("http://localhost:5000/register", {
          email: emailReg,
          password: passwordReg,
        })
        .then((response) => {
          console.log(response);
        });
      setEmailReg("");
      setPasswordReg("");
      document.location.href = "/";
    } else {
      alert("Email/password can't be empty");
    }
  };

  return (
    <div>
      <div className="w-full bg-black h-[50px] flex items-center justify-start px-10 text-[22px] ">
        <h1 className="text-white font-semibold">
          Super <span className="text-green-500 font-bold">Eats</span>
        </h1>
      </div>
      <div className="h-screen w-full flex items-center justify-center">
        <div className="w-[400px] h-[500px]">
          <h1 className="text-center text-[25px]">Sign Up</h1>
          <div className="flex justify-center flex-col mt-4">
            <label htmlFor="email" className="mt-2 text-center">
              Email
            </label>
            <input
              type="email"
              onChange={(e) => {
                setEmailReg(e.target.value);
              }}
              value={emailReg}
              className="w-full mb-4 mt-1 pt-1 pb-1 rounded-full text-black text-center border-2 border-black"
            />
            <label htmlFor="password" className="text-center">
              Password
            </label>
            <input
              type="password"
              onChange={(e) => {
                setPasswordReg(e.target.value);
              }}
              value={passwordReg}
              className="mt-1 pt-1 pb-1 w-full rounded-full text-black text-center border-2 border-black"
            />
            <button
              onClick={register}
              className="mt-6 p-3 text-lg bg-black text-white rounded-full hover:bg-lightBlack duration-300 ease-in-out cursor-pointer"
            >
              Sign Up
            </button>
          </div>
          <div className="flex text-black justify-end mt-4 underline">
            <a href="/login">Log In</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
