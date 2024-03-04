import React from 'react'

export default function Contact() {
  return (
    <div className='w-10/12 m-auto h-screen flex items-center justify-items-end'>
        <div className='w-full'>
        <h1 className='text-4xl font-bold'>Let's Get in <span className='text-teal-400'>Touch</span> </h1>
        <p className='font-semibold mt-1 text-gray-500'>Any questions? We would be happy to help you</p>

        <form action="" className='w-6/12 mt-10'>

            <div class="grid gap-6 md:grid-cols-2 mb-6">
                <div>
                    <label for="first_name" class="block mb-2 text-sm font-medium text-gray-700">Name</label>
                    <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg hover:ring-1 hover:ring-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-400 block w-full p-2.5" placeholder="John Doe" />
                </div>
                <div>
                    <label for="phone" class="block mb-2 text-sm font-medium text-gray-700">Phone number</label>
                    <input type="tel" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg hover:ring-1 hover:ring-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-400 block w-full p-2.5" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
                </div>

            </div>
            <div class="mb-6">
                <label for="email" class="block mb-2 text-sm font-medium text-gray-700">Email address</label>
                <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg hover:ring-1 hover:ring-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-400 block w-full p-2.5" placeholder="john.doe@company.com" required />
            </div> 
            <div class="mb-6">
                <label for="email" class="block mb-2 text-sm font-medium text-gray-700">How can we help you?</label>
                <textarea type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg hover:ring-1 hover:ring-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-400 block w-full p-2.5" placeholder="Message us your query and we will contact you rigth away" required />
            </div> 

            <button type="submit" class="text-white bg-teal-400 hover:bg-teal-600 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
        </form>
        </div>
    </div>
  )
}
