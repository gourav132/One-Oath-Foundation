// import React from 'react'

// export default function Navbar() {
//   return (
//     <div className='absolute w-full'>
//         <div className='w-10/12 m-auto h-16 flex items-center'>
//             <h1 className='text-xl font-bold text-teal-500'>One Oath Foundation</h1>
//         </div>
//     </div>
//   )
// }

import React from 'react'

export default function Navbar() {
  return (

    <div className='md:absolute w-full'>
        <nav className="w-11/12 md:w-10/12 m-auto">
            <div className="flex flex-wrap items-center justify-between mx-auto h-16">
                
                <a href="/" className="flex items-center" >
                    <span className="self-center text-sm md:text-xl font-bold whitespace-nowrap text-teal-600">One Oath Foundation</span>
                </a>

                <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
                <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
                    <li>
                        <a href="/" className="text-sm block py-2 px-3 md:p-0 text-gray-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 " aria-current="page">Home</a>
                    </li>
                    <li>
                        <a href="/" className="text-sm block py-2 px-3 md:p-0 text-gray-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 ">Gallery</a>
                    </li>
                    <li>
                        <a href="/" className="text-sm block py-2 px-3 md:p-0 text-gray-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 ">Get Quote</a>
                    </li>
                    <li>
                        <a href="/" className="text-sm block py-2 px-3 md:p-0 text-gray-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 ">Contact Us</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}
