import React from 'react'
import { BiLogOut } from "react-icons/bi";

const LogoutButton = () => {
  return (
    <div className="mt-auto">
      <BiLogOut className='w-6 h-6 text-white cursor-pointer hover:bg-orange-400 ' />
    </div>
  );
}

export default LogoutButton