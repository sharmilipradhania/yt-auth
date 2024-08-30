"use client"

import axios from 'axios'
import { useRouter } from 'next/navigation';
import React from 'react'
import toast from 'react-hot-toast';

function page() {
  const router = useRouter();
  const logoutHandler = async() => {
    
    try {
      const res = await axios.get("/api/users/logout");
      router.push("/login");
      toast.success(res.data.message);
    } catch (error:any) {
      toast.error(error.response.data.message);
    }
  }
  return (
    <div>
     <h1>Home</h1> 
     <button onClick={logoutHandler} className='bg-zinc-800 px- py-1 rounded-md text-white'>Logout</button>
    </div>
  )
}

export default page
