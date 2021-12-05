export default function AboutMe() {
  return (
    <div
      id="about"
      className="container mt-64 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-44 w-full"
    >
      <section className="w-full  md:flex -flex-row items-start">
        <div className="container">
          <h2 id="work" className="secondary-title">
            About me
          </h2>
          <p className="section-paragraph">
            I am a front-end web developer and user experience designer with
            over 2+ years of experience. I have worked extensively on creating
            inspiring web experiences. I am proficient in JavaScript and its
            libraries like React JS. I create professional UI/UX designs for the
            best experience of the users visiting the site. I am proficient in
            figma and adobe XD.
          </p>
          <h3 className="font-bold">Technologies I use</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6 w-full lg:w-3/5">
            <div className="container flex-col items-center justify-center">
              <img
                src="./images/react.svg"
                alt="project thumbnail"
                className="w-20 lg:w-16 h-20 lg:h-16 object-cover"
              />
              <p>React js</p>
            </div>
            <div className="container flex-col items-center justify-center">
              <img
                src="./images/redux.svg"
                alt="project thumbnail"
                className="w-20 lg:w-16 h-20 lg:h-16 object-cover"
              />
              <p>&nbsp; Redux</p>
            </div>
            <img
              src="./images/nextjs.svg"
              alt="project thumbnail"
              className="w-full lg:w-28 md:block h-16 lg:h-16 object-cover"
            />
            <div className="container flex-col items-center justify-center">
              <img
                src="./images/gatsby.svg"
                alt="project thumbnail"
                className="w-20 lg:w-16 md:block h-20 lg:h-16 object-cover"
              />
              <p>&nbsp;Gatsby</p>
            </div>
            <div className="container flex-col items-center justify-center">
              <img
                src="./images/node.svg"
                alt="project thumbnail"
                className="w-20 lg:w-16 hidden md:block h-20 lg:h-16 object-cover"
              />
              <p>&nbsp;Node js</p>
            </div>

            <p className="text-2xl self-center">ExpressJs</p>
            <img
              src="./images/sass.svg"
              alt="project thumbnail"
              className="w-20 lg:w-16 hidden md:block h-20 lg:h-16 object-cover"
            />
            <div className="container flex-col items-center justify-center">
              <img
                src="./images/github.svg"
                alt="project thumbnail"
                className="w-20 lg:w-16 hidden md:block h-20 lg:h-16 object-cover"
              />
              <p>&nbsp; Github</p>
            </div>
          </div>
        </div>
        <img
          src="./images/profile.jpeg"
          alt="profile"
          className="w-3/4 md:w-1/4 mt-16 right-0  mx-auto rounded-sm "
        />
      </section>
    </div>
  );
}
