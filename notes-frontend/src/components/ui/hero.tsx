"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Hero({ delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: delay }}
      className="w-full"
    >
      <section className="min-h-screen flex flex-col md:flex-row items-center justify-between p-8 dark:bg-gray-950 ">
        {/* Header Section */}
        <div className="w-full md:w-1/2 mx-10 md:mx-5 order-2 md:order-1 mt-4 md:mt-0 mb-6">
          <div className="max-w-lg mx-auto md:mx-0">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-center md:text-left dark:text-white">
              Welcome to{" "}
              <span className="text-yellow-400 dark:text-cyan-200">
                Notes App
              </span>
            </h1>

            <p className="text-xl mb-6 text-center md:text-left dark:text-white px-2 md:px-0">
              Create your own notes! without login, simple, fast, and private.
            </p>
            <div className="flex flex-row justify-center md:justify-start gap-4 mt-8">
              <button className="px-10 py-1 dark:bg-cyan-300 dark:border-cyan-700 dark:hover:bg-cyan-500 dark:text-black dark:hover:text-black bg-yellow-400 text-white border-4 dark:shadow-[8px_8px_0px_cyan] dark:hover:shadow-none border-black rounded-3xl shadow-[8px_8px_0px_black] hover:bg-orange-400 hover:text-black transition-all duration-300 ease-in-out hover:translate-y-[2px] hover:shadow-none font-bold">
                Get Started
              </button>
              <button className="px-10 py-1 mx-14 dark:hover:bg-cyan-400 dark:hover:text-white bg-white text-black border-4 border-black rounded-3xl hover:bg-black hover:text-white dark:shadow-[8px_8px_0px_white] dark:hover:shadow-none shadow-[8px_8px_0px_black] transition-all  duration-300 ease-in-out hover:translate-y-[2px] hover:shadow-none font-bold">
                What is Notes App?
              </button>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center order-1 md:order-2 mb-6 md:mb-0">
          <Image
            src="/bronya.jpeg"
            alt="image header"
            width={400}
            height={400}
            className="w-3/4 sm:w-2/3 md:w-auto max-w-full shadow-[8px_8px_0px_orange] border-4 border-yellow-300 dark:border-cyan-500 dark:shadow-cyan-500"
          />
        </div>
      </section>
    </motion.div>
  );
}
