import { Button } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";


const NavBarFilters = () => {
    const [isFiltersOpen, setIsFiltersOpen] = useState(false);

    const openFilters = () => {
        setIsFiltersOpen(!isFiltersOpen);
    };
    return (
        <div className="box-border py-3 px-8 flex items-center gap-4 border-2 ">
            <h2 className="border border-gray-300 rounded-lg text-sm px-5 py-2.5 w-11/12">SUBCATEGORIAS</h2>
            <Button variant="outlined" onClick={openFilters}> 
            {isFiltersOpen?
            "Hide":
            <h2 className="flex gap-2"><FontAwesomeIcon icon={faFilter} /> Filtrar</h2>            
            }
            </Button>  
            {isFiltersOpen && <h3>Modal filtros</h3>}          
        </div>
    );
};

export default NavBarFilters;