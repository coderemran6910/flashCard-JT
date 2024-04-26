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
        "Manage your team’s proofing process all in one place, streamline feedback and approvals. Quickly identify bottlenecks in the workflow and address them directly in the platform. Ensure that all team members have access to the latest versions."
    },
    Test: {
      text:
        "Capture important project notes in one accessible location. Make sure that your notes are organized and easy to find when you need them. Use tags and categories to keep everything in order so that your team can stay aligned."
    },
    Game: {
      text:
        "Broadcast updates and news to your entire team. Keep everyone informed about the latest developments and ensure that all stakeholders are aware of changes. Use announcements to celebrate milestones and recognize individual contributions."
    },
    Others: {
      text:
        "Communicate in real-time with your team members. Use chat to quickly solve problems, share updates, and make decisions without delay. The chat feature allows for immediate feedback and helps keep the team connected."
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
          <div className="flex  justify-center  items-center ">
             <div className=' w-[712px] h-[400px] bg-gradient-to-r from-blue-900 to-blue-800 rounded-3xl flex justify-center items-center  '>
             <p className='text-white font-bold text-4xl'>{text} </p>
             </div>
          </div>
        </div>
    </div>

  
        </div>
    );
};

export default RelationFunc;