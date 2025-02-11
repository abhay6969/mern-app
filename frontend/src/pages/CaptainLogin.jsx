import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import axios from 'axios';

const CaptainLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({});
  const [user, setUser] = useState({});

  const submitHandler = async (e) => {
    e.preventDefault();
    const userData = {
      email: email,
      password: password,
    };
    const response = await fetch("http://localhost:4000/user/login", userData);

    if (response.status === 200) {
      const data = response.data;
      setUser(data.user);
      localStorage.setItem("token", data.token);
      Navigate("/home");
    }
    setEmail("");
    setPassword("");
  };

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
      <img className='w-16 mb-10' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYQy-OIkA6In0fTvVwZADPmFFibjmszu2A0g&s" alt="" />
        <form action="">
          <h3 className="text-lg font-medium mb-2">What's Your email?</h3>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base"
          />
          <h3 className="text-lg font-medium mb-2">Password?</h3>
          <input
            className="bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            type="password"
            placeholder="password"
          />

          <button className="bg-[#111] text-white font-semibold mb-3 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base">Login</button>
        </form>
        <p className="text-center">
          Wanna Join a Fleet? <Link to="/signup" className='text-blue-600'>Register as a Captain</Link>
        </p>
      </div>
      <div>
        <Link
          to="/login"
          className="bg-[#bbc834] flex items-center justify-center text-white font-semibold mb-5 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base"
        >
          Sign in as User
        </Link>
      </div>
    </div>
  );
};

export default CaptainLogin;
