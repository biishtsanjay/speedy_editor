"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FcPhotoReel } from "react-icons/fc";
import ThemeButton from "@/app/ThemeButton";
const Navbar = () => {
  return (
    <>
      <div className="w-full h-20 bg-emerald-800 sticky top-0">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <FcPhotoReel size="3rem" />
            <ul className="md:flex gap-x-6 text-white">
              <li>
                <Link href="/editor">
                  <p>Home</p>
                </Link>
              </li>
              <li>
                <Link href="/login">
                  <p>Login</p>
                </Link>
              </li>
              <li>
                <Link href="/signup">
                  <p>Signup</p>
                </Link>
              </li>
            </ul>
            <ThemeButton />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
