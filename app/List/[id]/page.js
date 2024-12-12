import doctorsData from "@/public/data.json";
import Link from "next/link";
import Image from "next/image";

export async function generateMetadata({ params }) {
  const { id } = params;
  const doctor = doctorsData.find((doc) => doc.id === parseInt(id));
  if (!doctor) {
    return {
      title: "Doctor Not Found",
      description: "No doctor found with the given ID.",
      image: "pic.jpg", 
    };
  }
  return {
    title: `Dr. ${doctor.name} - Profile`,
    description: `Learn more about Dr. ${doctor.name}, an expert in ${doctor.description}.`,
    image: doctor.image ? `${doctor.image}` : "/pic.jpg",  
  };
}

export default function DoctorProfile({ params }) {
  const { id } = params;
  const doctor = doctorsData.find((doc) => doc.id === parseInt(id));
  if (!doctor) {
    return <h1>Doctor Not Found</h1>;
  }

  return (
    <div className="flex flex-col items-center w-[80%] mx-auto p-8">
      <Image
        src={doctor.image ? `${doctor.image}` : "/pic.jpg"} 
        width={200}
        height={200}
        alt={`Dr. ${doctor.name}`}
      />
      <h1 className="text-2xl font-bold">Dr. {doctor.name}</h1>
      <p className="text-lg mt-4">{doctor.description}</p>
      <Link href="/Appointments">
        <button type="button" className="mt-4 p-2 bg-blue-500 text-white rounded">
          Book an appointment
        </button>
      </Link>
    </div>
  );
}
