import Link from "next/link";

export default function Footer() {
  return (
    <div className="w-full bg-black text-white py-12">
      <div className=" mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12 items-center justify-items-center">
          <div className="flex flex-col items-center">
            <ul className="space-y-4">
              <li>
                <Link href="#" className="hover:text-gray-400">About</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-400">Privacy Policy</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-400">Licensing</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-400">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center">
            <ul className="space-y-4">
              <li>
                <Link href="#" className="hover:text-gray-400">Blog</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-400">Support Center</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-400">API Docs</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-400">Careers</Link>
              </li>
            </ul>
          </div>
         
        </div>
        <hr className="border-gray-700 mb-8" />
        <div className="flex flex-col items-center sm:flex-row justify-between text-sm text-gray-400">
          <span className="text-center mb-4 sm:mb-0">
            © 2024 <Link href="https://youtube.com/" className="text-gray-200 hover:underline">Hospital™</Link>. All Rights Reserved.
          </span>
          <div className="mt-4 sm:mt-0 flex justify-center space-x-6">
            <Link href="#" className="hover:underline">Terms of Service</Link>
            <Link href="#" className="hover:underline">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
