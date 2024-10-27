import Archive from "@/components/home/Archive";
import Hero from "@/components/home/Hero";
import Reviews from "@/components/home/Reviews";
import Services from "@/components/home/Services";
import Slogan from "@/components/home/Slogan";

export default function Home() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <Hero/>
      <Services/>
      <Archive/>
      <Reviews/>
      <Slogan/>
    </div>
  );
}
