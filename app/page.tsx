import Archive from "@/components/home/Archive";
import Hero from "@/components/home/Hero";
import Portfolio from "@/components/home/Portfolio";
import Reviews from "@/components/home/Reviews";
import Services from "@/components/home/Services";
import Slogan from "@/components/home/Slogan";

// interface
import { BASE_URL } from "@/config/apiConfig";
import { IResultHome } from "@/data/interface/Home";

export default async function Home() {
  const homeResult = await fetch(BASE_URL + "/home", { cache: 'no-store' })
  const homeData: IResultHome = await homeResult.json()
 
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <Hero />
      <Services services={homeData.data.services} />
      <Portfolio number={1} start={true} title="ویدئوها و تیزرهای تبلیغاتی" />
      <Portfolio number={2} start={false} title="ویدئوها و تیزرهای تبلیغاتی" />
      <Archive />
      <Reviews />
      <Slogan />
    </div>
  );
}
