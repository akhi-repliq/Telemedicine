
import Link from "next/link" 
export default function Footer()
{
    return <>

    <div className="w-full max-w-screen-xsl mx-auto p-4 md:py-8">
        <div className="flex items-center justify-around mb-10 text-lg">
            <ul className=" mb-6  font-medium sm:mb-0 dark:text-gray-400 text-black">
                <li>
                    <Link href="#" className="hover:underline me-4 md:me-6 ">About</Link>
                </li>
                <li>
                    <Link href="#" className="hover:underline me-4 md:me-6">Privacy Policy</Link>
                </li>
                <li>
                    <Link href="#" className="hover:underline me-4 md:me-6">Licensing</Link>
                </li>
                <li>
                    <Link href="#" className="hover:underline">Contact</Link>
                </li>
            </ul>
            <ul className=" mb-6 text-md font-medium  sm:mb-0 dark:text-gray-400 text-black">
                <li>
                    <Link href="#" className="hover:underline me-4 md:me-6">About</Link>
                </li>
                <li>
                    <Link href="#" className="hover:underline me-4 md:me-6">Privacy Policy</Link>
                </li>
                <li>
                    <Link href="#" className="hover:underline me-4 md:me-6">Licensing</Link>
                </li>
                <li>
                    <Link href="#" className="hover:underline">Contact</Link>
                </li>
            </ul>
            <ul className=" mb-6 text-md font-medium  sm:mb-0 dark:text-gray-400 text-black">
                <li>
                    <Link href="#" className="hover:underline me-4 md:me-6">About</Link>
                </li>
                <li>
                    <Link href="#" className="hover:underline me-4 md:me-6">Privacy Policy</Link>
                </li>
                <li>
                    <Link href="#" className="hover:underline me-4 md:me-6">Licensing</Link>
                </li>
                <li>
                    <Link href="#" className="hover:underline">Contact</Link>
                </li>
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-1" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <Link href="https://youtube.com/" className="hover:underline">Hospital™</Link>. All Rights Reserved.</span>
    </div>


</>
}