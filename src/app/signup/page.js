"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const SignupForm = () => {
  const router = useRouter();
  const [terms, setTerms] = useState(false);

  const handleSignUp = (e) => {
    e.preventDefault();
    !terms && alert("Please accept TnC");
    terms && router.push("/editor");
    terms && alert("You Are Signed In.");
  };

  return (
    <div className="flex justify-center items-center w-full  min-h-screen  ">
      <div className="xl:max-w-7xldrop-shadow-l  w-full flex justify-between items-stretch xl:px-5 py-5">
        <div className="sm:w-[60%] lg:w-[50%] bg-cover bg-center items-center justify-center hidden md:flex ">
          <Image
            src="https://ryansechrest.com/content/images/size/w2000/2022/08/how-to-set-an-animated-background-in-microsoft-teams-without-third-party-software.jpg"
            alt="login"
            width="0"
            height="0"
            sizes="100vw"
            className="w-full h-auto"
            priority
          />
        </div>
        <div className="mx-auto w-full lg:w-1/2 md:p-10 py-5 md:py-0">
          <h1 className="text-center text-2xl sm:text-3xl font-semibold text-[#4A07DA]">
            Create Account
          </h1>
          <form onSubmit={handleSignUp} className="w-full mt-5 sm:mt-8">
            <div className="mx-auto w-full sm:max-w-md md:max-w-lg flex flex-col gap-5">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  required
                  min={3}
                  type="text"
                  placeholder="Enter Your First Name"
                  className="input input-bordered input-primary w-full max-w-xs"
                />
                <input
                  required
                  type="text"
                  placeholder="Enter Your Last Name"
                  className="input input-bordered input-primary w-full max-w-xs"
                />
              </div>
              <input
                required
                type="email"
                placeholder="Enter Your Email"
                className="input input-bordered input-primary w-full"
              />
              <input
                required
                type="tel"
                placeholder="Enter Your Phone No"
                className="input input-bordered input-primary w-full"
              />
              <input
                required
                min={5}
                type="Password"
                placeholder="Enter Your Password"
                className="input input-bordered input-primary w-full"
              />
              <div className="flex items-center gap-1.5  justify-start pl-2">
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <input
                      onChange={() => setTerms(!terms)}
                      checked={terms}
                      type="checkbox"
                      className="checkbox-xs checkbox-primary"
                    />
                  </label>
                </div>
                <h3 className="flex items-center whitespace-nowrap text-xs text-black">
                  <span>I agree to the</span>
                  <span className="text-[#4A07DA]">&nbsp;Terms</span>
                  &nbsp;and
                  <span className="text-[#4A07DA]">&nbsp;Privacy Policy</span>.
                </h3>
              </div>
              <div className="flex flex-col md:flex-row gap-2 md:gap-4 justify-center items-center">
                <button
                  type="submit"
                  className="btn btn-active btn-primary btn-block max-w-[200px]"
                >
                  Sign Up
                </button>
              </div>
              <span className="text-sm">
                Already have an account?{" "}
                <Link href="/login" className="text-[#4A07DA]">
                  Log In
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
