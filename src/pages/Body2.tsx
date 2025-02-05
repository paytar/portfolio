import React, { useState, useEffect } from "react";
import SunglassesMan from "../img/sunglasses.jpeg";

const Body2: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);
  const [count, setCount] = useState<number>(0);

  const onClick = () => {
    let newVslue;
    setCount(count + 1);
    if (count > 3) {
      console.log("asd");
    }
  };

  useEffect(() => {
    let animationFramId: Number;

    const handleScroll = () => {
      let elementTop = 0;
      const scrollTop = window.scrollY;
      const targetElement = document.getElementById("scroll-target");

      if (targetElement) {
        elementTop = targetElement.offsetTop;
      }
      if (scrollTop >= elementTop - 200 && !isAnimated) {
        setIsAnimated(true);
        const interval = setInterval(() => {
          if (count < 0) {
            setCount((prevCount) => prevCount + 1);
          } else {
            clearInterval(interval);
          }
        }, 50);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [count, isAnimated]);

  return (
    <body
      id="bg"
      className="bg-zinc-900 mb-96 md:mb-40 lg:mb-0 h-[1200px] flex"
    >
      <div className="xl:ml-44 gap-8 font-serif flex flex-col w-full">
        <div className="bg-zinc-900 h-[100vh] w-auto flex lg:flex-row flex-col ">
          <img
            className="md:object-cover object-cover my-12 ml-12 w-[500px] h-[500px] px-8 xl:w-[600px] xl-h-[1200px] lg:w-[550px] lg:h-[800px] md:w-[500px] md:h-[600px]"
            src={SunglassesMan}
            alt="SunglassesMan"
          />
          {/* img near text */}
          <div className="flex flex-col gap-4 px-16 lg:px-12">
            <h1 className="uppercase text-red-600 text-3xl font-serif font-bold">
              <span className="text-5xl text-white">-</span> steven twelwe
              <span className="text-5xl text-white">-</span>
              <span className="uppercase text-white">hakkında</span>
            </h1>
            <p className="text-white leading-7 tracking-wider max-w-[1000px]">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32. The
              standard chunk of Lorem Ipsum used since the 1500s is reproduced
              below for those interested. Sections 1.10.32 and 1.10.33 from "de
              Finibus Bonorum et Malorum" by Cicero are also reproduced in their
              exact original form, accompanied by English versions from the 1914
              translation by H. Rackham. There are many variations of passages
              of Lorem Ipsum available, but the majority have suffered
              alteration in some form, by injected humour, or randomised words
              which don't look even slightly believable. If you are going to use
              a passage of Lorem Ipsum, you need to be sure there isn't anything
              embarrassing hidden in the middle of text. All the Lorem Ipsum
              generators on the Internet tend to repeat predefined chunks as
              necessary, making this the first true generator on the Internet.
              It uses a dictionary of over 200 Latin words, combined with a
              handful of model sentence structures, to generate Lorem Ipsum
              which looks reasonable. The generated Lorem Ipsum is therefore
              always free from repetition, injected humour, or
              non-characteristic words etc
            </p>
            <h1 className="text-white text-4xl inline-flex my-4">
              <span className="text-red-600">T</span>his
              <span className="text-red-600 ml-2">M</span>y{" "}
              <span className="text-red-600 ml-2">C</span>hannel{" "}
            </h1>
            <button className="p-3 font-bold  bg-tranparent text-white border-2 border-red-600 max-w-32 rounded-full hover:bg-red-600 duration-700">
              Subscribe!
            </button>
            <section>
              <p className="text-2xl font-sans text-white mb-6">
                See my follower
              </p>
              <div className="flex gap-16">
                <div id="scroll-target" className="flex flex-col">
                  <button className="text-white font-mono text-3xl font-extrabold">
                    {count}
                    <span className="text-red-600">K</span>{" "}
                  </button>
                  <button className="text-white text-xl">Youtube</button>
                  <button className="text-white text-xl">Spotify</button>
                </div>
                <div id="scroll-target" className="flex flex-col">
                  <button className="text-white font-mono text-3xl font-extrabold">
                    {count}
                    <span className="text-red-600">K</span>{" "}
                  </button>
                  <button className="text-white text-xl">İnstagram</button>
                  <button className="text-white text-xl">
                    İtunes/Apple Music
                  </button>
                </div>
                <div id="scroll-target" className="flex flex-col">
                  <button className="text-white font-mono text-3xl font-extrabold">
                    {count}
                    <span className="text-red-600">K</span>{" "}
                  </button>
                  <button className="text-white text-xl">Twitter</button>
                  <button className="text-white text-xl">Tiktok</button>
                </div>
                <div id="scroll-target" className="flex flex-col">
                  <button className="text-white font-mono text-3xl font-extrabold">
                    {count}
                    <span className="text-red-600">K</span>{" "}
                  </button>
                  <button className="text-white text-xl">Facebook</button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </body>
  );
};

export default Body2;
