import { useState } from "react";

export default function Navbar() {
  const [menu, setMenu] = useState(false);
  return (
    <header className="py-6">
      <div className="container flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
        <a href="/#" className="text-xl font-bold">
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

        <div className={menu ? "go-left" : "go-right"}>
          <a
            href="/"
            className="text-selected-text"
            onClick={() => {
              setMenu(false);
            }}
          >
            Home
          </a>
          <a
            href="/#work"
            onClick={() => {
              setMenu(false);
            }}
          >
            My work
          </a>
          <a
            href="/#about"
            onClick={() => {
              setMenu(false);
            }}
          >
            About me
          </a>
          <a
            href="/#hire"
            onClick={() => {
              setMenu(false);
            }}
          >
            <button className="px-6 py-2 bg-theme font-bold">Hire me</button>
          </a>
        </div>

        <div className="md:hidden cursor-pointer">
          <img
            src="./images/hamburger.svg"
            alt="hamburger menu"
            onClick={() => {
              setMenu(true);
            }}
          />
        </div>

        <div className={menu ? "z-10 md:hidden" : "hidden"}>
          <img
            className="cursor-pointer h-6"
            src="./images/close.svg"
            alt="close menu"
            onClick={() => {
              setMenu(false);
            }}
          />
        </div>
      </div>
    </header>
  );
}
