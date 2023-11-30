import LogoIcon from "../../assets/logoicon/LogoIcon";
import { Button, IconButton } from "@material-tailwind/react";
import  { useState } from 'react';
import Search from "../search/Search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {     
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const openSearch = () => {
        setIsSearchOpen(!isSearchOpen);
    };
   
    return ( 
            <> 
                <section className="py-3 px-8 flex justify-between items-center text-md">        
                    <a href="/"><LogoIcon/></a>
                    <div className="flex flex-col justify-center items-center">
                        <Button variant="outlined" onClick={openSearch} className="box-border flex items-center gap-2 rounded-3xl border border-gray-300 shadow-md hover:shadow-lg px-3 py-1">  
                            {isSearchOpen ? 
                            "Hide" :
                            <div>
                                <h2 className="hidden md:inline">Destino | Fechas | Huéspedes</h2>
                                <IconButton color="red" size = "sm" className="px-8 md:px-10 lg:px-1 rounded-full m-1.5">
                                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                                </IconButton>
                            </div>}                                                  
                        </Button>                    
                        {isSearchOpen && <Search/>}
                    </div>
                    <div>
                        <Button variant="text" className="rounded-full hidden lg:inline-block">Poné tu Airbnb</Button>                                          
                        <button className="rounded-3xl border border-gray-300 text-sm m-1 px-5 py-2.5 hover:shadow-lg">MODAL</button>
                    </div>
                </section>  
            </>
        
    );
};


export default NavBar;
