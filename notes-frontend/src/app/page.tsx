import Hero from "@/components/ui/hero";
import CardNotes from "@/components/ui/cardnotes";
import HowItWorks from "@/components/ui/howitworks";
import Footer from "@/components/ui/footer";

export default function Home() {
  return (
    <main className="bg-white">
      <Hero />
      <div className=" dark:bg-gray-900 bg-yellow-50">
        <HowItWorks />
      </div>
      {/* <hr className="shadow-[8px_8px_0px_black] border-2 my-5 dark: text-white" /> */}
      <div className="grid grid-cols-1 dark:bg-gray-900 bg-white md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        <CardNotes />
        <CardNotes />
        <CardNotes />
        <CardNotes />
        <CardNotes />
        <CardNotes />
      </div>
      {/* <hr className="shadow-[8px_8px_0px_black] border-2 my-5" /> */}
      <Footer />
    </main>
  );
}
