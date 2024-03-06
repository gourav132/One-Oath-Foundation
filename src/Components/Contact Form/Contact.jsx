import React, { useState, useRef } from 'react'
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import { Toast } from '../index';
import { ThreeDots } from 'react-loader-spinner';

import ContactLogo from '../../Assets/contact_us.svg';


export default function Contact() {

    const { register, handleSubmit, formState: { errors }, reset } = useForm();  // Form state management with react-hook-form
    const [ toast, setToast ] = useState(false);   // State for managing toast visibility
    const formRef = useRef(null);  // Ref to access the form element
    const [loading, setLoading] = useState(false);

     // Callback for handling form submission
    const onSubmit = (formFields) => {
        const formData = new FormData(formRef.current);
        setLoading(true);
         // Send form data to Google Sheets via a fetch request
        fetch(
            "https://script.google.com/macros/s/AKfycbwVhTiNOgFV7rSXwkeao8raAPNHU8E5OF9ZGATYYNVOfQQMPt4noUYtL9bA5glxXxiI/exec",
            // process.env.REACT_APP_GOOGLE_SHEET_API,
            {
              method: "POST",
              body: formData
            }
          )
            .then((res) => {
                setToast(true)  // Show success toast
                reset()  // Clear form fields
                setLoading(false)
            })
            .catch((error) => {
              console.log(error);  // Handling errors
            });    
    }

    // Callback for closing the toast
    const onClose = () => {
        setToast(false);
    }

  return (
    <div className='mt-5 md:mt-0 w-11/12 md:w-10/12 m-auto md:h-screen flex items-center justify-items-end'>
        <div className='w-full'>

            <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1}}>
                <h1 className='text-2xl md:text-4xl font-bold text-gray-800'>Let's Get in <span className='text-teal-600'>Touch</span> </h1>
                <p className='text-sm md:text-normal font-semibold mt-1 text-gray-500'>Any questions? We would be happy to help you</p>
            </motion.div>

            {/* <div className='md:flex justify-center'> */}
                <motion.form 
                    ref={formRef} 
                    onSubmit={handleSubmit(onSubmit)} 
                    className='md:w-6/12 mt-10' 
                    initial={{opacity: 0}} 
                    animate={{opacity: 1}} 
                    transition={{duration: 1, delay: 1}}
                >
                    {/* Form fields with validation and styling */}
                    <div className="grid grid-cols-2 gap-6 md:grid-cols-2 mb-6">

                        <div>
                            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-700">Name</label>
                            <input 
                                {...register("Name", {
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
                            <p id="helper-text-explanation" className="mt-2 text-xs text-red-500">{errors.Name?.message}</p>
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

                    <button type="submit" className="text-white bg-teal-600 hover:bg-teal-600 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
                        {!loading && "Submit" }
                        <ThreeDots
                            visible={loading}
                            height="16"
                            width="20"
                            color="#ffffff"
                            radius="9"
                            ariaLabel="three-dots-loading"
                            wrapperStyle={{}}
                            wrapperClass=""
                        />
                    </button>



                </motion.form>

                {/* <div className='flex'>
                    <img className='w-8/12 m-auto hidden md:block' src={ContactLogo} alt="" />
                </div> */}
            {/* </div> */}

        <AnimatePresence>
            {/* Conditionally render a toast based on toast state */}
            {toast && <Toast onClose={onClose}/> }
        </AnimatePresence>

        </div>
    </div>
  )
}
