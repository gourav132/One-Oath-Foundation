import React, {useEffect} from 'react'
import { motion } from 'framer-motion'

export default function Toast({onClose}) {

    useEffect(() => {
        const timer = setTimeout(() => {
          onClose();
        }, 3000); // Adjust the time in milliseconds as per your requirement (e.g., 3000 milliseconds = 3 seconds)
    
        return () => clearTimeout(timer);
      }, [onClose]);


  return (
    <motion.div
        id="toast-default" 
        className="absolute bottom-8 right-10 flex items-center w-full max-w-xs p-4 text-gray-100 bg-green-400 rounded-lg shadow z-1"
        role="alert"
        initial = {{opacity: 0, x:10}}
        animate = {{opacity: 1, x:0}}
        exit = {{opacity: 0, x:10}}
    >
        <div class="ms-3 text-sm font-semibold ">Query submited successfully.</div>
    </motion.div>
  )
}
