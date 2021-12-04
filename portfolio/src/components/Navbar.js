export default function Navbar() {
  return (
    <header className="py-6">
      <div className="container flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
        <a href="/#" className="text-lg font-bold">
          Manik.agnish
        </a>
        <div className="hidden md:flex space-x-12 items-center">
          <a href="/" className="text-selected-text">
            Home
          </a>
          <a href="/#work">My work</a>
          <a href="/#about">About me</a>
          <a href="/#hire">
            <button className="px-6 py-2 bg-theme font-bold">Hire me</button>
          </a>
        </div>
        <div className="md:hidden">
          <img src="./images/hamburger.svg" alt="hamburger menu" />
        </div>
      </div>
    </header>
  );
}
