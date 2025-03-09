import React, { useState } from "react";
import { Links, Link } from "react-router-dom";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password,setPassword]=useState("");
  const [userData,setUserData]=useState({});

  const submitHandler=(e)=>{
        e.preventDefault();
        setUserData({
            email:email,
            password:password
        })
        
        setEmail('');
        setPassword('');
        console.log(email,password);
  }

  return (
    <div>
      <div className=" p-7 h-screen  pt-8  w-full flex  flex-col bg-[url(source/yellow.jpeg)] bg-cover bg-center">
        <img
          className="w-32 mx-auto pt-15"
          src="https://inclojure.org/images/sponsors/namma-yatri.png"
          alt=""
        />
        <img
          className="mx-auto"
          src="https://www.nammayatri.in/img/onboarding-NammaYatri.png"
          alt=""
        />

        <form className="mt-10 mx-2" onSubmit={(e)=>{
            submitHandler(e)
        }}>
          <h3 className="text-lg mb-2 font-semibold">What's your email</h3>
          <input
            required
            className="bg-[#eeeeee78] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="email"
            value={email}
            onChange={(e)=>{
                setEmail(e.target.value)
            }}
            placeholder="email@example.com"
          />
          <h3 className="text-lg mb-2 font-semibold">Enter Password</h3>
          <input
            required
            className="bg-[#eeeeee78] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="password"
            value={password}
            onChange={(e)=>{
                setPassword(e.target.value)
            }}
            placeholder="Password"
          />
          <button className="w-full border py-3 rounded font-semibold text-white bg-black">
            Login
          </button>
        </form>

        <p className='text-center mt-7 font-semibold'>New user?
                </p>
                <Link to='/signup' className=' font-semibold  text-center mt-2 py-3 bg-[#008080] text-white rounded-md'> Sign in as User</Link>
      </div>
    </div>
  );
};

export default UserLogin;
