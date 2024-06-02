import React from 'react';
import { HiBadgeCheck } from "react-icons/hi";
import { useEffect, useRef } from 'react';
import CEO from "../../images/Lakshay.jpg";
import { useInView } from "react-intersection-observer";

const teamData = [
   
    
    
    {
        name: 'Lakshaya Nagar',
        role: "Founder of Online Mandi",
        role2: "CEO",
        image: CEO,
        badge: <HiBadgeCheck />,
    },


];

const Team = () => {

    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const initialDisplayCount = 2;
    const [displayCount, setDisplayCount] = React.useState(initialDisplayCount);

    const handleViewMore = () => {
        setDisplayCount(displayCount + initialDisplayCount);
    };


    return (
        <div className='justify-center align-center mt-1 pb-2'>
            
            <div className="flex justify-end items-end  mt-2 relative">
                <div
                    ref={ref}
                    className={`grid md:grid-cols-1 grid-cols-1 gap-4 `}>
                    {teamData.map((team, index) => (
                        <div key={index}
                            className={`rounded-md relative pb-16 ${inView ? "zoom-in zoom-in-animation-active" : ""} `}  >
                            <img src={team.image} alt={`Team-${index + 1}`} className="w-full h-full min-h-60 object-cover object-center rounded-md" />
                            <div className="md:w-[50%] w-[70%] h-32 absolute bottom-0 left-1/2 pb-8 transform -translate-x-1/2 bg-white border-red  shadow-inner shadow-black ring-1 ring-purple rounded-3xl border-b-8 border-t-2 md:mt-3 text-center">
                                <h2 className=' font-raleway mt-1 sm:mt-2 md:mt-3 text-lg font-bold'>{team.name}</h2>
                                <div className='flex items-center justify-center mt-1 md:mt-3'>
                                    <p className='font-raleway font-bold text-lg text-gray-600'>{team.role2}</p>
                                    <p className='ml-4 text-xl items-center text-green'>{team.badge}</p>
                                </div>
                                <p className='mt-1 md:mt-3 font-serif text-md font-semibold  text-gray-600'>{team.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* After Team Data */}
            {displayCount < teamData.length && (
                <div className='flex justify-center mt-4'>
                    <button
                        className='px-4 py-2 bg-green hover:bg-primary text-white rounded-sm font-quicksand'
                        onClick={handleViewMore}
                    >
                        View More
                    </button>
                </div>
            )}
        </div>
    );
};

export default Team;
