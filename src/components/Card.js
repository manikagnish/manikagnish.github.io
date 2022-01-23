export default function Card({
  title,
  description,
  thumbnail,
  github,
  website,
  cardHide,
}) {
  return (
    <div
      className={`card-container h-25 overflow-hidden md:text-xs 2xl:text-sm relative bg-theme ${cardHide}`}
    >
      <div className="w-full bg-theme translate-y-0 content">
        <section className="img-section h-25 w-full">
          <img
            src={thumbnail}
            alt={title}
            className="block h-full w-full object-cover"
          />
        </section>
        <section className="px-12 py-6 flex flex-col justify-center h-25 w-full">
          <p className="m-0 mb-3">{description}</p>
          <div className="w-full flex justify-evenly items-center">
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="flex flex-col items-center p-1 link"
            >
              <img src="./images/github.svg" alt="github" />
              <p className="m-0 text-center">Github repo</p>
            </a>

            {website && (
              <a
                href={website}
                target="_blank"
                rel="noreferrer"
                className="flex flex-col items-center p-1 link"
              >
                <img src="./images/external-link.svg" alt="link to website" />
                <p className="m-0 text-center">live website</p>
              </a>
            )}
          </div>
        </section>
      </div>
      <div className="cursor"></div>
    </div>
  );
}
