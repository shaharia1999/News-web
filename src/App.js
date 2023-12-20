import { AiFillSafetyCertificate } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { TiHome } from "react-icons/ti";
import { CgProfile } from "react-icons/cg";
import { RiProfileFill } from "react-icons/ri";
import { FaHistory } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillCaretUp } from "react-icons/ai";
import { FaPlus } from "react-icons/fa";
import { useState } from "react";
import light from "../src/Images/Toggle button.png";
import dark from "../src/Images/Toggle button (1).png";
import simple1 from "../src/Images/Svg_sample1.png";
import avatar from "../src/Images/Avatar.png";
import love from "../src/Images/Frame 2846.png";
import love1 from "../src/Images/Frame 2846 (3).png";
import love2 from "../src/Images/Frame 2846 (2).png";
import love3 from "../src/Images/Frame 2846 (1).png";
import { AiOutlineDown } from "react-icons/ai";

function App() {
  const [hide, setHide] = useState(true);
  const [darks, setDarks] = useState(false);
  const Tg = () => {
    let btn = document.documentElement.classList.toggle("dark");
    console.log(btn);
    setDarks((pre) => !pre);
  };

  return (
    <div className="flex">
      <div>
        <div
          className={`h-screen relative dark:bg-[#2E1619] dark:text-white bg-[#FFFFFF] ${
            hide ? "w-96" : "w-20"
          }`}
        >
          {hide ? (
            <div className="flex px-10 items-center relative pt-20">
              <AiFillSafetyCertificate className="text-[#FF7594] text-4xl font-medium " />
              <p className="text-[24px] ">
                {" "}
                Medi<span className="text-[#FF7594]">Doc</span>
              </p>
              <AiOutlineArrowLeft
                className="bg-white text-[#FF7594] w-8 h-8 cursor-pointer shadow-lg rounded-full absolute right-[-10px]"
                onClick={() => setHide((prev) => !prev)}
              />
            </div>
          ) : (
            <li
              className={`flex  items-center ${
                !hide && "justify-center"
              } gap-4 py-4 pt-10`}
            >
              <GiHamburgerMenu
                className="text-[#FF7594] text-3xl font-medium cursor-pointer "
                onClick={() => setHide((prev) => !prev)}
              />
            </li>
          )}

          <div className={`mt-32 ${hide ? "px-10" : "px-0"}`}>
            <ul>
              <li
                className={`flex  items-center ${
                  !hide && "justify-center"
                } gap-4 py-4`}
              >
                <TiHome className="text-[#FF7594] text-3xl font-medium " />
                {hide && <p className="text-16px text-[#FF7594]">Home</p>}
              </li>
              <li
                className={`flex  items-center ${
                  !hide && "justify-center"
                } gap-4 py-4`}
              >
                <CgProfile className=" text-3xl font-medium " />
                {hide && <p className="text-16px">Patient Profile </p>}
              </li>

              <li
                className={`flex  items-center ${
                  !hide && "justify-center"
                } gap-4 py-4`}
              >
                <RiProfileFill className=" text-3xl font-medium " />
                {hide && <p className="text-16px ">Appointments</p>}
              </li>
              <li
                className={`flex  items-center ${
                  !hide && "justify-center"
                } gap-4 py-4`}
              >
                <FaHistory className=" text-3xl font-medium " />

                {hide && <p className="text-16px">Medical History</p>}
              </li>
              <li
                className={`flex  items-center ${
                  !hide && "justify-center"
                } gap-4 py-4`}
              >
                <IoSettingsSharp className=" text-3xl font-medium " />
                {hide && <p className="text-16px ">Settings</p>}
              </li>
            </ul>
          </div>
          <div className="absolute bottom-28  w-full flex justify-center">
            {hide ? (
              <p className="text-16px  bg-gradient-to-r w-auto from-[#FF797B]  to-[#FF797B] px-8 py-3 text-white ">
                New appointment
              </p>
            ) : (
              <li
                className={`flex  items-center ${
                  !hide && "justify-center"
                } gap-4 py-4`}
              >
                <div className="h-12 w-12 bg-[#e53a3d] flex items-center justify-center rounded-3xl">
                  <FaPlus className=" text-3xl font-medium w-8 h-8 rounded-full bg-[#FF797B] text-white " />
                </div>
              </li>
            )}
          </div>
        </div>
      </div>

      <div className=" dark:bg-[#150A09] dark:text-white bg-[#F9F9F9] w-full pl-8 pr-2 pt-10 ">
        <div className="flex justify-between items-center  h-24">
          <p className="text-[24px] text-[#646F75] dark:text-white">Home</p>
          <div className="flex justify-center gap-3 ">
            <div className="flex justify-center items-center">
              <img
                alt="Light-mod"
                src={darks ? dark : light}
                className="cursor-pointer"
                onClick={Tg}
              />
            </div>
            <div className="">
              <div className="flex justify-center">
                <img alt="Light-mod" src={avatar} className="cursor-pointer h-14 w-14" />
                <li
                  className={`flex  items-center ${
                    !hide && "justify-center"
                  } gap-4 py-4`}
                >
                  <AiOutlineDown className=" text-3xl font-medium " />
                </li>
              </div>
            </div>
          </div>
        </div>
        {/* Content Div */}
        <div className="grid grid-cols-12 gap-x-28" >
          <div className="col-span-7 ">
            <article className="bg-gradient-to-r from-[#FF797B] via-[#FF7C65] to-[#FF7C65] flex text-white ">
                 <div><img className=" h-[270px] w-[270px]"  alt="doctor" src={simple1}/></div>
                 <div className="flex justify-center items-center text-left flex-col w-full">
                <h3 className="text-2xl">Hello, Mary Jane!</h3>
                <p>Stay Up-to-Date with your appointments.</p> 
                <p>You Have No pending Reports</p> 
                  
                  
                 </div>
            </article>
            <div className="grid grid-cols-4 py-10 gap-4">
            <article className="shadow-md px-5 py-2 dark:bg-[#2B2121]">
              <div>
                <img  alt='love' src={love} />
              </div>
              <p className="font-medium">Pulse Count</p>
              <p className="font-medium">60 bpm</p>
              
              <div className="flex items-center ">
              <AiFillCaretUp className="text-black dark:text-white mr-2"/>
              <p className="text-green-500">Normal</p>
                </div>
            </article>
            <article className="shadow-md px-5 py-2 dark:bg-[#2B2121]">
              <div>
                <img  alt='love' src={love1} />
              </div>
              <p className="font-medium">Pulse Count</p>
              <p className="font-medium">60 bpm</p>
              
              <div className="flex items-center ">
              <AiFillCaretUp className="text-black dark:text-white mr-2"/>
                
                <p className="text-[#82AB0D]">Slightly higher</p>
                </div>
            </article>
            <article className="shadow-md px-5 py-2 dark:bg-[#2B2121]">
              <div>
                <img  alt='love' src={love2} />
              </div>
              <p className="font-medium">Pulse Count</p>
              <p className="font-medium">60 bpm</p>
              
              <div className="flex items-center ">
              <AiFillCaretUp className="text-black dark:text-white mr-2"/>
                
                <p className="text-[#82AB0D]">Slightly higher</p>
                </div>
            </article>
            <article className="shadow-md px-5 py-2 dark:bg-[#2B2121]">
              <div>
                <img  alt='love' src={love3} />
              </div>
              <p className="font-medium">Pulse Count</p>
              <p className="font-medium">60 bpm</p>
              
              <div className="flex items-center ">
              <AiFillCaretUp className="text-black dark:text-white mr-2"/>
                
                <p className="text-green-500">Normal</p>
                </div>
            </article>
          
            </div>
          
  
          </div>
          <div className="col-span-5 bg-red-500">
            <article>asdvfasdf</article>
            <article>asdfasdfasdfa</article>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
