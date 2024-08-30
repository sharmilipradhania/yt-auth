
"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

const LoginPage = () => {
  const router = useRouter ();
  const [user, setUser] = useState({
    email: "",
    password: "",
  })
  const [disable, setDisable] = useState(true);
  const submitHandler = async() =>{
  try {
    const res  = await axios.post ("/api/users/login", user)
    router.push("/");
    console.log(res);
    toast.success(res.data.message)
  } catch (error:any) {
    toast.error(error.response.data.message)
    
  }

  }

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setDisable(false);
    }
    else {
      setDisable(true);
    }
  }, [user])
  return (
    <div className='flex bg-[#669bbc] min-h-screen justify-center items-center'>
      <div className='bg-white p-12 rounded-lg shadow-lg'>
        <h1 className='font-extrabold '>LOGIN</h1>
        <div className='flex flex-col my-3'>
          <label>Email</label>
          <input
            type="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            className='border-2 outline-none border-gray-500 rounded-md px-1 py-1' />
        </div>
        <div className='flex flex-col my-4'>
          <label>Password</label>
          <input
            type="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            className='border-2 outline-none border-gray-500 rounded-md px-1 py-1' />
        </div>
        <button onClick={submitHandler}  className={`${disable ? "bg-gray-400 cursor-not-allowed" : "bg-blue-400"} w-full py-1 my-2 rounded-lg text-white`}>Login</button>
        <p className='mt-3'>Don't have an account? <Link href={"signup"} className='font-bold'>SIGNUP</Link></p>
      </div>

    </div>
  )
}

export default LoginPage
