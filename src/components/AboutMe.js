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
            best experience of the users visiting the site. I work with tools
            like figma, adobe XD and photoshop.
          </p>
          <h3 className="font-bold text-xl">Technologies I use</h3>
          <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6 w-full xl:w-4/5 2xl:3/5">
            <div className="container flex-col items-center justify-center">
              <img
                src="./images/react.svg"
                alt="project thumbnail"
                className=" w-16  h-16 object-cover"
              />
              <p>React js</p>
            </div>
            <div className="container flex-col items-center justify-center">
              <img
                src="./images/redux.svg"
                alt="project thumbnail"
                className=" w-16  h-16 object-cover"
              />
              <p>&nbsp; Redux</p>
            </div>
            <div className="container flex-col items-center justify-center">
              <img
                src="./images/nextjs.svg"
                alt="project thumbnail"
                className=" w-28 md:block h-16 object-cover -ml-2"
              />
              <p>&nbsp; Next.js</p>
            </div>

            <div className="container flex-col items-center justify-center">
              <img
                src="./images/figma.svg"
                alt="project thumbnail"
                className=" w-16 md:block h-16 object-cover"
              />
              <p>&nbsp;Figma</p>
            </div>
            <div className="container flex-col items-center justify-center">
              <img
                src="./images/node.svg"
                alt="project thumbnail"
                className=" w-16  md:block  h-16 object-cover"
              />
              <p>&nbsp;Node js</p>
            </div>
            <div className="container flex-col items-center justify-center">
              <p className="text-2xl self-center h-12 mt-4 -ml-2">express</p>
              <p>Express.js</p>
            </div>
            <div className="container flex-col items-center justify-center">
              <img
                src="./images/sass.svg"
                alt="project thumbnail"
                className=" w-16  md:block  h-16 object-cover"
              />
              <p>&nbsp; Sass</p>
            </div>

            <div className="container flex-col items-center justify-center">
              <img
                src="./images/github.svg"
                alt="project thumbnail"
                className=" w-16  md:block  h-16 object-cover"
              />
              <p>&nbsp; Github</p>
            </div>
          </div>
        </div>
        <img
          src="./images/profile5.png"
          alt="profile"
          className="w-11/12 md:w-2/5 mt-16 right-0  mx-auto rounded-sm "
        />
      </section>
    </div>
  );
}
