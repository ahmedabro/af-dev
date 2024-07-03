'use client'
import { basicSchema } from '@/schemas'
import { useFormik } from 'formik'
import React from 'react'

const onSubmit = async (values, actions) => {
    // event.preventDefault()

    const {name, email, company, budget, message} = values

    await fetch('/api/email/', {
        method: 'POST',
        body: JSON.stringify({
            name,
            email,
            company,
            budget,
            message,
        })
    })

    console.log("values:", values)
    actions.resetForm()
}

const ContactForm = () => {
    const {values, errors, touched, handleBlur, handleChange, handleSubmit} = useFormik({
        initialValues: {
            name: "",
            email: "",
            company: "",
            budget: "",
            message: "",
        },
        validationSchema: basicSchema,
        onSubmit
    })

    console.log(errors)

  return (
    <form onSubmit={handleSubmit} autoComplete='off'>
        <div className='flex w-full gap-5 mb-5'>
            <div className='w-1/2'>
                <label htmlFor="name" className='block mb-2'>Your Name <sup className='text-red-500 text-lg'>*</sup></label>
                <input
                    id='name'
                    type="text"
                    placeholder='Enter your name'
                    value={values.name}
                    onChange={handleChange} 
                    onBlur={handleBlur}
                    className={`w-full bg-transparent rounded-none border-b-2 border-gray-400 outline-none ${errors.name && touched.name ? "focus-visible:border-red-500" : "focus-visible:border-blue-500"} placeholder:text-gray-600`}   
                />
                {errors.name && touched.name ? <p className='text-red-500 text-xs font-semibold my-2'>{errors.name}</p> : null}
            </div>


            <div className='w-1/2'>
                <label htmlFor="email" className='block mb-2'>Your Email <sup className='text-red-500 text-lg'>*</sup></label>
                <input
                    id='email'
                    type="email"
                    placeholder='Enter your email'
                    value={values.email}
                    onChange={handleChange} 
                    onBlur={handleBlur}
                    className={`w-full bg-transparent rounded-none border-b-2 border-gray-400 outline-none ${errors.email && touched.email ? "focus-visible:border-red-500" : "focus-visible:border-blue-500"} placeholder:text-gray-600`}  
                />
                {errors.email && touched.email ? <p className='text-red-500 text-xs font-semibold my-2'>{errors.email}</p> : null}
            </div>
        </div>


        <div className='flex w-full gap-5 mb-5'>
            <div className='w-1/2'>
                <label htmlFor="company" className='block mb-2'>Your Company</label>
                <input
                    id='company'
                    type="text"
                    placeholder='Company Name'
                    value={values.company}
                    onChange={handleChange} 
                    onBlur={handleBlur}
                    className={`w-full bg-transparent rounded-none border-b-2 border-gray-400 outline-none ${errors.company && touched.company ? "focus-visible:border-red-500" : "focus-visible:border-blue-500"} placeholder:text-gray-600`}  
                />
                {errors.company && touched.company ? <p className='text-red-500 text-xs font-semibold my-2'>{errors.company}</p> : null}
            </div>

            <div className='w-1/2'>
                <label htmlFor="budget" className='block mb-2'>Your Budget</label>
                <input
                    id='budget'
                    type="number"
                    placeholder='Enter your budget in USD'
                    value={values.budget}
                    onChange={handleChange} 
                    onBlur={handleBlur}
                    className={`w-full bg-transparent rounded-none border-b-2 border-gray-400 outline-none ${errors.budget && touched.budget ? "focus-visible:border-red-500" : "focus-visible:border-blue-500"} placeholder:text-gray-600`}  
                />
                {errors.budget && touched.budget ? <p className='text-red-500 text-xs font-semibold my-2'>{errors.budget}</p> : null}
            </div>
        </div>


        <label htmlFor="message" className='block mb-2'>Message <sup className='text-red-500 text-lg'>*</sup></label>
        <textarea
            id='message'
            placeholder='Type your message'
            value={values.message}
            onChange={handleChange} 
            onBlur={handleBlur}
            className={`w-full h-40 bg-transparent rounded-none border-b-2 border-gray-400 outline-none ${errors.message && touched.message ? "focus-visible:border-red-500" : "focus-visible:border-blue-500"} placeholder:text-gray-600`}  
        ></textarea>
        {errors.message && touched.message ? <p className='text-red-500 text-xs font-semibold my-2'>{errors.message}</p> : null}


        <div className='flex justify-end'>
            <button type='submit' className='py-3 px-9 bg-gradient-to-br from-[#c767ac] to-[#3919bb] inline-flex justify-center items-center rounded mt-10'>Send</button>
        </div>
    </form>
  )
}

export default ContactForm
