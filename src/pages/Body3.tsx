import React, { FC } from "react";

const Body3: FC = () => {

  const handlePageUpClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };


  return (
    <div>
      <footer className="w-full h-full mt-96 lg:mt-0 md:mt-72 bg-zinc-900 p-4">
        <div
          id="contact"
          className="lg:ml-40 mr-16 lg:mr-0 mt-56 lg:mt-0 gap-24 flex flex-col justify-center items-center text-center"
        >
          <div className="flex flex-col gap-10">
            <h1 className="text-4xl font-semibold tracking-wider text-white">
              Contact <span className="text-red-600">me</span> with{" "}
              <span className="text-red-600">area</span>{" "}
            </h1>
            <p className="text-white">
              Lorem ıpsum dolar immet lorem ipsum lorem lres
            </p>
          </div>
          <div className="gap-20 flex flex-col ">
            <input
              type="text"
              className="bg-transparent border-b-2 border-white focus:outline-none mx-12 w-72 px-4 py-2 text-white"
              placeholder="Name Surname"
            />
            <input
              type="email"
              className="bg-transparent border-b-2 border-white focus:outline-none mx-12 w-72 px-4 py-2 text-white"
              placeholder="E-Mail"
            />
          </div>
          <div>
            <textarea
              placeholder="Your messages"
              className="duration-700 bg-transparent border-b-2 border-white focus:outline-none active:outline-none mx-12 lg:w-[675px] w-72 px-4 py-2 text-white"
              cols={1}
              rows={1}
            ></textarea>
          </div>
          <div>
            <button className="text-md font-serif tracking-wider text-white bg-red-500 text-center px-8 p-2 border-2 my-4 -ml-1 outline-none border-none border-red-600 rounded-full hover:bg-white hover:text-red-600 duration-500">
              Submit
            </button>
            <button className="px-2 py-5 bg-red-700 text-white absolute rounded-lg right-0"
              onClick={handlePageUpClick}
            >
              {" "}
              Page Up{" "}
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Body3;
