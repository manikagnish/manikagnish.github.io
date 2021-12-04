import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import MyWork from "./components/MyWork";
import HireMe from "./components/HireMe";
import AboutMe from "./components/AboutMe";

function App() {
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

  updateList();
  window.addEventListener("scroll", () => {
    updateList();
  });
  return (
    <>
      <Navbar />
      <HeroSection />
      <MyWork />
      <HireMe />
    </>
  );
}

export default App;
