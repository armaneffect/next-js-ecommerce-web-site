import Footer from "@/components/Footer";
import Latest from "@/components/Latest";
import SwiperSlideComponent from "@/components/SwiperSlide";


export default function Home() {
  return (
    <div >
      {/* <Banner/> */}
      <SwiperSlideComponent></SwiperSlideComponent>

<Latest></Latest>

<Footer></Footer>


    </div>
  );
}
