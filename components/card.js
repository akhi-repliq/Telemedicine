import Link from "next/link"
import Image from "next/image"
import pic from "@/public/pic.jpg"
export default function Card()
{
    return <>    
<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <Link href="#">
        <Image className="object-fill" src={pic} alt="" />
    </Link>
    <div className="p-3">
        <Link href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Dr. Md. Hasan Mahmud</h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
        <Link href="/Appointments" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-violet-700 rounded-lg hover:bg-fuchsia-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Book an Appointment
        </Link>
    </div>
</div>

    
    </>
}