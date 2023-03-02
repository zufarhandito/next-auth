"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function page() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const validate = (e: any) => {};

  useEffect(() => {
    if (password && confirmPassword === "") {
      setMessage("");
    }
    if (password === "" || confirmPassword === "") {
      setMessage("");
    }
    if (confirmPassword.length > 8) {
      if (password !== confirmPassword) {
        setMessage("password tidak sama");
      } else {
        setMessage("sukses");
      }
    }
  });

  const handleRegister = () => {};

  return (
    <div className="md:flex md:flex-col lg:flex lg:flex-row h-screen">
      <div className="lg:w-2/3 bg-red-400 h-10">
        <img
          className="object-cover lg:h-screen w-full h-full"
          src="images/login.jpg"
          alt=""
        />
      </div>
      <div className="lg:w-1/3 lg:p-20 p-14 h-screen flex justify-center">
        <div className="h-fit my-auto">
          <div className=" text-center">
            <p className="text-4xl font-black">Register.</p>
            <p className="my-2">
              Hello! Please register yourself by email address and password
            </p>
          </div>
          <div className="my-8 ">
            {message}
            <form method="post" onSubmit={handleRegister}>
              <input
                id="Email"
                className="p-3 w-full bg-slate-100 rounded my-2"
                type="email"
                placeholder="Email"
              />
              <input
                id="Password"
                className="p-3 w-full bg-slate-100 rounded my-2"
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                id="confPassword"
                className="p-3 w-full bg-slate-100 rounded my-2"
                type="password"
                placeholder="Confirm Password"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <div className="flex justify-between mt-2 mb-10 text-sm font-normal">
                <div>
                  <input type="checkbox" name="rememberMe" id="rememberMe" />
                  <label className="ml-2" htmlFor="rememberMe">
                    Remember me?
                  </label>
                </div>
              </div>
              <input
                type="submit"
                value="Create account"
                className=" text-white py-2 text-center w-full my-4 shadow-lg rounded hover:cursor-pointer transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
              />
              <div className="flex w-full justify-center  ">
                <p className="text-sm">
                  Already have an account?{" "}
                  <Link href="/login" className="text-blue-500 font-bold">
                    Login
                  </Link>{" "}
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
