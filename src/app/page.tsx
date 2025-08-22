import Footer from "@/components/Footer";
import Latest from "@/components/Latest";
import SwiperSlideComponent from "@/components/SwiperSlide";

export const metadata = {
  title: "My Home Page",
  description: "This is my awesome homepage",
  keywords: "nextjs, react, homepage",
  authors: [{ name: "Arman Khan", url: "https://armaneffect.vercel.app/" }],
  openGraph: {
    title: "My Home Page",
    description: "This is my awesome homepage",
    url: "https://armaneffect.vercel.app/",
    siteName: "MySite",
    images: [
      {
        url: "https://armaneffect.vercel.app/profile2.jpg",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};



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
