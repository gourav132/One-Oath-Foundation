import React, {useState, useEffect} from 'react'
import { PiCloudMoonBold } from "react-icons/pi";
import { LuSunDim } from "react-icons/lu";
import { LuMoonStar } from "react-icons/lu";

export default function Navbar() {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        if(theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme])

    const handleTheme = () => {
        setTheme(theme==="dark" ? "light" : "dark");
    }

  return (
    <div className='md:absolute w-full'>
        <nav className="w-11/12 md:w-10/12 m-auto">
            <div className="flex flex-wrap items-center justify-between mx-auto h-16">
                
                <a href="/" className="flex items-center" >
                    <span className="self-center text-sm md:text-xl font-bold whitespace-nowrap text-teal-600 dark:text-teal-400">One Oath Foundation</span>
                </a>

                <div className=" md:block md:w-auto" id="navbar-solid-bg">
                <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
                    <button onClick={handleTheme} className='bg-teal-100 p-2 rounded ring-0 hover:ring-2 '>
                        {theme==="light" ? <LuMoonStar /> :
                        <LuSunDim /> }
                    </button>
                </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}
