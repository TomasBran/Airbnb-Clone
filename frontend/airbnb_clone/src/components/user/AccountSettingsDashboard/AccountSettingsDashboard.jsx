import { Link } from "react-router-dom";
import { UserCardDashboard } from "../../cards";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard, faShieldHalved, faMoneyCheck, faBell, faEye, faPlane, faChartSimple } from "@fortawesome/free-solid-svg-icons";

const sections = [
    {
        id: 1,
      title: "Información personal",
      description: "Proporciona tus datos personales e indícanos cómo podemos ponernos en contacto contigo",
      path: "/account/settings/information",
      icon: <FontAwesomeIcon icon={faAddressCard} />,
    },
    {
        id: 2,
      title: "Pagos y cobros",
      description: "Proporciona tus datos personales e indícanos cómo podemos ponernos en contacto contigo",
      path: "/account/settings/payments",
      icon: <FontAwesomeIcon icon={faShieldHalved} />,
    },
    {
        id: 3,
      title: "Impuestos",
      description: "Proporciona tus datos personales e indícanos cómo podemos ponernos en contacto contigo",
      path: "/account/settings/taxes",
      icon: <FontAwesomeIcon icon={faMoneyCheck} />,
    },
    {
        id: 4,
      title: "Notificaciones",
      description: "Proporciona tus datos personales e indícanos cómo podemos ponernos en contacto contigo",
      path: "/account/settings/notifications",
      icon: <FontAwesomeIcon icon={faBell} />,
    },
    {
        id: 5,
      title: "Privacidad y uso compartido",
      description: "Proporciona tus datos personales e indícanos cómo podemos ponernos en contacto contigo",
      path: "/account/settings/privacy",
      icon: <FontAwesomeIcon icon={faEye} />,
    },
    {
        id: 6,
      title: "Viaje de trabajo",
      description: "Proporciona tus datos personales e indícanos cómo podemos ponernos en contacto contigo",
      path: "/account/settings/work-travel",
      icon: <FontAwesomeIcon icon={faPlane} />,
    },
    {
        id: 7,
      title: "Herramientas para anfitriones profesionales",
      description: "Proporciona tus datos personales e indícanos cómo podemos ponernos en contacto contigo",
      path: "/account/settings/professional-hosting-tools",
      icon: <FontAwesomeIcon icon={faChartSimple} />,
    },
  ];

export const AccountSettingsDashboard = () => {
  return (
    <>  
        <div
          className="
            mt-2
            max-w-[2520px]
            mx-auto
            xl:px-40 
            md:px-20
            sm:px-2
            px-4
            pb-4
          "
        >
            <div className="container mt-5 font-mono">
                <div className="text-2xl font-semibold">Cuenta</div>
                <span className="text-lg">
                    Nombre del usuario, usuario@gmail.com
                </span>
            </div>
            <div 
                className="
                pt-6
                grid 
                grid-cols-1 
                sm:grid-cols-1
                md:grid-cols-2
                xl:grid-cols-3
                gap-8
                "
            >
                {sections.map((section) => (
                    <Link key={section.id} to={`#`}>
                        <UserCardDashboard section={section} />
                    </Link>
                ))}
            </div>
        </div>
    </> 
  )
}
