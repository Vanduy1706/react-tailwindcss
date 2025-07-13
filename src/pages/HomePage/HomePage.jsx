import Achievement from "./components/achievement/Achievement";
import Calender from "./components/calender/Calender";
import Client from "./components/client/Client";
import Community from "./components/community/Community";
import Customer from "./components/customer/Customer";
import Footer from "./components/footer/Footer";
import Forum from "./components/forum/Forum";
import Header from "./components/header/Header";
import HeroSection from "./components/hero/HeroSection";
import Unlock from "./components/unlock/Unlock";

export default function HomePage() {
  return (
    <>
      <Header />
      <HeroSection />
      <Client />
      <Community />
      <Unlock />
      <Achievement />
      <Calender />
      <Customer />
      <Forum />
      <Footer />
    </>
  );
}
