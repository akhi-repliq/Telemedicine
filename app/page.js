
export default function Home()
{
   return<>
      <div className="flex min-h-[90vh] items-center bg-black">
      <h1 className="mx-auto text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold animate-pulse bg-gradient-to-r from-violet-500 to-fuchsia-500 text-transparent bg-clip-text">
          Your well-being, our virtual commitment.
      </h1>
  </div>
  <div className="flex gap-8 flex-wrap justify-around bg-gray-300 py-12">
    <div
        className="transform  rounded-xl w-1/4 h-80 bg-white shadow-xl transition duration-300 hover:scale-105">
        <div className="flex h-full justify-center ">
            <span className="font-bold text-gray-500 mt-5">Service</span>
        </div>
    </div>

    <div
        className="transform  rounded-xl w-1/4 h-80 bg-white shadow-xl transition duration-300 hover:scale-105">
        <div className="flex h-full justify-center ">
            <span className="font-bold text-gray-500 mt-5">Management</span>
        </div>
    </div>

    <div
        className="transform  rounded-xl w-1/4 h-80 bg-white shadow-xl transition duration-300 hover:scale-105">
        <div className="flex h-full justify-center">
            <span className="font-bold text-gray-500 mt-5">Hospitality</span>
        </div>
    </div>
</div>
   </>
}