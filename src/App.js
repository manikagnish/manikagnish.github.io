import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import MyWork from "./components/MyWork";
import HireMe from "./components/HireMe";
import AboutMe from "./components/AboutMe";
import HashLoader from "react-spinners/HashLoader";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  function updateList() {
    const titles = [...document.querySelectorAll("h1, h2")].sort((a, b) => {
      return (
        Math.abs(a.getBoundingClientRect().top) -
        Math.abs(b.getBoundingClientRect().top)
      );
    });

    document
      .querySelectorAll(".selected-circle")
      .forEach((c) => c.classList.remove("selected-circle"));

    document
      .querySelectorAll(".nav-dot")
      [
        [...document.querySelectorAll("h1, h2")].indexOf(titles[0])
      ].classList.add("selected-circle");
  }
  window.addEventListener("scroll", () => {
    updateList();
  });

  return (
    <>
      {loading ? (
        <div className="h-90v w-full flex justify-center items-center">
          <HashLoader color={"#3f3fff"} loading={loading} size={150} />
        </div>
      ) : (
        <div className="relative">
          <Navbar />
          <HeroSection />
          <MyWork />
          <AboutMe />
          <HireMe />
        </div>
      )}
    </>
  );
}

export default App;
