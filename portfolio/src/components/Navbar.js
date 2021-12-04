export default function Navbar() {
  return (
    <header>
      <div className="container">
        <a href="/#">Manik.agnish</a>
      </div>
      <div className="">
        <a href="/" className="text-selected-text">
          Home
        </a>
        <a href="/work">My work</a>
        <a href="/about">Aboute me</a>
        <a href="/hire">Hire me</a>
      </div>
    </header>
  );
}
