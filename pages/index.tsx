import Head from "next/head";
import { Inter } from "next/font/google";
import HeroSection from "../components/HeroSection";
import ContactUs from "../components/ContactUs_old";
import Badges from "../components/Badges";
import Products from "../components/Products";
import Timeline from "../components/Timeline";
import AboutUs from "../components/AboutUs";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Valley Agro</title>
        <meta
          name="description"
          content="Welcome to Valley Agro, your trusted source for high-quality agro products. Explore our wide range of organically grown wheat, fresh vegetables, and fruits, cultivated with care and sustainability in mind."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroSection />
      <AboutUs />
      <Timeline />
      <Products />
      <Badges />
      <ContactUs />
    </div>
  );
}
