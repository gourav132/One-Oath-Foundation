import React from 'react'
import { useForm } from 'react-hook-form';

export default function Contact() {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (fromFields) => {
        console.log(fromFields);
    }

  return (
    <div className='w-10/12 m-auto h-screen flex items-center justify-items-end'>
        <div className='w-full'>
        <h1 className='text-4xl font-bold text-gray-800'>Let's Get in <span className='text-teal-600'>Touch</span> </h1>
        <p className='font-semibold mt-1 text-gray-500'>Any questions? We would be happy to help you</p>

        <form onSubmit={handleSubmit(onSubmit)} className='w-6/12 mt-10'>

            <div className="grid gap-6 md:grid-cols-2 mb-6">

                <div>
                    <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-700">Name</label>
                    <input 
                        {...register("FullName", {
                            required: "Please provide us with your name",
                            minLength: {
                                value: 3,
                                message: "Please enter a valid name"
                            }
                        })} 
                        type="text" id="first_name" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg hover:ring-1 hover:ring-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-600 block w-full p-2.5" 
                        placeholder="John Doe" 
                    />
                    <p id="helper-text-explanation" className="mt-2 text-xs text-red-500">{errors.FullName?.message}</p>
                </div>

                <div>
                    <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-700">Phone number</label>
                    <input 
                        {...register("PhoneNo", { 
                            required: "Please provide your phone no.",
                            pattern: {
                                value: /^\+?([0-9]{2})?\s?-?\d{10}$/,
                                message: "Invalid phone number format."
                            } 
                        })} 
                        type="tel" id="phone" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg hover:ring-1 hover:ring-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-600 block w-full p-2.5" 
                        placeholder="+xx xxxxxxxxxx" 
                    />
                    <p id="helper-text-explanation" className="mt-2 text-xs text-red-500">{errors.PhoneNo?.message}</p>
                </div>

            </div>

            <div className="mb-6">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">Email address</label>
                <input 
                    {...register("Email", { 
                        required: "Please provide your email address",
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Please enter a valid email address"
                          }
                    })} 
                    type="email" id="email" 
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg hover:ring-1 hover:ring-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-600 block w-full p-2.5"
                    placeholder="john.doe@company.com"
                />
                <p id="helper-text-explanation" className="mt-2 text-xs text-red-500">{errors.Email?.message}</p>
            </div>

            <div className="mb-6">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">How can we help you?</label>
                <textarea 
                    {...register("Message", { 
                        required: "Your query is important to us",
                        maxLength: {
                            value: 1000,
                            message: "Please limit your message to 1000 characters"
                        }
                    })}
                    rows={3}
                    type="email" id="email" 
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg hover:ring-1 hover:ring-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-600 block w-full p-2.5" 
                    placeholder="Message us your query and we will get back to you shortly"
                />
                <p id="helper-text-explanation" className="mt-2 text-xs text-red-500">{errors.Message?.message}</p>
            </div> 

            <button type="submit" className="text-white bg-teal-600 hover:bg-teal-600 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
        </form>
        </div>
    </div>
  )
}
