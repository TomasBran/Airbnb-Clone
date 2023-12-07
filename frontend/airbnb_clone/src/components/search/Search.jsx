import { useEffect, useRef, useState } from 'react';
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns";
import { Button } from '@material-tailwind/react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPerson,
    faCalendarDays,
    faMapLocationDot,
    faMagnifyingGlass
  } from "@fortawesome/free-solid-svg-icons";

const Search = () => {
    const [destination, setDestination] = useState("");
    const [openDate, setOpenDate] = useState(false);
    const [date, setDate] = useState([
        {
        startDate: new Date(),
        endDate: new Date(),
        key: "selection",
        },
    ]);
    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1,
    });

    const handleOption = (name, operation) => {
        setOptions((prev) => {
        return {
            ...prev,
            [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
        };
        });
    }; 

    const dateRef = useRef(null);
    const optionsRef = useRef(null);
  
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (
            (dateRef.current && !dateRef.current.contains(event.target)) &&
            (optionsRef.current && !optionsRef.current.contains(event.target))
          ) {
            setOpenDate(false);
            setOpenOptions(false);
          } else if (dateRef.current && !dateRef.current.contains(event.target)) {
            setOpenDate(false);
          } else if (optionsRef.current && !optionsRef.current.contains(event.target)) {
            setOpenOptions(false);
          }
      };
  
      document.addEventListener('mousedown', handleClickOutside);
  
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);
   
    console.log(destination);

    return (
        <div className="flex justify-center absolute z-10 bg-white box-border mt-32 ml-20 shadow-md hover:shadow-lg border-2 border-gray-300 rounded-xl"> 
                <div className="h-30 flex border items-center justify-around p-3 rounded-xl gap-4 text-sm">
                    <div className="flex items-center gap-2.5">   
                        <FontAwesomeIcon icon={faMapLocationDot} />            
                        <input
                        type="text"
                        placeholder="¿A dónde vas?"
                        className="border-0 outline-0 w-20 md:w-28"
                        onChange={(e) => setDestination(e.target.value)}
                        />
                    </div>
                    <div className="flex items-center gap-2.5" ref={dateRef}>  
                        <FontAwesomeIcon icon={faCalendarDays} /> 
                        <div className="flex justify-center"> 
                            <span className="md:hidden cursor-pointer text-gray-400"  onClick={() => setOpenDate(!openDate)}>Fechas</span>            
                            <span
                            onClick={() => setOpenDate(!openDate)}
                            className="cursor-pointer text-gray-400 hidden md:inline"
                            >{`${format(date[0].startDate, "dd/MM/yyyy")} - ${format(
                            date[0].endDate,
                            "dd/MM/yyyy"
                            )}`}</span>
                            {openDate && (
                            <DateRange
                                editableDateInputs={true}
                                onChange={(item) => setDate([item.selection])}
                                moveRangeOnFirstSelection={false}
                                ranges={date}
                                className="absolute z-10 mt-20 sm:mt-14 lg:mt-10"
                                minDate={new Date()}
                            />
                            )}
                        </div>
                    </div>
                    <div className="flex items-center gap-2.5" ref={optionsRef}> 
                        <FontAwesomeIcon icon={faPerson} />
                        <div className="flex justify-center"> 
                            <span className="md:hidden cursor-pointer text-gray-400" onClick={() => setOpenOptions(!openOptions)}>Huéspedes</span>     
                            <span
                            onClick={() => setOpenOptions(!openOptions)}
                            className="cursor-pointer text-gray-400 hidden md:inline"
                            >{`${options.adult} adultos · ${options.children} menores · ${options.room} habitaciones`}</span>
                            {openOptions && (
                            <div className="z-10 absolute mt-20 sm:mt-14 lg:mt-10 text-gray-700 shadow-lg bg-white">
                                <div className="w-52 flex justify-between m-3">
                                    <span className="flex items-center px-1.5">Adultos</span>
                                    <div className="flex items-center gap-2.5 text-black">
                                        <Button
                                        disabled={options.adult <= 1}
                                        className="w-8 h-8 border-2 cursor-pointer bg-gray-300 text-black -p-2 disabled:cursor-not-allowed"
                                        onClick={() => handleOption("adult", "d")}
                                        >
                                        -
                                        </Button>
                                        <span>
                                        {options.adult}
                                        </span>
                                        <Button
                                        className="w-8 h-8 border-2 cursor-pointer bg-gray-300 text-black -p-2"
                                        onClick={() => handleOption("adult", "i")}
                                        >
                                        +
                                        </Button>
                                    </div>
                                </div>
                                <div className="w-52 flex justify-between m-3">
                                    <span className="flex items-center px-1.5">Menores</span>
                                    <div className="flex items-center gap-2.5 text-black">
                                        <Button
                                        disabled={options.children <= 0}
                                        className="w-8 h-8 border-2 cursor-pointer bg-gray-300 text-black -p-2 disabled:cursor-not-allowed"
                                        onClick={() => handleOption("children", "d")}
                                        >
                                        -
                                        </Button>
                                        <span>
                                        {options.children}
                                        </span>
                                        <Button
                                        className="w-8 h-8 border-2 cursor-pointer bg-gray-300 text-black -p-2"
                                        onClick={() => handleOption("children", "i")}
                                        >
                                        +
                                        </Button>
                                    </div>
                                </div>
                                <div className="flex justify-between m-3">
                                    <span className="flex items-center px-1.5">Habitaciones</span>
                                    <div className="flex items-center gap-2.5 text-black">
                                        <Button
                                        disabled={options.room <= 1}
                                        className="w-8 h-8 border-2 cursor-pointer bg-gray-300 text-black -p-2"
                                        onClick={() => handleOption("room", "d")}
                                        >
                                        -
                                        </Button>
                                        <span>
                                        {options.room}
                                        </span>
                                        <Button
                                        className="w-8 h-8 border-2 cursor-pointer bg-gray-300 text-black -p-2"
                                        onClick={() => handleOption("room", "i")}
                                        >
                                        +
                                        </Button>
                                    </div>
                                </div>
                            </div>
                            )}
                        </div>
                    </div>
                    <div className="flex items-center gap-2.5">
                        <Button className="bg-red-500 md:hidden w-10 pl-3.5"><FontAwesomeIcon icon={faMagnifyingGlass} /></Button>
                        <Button className="bg-red-500 hidden md:inline w-20 p-2">Search</Button>
                    </div>
                </div>
        </div>
    );  
};

export default Search;