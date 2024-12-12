import doctorsData from "@/public/data.json";
import Link from "next/link";
import Image from "next/image";

export default function List() {
  return (
    <div className="flex flex-wrap justify-between items-center mx-auto p-8 gap-4  bg-black">
      <h1 className="text-2xl font-bold mb-6 w-full text-white">Doctors List</h1>
      {doctorsData.map((doctor) => (
        <Link
          key={doctor.id}
          href={`/List/${doctor.id}`}
          className="block rounded-s-lg bg-white shadow p-4 mb-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 border rounded hover:bg-gray-100"
        >
          <Image
            src={doctor.image}
            width={200}
            height={200}
            alt={`Dr. ${doctor.name}`}
            className="mb-4 mx-auto"
          />
          <h2 className="text-xl font-bold text-center">{doctor.name}</h2>
          <p className="text-center">{doctor.description}</p>
        </Link>
      ))}
    </div>
  );
}
