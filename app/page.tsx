import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";

export default function Home() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <Hero/>
      <Services/>
    </div>
  );
}
