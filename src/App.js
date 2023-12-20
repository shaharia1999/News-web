import { AiFillSafetyCertificate } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { TiHome } from "react-icons/ti";
import { CgProfile } from "react-icons/cg";
import { RiProfileFill } from "react-icons/ri";
import { FaHistory } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaPlus } from "react-icons/fa";
import { useState } from "react";


function App() {
  const [hide, setHide] = useState(true);
  const Tg = () => {
    let btn = document.documentElement.classList.toggle("dark");
    console.log(btn);
  };

  return (
    <div className="flex">
      <div>
        <div className={`h-screen relative  bg-[#FFFFFF] ${hide? 'w-96':'w-20'}`}>
          {
            hide ?  <div
            className=
              'flex px-10 items-center relative mt-20'
          >
            <AiFillSafetyCertificate className="text-[#FF7594] text-4xl font-medium " />
            <p className="text-[24px] ">
              {" "}
              Medi<span className="text-[#FF7594]">Doc</span>
            </p>
            <AiOutlineArrowLeft
              className="bg-white text-[#FF7594] w-8 h-8 cursor-pointer shadow-lg rounded-full absolute right-[-10px]"
              onClick={() => setHide((prev) => !prev)}
            />
          </div>:<li className={`flex  items-center ${!hide && 'justify-center'} gap-4 py-4 mt-10`}>
                <GiHamburgerMenu className="text-[#FF7594] text-3xl font-medium cursor-pointer " onClick={() => setHide((prev) => !prev)} />
                
              </li>
          }
        
          <div className={`mt-32 ${hide?'px-10':'px-0'}`}>
            <ul>
              <li className={`flex  items-center ${!hide && 'justify-center'} gap-4 py-4`}>
                <TiHome className="text-[#FF7594] text-3xl font-medium " />
                {hide && <p className="text-16px text-[#FF7594]">Home</p>}
              </li>
              <li className={`flex  items-center ${!hide && 'justify-center'} gap-4 py-4`}>
                <CgProfile className=" text-3xl font-medium " />
                {hide && <p className="text-16px">Patient Profile </p>}
              </li>

              <li className={`flex  items-center ${!hide && 'justify-center'} gap-4 py-4`}>
                <RiProfileFill className=" text-3xl font-medium " />
                {hide && <p className="text-16px ">Appointments</p>}
              </li>
              <li className={`flex  items-center ${!hide && 'justify-center'} gap-4 py-4`}>
                <FaHistory className=" text-3xl font-medium " />

                {hide && <p className="text-16px">Medical History</p>}
              </li>
              <li className={`flex  items-center ${!hide && 'justify-center'} gap-4 py-4`}>
                <IoSettingsSharp className=" text-3xl font-medium " />
                {hide && <p className="text-16px ">Settings</p>}
              </li>
            </ul>
          </div>
          <div className="absolute bottom-28  w-full flex justify-center">
            {hide ?<p className="text-16px  bg-gradient-to-r w-auto from-[#FF797B]  to-[#FF797B] px-8 py-3 text-white ">
                New appointment
              </p>:<li className={`flex  items-center ${!hide && 'justify-center'} gap-4 py-4`}>
                <div className="h-12 w-12 bg-[#e53a3d] flex items-center justify-center rounded-3xl"><FaPlus className=" text-3xl font-medium w-8 h-8 rounded-full bg-[#FF797B] text-white " /></div>
                
                
              </li>
              
            }
          </div>
        </div>
      </div>

      <div className="bg-[#F9F9F9] w-full">
        <button className="px-5 py-2 bg-green text-white " onClick={Tg}>
          Toggle
        </button>
      </div>
    </div>
  );
}

export default App;
