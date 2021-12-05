export default function MyWork() {
  return (
    <div
      id="work"
      className="container mt-64 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-44 w-full"
    >
      <section className="w-full">
        <h2 id="work" className="secondary-title">
          My work
        </h2>
        <p className="section-paragraph">
          I’ve worked extensively in creating fast and reliable software using
          technologies like react, redux, next js and gatsby to name a few.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          <a target="_blank" href="/blogr-landing-page">
            <img
              src="./images/blogr.jpg"
              alt="project thumbnail"
              className="w-full bg-nav h-36 lg:h-72 object-cover"
            />
          </a>
          <a href="/ecommerce-product-page">
            <img
              src="./images/sneakers.jpg"
              alt="project thumbnail"
              className="w-full bg-nav h-36 lg:h-72 object-cover"
            />
          </a>
          <a href="/huddle-landing-page">
            <img
              src="./images/huddle.jpg"
              alt="project thumbnail"
              className="w-full md:block bg-nav h-36 lg:h-72 object-cover"
            />
          </a>
          <a href="/theme-swithcer">
            <img
              src="./images/themeswithcer.jpg"
              alt="project thumbnail"
              className="w-full md:block bg-nav h-36 lg:h-72 object-cover"
            />
          </a>
          <a href="/breakout">
            <img
              src="./images/breakout.png"
              alt="project thumbnail"
              className="w-full hidden md:block bg-nav h-36 lg:h-72 object-cover"
            />
          </a>
          <img
            src="https://images.unsplash.com/photo-1559028012-481c04fa702d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1336&q=80"
            alt="project thumbnail"
            className="w-full hidden md:block bg-nav h-36 lg:h-72 object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1603969072881-b0fc7f3d77d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80s"
            alt="project thumbnail"
            className="w-full hidden md:block bg-nav h-36 lg:h-72 object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1618761714954-0b8cd0026356?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="project thumbnail"
            className="w-full hidden md:block bg-nav h-36 lg:h-72 object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1545235617-7a424c1a60cc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80"
            alt="project thumbnail"
            className="w-full hidden md:block md:col-span-2 lg:col-span-1 bg-nav h-36 lg:h-72 object-cover"
          />
        </div>
      </section>
    </div>
  );
}
