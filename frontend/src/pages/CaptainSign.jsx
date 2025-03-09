import React, { useState } from "react";
import { Links, Link } from "react-router-dom";

const CaptainSign = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [userData, setUserData] = useState({});
  
    const submitHandler = (e) => {
      e.preventDefault();
      setUserData({
        email: email,
        password: password,
        fullName:{
          firstName:firstName,
          LastName:lastName,
        },
        phone:phone,
      });
  
      setEmail("");
      setPassword("");
      console.log(email, password);
    };
  
    return (
      <div>
        <div className=" p-7 h-screen  pt-8  w-full flex  flex-col bg-[url(source/yellow.jpeg)] bg-cover bg-center">
          <img
            className="w-32 mx-auto pt-15"
            src="https://inclojure.org/images/sponsors/namma-yatri.png"
            alt=""
          />
  
          <form
            className="mt-10 mx-2"
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <h3 className="text-lg mb-2 font-semibold">Enter Your Name</h3>
            <div className="flex space-x-7">
              <input
                required
                className="bg-[#eeeeee78] mb-7 rounded px-4 py-2 border w-38  placeholder:text-base"
                type="email"
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
                placeholder="FirstName"
              />
              <input
                required
                className="bg-[#eeeeee78] mb-7 rounded px-4 py-2 border w-38 text-lg placeholder:text-base"
                type="email"
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
                placeholder="LastName"
              />
            </div>
  
            <h3 className="text-lg mb-2 font-semibold">Mobile Number</h3>
            <input
              required
              className="bg-[#eeeeee78] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
              type="tel"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
              placeholder="xxxx xxxxx"
            />
  
            <h3 className="text-lg mb-2 font-semibold">What's your email</h3>
            <input
              required
              className="bg-[#eeeeee78] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="email@example.com"
            />
            <h3 className="text-lg mb-2 font-semibold">Enter Password</h3>
            <input
              required
              className="bg-[#eeeeee78] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder="Password"
            />
            <button className="w-full border py-3 rounded font-semibold text-white bg-black">
              Register
            </button>
          </form>
  
          <p className="text-center mt-7 font-semibold">Already Have Account?</p>
          <Link
            to="/captain-login"
            className=" font-semibold  text-center mt-2 py-3 bg-[#008080] text-white rounded-md"
          >
            {" "}
            login in as Captain
          </Link>
        </div>
      </div>
    )
}

export default CaptainSign
