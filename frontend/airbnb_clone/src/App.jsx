  import { useEffect, useState } from "react";
  import {
    Button,
    Dialog,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Checkbox,
  } from '@material-tailwind/react'
  import './App.css'
  import Forms from "./components/forms/Forms";



  function App() {

    
    const [openLogin, setOpenLogin] = useState(false);
    const handleOpenLogin = () => {
      setOpenLogin((cur) => !cur)
    };

    const [openSignUp, setOpenSignUp] = useState(false);
    const handleOpenSignUp = () => setOpenSignUp((cur) => !cur);
    


    return (
      <>
        <Button onClick={handleOpenLogin}>Iniciar Sesión</Button>
        <Button onClick={handleOpenSignUp}>Registrarse</Button>
        <Forms
          openLogin={openLogin}
          openSignUp={openSignUp}
          handleOpenLogin={handleOpenLogin}
          handleOpenSignUp={handleOpenSignUp}
        />
        
      </>
    )
  }

  export default App
