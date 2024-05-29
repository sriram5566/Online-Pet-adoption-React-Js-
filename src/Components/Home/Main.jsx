import React from "react";
import HeroImage from "../../assets/HeroImage.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate()
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
          This ia a Online Pet Adoption Platform
            
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
          Look at the cuteness! This boy is adorable and he is full of love and is super playful.
          Make sure you have plenty of cat toys around because this boy loves his toys! 
          Jack and his brothers are also super unique as they are polydactyl in their front paws.
          </p>

          <div>
          <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer hover:scale-110 duration-300"
          onClick={()=>{
           navigate('/login')
            }}>
            Login
            <span>
              <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
            </span>
          </button>
          </div>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-5/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
