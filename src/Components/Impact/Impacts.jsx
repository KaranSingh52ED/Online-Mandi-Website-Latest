import { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import PropTypes from 'prop-types';

const Impacts = () => {
    const [hasAnimated] = useState(false);
    const [countries, setCountries] = useState(0);
    const [employees, setEmployees] = useState(0);
    const [goal, setGoal] = useState(0);
    const [raised, setRaised] = useState(0);
    const [farmers, setFarmers] = useState(0);
    const [sell, setSell] = useState(0);


    const [countriesRef, CountriesInView] = useInView({ triggerOnce: true });
    const [farmersRef, FarmersInView] = useInView({ triggerOnce: true });
    const [employeesRef, EmployeesInView] = useInView({ triggerOnce: true });
    const [goalRef, GoalInView] = useInView({ triggerOnce: true });
    const [raisedRef, RaisedInView] = useInView({ triggerOnce: true });
    const [sellRef, SellInView] = useInView({ triggerOnce: true });


    useEffect(() => {
        if (CountriesInView) {
            setCountries(10);
        }
    }, [CountriesInView]);

    useEffect(() => {
        if (FarmersInView) {
            setFarmers(500);
        }
    }, [FarmersInView]);

    useEffect(() => {
        if (SellInView) {
            setSell(500);
        }
    }, [SellInView]);


    useEffect(() => {
        if (EmployeesInView) {
            setEmployees(35);
        }
    }, [EmployeesInView]);

    useEffect(() => {
        if (GoalInView) {
            setGoal(10);
        }
    }, [GoalInView]);

    useEffect(() => {
        if (RaisedInView) {
            setRaised(2);
        }
    }, [RaisedInView]);

    const CounterInline = ({ end }) => {
        return <CountUp start={0} end={end} duration={2.0} separator="," />;
    };

    return (
        <section className='flex justify-center  p-2 my-10  md:mb-10 md:mt-10 relative'>
            <div className="grid md:grid-cols-6 grid-cols-2 md:gap-10 gap-4 ">
                <div
                    ref={countriesRef}
                    className={`counter-item p-1 w-40 md:w-52 bg-white shadow-inner shadow-purple  border border-b-4 border-primary items-center text-center rounded ${hasAnimated && CountriesInView ? 'animate-counter-up' : ''
                        }`}
                >
                    <h2 className="text-3xl md:text-4xl text-yellow-700 font-aclonica font-bold my-4 " >
                        <CounterInline end={countries} /><span>+</span>
                    </h2>
                    <span className="text-gray-600 mb-10 mt-4 font-serif font-semibold" >Countries</span>
                </div>

                <div
                    ref={employeesRef}
                    className={`counter-item p-1 w-40 md:w-52 bg-white shadow-inner shadow-purple border border-b-4 border-green items-center text-center rounded ${hasAnimated && EmployeesInView ? 'animate-counter-up' : ''
                        }`}
                >
                    <h2 className="text-3xl md:text-4xl text-yellow-700 font-aclonica font-bold my-4 " >
                        <CounterInline end={employees} /><span>+</span>
                    </h2>
                    <span className="text-gray-600 mb-10 mt-4 font-semibold font-serif" >Hard Working Employees</span>
                </div>
                <div
                    ref={sellRef}
                    className={`counter-item p-1 w-40 md:w-52 bg-white shadow-inner shadow-purple border border-b-4 border-red items-center text-center rounded ${hasAnimated && SellInView ? 'animate-counter-up' : ''
                        }`}
                >
                    <h2 className="text-3xl md:text-4xl text-yellow-700   font-aclonica font-bold my-4 " >
                        <CounterInline end={sell} /><span>+ Tons</span>
                    </h2>
                    <span className="text-gray-600 mb-10 mt-4 font-semibold font-serif" >Our Sellings</span>
                </div>

                <div
                    ref={farmersRef}
                    className={`counter-item p-1 w-40 md:w-52 bg-white   border shadow-inner shadow-purple border-b-4 border-blue items-center text-center rounded ${hasAnimated && FarmersInView ? 'animate-counter-up' : ''
                        }`}
                >
                    <h2 className="text-3xl md:text-4xl text-yellow-700 font-aclonica font-bold my-4 " >
                        <CounterInline end={farmers} /><span>+</span>
                    </h2>
                    <span className="text-gray-600 mb-10 mt-4 font-serif font-semibold" >Farmers</span>
                </div>
                <div
                    ref={goalRef}
                    className={`counter-item p-1 w-40 md:w-52  shadow-inner shadow-purple bg-white border border-b-4 border-yellow-900 items-center text-center rounded ${hasAnimated && GoalInView ? 'animate-counter-up' : ''
                        }`}
                >
                    <h2 className="text-3xl md:text-4xl text-yellow-700  font-aclonica font-bold my-4 " >
                        <CounterInline end={goal} /><span>Billion INR</span>
                    </h2>
                    <span className="text-gray-600 mb-10 mt-4 font-serif  font-semibold" >Our Goal</span>
                </div>

                <div
                    ref={raisedRef}
                    className={`counter-item p-1 w-40 md:w-52 shadow-inner shadow-purple bg-white border border-b-4 border-gray-800 items-center text-center rounded ${hasAnimated && RaisedInView ? 'animate-counter-up' : ''
                        }`}
                >
                    <h2 className="text-3xl md:text-4xl text-yellow-700 font-aclonica font-bold my-4 " >
                        <CounterInline end={raised} /><span>+ Crores INR</span>
                    </h2>
                    <span className="text-gray-600 mb-10 mt-4 font-serif font-semibold" >Turn-Over</span>
                </div>
            </div>
        </section>


    );
};

Impacts.propTypes = {
    end: PropTypes.number.isRequired, // Change the prop type to number
};

export default Impacts;
