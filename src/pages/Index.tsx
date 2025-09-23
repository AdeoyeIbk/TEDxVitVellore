import heroImg from "../assets/images/hero-img.png";

export default function Index() {
  return (
    <>
      <section className="flex items-center justify-around text-left p-24 mt-20 gap-16 h-lvh">
        <div className="flex flex-col gap-16 w-1/2">
          <h1 className="text-4xl font-bold">Ideas worth spreading.</h1>
          <div className="flex flex-col gap-8 justify-start">
            <p className="font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
            <div className="flex justify-start">
              <button className="mt-4 rounded-full border-2 border-tedx-500 py-3 px-4 text-sm text-red-500 hover:cursor-pointer">
                Upcoming events
              </button>
            </div>
          </div>
        </div>
        <img src={heroImg} alt="hero image" className="w-1/2 h-auto object-cover" />
      </section>
    </>
  );
}
