import React from 'react';

import SearchIcon from "@mui/icons-material/Search";
//import { StarBorderPurple500Icon } from '@mui/icons-material';


const Navbar = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 my-5 justify-center">
        <div className="mx-auto md:mx-0">
            <img
            src="/x.jpeg"
            alt="DogTO-logo"
            width={"40px"}
            className="mk-8"
            />
        </div>

        <div className="col-span-2 md:border-x-2 md:border-slate-200 md:px-6 my-6 md:my-0">
            <div className="flex justify-between items-center">
                <h2 className="font-bold text-2xl">placeholder for page name</h2>
                
            </div>
        </div>

        <div className="px-0 md:px-6 mx-auto">
            <SearchIcon className="absolute m-2"></SearchIcon>
            <input type="text" className="bg-blue-100 rounded-full py-2 px-8"/>
        </div>
    </div>
  )
};

export default Navbar;