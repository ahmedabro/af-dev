"use client"
import { useState, useEffect } from 'react'
import { ref, getDownloadURL } from "firebase/storage"
import { storage } from '../../firebase'
import Link from 'next/link'

const DownloadResume = () => {

    const [downloadURL, setDownloadURL] = useState("")
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchDownloadURL = async () => {
            try {
                setLoading(true)
                // Reference to the file in Firebase Storage
                const fileRef = ref(storage, 'files/resume/Ahmed_Farooq_Updated_Resume_.pdf');
        
                // Get the download URL for the file
                const url = await getDownloadURL(fileRef);
        
                // Set the download URL
                setDownloadURL(url);
            } catch (error) {
                setLoading(false)
                console.error('Error getting download URL:', error);
            } finally {
                setLoading(false)
            }
        }

        fetchDownloadURL()

        
    }, [])

  return (
    <a href={downloadURL} download="resume.pdf" target='_blank'>
        <div className='bg-gradient-to-br from-[#c767ac] to-[#3919bb] inline-flex justify-center items-center rounded p-[2px]'>
            <span className='bg-[#100028] py-3 px-9 uppercase text-sm xl:text-lg text-center hover:bg-gradient-to-br from-[#c767ac] to-[#3919bb]'>{loading === true ? "Loading..." : "Download CV"}</span>
        </div>
    </a>
  )
}

export default DownloadResume
