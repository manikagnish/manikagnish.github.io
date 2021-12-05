export default function HireMe() {
  return (
    <div
      id="hire"
      className="container mt-64 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-44 w-full"
    >
      <section className="w-full">
        <h2 id="hire" className="secondary-title">
          Hire me
        </h2>
        <p className="section-paragraph">
          Feel free to to contact me any time, through any method below.
        </p>

        <div className="w-full grid lg:grid-cols-2 gap-8 lg:gap-32 mt-24">
          <div className="space-y-12">
            <div>
              <label className="text-white block mb-6 text-xl font-bold">
                Name
              </label>
              <input className="w-full border border-input-border bg-input px-4 py-4" />
            </div>
            <div>
              <label className="text-white block mb-6 text-xl font-bold">
                Email
              </label>
              <input
                type="email"
                className="w-full border border-input-border bg-input px-4 py-4"
              />
            </div>
            <div>
              <label className="text-white block mb-6 text-xl font-bold">
                Message
              </label>
              <textarea
                type="email"
                className="w-full border border-input-border bg-input px-4 py-4 h-56 resize-none"
              ></textarea>
            </div>
            <button className="px-6 py-2 bg-theme text-white font-bold">
              Send it!
            </button>
          </div>

          <div className="mt-12">
            {/* <!-- Contact info --> */}
            <p className="text-secondary">+91-6283107012</p>
            <a
              href="mailto:manikagnish123@gmail.com"
              className="text-secondary underline mt-3 block"
            >
              manikagnish123@gmail.com
            </a>

            {/* <!-- Socials --> */}
            <div className="flex mt-20 space-x-6 items-center">
              {/* <!-- linkedin --> */}
              <a href="https://www.linkedin.com/in/manik-agnish-7765671b6/">
                <img
                  src="./images/linkedin.svg"
                  alt="linkedin"
                  className="w-10 h-10 lg:w-12 lg:h-12"
                />
              </a>
              {/* <!-- github --> */}
              <a href="https://github.com/manikagnish">
                <img
                  src="./images/github.svg"
                  alt="github"
                  className="w-10 h-10 lg:w-14 lg:h-14"
                />
              </a>
              {/* <!-- Twitter --> */}
              <a href="https://twitter.com/AgnishManik">
                <img
                  src="./images/twitter.svg"
                  alt="twitter"
                  className="w-8 h-8 lg:w-11 lg:h-11"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
