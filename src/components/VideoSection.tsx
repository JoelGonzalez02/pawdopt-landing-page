export default function VideoSection() {
  return (
    // --- THIS IS THE UPDATED LINE ---
    // We make the section full-height and use flexbox to center the content vertically.
    <section className="w-full min-h-screen bg-gray-50 dark:bg-gray-950 flex flex-col items-center justify-center p-6">
      {/* This container now just holds the content and provides horizontal constraints */}
      <div className="w-full max-w-4xl mx-auto flex flex-col items-center">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
            See Pawdopt in Action
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Watch how easy it is to discover, connect with, and adopt your new
            best friend.
          </p>
        </div>

        {/* Video Player */}
        <div className="w-full aspect-video rounded-xl shadow-2xl overflow-hidden">
          <iframe
            src="https://player.vimeo.com/video/1120041213"
            width="100%"
            height="100%"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="Pawadopt App Promo Video"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
