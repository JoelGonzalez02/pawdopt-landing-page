export default function Waitlist() {
  return (
    <section
      id="waitlist"
      className="bg-black text-white w-full py-20 md:py-32"
    >
      <div className="container mx-auto px-6 text-center flex flex-col items-center">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
          Be Part of the Story
        </h2>
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
          Join the private beta for exclusive early access in the Los Angeles
          area and be the first to know when we launch.
        </p>
        <form className="w-full max-w-md">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-grow bg-gray-800 text-white px-6 py-3 rounded-full border border-gray-700 focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
            <button
              type="submit"
              className="bg-white text-black font-semibold px-8 py-3 rounded-full hover:bg-gray-200 transition-colors"
            >
              Join Waitlist
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
