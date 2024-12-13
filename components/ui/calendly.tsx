"use client";

const Calendly = () => {
  return (
    <button
      onClick={() => window.open("https://calendly.com/", "_blank")}
      className="group fixed bottom-8 left-8 hover:bg-[#0A66C2] bg-white text-neutral-50 duration-500 font-bold flex justify-start gap-2 items-center p-2 pr-6 rounded-sm z-50"
    >
      <img
        src="/assets/logo/calendly.png"
        alt="Calendly Logo"
        className="w-10 h-8"
      />
      <span className="border-l-2 pl-4 flex items-center text-gray-800 hover:text-white">
        Calendly
        <span className="relative flex h-3 w-3 ml-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#9BB1F4] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-customGreen"></span>
        </span>
      </span>
    </button>
  );
};

export default Calendly;
