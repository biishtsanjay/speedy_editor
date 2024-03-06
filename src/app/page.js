"use client";
import React, { useEffect, useState } from "react";
import LoginForm from "./login/page";
import SignupForm from "./signup/page";
import ThemeButton from "./ThemeButton";
export default function Home() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return <>{isSignedIn ? <SignupForm /> : <LoginForm />}</>;
}
