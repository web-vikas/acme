import FullScreenSwiper from "@/components/full-screen-swiper";
import { Supermart } from "@/components/supermart";
export default function Home() {
  return (
    <section className="">
      <div className=" mb-5">
        <Supermart/>
      </div>
      <div className="border-3">
        <FullScreenSwiper />
      </div>
    </section>
  );
}
