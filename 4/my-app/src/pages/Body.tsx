
import Background from "../img/background.jpg";

const Body = () => {

const handleClickGallery = () => {
  window.scrollBy({top:window.innerHeight, behavior: 'smooth'})
}

  const handleClickAbout = () => {
    window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
  };
  
  const handleClickContact = () => {
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "smooth" });
  };
  
  

  return (
    <div id="bg" className="overflow-hidden">
      <div className="gap-8 mr-20 md:mr-0 -my-4 font-serif flex flex-col justify-center mx-auto text-center overflow-hidden h-[100vh]">
        <img
          className="absolute -z-10 object-fill h-full w-full"
          src={Background}
          alt="Background"
        />
        <div className="gap-8 font-serif flex flex-col ml-24 lg:ml-0">
          <div className=" flex mx-auto mt-12 ">
            <h1 className="text-5xl font-extrabold flex-col px-2 flex md:flex-row font-serif uppercase text-white">
              Steven <span className="text-red-700"> twelwe</span>{" "}
            </h1>
          </div>
          <p className=" font-serif text-white">Fourteen Forty Fourth </p>
         <div className="flex flex-col mx-auto md:flex-row md:mx-auto gap-12 items-center">
         <button
            className="text-white rounded-full border-2 border-red-600 w-32 p-2 px-5 hover:bg-red-700 duration-500"
            onClick={handleClickAbout}
          >
            About Us
          </button>
          <button
            className="text-white rounded-full border-2 mx-8 border-red-600 w-32  p-2 px-5 hover:bg-red-700 duration-500"
            onClick={handleClickGallery}
          >
            Gallery
          </button>
          <button
            className="text-white rounded-full border-2 border-red-600 w-32  p-2 px-5 hover:bg-red-700 duration-500"
            onClick={handleClickContact}
          >
            Contact
          </button>
         </div>
        </div>
      </div>
    </div>
  );
};
export default Body;