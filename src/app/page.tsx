import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import About from "./components/About";
import Collection from "./components/Collection";
import Link from "next/link";
export default function Home() {
  return(
    <>
    <ul>
      <li>
      <Link href="/"></Link>
    <Link href="/about"></Link>
    <Link href="/collection"></Link>
      </li>
    </ul>
    
      <Navbar/>
      <Hero/>
      <About/>
      <Collection/>
      <Footer/>
    </>
  )
}