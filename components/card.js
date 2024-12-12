import Link from "next/link"
import Image from "next/image"
import pic from "@/public/pic.jpg"
export default function Card({image,name,description})
{
    return <>    
<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <Link href="#">
        <Image className="object-fill rounded-md" src={pic} alt="nothing"/>
    </Link>
    <div className="p-3">
        <Link href="#">
            <h6 className="mb-2 text-md tracking-tight text-gray-900 dark:text-white">{name}</h6>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-sm">{description}</p>
        <Link href="/Appointments" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-violet-700 rounded-lg hover:bg-fuchsia-800 focus:outline-none dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Book an Appointment
        </Link>
    </div>
</div>
    </>
}