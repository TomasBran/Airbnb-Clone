import { Filters } from "../filters";


const NavBarFilters = () => {
  
    return (
        <div className="box-border py-3 px-8 flex items-center gap-4 border-2 w-screen">
            <h2 className="border border-gray-300 rounded-lg text-sm px-5 py-2.5 w-11/12">SUBCATEGORIAS</h2>
            <Filters/>                 
        </div>
    );
};

export default NavBarFilters;