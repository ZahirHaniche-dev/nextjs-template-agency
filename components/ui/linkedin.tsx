"use client";

const Linkedin = () => {
  return (
    <button
      className="group fixed bottom-8 right-8 hover:bg-sky-600 bg-sky-700 text-neutral-50 duration-500 font-bold flex justify-start gap-2 items-center p-2 pr-6 rounded-sm z-50"
    >
      <svg
        className="w-8 h-8 fill-neutral-50"
        height="100"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 100 100"
        width="100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M92.86,0H7.12A7.17,7.17,0,0,0,0,7.21V92.79A7.17,7.17,0,0,0,7.12,100H92.86A7.19,7.19,0,0,0,100,92.79V7.21A7.19,7.19,0,0,0,92.86,0ZM30.22,85.71H15.4V38H30.25V85.71ZM22.81,31.47a8.59,8.59,0,1,1,8.6-8.59A8.6,8.6,0,0,1,22.81,31.47Zm63,54.24H71V62.5c0-5.54-.11-12.66-7.7-12.66s-8.91,6-8.91,12.26V85.71H39.53V38H53.75v6.52H54c2-3.75,6.83-7.7,14-7.7,15,0,17.79,9.89,17.79,22.74Z"
        ></path>
      </svg>
      <span className="border-l-2 pl-4 flex items-center">
        LinkedIn
        <span className="relative flex h-3 w-3 ml-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-customGreen"></span>
        </span>
      </span>
    </button>
  );
};

export default Linkedin;
