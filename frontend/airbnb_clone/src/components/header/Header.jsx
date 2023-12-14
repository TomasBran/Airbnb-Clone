import {NavBar, NavBarFilters} from "../navbar";


export const Header = () => {
    return (
        <header className="sticky top-0 z-50 bg-white">
            <NavBar/>
            <NavBarFilters/>            
        </header>
    );
};

