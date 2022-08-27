import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = ({ signup }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    passwordConfirm: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(() => ({ ...formData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, password } = formData;

    for (const value of Object.values(formData)) {
      if (value === "") {
        alert("Please enter all fields");
        return;
      }
    }
    if (formData.password !== formData.passwordConfirm) {
      alert("Passwords do not match");
    }
    const res = await signup(username, password);
    if (res.success) {
      navigate("/");
    }
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-4xl m-5">Sign up for a New Account!</h2>
      <form
        className="text-3xl flex flex-col items-center w-full"
        onSubmit={handleSubmit}
      >
        <div className="flex justify-center w-full mb-3">
          <label htmlFor="username" hidden>
            Username
          </label>
          <input
            className="block p-2 w-1/2 border focus:border focus:border-lightGreen focus:ring-2 focus:ring-lightGreen rounded-lg dark:bg-gray-700 dark:placeholder-gray-300 dark:text-white"
            type="text"
            placeholder="Username"
            value={formData.username}
            onChange={handleInputChange}
            id="username"
            name="username"
          />
        </div>
        <div className="flex justify-center w-full mb-3">
          <label htmlFor="password" hidden>
            Password
          </label>
          <input
            className="block p-2 w-1/2 border focus:border focus:border-lightGreen focus:ring-2 focus:ring-lightGreen rounded-lg dark:bg-gray-700 dark:placeholder-gray-300 dark:text-white"
            type="text"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
            id="password"
            name="password"
          />
        </div>
        <div className="flex justify-center w-full mb-3">
          <label htmlFor="password-confirm" hidden>
            Confirm Password
          </label>
          <input
            className="block p-2 w-1/2 border focus:border focus:border-lightGreen focus:ring-2 focus:ring-lightGreen rounded-lg dark:bg-gray-700 dark:placeholder-gray-300 dark:text-white"
            type="text"
            placeholder="Confirm Password"
            value={formData.passwordConfirm}
            onChange={handleInputChange}
            id="password-confirm"
            name="passwordConfirm"
          />
        </div>
        <button className="w-1/2 p-2 rounded-lg bg-lightGreen text-3xl hover:bg-green-600">
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;
