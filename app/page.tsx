import Banner from "../components/Banner";
import SliderControls from "../components/SliderControls";
import PromoSection from "../components/PromoSection";

export default function Home() {
  return (
    <main className="min-h-screen w-full font-sans relative overflow-x-hidden">
      {/* Banner Section */}
      <div className="relative w-full">
        <Banner />
        <SliderControls />
      </div>
    </main>
  );
}
