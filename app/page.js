import Image from "next/image";
import gh from "@../../../public/gh.jpg";
import pic from "@../../../public/pic.jpg";
import pic1 from "@../../../public/pic1.jpg";
import pic2 from "@../../../public/pic2.jpg";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-[100vh] bg-gradient-to-b from-blue-50 to-gray-100">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center text-transparent bg-clip-text animate-pulse bg-gradient-to-r from-violet-600 to-purple-600 mb-4">
          Your Health, Our Priority
        </h1>
        <p className="text-lg sm:text-xl text-center text-gray-600 max-w-3xl mb-6">
          Experience accessible and reliable telemedicine services designed for your convenience and comfort.
        </p>
        <button className="px-6 py-3 bg-violet-600 text-white font-medium text-lg rounded-lg shadow-lg hover:bg-purple-500 transition">
          Book Your Appointment
        </button>
      </div>

      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                icon: "fas fa-video",
                title: "Virtual Consultations",
                description:
                  "Connect with certified doctors anytime and anywhere for professional medical advice and care.",
                gradient: "from-blue-500 to-purple-500",
              },
              {
                icon: "fas fa-prescription",
                title: "Digital Prescriptions",
                description:
                  "Receive prescriptions directly to your email after online consultations with our doctors.",
                gradient: "from-green-500 to-blue-500",
              },
              {
                icon: "fas fa-user-md",
                title: "Specialist Consultations",
                description:
                  "Access a wide range of specialists for expert medical advice and second opinions.",
                gradient: "from-pink-500 to-red-500",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-xl p-8 transition hover:shadow-xl flex flex-col items-center"
              >
                <div
                  className={`flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.gradient} text-white rounded-full mb-4`}
                >
                  <i className={`${service.icon} text-2xl`}></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">{service.title}</h3>
                <p className="text-gray-600 text-sm text-center">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-24 bg-gradient-to-b from-blue-50 to-gray-100">
        <div className="max-w-5xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between text-center lg:text-left text-black px-6 space-y-8 lg:space-y-0">
          <div className="w-full lg:w-1/2 lg:pr-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-8">
              Unlock Your Full Potential with Better Health
            </h2>
            <p className="text-base sm:text-lg mb-8">
              Take the first step toward a healthier you! Access personalized healthcare solutions at your convenience and start living your best life today.
            </p>
            <button className="px-8 py-3 bg-white text-black font-semibold text-lg rounded-lg shadow-lg hover:bg-gray-100 transition">
              Get Started Now
            </button>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center">
            <Image 
              src={gh} 
              alt="Healthy Lifestyle" 
              className="rounded-sm shadow-lg max-w-full h-auto" 
              priority 
            />
          </div>
        </div>
      </div>
      <div className="py-24 bg-gradient-to-b from-gray-50 to-gray-100">
  <div className="max-w-7xl mx-auto px-6 text-center">
    <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-black">Why Choose Us?</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
      {[
        {
          title: "24/7 Support",
          description: "Get support from healthcare professionals any time of the day, ensuring you're never left without guidance.",
        },
        {
          title: "Secure Consultations",
          description: "We prioritize your privacy with secure and confidential consultations you can trust.",
        },
        {
          title: "Specialist Access",
          description: "Consult a wide range of medical specialists for personalized and expert care.",
        },
        {
          title: "Easy Appointment Booking",
          description: "Our user-friendly platform makes scheduling appointments quick and hassle-free.",
        },
        {
          title: "Digital Prescriptions",
          description: "Receive fast and reliable prescriptions directly to your email or app after consultations.",
        },
        {
          title: "Flexible Plans",
          description: "Choose from flexible healthcare plans tailored to meet your specific needs and budget.",
        },
      ].map((feature, index) => (
        <div
          key={index}
          className="bg-white shadow-md rounded-lg p-8 transition hover:shadow-lg"
        >
          <h3 className="text-lg font-medium text-gray-800 mb-3">{feature.title}</h3>
          <p className="text-gray-600">{feature.description}</p>
        </div>
      ))}
    </div>
  </div>
</div>


      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
            Hear from Our Happy Patients
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                image: pic,
                alt: "Patient Emily",
                text: `"The doctors were extremely professional and kind. It felt like an in-person visit, but from the comfort of my home."`,
                author: "— Emily R.",
              },
              {
                image: pic1,
                alt: "Patient Michael",
                text: `"I loved how easy it was to book an appointment. The service is fast, reliable, and incredibly convenient."`,
                author: "— Michael T.",
              },
              {
                image: pic2,
                alt: "Patient Sophia",
                text: `"Telemedicine has truly changed the way I approach healthcare. I can get medical advice anytime!"`,
                author: "— Sophia L.",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg p-8 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="w-24 h-24 mb-6">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.alt}
                    className="w-full h-full rounded-full object-cover transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <p className="text-gray-600 text-base mb-4 italic leading-relaxed">{testimonial.text}</p>
                <span className="text-gray-900 font-semibold text-lg">{testimonial.author}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-24 bg-gray-100">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6 text-black">
            {[
              { question: "What is telemedicine?", answer: "Telemedicine allows you to consult doctors remotely using video calls or chat." },
              { question: "Are online consultations safe?", answer: "Yes, all consultations are secure and confidential." },
              { question: "How do I book an appointment?", answer: "Click the 'Book Your Schedule' button and follow the simple steps." },
            ].map((faq, index) => (
              <div key={index} className="bg-white shadow-md rounded-lg p-8">
                <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
