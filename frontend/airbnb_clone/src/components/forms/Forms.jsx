import { useEffect, useState } from "react"
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

import login from "../../services/login"

import passwordIcon from '../../assets/password_icon.svg'

const Forms = ({openLogin, handleOpenLogin, openSignUp, handleOpenSignUp}) => {
  
    
    const [showPassword, setShowPassword] = useState(true);
    const handleShowPassword = () => setShowPassword((cur) => !cur);


    const [userData, setUserData] = useState({
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        country:'',
    });

    const handleInputChange = (event) => {

        setUserData({
            ...userData,
            [event.target.name] : event.target.value
        })

    };


    useEffect(() => {
    
        if(document.getElementsByClassName("password-icon")[0]){
        
          const icon = document.getElementsByClassName("password-icon")[0]
          
          icon.addEventListener("click", function(event){
            event.preventDefault()
            handleShowPassword()
          })
        }

        
    }, [openLogin, openSignUp]);



    const sendLogin = (userData) => {
        if(userData.email !== '' && userData !== ''){
            login(userData)
        } else{
            console.log("faltan datos")
        }
    }

    const sendRegister = (userData) => {
        
        login(userData)

    }


    return(
        <>
            <Dialog 
            size="sm"
            open={openLogin}
            handler={handleOpenLogin}
            className="bg-transparent shadow-none"
        >
            <Card className="mx-auto w-full max-w-[36rem]"> 
            <CardBody className="flex flex-col gap-4">
                <Typography variant="h4" color="blue-gray">
                Iniciar Sesión
                </Typography>
                <Typography
                className="mb-3 font-normal"
                variant="paragraph"
                color="gray"
                >
                Ingresa tu mail y contraseña para iniciar sesión
                </Typography>
                <Typography className="-mb-2" variant="h6">
                Tu mail
                </Typography>
                <Input name="email" color="indigo" label="Mail" size="lg" onChange={handleInputChange}/>
                <Typography className="-mb-2" variant="h6">
                Tu contraseña
                </Typography>
                <Input name="password" type={showPassword ? "password" : ""} color="indigo" label="Contraseña" size="lg" icon={<img className="password-icon" src={passwordIcon}/>} onChange={handleInputChange}/>
                <div className="-ml-2.5 -mt-3">
                <Checkbox label="Recordarme" />
                </div>
            </CardBody>
            <CardFooter className="pt-0">
                <Button variant="gradient" onClick={() => {handleOpenLogin(), sendLogin(userData)}} fullWidth>
                Iniciar sesión
                </Button>
                <Typography variant="small" className="mt-4 flex justify-center">
                ¿No tenés una cuenta?
                <Typography
                    variant="small"
                    color="blue-gray"
                    className="ml-1 font-bold"
                    onClick={() => {
                    handleOpenLogin()
                    handleOpenSignUp()
                    
                    }}
                >
                    <span className="hover-pointer">Registrate</span>
                </Typography>
                </Typography>
            </CardFooter>
            </Card>
        </Dialog>



        <Dialog
            size="sm"
            open={openSignUp}
            handler={handleOpenSignUp}
            className="bg-transparent shadow-none"
        >
            <Card className="mx-auto w-full max-w-[36rem]">
            <CardBody className="flex flex-col gap-3">
                <Typography variant="h4" color="blue-gray">
                Registrarse
                </Typography>
                <Typography
                className="mb-3 font-normal"
                variant="paragraph"
                color="gray"
                >
                Ingresa tu mail y contraseña para el registro
                </Typography>
                <Typography className="-mb-2" variant="h6">
                Tu mail
                </Typography>
                <Input color="indigo" label="Mail" size="lg" />
                <Typography className="-mb-2" variant="h6">
                Tu contraseña
                </Typography>
                <Input type={showPassword ? "password" : ""} color="indigo" label="Contraseña" size="lg" icon={<img className="password-icon" src={passwordIcon}/>}/>
                <Typography className="-mb-2" variant="h6">
                Apellido/s
                </Typography>
                <Input color="indigo" label="Apellido/s" size="lg" />
                <Typography className="-mb-2" variant="h6">
                Nombre/s
                </Typography>
                <Input color="indigo" label="Nombre/s" size="lg" />
                <Typography className="-mb-2" variant="h6">
                País
                </Typography>
                <Input color="indigo" label="País" size="lg" />
            </CardBody>
            <CardFooter className="pt-0">
                <Button variant="gradient" onClick={handleOpenSignUp} fullWidth>
                Registrarse
                </Button>
                <Typography variant="small" className="mt-4 flex justify-center">
                ¿Ya tenés una cuenta?
                <Typography
                    variant="small"
                    color="blue-gray"
                    className="ml-1 font-bold"
                    onClick={() => {
                    handleOpenSignUp()
                    handleOpenLogin()
                    
                    }}
                >
                    <span className="hover-pointer">Iniciar Sesión</span>
                </Typography>
                </Typography>
            </CardFooter>
            </Card>
        </Dialog>
        </>
    )
}

export default Forms