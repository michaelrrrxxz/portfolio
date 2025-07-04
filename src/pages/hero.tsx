
import Photo from './../assets/image.png'
export default function Hero() {
  return (
 <section className="min-h-[80vh] px-6 py-10 lg:py-16 flex items-center bg-white">

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Text Content */}
        <div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Welcome to my Web Development Portfolio!
          </h1>
          <p className="text-gray-600 text-lg mb-4">
            I'm Michael Angelo Mangaoang, a passionate web developer based in the Philippines.
            <br />
            This is where I share my journey in web development, combining creativity and function
          </p>
          <label
            htmlFor="email"
            className="text-sm font-medium text-gray-700 block mb-1"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-gray-200"
          />
          <p className="mt-2 text-xs text-gray-500">
            Read my <a href="#" className="underline">Terms and Conditions</a>
          </p>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src={Photo} 
            alt="Profile"
            className="rounded-xl object-cover w-[400px] h-[400px]"
          />
        </div>
      </div>
    </section>
  );
}
