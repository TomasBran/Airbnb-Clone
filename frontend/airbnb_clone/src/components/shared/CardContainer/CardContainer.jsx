import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Spinner } from "@material-tailwind/react";
import { Container, EmptyState, HostCardItem } from "..";
import { getAllProperties } from "../../../services/apiRequests";

// const propertiesList = [
//   {
//     id: 1,
//     description: "Casa moderna en el centro de la ciudad",
//     image: "https://source.unsplash.com/random",
//     value: 5000,
//     country: "Estados Unidos",
//     categories: ["Residencial", "Centro urbano"],
//     subCategory: "Casa",
//     bathroom: 3,
//     bed: 4,
//     bedroom: 3,
//     services: ["Electricidad", "Agua", "Gas"],
//     reservationDate:"11-12 de dic",
//   },
//   {
//     id: 2,
//     description: "Apartamento con terraza panorámica",
//     image: "https://source.unsplash.com/random?q=hotel%20paris",
//     value: 2500,
//     country: "España",
//     categories: ["Residencial", "Vistas panorámicas"],
//     subCategory: "Apartamento",
//     bathroom: 2,
//     bed: 2,
//     bedroom: 1,
//     services: ["Internet", "Agua", "Seguridad"],
//     reservationDate: "20-22 de dic",
//   },
//   {
//     id: 3,
//     description: "Terreno amplio para desarrollo",
//     image: "https://source.unsplash.com/random?q=vuelo%20new%20york%20tokio",
//     value: 10000,
//     country: "Argentina",
//     categories: ["Terreno", "Desarrollo"],
//     subCategory: "Terreno",
//     bathroom: 0,
//     bed: 0,
//     bedroom: 0,
//     services: [],
//     reservationDate: "23 de dic",
//   },
//   {
//     id: 4,
//     description: "Casa colonial con jardín exuberante",
//     image: "https://source.unsplash.com/random?q=restaurante%20roma",
//     value: 7000,
//     country: "México",
//     categories: ["Residencial", "Jardín"],
//     subCategory: "Casa",
//     bathroom: 4,
//     bed: 5,
//     bedroom: 4,
//     services: ["Electricidad", "Agua", "Mantenimiento de jardín"],
//     reservationDate: "26 de dic",
//   },
//   {
//     id: 5,
//     description: "Apartamento moderno en zona comercial",
//     image: "https://source.unsplash.com/random?q=paseo%20helicóptero%20gran%20cañón",
//     value: 350,
//     country: "Italia",
//     categories: ["Residencial", "Zona comercial"],
//     subCategory: "Apartamento",
//     bathroom: 2,
//     bed: 3,
//     bedroom: 2,
//     services: ["Internet", "Agua", "Seguridad"],
//     reservationDate: "27 de dic",
//   },
//   {
//     id: 6,
//     description: "Casa de playa con acceso privado",
//     image: "https://source.unsplash.com/random?q=safari+africano",
//     value: 800,
//     country: "Brasil",
//     categories: ["Residencial", "Playa"],
//     subCategory: "Casa",
//     bathroom: 3,
//     bed: 4,
//     bedroom: 3,
//     services: ["Electricidad", "Agua", "Acceso privado a la playa"],
//     reservationDate: "29 de dic",
//   },
// ];

[
  {
      "id": "15b54a45-d544-408c-9e45-9ba4b9a40acf",
      "title": "Castillo",
      "username": "owner@owner.com",
      "category": "HOTEL",
      "subCategory": "URBAN",
      "description": "Piedra",
      "value": 499,
      "active": true,
      "images": [
          "23a38435-96f0-4d3a-8b0f-4657d95abc9c",
          "5add47da-a35e-47c3-81b0-2b38f8fde82b",
          "66113271-2cf9-4f03-ad16-df52dea2e0ad",
          "e84e64d8-25c0-4da2-beb3-2cba3c56c4f9"
      ],
      "location": {
          "id": "351e6fc2-6b77-4311-b5c8-ea3a4cf896d5",
          "country": "Argentina",
          "city": "ciudad"
      },
      "bathroom": 2,
      "bed": 4,
      "bedroom": 3
  }
]

export const CardContainer = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllProperties();
        
        setProperties(data);

        setLoading(false);
      } catch (error) {
        console.error('Error al obtener propiedades:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (properties.length === 0) {
    return (
      <div className="grid items-center justify-center h-screen">
        {
          loading
        ? 
          (<Spinner className="h-12 w-12" />)
        :
          (
            <EmptyState
              title={"Alojamientos"}
              subtitle={"No hay ningún alojamiento publicado... ¡por ahora!"}
              showReset={true}
            />
          )
      }
      </div>
    );
  }

  return (
    <Container>
      <div 
          className="
            pt-6
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            md:grid-cols-3 
            lg:grid-cols-4
            xl:grid-cols-5
            2xl:grid-cols-6
            gap-8
          "
        >
          {
            loading
              ? 
                (
                  <div className="grid items-center justify-center h-screen">
                    <Spinner className="h-12 w-12" />
                  </div>
                )
              : 
                (
                  properties.map((propertie) => (
                    <Link
                      key={propertie.id}
                      to={`/property-detail/${propertie.id}`}
                      state={{
                        title: propertie.title,
                        username: propertie.username,
                        category: propertie.category,
                        subCategory: propertie.subCategory,
                        description: propertie.description,
                        value: propertie.value,
                        active: propertie.active,
                        images: propertie.images,
                        location: propertie.location,
                        bathroom: propertie.bathroom,
                        bed: propertie.bed,
                        bedroom: propertie.bedroom,
                      }}
                    >
                      <HostCardItem
                        title={propertie.title}
                        description={propertie.description}
                        location={propertie.location}
                        // reservationDate={propertie.reservationDate}
                        value={propertie.value}
                        images={propertie.images}
                      />
                    </Link>
                  )
                  )
                )
          }
        </div>
    </Container>
  )
}

// "id": "15b54a45-d544-408c-9e45-9ba4b9a40acf",
// "title": "Castillo",
// "username": "owner@owner.com",
// "category": "HOTEL",
// "subCategory": "URBAN",
// "description": "Piedra",
// "value": 499,
// "active": true,
// "images": [
//     "23a38435-96f0-4d3a-8b0f-4657d95abc9c",
//     "5add47da-a35e-47c3-81b0-2b38f8fde82b",
//     "66113271-2cf9-4f03-ad16-df52dea2e0ad",
//     "e84e64d8-25c0-4da2-beb3-2cba3c56c4f9"
// ],
// "location": {
//     "id": "351e6fc2-6b77-4311-b5c8-ea3a4cf896d5",
//     "country": "Argentina",
//     "city": "ciudad"
// },
// "bathroom": 2,
// "bed": 4,
// "bedroom": 3