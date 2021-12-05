import DottedNav from "./DottedNav";

export default function HeroSection() {
  return (
    <div className="container mt-16 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
      <div className="flex flex-wrap md:flex-nowrap">
        <DottedNav />
        <div className="flex flex-wrap lg:ml-20 justify-center md:justify-start max-w-xl mt-0 md:my-36">
          <h1 className="leading-tight font-bold text-5xl md:text-6xl lg:text-6xl xl:text-7xl text-center md:text-left ">
            Building
            <br /> beautiful web experiences.
          </h1>
          <div className="w-full flex justify-center md:justify-start">
            <button className="px-8 py-4 bg-theme text-white font-bold mt-12 ">
              <a href="#work" className="flex items-center space-x-3">
                <div>
                  <img src="./images/eye.svg" alt="eye" />
                </div>
                <span>View my work.</span>
              </a>
            </button>
          </div>
        </div>
        <img
          src="images/hero2.svg"
          alt="me"
          className="w-3/4 md:w-1/2 mt-12 md:mt-0 right-0  mx-auto"
        />
      </div>
    </div>
  );
}

// improvent needed for screen width 1000 to 1300
