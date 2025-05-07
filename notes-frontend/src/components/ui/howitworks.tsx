"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const imageData = [
  {
    src: "/bronya.jpeg",
    alt: "image 1",
    title: "Test 1",
  },

  {
    src: "/bronya.jpeg",
    alt: "image 2",
    title: "Test 2",
  },

  {
    src: "/bronya.jpeg",
    alt: "image 2",
    title: "Test 2",
  },

  {
    src: "/bronya.jpeg",
    alt: "image 2",
    title: "Test 2",
  },
];

export default function HowItWorks({ delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // Animation variants untuk merapikan kode animasi
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      transition={{ duration: 0.6, delay }}
      className="w-full"
    >
      <section className="min-h-screen flex flex-col md:flex-row items-center justify-center p-8 dark:bg-gray-950">
        {/* Content Section */}
        <div className="w-full md:w-1/2 mx-4 md:mx-8 lg:mx-12">
          <div className="max-w-lg mx-auto md:mx-0">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-center md:text-left dark:text-white">
              Create Your{" "}
              <span className="text-yellow-400 dark:text-cyan-200">Notes</span>{" "}
              and Enjoy Your Own Documentation
            </h1>

            <p className="text-lg md:text-xl mb-8 text-center md:text-left dark:text-gray-200">
              You can create your own notes and our system will save them. Make
              your own documentation, daily routines, and more - all without
              logging in! We'll use your username to identify your notes, so you
              can enjoy creating with ease 😁
            </p>

            {/* Tombol CTA (optional) */}
            <div className="flex flex-row justify-center md:justify-start gap-4 mt-8">
              <button className="px-10 py-2.5 dark:bg-cyan-300 dark:border-cyan-700 dark:hover:bg-cyan-500 dark:text-black dark:hover:text-black bg-yellow-400 text-white border-4 dark:shadow-[8px_8px_0px_cyan] dark:hover:shadow-none border-black rounded-3xl shadow-[8px_8px_0px_black] hover:bg-orange-400 hover:text-black transition-all duration-300 ease-in-out hover:translate-y-[2px] hover:shadow-none font-bold">
                Start Creating Notes
              </button>
            </div>
          </div>
        </div>

        {/* Gambar atau ilustrasi (placeholder) */}
        <div className="w-full flex-col items-center gap-4 flex">
          <Carousel className="w-full max-w-sm">
            <CarouselContent>
              {imageData.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="p-2">
                    <Card className="shadow-none p-0 bg-main text-main-foreground overflow-hidden border-4 border-black">
                      <CardContent className="flex flex-col items-center justify-center p-4">
                        <div className="w-full aspect-square relative">
                          <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <span className="text-3xl font-base">{index + 1}</span>
                      </CardContent>
                      <div className="w-full bg-black text-white p-2 text-center font-bold">
                        {image.title}
                      </div>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-black text-white border-2 border-black hover:bg-white hover:text-black" />
            <CarouselNext className="bg-black text-white border-2 border-black hover:bg-white hover:text-black" />
          </Carousel>
        </div>
      </section>
    </motion.div>
  );
}
