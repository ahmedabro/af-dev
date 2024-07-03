'use clients'
import React from 'react'
import { Inter, Play, Josefin_Sans } from "next/font/google";
import { BiCodeBlock } from "react-icons/bi";
import { TbDeviceMobileCode, TbDeviceImacCode } from "react-icons/tb";
import ServiceBox from './ServiceBox';

const inter = Inter({ subsets: ["latin"] });
const play = Play({ weight: ["400", "700"], subsets: ["latin"] })
const josefin = Josefin_Sans({ subsets: ["latin"] })

const services = [
    {
        title: "Web Development",
        icon: <BiCodeBlock size={60} />,
        description: "I offer, highlighting my expertise in crafting dynamic and responsive websites tailored to clients' needs. My services encompass front-end and back-end development, ensuring seamless user experiences and robust, scalable codebases.",
    },
    {
        title: "Mobile App Development",
        icon: <TbDeviceMobileCode size={60} />,
        description: "I offer, highlighting my expertise in crafting dynamic and responsive websites tailored to clients' needs. My services encompass front-end and back-end development, ensuring seamless user experiences and robust, scalable codebases.",
    },
    {
        title: "Software Development",
        icon: <TbDeviceImacCode size={60} />,
        description: "I offer, highlighting my expertise in crafting dynamic and responsive websites tailored to clients' needs. My services encompass front-end and back-end development, ensuring seamless user experiences and robust, scalable codebases.",
    },

]

const Services = () => {
  return (
    <div className={`px-5 sm:px-8 md:px-12 lg:px-32 xl:px-40 py-14`}>
        <h3 className={`text-center text-xl md:text-2xl xl:text-4xl font-bold mb-2 xl:mb-3`}>My Services</h3>
        <h2 className={`${play.className} text-center text-4xl md:text-5xl xl:text-6xl font-semibold mb-8 xl:mb-16`}>What I Offer</h2>
        <div className={`flex flex-col sm:flex-row justify-center gap-4 sm:gap-3 sm:flex-wrap lg:flex-nowrap items-center`}>
            {
                services.map(service => (
                    <ServiceBox title={service.title} icon={service.icon} description={service.description} />
                ))
            }
        </div>
    </div>
  )
}

export default Services
