import { faChevronDown, faMagnifyingGlass, faPencil, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  Chip,  
  Tabs,
  TabsHeader,
  Tab,
  Avatar,
  IconButton,
  Tooltip,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { useState } from "react";
 
const TABS = [
  {
    label: "Todos",
    value: "all",
  },
  {
    label: "User",
    value: "user",
  },
  {
    label: "Owner",
    value: "owner",
  },
];
 
const TABLE_HEAD = ["Username", "Tipo Usuario", "Status", "Contacto", "Reservas", "Opciones"];

//Hay que traer la info del back
const TABLE_ROWS = [
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
    name: "John Michael",
    email: "john@creative-tim.com",
    user: "User",
    property: "-",
    status: true,
    phone: "12345678",
    bookings: "info",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg",
    name: "Alexa Liras",
    email: "alexa@creative-tim.com",
    user: "Owner",
    property: "Propiedades",
    status: false,
    phone: "23456789",
    bookings: "",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg",
    name: "Laurent Perrier",
    email: "laurent@creative-tim.com",
    user: "Owner",
    property: "Propiedades",
    status: false,
    phone: "34567890",
    bookings: "info",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg",
    name: "Michael Levi",
    email: "michael@creative-tim.com",
    user: "User",
    property: "-",
    status: true,
    phone: "45678901",
    bookings: "info",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-5.jpg",
    name: "Richard Gran",
    email: "richard@creative-tim.com",
    user: "User",
    property: "-",
    status: false,
    phone: "56789012",
    bookings: "",
  },
];
 
export const AdminPanel = () => {
  const [searchText, setSearchText] = useState('');
  const [activeTab, setActiveTab] = useState('all');
  const [openPropList, setOpenPropList] = useState(false);
  const [openBookingsList, setOpenBookingsList] = useState(false);

  const handleOpenPropList = () => setOpenPropList(!openPropList);
  const handleOpenBookingsList = () => setOpenBookingsList(!openBookingsList);

  const filteredRows = TABLE_ROWS.filter((row) => {
    const isMatchingSearch = row.name.toLowerCase().includes(searchText.toLowerCase());
  
    if (activeTab === 'all') {
      return isMatchingSearch;
    } else if (activeTab === 'user' && row.user === 'User') {
      return isMatchingSearch;
    } else if (activeTab === 'owner' && row.user === 'Owner') {
      return isMatchingSearch;
    }
  
    return false;
  });


  return (
    <Card className="h-full w-full">
      <CardHeader floated={false} shadow={false} className="rounded-none flex flex-col gap-2 px-2">        
        <div className="p-1 flex justify-center">          
            <Typography variant="h5" color="blue-gray">
              Panel de Administración de Usuarios
            </Typography>                           
        </div>
        <section className="flex flex-col sm:flex-row justify-between gap-2">
          <div className="w-1/2 md:w-72">
              <Input
                label="Buscar"
                icon={<FontAwesomeIcon icon={faMagnifyingGlass} className="h-5 w-5" />}
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
            </div>        
          <div className="w-1/2 md:w-72 min-w-fit">
            <Tabs value={activeTab} onChange={(value) => setActiveTab(value)}>  
              <TabsHeader>            
                {TABS.map(({ label, value }) => (
                  <Tab 
                    key={value} 
                    value={value} 
                    onClick={() => setActiveTab(value)}>
                    &nbsp;&nbsp;{label}&nbsp;&nbsp;
                  </Tab>
                ))}
                </TabsHeader>
            </Tabs>          
          </div>
        </section>
      </CardHeader>
      <CardBody className="overflow-auto px-2">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head, index) => (
                <th
                  key={head}
                  className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="flex items-center justify-between gap-2 font-normal leading-none opacity-70">
                    {head}{" "}
                    {index !== TABLE_HEAD.length - 1 && (
                      <FontAwesomeIcon icon={faChevronDown} className="h-4 w-4"/>
                    )}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredRows.map(
              ({ img, name, email, user, property, status, phone, bookings }, index) => {
                const isLast = index === TABLE_ROWS.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50"; 
                return (
                  <tr key={name}>
                    <td className={classes}>
                      <div className="flex items-center gap-3">
                        <Avatar src={img} alt={name} size="sm" />
                        <div className="flex flex-col">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {name}
                          </Typography>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal opacity-70"
                          >
                            {email}
                          </Typography>
                        </div>
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="flex flex-col">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {user}
                        </Typography>                        
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal opacity-70">
                            {user==="User" ? "-" : 
                            <Button variant="text" className="p-1" onClick={handleOpenPropList}>
                              {property}
                            </Button>}
                            <Dialog open={openPropList} handler={handleOpenPropList}>
                              <DialogHeader>Listado de Propiedades</DialogHeader>
                              <DialogBody>
                                Tabla con listado de propiedades y opciones de editar/eliminar.
                              </DialogBody>
                              <DialogFooter>
                                <Button
                                  variant="text"
                                  color="red"
                                  onClick={handleOpenPropList}
                                  className="mr-1"
                                >
                                  <span>Cancel</span>
                                </Button>
                                <Button variant="gradient" color="green" onClick={handleOpenPropList}>
                                  <span>Confirm</span>
                                </Button>
                              </DialogFooter>
                            </Dialog>
                        </Typography>                        
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="w-max">
                        <Chip
                          variant="ghost"
                          size="sm"
                          value={status ? "activo" : "inactivo"}
                          color={status ? "green" : "blue-gray"}
                        />
                      </div>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {phone}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {!bookings ? "-" : 
                            <Button variant="text" className="p-1"  onClick={handleOpenBookingsList}>
                              {bookings}
                            </Button>} 
                            <Dialog open={openBookingsList} handler={handleOpenBookingsList}>
                              <DialogHeader>Listado de Reservas</DialogHeader>
                              <DialogBody>
                                Tabla con listado de reservas y opciones de editar/eliminar.
                              </DialogBody>
                              <DialogFooter>
                                <Button
                                  variant="text"
                                  color="red"
                                  onClick={handleOpenBookingsList}
                                  className="mr-1"
                                >
                                  <span>Cancel</span>
                                </Button>
                                <Button variant="gradient" color="green" onClick={handleOpenBookingsList}>
                                  <span>Confirm</span>
                                </Button>
                              </DialogFooter>
                            </Dialog>                       
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Tooltip content="Edit User">
                        <IconButton variant="text">
                          <FontAwesomeIcon icon={faPencil} className="h-4 w-4"/>
                        </IconButton>
                      </Tooltip>
                      <Tooltip content="Delete User">
                        <IconButton variant="text">                        
                          <FontAwesomeIcon icon={faTrashCan} className="h-4 w-4"/>
                        </IconButton>
                      </Tooltip>
                    </td>
                  </tr>
                );
              },
            )}
          </tbody>
        </table>
      </CardBody>      
    </Card>
  );
};

