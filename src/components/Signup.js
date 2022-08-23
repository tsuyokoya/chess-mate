import React from "react";
import Button from "./Button";

const Signup = () => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-4xl m-5">Sign up for a New Account!</h2>
      <form className="text-3xl flex flex-col items-center w-full">
        <div className="flex justify-center w-full mb-3">
          <label htmlFor="username" hidden>
            Username
          </label>
          <input
            className="block p-2 w-1/2 border-none rounded-lg dark:bg-gray-700 dark:placeholder-gray-300 dark:text-white"
            type="text"
            placeholder="Username"
            id="username"
          />
        </div>
        <div className="flex justify-center w-full mb-3">
          <label htmlFor="password" hidden>
            Password
          </label>
          <input
            className="block p-2 w-1/2 border-none rounded-lg dark:bg-gray-700 dark:placeholder-gray-300 dark:text-white"
            type="text"
            placeholder="Password"
            id="password"
          />
        </div>
        <div className="flex justify-center w-full mb-3">
          <label htmlFor="password-confirm" hidden>
            Confirm Password
          </label>
          <input
            className="block p-2 w-1/2 border-none rounded-lg dark:bg-gray-700 dark:placeholder-gray-300 dark:text-white"
            type="text"
            placeholder="Confirm Password"
            id="password-confirm"
          />
        </div>
        <Button text="Login" path="/" textSize="text-3xl" />
      </form>
    </div>
  );
};

export default Signup;