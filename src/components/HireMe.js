import { useState } from "react";

export default function HireMe() {
  const [message, setMessage] = useState(false);
  return (
    <>
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
            <form
              action="https://formsubmit.co/mozartofcode@gmail.com"
              method="POST"
              className="space-y-12"
            >
              <div>
                <label className="text-white block mb-6 text-xl font-bold">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full border border-input-border bg-input px-4 py-4"
                />
              </div>
              <div>
                <label className="text-white block mb-6 text-xl font-bold">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full border border-input-border bg-input px-4 py-4"
                />
              </div>
              <div>
                <label className="text-white block mb-6 text-xl font-bold">
                  Message
                </label>
                <textarea
                  type="text"
                  name="message"
                  required
                  className="w-full border border-input-border bg-input px-4 py-4 h-56 resize-none"
                ></textarea>
              </div>
              <input
                type="hidden"
                name="_next"
                value="https://manikagnish.com/#hire"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-theme text-white font-bold"
                onClick={() => {
                  setTimeout(() => {
                    setMessage(true);
                  }, 5000);
                }}
              >
                Send it!
              </button>
            </form>

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
                <a
                  href="https://www.linkedin.com/in/manik-agnish-7765671b6/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="./images/linkedin.svg"
                    alt="linkedin"
                    className="w-10 h-10 lg:w-12 lg:h-12"
                  />
                </a>
                {/* <!-- github --> */}
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/manikagnish"
                >
                  <img
                    src="./images/github.svg"
                    alt="github"
                    className="w-10 h-10 lg:w-12 lg:h-12 -mt-1"
                  />
                </a>
                {/* <!-- Twitter --> */}
                <a
                  href="https://twitter.com/AgnishManik"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="./images/twitter.svg"
                    alt="twitter"
                    className="w-10 h-10 lg:w-12 lg:h-12"
                  />
                </a>
                <a
                  href="https://www.codewars.com/users/manikagnish"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="./images/codewars.svg"
                    alt="codewars"
                    className="w-10 h-10 lg:w-12 lg:h-12"
                  />
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
      <p
        className={message ? "visible mt-4 ml-44 font-bold text-xl" : "hidden"}
      >
        Thank you for sending this message. I will get back to you shortly.
      </p>
    </>
  );
}
