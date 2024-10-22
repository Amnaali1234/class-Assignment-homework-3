import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import About from "./components/About";
import Collection from "./components/Collection";
export default function Home() {
  return(
    <>
    <a href="#Collection"></a>
    <a href="#View collection"></a>

      <Navbar/>
      <Hero/>
      <About/>
      <Collection/>
      <Footer/>
    </>
  )
}