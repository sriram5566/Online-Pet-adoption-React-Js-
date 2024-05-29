import React from "react";

import GoldenRetriever from '../../assets/GoldenRetriever.jpg';
import Labrador from '../../assets/Labrador.jpg';
import Chippiparai from '../../assets/Chippiparai.jpg';
import GermenShephard from '../../assets/GermenShephard.jpg';
import Husky from '../../assets/Husky.jpg';
import Rottweiler from '../../assets/Rottweiler.jpg';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

import { useNavigate } from "react-router-dom";


const Breeds = () => {
  const navigate = useNavigate()
  const techs = [
    {
      id: 1,
      src: GoldenRetriever,
      title: "GOLDEN RETRIEVER",
      style: "shadow-blue-500",
    },
    {
      id: 2,
      src: Labrador,
      title: "LABRADOR",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: Chippiparai,
      title: "CHIPPIPARAI",
      style: "shadow-blue-500",
    },
    {
      id: 4,
      src: GermenShephard,
      title: "GERMAN SHEPHARD",
      style: "shadow-blue-500",
    },
    {
      id: 5,
      src: Husky,
      title: "HUSKY",
      style: "shadow-blue-500",
    },
    {
      id: 6,
      src: Rottweiler,
      title: "ROTTWEILER",
      style: "shadow-blue-500",
    },
  ];

  return (
    <div
      name="breeds"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Breeds
          </p>
          <p className="py-6">Dogs are the most variable mammal on earth with around 450 globally recognized dog breeds. Most breeds were derived from small numbers of founders within the last 200 years and since then dogs have undergone rapid phenotypic change and were formed into today's modern breeds due to artificial selection imposed by humans.The breeds possess distinct traits related to morphology which include body size, skull shape, tail phenotype, fur type and colour. Their behavioural traits include guarding, herding, hunting, retrieving and scent detection. </p>
        </div>
        <div>
          <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer hover:scale-110 duration-300"
          onClick={()=>{
           navigate('/register')
            }}>
            Adopt Now
            <span>
              <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
            </span>
          </button>
          </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Breeds;
