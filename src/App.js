import { AiFillSafetyCertificate } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { TiHome } from "react-icons/ti";
import { CgProfile } from "react-icons/cg";
import { RiProfileFill } from "react-icons/ri";
import { FaHistory } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillCaretUp } from "react-icons/ai";
import { FaCheckSquare } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { useState } from "react";
import light from "../src/Images/Toggle button.png";
import dark from "../src/Images/Toggle button (1).png";
import simple1 from "../src/Images/Svg_sample1.png";
import simple2 from "../src/Images/Svg_sample2.png";
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
      
      <div className={`md:fixed lg:relative`}>
        
        <div
          className={`h-screen lg:h-full relative dark:bg-[#2E1619] dark:text-white bg-[#FFFFFF] ${
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
              <p className="text-16px  bg-gradient-to-r w-auto from-[#FF797B] rounded-md to-[#FF797B] px-8 py-3 text-white ">
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
{/* main */}
      <div className="md:pl-28  dark:bg-[#150A09] dark:text-white bg-[#F9F9F9] w-full pl-10 pr-7 pt-5  "> 
       <div className="flex justify-between items-center  h-24 py-18">
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
        <div className={` ${hide?'lg:gap-x-14 lg:grid lg:grid-cols-12':'lg:gap-x-28 lg:grid lg:grid-cols-12'}`} >
          <div className="lg:col-span-7 ">
            <article className="bg-gradient-to-r from-[#FF797B] via-[#FF7C65] to-[#FF7C65] flex text-white ">
                 <div><img className=" h-[270px] w-[270px]"  alt="doctor" src={simple1}/></div>
                 <div className="flex justify-center items-center text-left flex-col w-full">
                <h3 className="text-2xl">Hello, Mary Jane!</h3>
                <p>Stay Up-to-Date with your appointments.</p> 
                <p>You Have No pending Reports</p> 
                  
                  
                 </div>
            </article>
            <div className="grid grid-cols-4 py-10 gap-4">
            <article className="shadow-md rounded-md px-5 py-2 dark:bg-[#2B2121]">
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
            <article className="shadow-md rounded-md px-5 py-2 dark:bg-[#2B2121]">
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
            <article className="shadow-md rounded-md px-5 py-2 dark:bg-[#2B2121]">
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
            <article className="shadow-md rounded-md px-5 py-2 dark:bg-[#2B2121]">
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

            {/* Todo List  */}
            <div className="bg-white dark:bg-[#2c2121] px-5 py-3">
              <h3 className="pb-4 text-2xl">To-Do List</h3>
              <article className="flex justify-between gap-x-2">
                <textarea className="w-10/12"></textarea>
                <div className="">
                <button className="bg-[#FF797B] w-28 py-1 font-medium text-white rounded-md">Add</button>
                </div>
                
              </article>
              <article className="flex justify-between gap-x-2 mt-8">
                
                 <div className="flex justify-center items-center"><FaCheckSquare className="text-[#EDEBEB] text-3xl mr-3" />
                 <p>Select All</p></div>
                 <div><button className="bg-[#FF797B] w-28 py-1 font-medium text-white rounded-md">Done</button></div>
              </article>
              <article className="mt-10">
                <ul>
                  <li className="flex justify-between items-center py-1">
                    <div className="flex justify-center items-center">
                    <FaCheckSquare className="text-[#FF797B] text-3xl mr-3" />
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                    </div>
                 
                  <p className="text-[#E0E0E0]">Last Added: 10 sep 2022 </p>
                  </li>
                  <li className="flex justify-between items-center py-1">
                    <div className="flex justify-center items-center">
                    <FaCheckSquare className="text-[#E0E0E0] text-3xl mr-3" />
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                    </div>
                 
                  <p className="text-[#E0E0E0]">Last Added: 10 sep 2022 </p>
                  </li>
                  <li className="flex justify-between items-center py-1">
                    <div className="flex justify-center items-center">
                    <FaCheckSquare className="text-[#E0E0E0] text-3xl mr-3" />
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                    </div>
                 
                  <p className="text-[#E0E0E0]">Last Added: 10 sep 2022 </p>
                  </li>
                  <li className="flex justify-between items-center py-1">
                    <div className="flex justify-center items-center">
                    <FaCheckSquare className="text-[#E0E0E0] text-3xl mr-3" />
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                    </div>
                 
                  <p className="text-[#E0E0E0]">Last Added: 10 sep 2022 </p>
                  </li>
                
                </ul>
              </article>

            </div>
          
  
          </div>

          
           <div className="lg:col-span-5 ">
            <article>
            <div className="bg-white dark:bg-[#2c2121] px-5 py-3">
              <h3 className="pb-4 text-2xl">Upcoming-Events</h3>
           
              <article className="mt-5">
                <ul>
                  <li className="flex justify-between items-center dark:bg-[#6a5050]  bg-[#FDDAD6] rounded-lg border mt-5">
                    <div className="flex justify-center items-center">
                    <div className="bg-white dark:bg-[#2c2121] px-3 py-2 rounded-md">
                      <p>2022</p>
                      <p>23</p>
                      <p>Sep</p>
                    </div>
                    <div className="px-2 py-1">
                    <p className="font-medium">Dr. Muhammad Abdul Hussein </p>
                    <p>Cardiologist </p>
                    <div className="flex gap-2 oy-4">
                      <button className="bg-white dark:bg-[#2c2121] px-2 p-1 rounded-md"> Start Morning</button>
                      <button className="bg-white dark:bg-[#2c2121] px-2 p-1 rounded-md">Time 10:00 AM</button>
                    </div>
                    </div>
                  
                    </div>
                
                  </li>
                  <li className="flex justify-between items-center dark:bg-[#6a5050]  bg-[#FDDAD6] rounded-lg border mt-5">
                    <div className="flex justify-center items-center">
                    <div className="bg-white dark:bg-[#2c2121] px-3 py-2 rounded-md">
                      <p>2022</p>
                      <p>23</p>
                      <p>Sep</p>
                    </div>
                    <div className="px-2 py-1">
                    <p className="font-medium">Dr. Muhammad Abdul Hussein </p>
                    <p>Cardiologist </p>
                    <div className="flex gap-2 oy-4">
                      <button className="bg-white dark:bg-[#2c2121] px-2 p-1 rounded-md"> Start Morning</button>
                      <button className="bg-white dark:bg-[#2c2121] px-2 p-1 rounded-md">Time 10:00 AM</button>
                    </div>
                    </div>
                  
                    </div>
                
                  </li>
                  <li className="flex justify-between items-center dark:bg-[#6a5050]  bg-[#FDDAD6] rounded-lg border mt-5">
                    <div className="flex justify-center items-center">
                    <div className="bg-white dark:bg-[#2c2121] px-3 py-2 rounded-md">
                      <p>2022</p>
                      <p>23</p>
                      <p>Sep</p>
                    </div>
                    <div className="px-2 py-1">
                    <p className="font-medium">Dr. Muhammad Abdul Hussein </p>
                    <p>Cardiologist </p>
                    <div className="flex gap-2 oy-4">
                      <button className="bg-white dark:bg-[#2c2121] px-2 p-1 rounded-md"> Start Morning</button>
                      <button className="bg-white dark:bg-[#2c2121] px-2 p-1 rounded-md">Time 10:00 AM</button>
                    </div>
                    </div>
                  
                    </div>
                
                  </li>
                  <li className="flex justify-between items-center dark:bg-[#6a5050]  bg-[#FDDAD6] rounded-lg border mt-5">
                    <div className="flex justify-center items-center">
                    <div className="bg-white dark:bg-[#2c2121] px-3 py-2 rounded-md">
                      <p>2022</p>
                      <p>23</p>
                      <p>Sep</p>
                    </div>
                    <div className="px-2 py-1">
                    <p className="font-medium">Dr. Muhammad Abdul Hussein </p>
                    <p>Cardiologist </p>
                    <div className="flex gap-2 oy-4">
                      <button className="bg-white dark:bg-[#2c2121] px-2 p-1 rounded-md"> Start Morning</button>
                      <button className="bg-white dark:bg-[#2c2121] px-2 p-1 rounded-md">Time 10:00 AM</button>
                    </div>
                    </div>
                  
                    </div>
                
                  </li>
              
                 
                </ul>
              </article>

            </div>
            </article>
            <article className="px-5 bg-white dark:bg-[#2c2121] mt-3">
              <div className="flex justify-between py-4 px-2"><p>Covid-19 Updates</p>
              <p>T10 September 2022<br/> AM Thursday  10:00:00 AM</p>
              </div>
            <article className="bg-gradient-to-r  flex px-2 ">
                 <div className=""><img className=" h-[270px] w-[270px] "  alt="doctor" src={simple2}/></div>
                 <div className="flex justify-center items-center text-left bg-gradient-to-r text-white from-[#FF797B] via-[#FF7C65] to-[#FF7C65] flex-col w-full rounded-md ">
                <h3 className="text-2xl text-center">Infection Number <br/><span>500</span></h3>
                <h3 className="text-2xl text-center mt-4">Infection Ratio <br/><span>10%</span></h3>
    
                  
                 </div>
            </article>
            </article>
          </div> 
        </div>
      </div>
    </div>
  );
}

export default App;
