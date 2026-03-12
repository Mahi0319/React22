import React from "react";

function Task() {
  return (
    <div className="min-h-screen flex">
      <div className="flex flex-1 items-center justify-center px-6">
        <div className="w-full max-w-md">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-yellow-100">
              Welcome Back
            </h2>
              <p className="text-lg text-red-600 mt-2">
              Sign in to access your dashboard.
            </p>
          </div>
            <div className="mb-8">
            <label className="block text-lg mb-2 text-red-600">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter email"
              className="w-full border rounded-sm px-4 py-2"
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg mb-2 text-red-600">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full border rounded-lg px-4 py-2"
            />
          </div>
          <div className="text-left mb-6">
            <a className="text-sm font-semibold text-yellow-500 cursor-pointer">
              Forgot Password?
            </a>
          </div>
          <button className="w-full bg-yellow-300 text-red-600 py-2 rounded-lg mb-3 hover:cursor-pointer">
            Sign In
          </button>
          <div className="flex items-center my-6 justify-center">
            <p className="flex items-center">
                OR
            </p>
          </div>
          <button className="w-full border py-2 px-8 rounded-lg mb-6">
            Continue with Google    
          </button>
          <button className="w-full border py-2 px-8 rounded-lg mb-4">
            Continue with Apple
          </button>
          <p className="text-sm text-center mt-4 text-gray-500">
            Don’t have an account?
            <a className="text-blue-600 cursor-pointer">
              Sign Up
            </a>
          </p>
        </div>
      </div>
      <div className="lg:flex flex-1 bg-blue-600 items-center justify-center p-10">
        <div className="max-w-lg">
          <h1 className="text-4xl font-semibold mb-6">
            Hello My name is Mahesh
          </h1>
          <p className="text-lg text-teal-100 mb-6">
            I am a passionate web developer with a intrest in creating dynamic and responsive websites. I have experience in HTML, CSS, JavaScript, React, and Tailwind CSS.
          </p>
          <div className="flex items-center justify-center">
            <div className="h-10 w-42 bg-black flex items-center justify-center mr-4">
              <p> Front End Developer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Task;