import doctorsData from "@/public/data.json";
import Link from "next/link";
import Image from "next/image";

export default function List() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-gray-100 text-white p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6 ">
        {doctorsData.map((doctor) => (
          <Link
            key={doctor.id}
            href={`/List/${doctor.id}`}
            className="group block rounded-lg bg-white shadow-md p-4 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
          >
            <Image
              src={doctor.image}
              width={150} 
              height={150} 
              alt={`Dr. ${doctor.name}`}
              className="rounded-full mb-4 mx-auto border-4 border-gray-600 group-hover:border-violet-500 transition-all duration-300"
            />
            <h2 className="text-lg font-bold text-center mb-2 text-black">{doctor.name}</h2> 
            <p className="text-center text-xs text-gray-400">{doctor.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
