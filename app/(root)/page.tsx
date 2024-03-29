import FullScreenSwiper from "@/components/full-screen-swiper";
import { Supermart } from "@/components/supermart";
import { Cards } from "@/components/Cards"; 
export default function Home() {
  return (
    <section className="">
      <div className=" mb-5">
        <Supermart/>
      </div>
      <div className="border-3 mb-5">
        <FullScreenSwiper />
      </div>
      <div>
        <Cards/>
      </div>
    </section>
  );
}
