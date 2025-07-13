import Advertise from "./Advertise";

export default function HeroSection() {
  return (
    <section className="flex flex-col justify-between items-center bg-neutral-100 w-full h-full py-6 px-8 xl:flex-row xl:py-24 xl:px-36">
      <Advertise />
      <img src="/src/assets/Illustration.png" alt="Ad image" />
    </section>
  );
}
