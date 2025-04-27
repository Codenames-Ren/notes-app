"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-between p-8 dark:bg-gray-950 ">
      {/* Header Section */}
      <div className="md:w-1/2 mx-5 ">
        <h1 className="text-5xl font-extrabold mb-4 dark:text-white">
          Welcome to{" "}
          <span className="text-yellow-400 dark:text-cyan-200">Notes App</span>
        </h1>

        <p className="text-xl mb-6 dark:text-white">
          Create your own notes! without login, simple, fast, and private.
        </p>
        <button className="px-9 py-3 dark:bg-cyan-300 dark:border-yellow-50 dark:hover:bg-cyan-500 dark:text-black dark:hover:text-black bg-yellow-400 text-white border-4 border-black rounded-3xl hover:bg-orange-400 hover:text-black transition-all font-bold">
          Get Started
        </button>
        <button className="px-9 py-3 mx-14 dark:hover:bg-cyan-400 dark:hover:text-white bg-white text-black border-4 border-black rounded-3xl hover:bg-black hover:text-white transition-all font-bold">
          What is Notes App?
        </button>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
        <Image
          src="/bronya.jpeg"
          alt="image header"
          width={400}
          height={400}
          className="shadow-[8px_8px_0px_orange] border-4 border-yellow-300 dark:border-cyan-500 dark:shadow-cyan-500"
        />
      </div>
    </section>
  );
}
