"use client";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const LoginForm = () => {
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/editor");
    alert("You Are Logged In.");
  };

  return (
    <div className="flex justify-center items-center w-full min-h-screen ">
      <div className="xl:max-w-7xl drop-shadow-l w-full flex justify-between items-stretch">
        <div className="sm:w-[60%] lg:w-[50%] bg-cover bg-center items-center justify-center hidden md:flex">
          <Image
            width="0"
            height="0"
            sizes="100vw"
            className="w-full h-auto"
            src="https://ryansechrest.com/content/images/size/w2000/2022/08/how-to-set-an-animated-background-in-microsoft-teams-without-third-party-software.jpg"
            alt="login"
            priority
          />
        </div>
        <div className="mx-auto my-auto w-full lg:w-1/2 md:p-10 py-5 md:py-0">
          <h1 className="text-center text-2xl sm:text-3xl font-semibold text-[#4A07DA]">
            Login Account
          </h1>
          <div className="w-full mt-5 sm:mt-8">
            <form onSubmit={handleSubmit}>
              <div className="mx-auto w-full sm:max-w-md md:max-w-lg flex flex-col gap-5">
                <input
                  required
                  type="email"
                  placeholder="Enter Your Email"
                  className="input input-bordered input-primary w-full "
                  // text-black placeholder:text-black/70
                />
                <input
                  required
                  min={5}
                  type="Password"
                  placeholder="Enter Your Password"
                  className="input input-bordered input-primary w-full "
                />
                <div className="flex flex-col md:flex-row gap-2 md:gap-4 justify-center items-center">
                  <button
                    type="submit"
                    className="btn btn-outline btn-primary btn-block max-w-[200px]"
                  >
                    Log In
                  </button>
                </div>
                <span className="text-sm">
                  Don&apos;t have an account?{" "}
                  <Link href="/signup" className="text-[#4A07DA]">
                    Sign Up
                  </Link>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoginForm;
