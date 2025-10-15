import { useState } from "react";

export default function Waitlist() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    setMessage("");

    try {
      const response = await fetch(
        "https://pawdopt-server-2.vercel.app/api/waitlist",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong.");
      }

      setMessage(data.message);
      setEmail("");
    } catch (error) {
      if (error instanceof Error) {
        setMessage(error.message);
      } else {
        setMessage("An unexpected error occurred.");
      }
    } finally {
      setIsLoading(false);
    }
  };

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

        <form className="w-full max-w-md" onSubmit={handleSubmit}>
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-grow bg-gray-800 text-white px-6 py-3 rounded-full border border-gray-700 focus:outline-none focus:ring-2 focus:ring-white"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isLoading}
            />
            <button
              type="submit"
              className="bg-white text-black font-semibold px-8 py-3 rounded-full hover:bg-gray-200 transition-colors disabled:bg-gray-400"
              disabled={isLoading}
            >
              {isLoading ? "Joining..." : "Join Waitlist"}
            </button>
          </div>

          {/* Privacy disclaimer */}
          <p className="text-xs text-gray-400 mt-8">
            By joining the waitlist, you agree to receive occasional updates
            about Pawdopt. Your email will only be used for product updates and
            will never be shared with third parties.
          </p>
        </form>

        {message && <p className="mt-4 text-sm text-gray-300">{message}</p>}
      </div>
    </section>
  );
}
