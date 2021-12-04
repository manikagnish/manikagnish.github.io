import DottedNav from "./DottedNav";

export default function HeroSection() {
  return (
    <div className="container mt-16 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
      <div className="flex flex-wrap md:flex-nowrap">
        <DottedNav />
      </div>
    </div>
  );
}
