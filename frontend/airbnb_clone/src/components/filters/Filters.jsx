import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding, faFilter, faHotel, faHouse, faWarehouse } from "@fortawesome/free-solid-svg-icons";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Slider,
    Input,
    Radio,
  } from "@material-tailwind/react";
import { useState } from "react";

const Filters = () => {
    const [open, setOpen] = useState(false);
    
    const handleOpen = () => setOpen(!open);

    return (
        <>
            <Button onClick={handleOpen} variant="outlined"  className="w-32 p-3 md:pl-6">
                <h2 className="flex gap-2"><FontAwesomeIcon icon={faFilter} /> Filtrar</h2>
            </Button>
            <Dialog open={open} handler={handleOpen} >
                <DialogHeader>Filtros</DialogHeader>
                <DialogBody className="text-black max-h-96 overflow-y-auto">
                    <section className="flex flex-col gap-4">
                        <h2 className="text-lg font-bold">Rango Precios</h2>
                        <Slider color="red" defaultValue={100} />
                        <div className="flex gap-4">
                            <Input label="$ Mínimo"/>
                            _
                            <Input label="$ Máximo"/>
                        </div>
                    </section>
                    <section className="mt-10">
                        <h2 className="text-lg font-bold">Tipo de Propiedad</h2>
                        <div className="flex gap-3">
                            <Button variant="outlined" className="flex flex-col gap-4 items-center justify-center w-32 h-24"> <FontAwesomeIcon icon={faHouse} size="xl" />Casa</Button>
                            <Button variant="outlined" className="flex flex-col gap-4 items-center justify-center w-32 h-24"> <FontAwesomeIcon icon={faBuilding} size="xl" />Departamento</Button>
                            <Button variant="outlined" className="flex flex-col gap-4 items-center justify-center w-32 h-24"> <FontAwesomeIcon icon={faWarehouse} size="xl" />Casa de huéspedes</Button>
                            <Button variant="outlined" className="flex flex-col gap-4 items-center justify-center w-32 h-24"> <FontAwesomeIcon icon={faHotel} size="xl" />Hotel</Button>
                        </div>
                    </section>
                    <section className="mt-10">
                        <h2 className="text-lg font-bold">Habitaciones y Camas</h2>
                        <div>
                            <h3>Dormitorios</h3>
                            <Radio name="type" label="Cualquiera" ripple={true} defaultChecked/>
                            <Radio name="type" label="1" ripple={true} />
                            <Radio name="type" label="2" ripple={true} />
                            <Radio name="type" label="3" ripple={true} />
                            <Radio name="type" label="4" ripple={true} />
                            <Radio name="type" label="5" ripple={true} />
                            <Radio name="type" label="6+" ripple={true} />                           
                        </div>
                        <div>
                            <h3>Camas</h3>
                            <Radio name="type" label="Cualquiera" ripple={true} defaultChecked/>
                            <Radio name="type" label="1" ripple={true} />
                            <Radio name="type" label="2" ripple={true} />
                            <Radio name="type" label="3" ripple={true} />
                            <Radio name="type" label="4" ripple={true} />
                            <Radio name="type" label="5" ripple={true} />
                            <Radio name="type" label="6+" ripple={true} />
                            
                        </div>
                        <div>
                            <h3>Baños</h3>
                            <Radio name="type" label="Cualquiera" ripple={true} defaultChecked/>
                            <Radio name="type" label="1" ripple={true} />
                            <Radio name="type" label="2" ripple={true} />
                            <Radio name="type" label="3" ripple={true} />
                            <Radio name="type" label="4" ripple={true} />
                            <Radio name="type" label="5" ripple={true} />
                            <Radio name="type" label="6+" ripple={true} />                            
                        </div>                        
                    </section>
                    <section className="mt-10">
                        <h2 className="text-lg font-bold">Servicios</h2>                        
                    </section>
                </DialogBody>
                <DialogFooter>
                    <Button
                    variant="text"
                    color="red"
                    onClick={handleOpen}
                    className="mr-1"
                    >
                    <span>Cancel</span>
                    </Button>
                    <Button variant="gradient" color="green" onClick={handleOpen}>
                    <span>Confirm</span>
                    </Button>
                </DialogFooter>
            </Dialog>
        </>
    )
};

export default Filters;