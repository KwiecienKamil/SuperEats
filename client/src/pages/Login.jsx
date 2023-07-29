import React, { useContext, useState } from "react";
import axios from "axios";
import { Context } from "../context/Context";

const Login = () => {
  const [emailLog, setEmailLog] = useState("");
  const [passwordLog, setPasswordLog] = useState("");

  const { loggedIn, setLoggedIn } = useContext(Context);

  const login = (props) => {
    axios
      .post("http://localhost:5000/login", {
        email: emailLog,
        password: passwordLog,
      })
      .then((response) => {
        if (response.data.message) {
          alert("Wrong Email/password");
        } else {
          const savedEmail = JSON.stringify(emailLog);
          localStorage.setItem("email", savedEmail);

          const setLogin = localStorage.setItem("LoggedIn", "true");
          setEmailLog("");
          setPasswordLog("");
          document.location.href = "/";
        }
      });
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
          <h1 className="text-center text-[25px]">Log In</h1>
          <div className="flex justify-center flex-col mt-4">
            <label className="mt-2 text-center">Email</label>
            <input
              type="email"
              onChange={(e) => {
                setEmailLog(e.target.value);
              }}
              value={emailLog}
              className="w-full mb-4 mt-1 pt-1 pb-1 rounded-full text-black text-center border-2 border-black"
            />
            <label htmlFor="password" className="text-center">
              Password
            </label>
            <input
              type="password"
              onChange={(e) => {
                setPasswordLog(e.target.value);
              }}
              value={passwordLog}
              className="mt-1 pt-1 pb-1 w-full rounded-full text-black text-center border-2 border-black"
            />
            <button
              onClick={login}
              className="mt-6 p-3 text-lg bg-black text-white rounded-full hover:bg-lightBlack duration-300 ease-in-out cursor-pointer"
            >
              Log In
            </button>
          </div>
          <div className="flex text-black justify-end mt-4 underline">
            <a href="/signIn">Create account</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
