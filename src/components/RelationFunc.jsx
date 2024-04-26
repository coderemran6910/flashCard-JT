// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useState } from 'react';
import 'react-tabs/style/react-tabs.css';


const tabData = {
    Study: {
      text:
        "9 + 6 + 7x - 2x - 3",
      
    },
    Quiz: {
      text:
        "Quiz."
    },
    Test: {
      text:
        "Test."
    },
    Game: {
      text:
        "Game."
    },
    Others: {
      text:
        "Others."
    },
  };
  

const RelationFunc = () => {
    const [activeTab, setActiveTab] = useState("Study");

    
  const handleTabClick = (event, tabName) => {
    event.preventDefault();
    setActiveTab(tabName);
  };

  const { text, imgSrc } = tabData[activeTab];

    return (
        <div className="mt-10">
           <h1 className=" text-4xl font-extrabold text-[#0E3B97] ">Relations and Functions ( Mathematics ) </h1> 

          

<div className="bg-secondColor bg-opacity-45 py-20 lg:py-28 ">
     
        <div className="rounded-xl w-full mx-auto">
          <header className="pb-4 mb-6">
            <nav className="flex justify-between lg:justify-center overflow-x-auto mb-4">
              {Object.keys(tabData).map((tabName) => (
                <a
                  key={tabName}
                  href="#"
                  onClick={(e) => handleTabClick(e, tabName)}
                  className={`text-sm md:text-base text-black text-opacity-55 whitespace-nowrap  hover:text-primeColor font-semibold mr-4 lg:mx-4 py-2 transition-colors duration-300 ${
                    activeTab === tabName
                      ? "text-primeColor text-opacity-100 border-b-2 border-primeColor"
                      : ""
                  }`}
                >
                  {tabName}
                </a>
              ))}
            </nav>
          </header>
          <div className=" relative  flex  justify-center  items-center ">

            {/* flash card  */}
             <div className=' w-[712px] h-[400px] bg-gradient-to-tr from-blue-400 to-blue-900 rounded-3xl flex justify-center items-center  '>
             <p className='text-white font-bold text-4xl'>{text} </p>

              <div className=' absolute top-10  flex justify-between  gap-[550px]  '> 
                  <img src="light.png" alt="" />
                  <img src="sound.png" alt="" />
              </div>
             </div>

          </div>
             {/* flash card end   */}

          <div className='flex items-center justify-center mt-10 gap-16'>
              <img className=' w-14 h-14 ' src="reload.png" alt="" />
              <img className='w-14 h-14' src="Left.png" alt="" />
              <span className='text-2              backdrop:xl font-bold '>01/10</span>
              <img className='w-14 h-14' src="Right.png" alt="" />
              <img className='w-14 h-14' src="square.png" alt="" />

          </div>

          <div className='flex justify-between items-center mt-20 '>
            <div>
              <img src="Footerlogo.png" alt="" />             
            </div>
            <div className='flex gap-5 items-center '>
              <img src="plus.png" alt="" />
              <span className='text-2xl text-[#06286E] font-bold '>Create Flashcard</span>
            </div>
          </div>
        </div>
    </div>

  
        </div>
    );
};

export default RelationFunc;