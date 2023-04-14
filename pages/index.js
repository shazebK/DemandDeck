import { useQuery } from "@tanstack/react-query";
import { getUserData } from "../utils/api";
import Header from "../components/LandingPage/Header";
import Footer from "../components/LandingPage/Footer";
import Banner from "../components/LandingPage/Banner";
import Experts from "../components/LandingPage/Experts";
import NewsLetter from "../components/LandingPage/NewsLetter";
import Plans from "../components/LandingPage/Plans";

export default function Home() {
  return (
    <div>
      {/* <Header /> */}
      <Banner />
      <Experts />
      <Plans />
      <NewsLetter />
      <Footer />
    </div>
  );
}
