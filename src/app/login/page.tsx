"use client";
import React from "react";
import Link from "next/link";

export default function page() {
  const handleLogin = () => {
    console.log("anajy");
  };

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
            <p className="text-4xl font-black">login.</p>
            <p className="my-2">
              To access our contents, please login by email address and password
            </p>
          </div>
          <div className="my-8 ">
            <form method="post" action="/" onSubmit={handleLogin}>
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
              />
              <div className="flex justify-between mt-2 mb-10 text-sm font-normal">
                <div>
                  <input type="checkbox" name="rememberMe" id="rememberMe" />
                  <label className="ml-2" htmlFor="rememberMe">
                    Remember me?
                  </label>
                </div>
                <div>
                  <a href="">Forget password?</a>
                </div>
              </div>
              <input
                type="submit"
                value="Login"
                className=" text-white py-2 text-center w-full my-4 shadow-lg rounded hover:cursor-pointer transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
              />
              <div className="flex w-full justify-center  ">
                <p className="text-sm">
                  Dont have account?{" "}
                  <Link href="/register" className="text-blue-500 font-bold">
                    Register
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
