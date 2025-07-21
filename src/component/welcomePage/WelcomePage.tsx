export default function WelcomePage() {

  return (
    <section>
      <div className='w-full flex justify-center'>
        <div className="max-w-7xl  w-full flex flex-col items-center text-center py-18 px-4 gapBtw">
          <p className="text-blue-400 text-base mb-2">Welcome to RegnovaAI</p>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4 text-white">
            Strategically Manage Risk,
            <br className="hidden md:block" />
            Strengthen Trust, Scale Successfully
          </h1>
          <p className="text-gray-300 max-w-3xl text-sm md:text-base mb-8">
            Transform compliance challenges into strategic opportunities by
            streamlining processes, enhancing transparency, and building trust—
            turning regulatory obligations into powerful drivers of efficiency,
            innovation, and long-term business growth.
          </p>
          <button className="bg-white text-[#000A25] font-medium px-6 py-3 rounded-md hover:bg-gray-100 transition-colors">
            Explore Now
          </button>
        </div>
      </div>
    </section>
  )
}
