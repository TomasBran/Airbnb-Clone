import { HostCardItem } from "..";

const alojamientos = [
    {
      id: 1,
      name: "Apartamento en el centro",
      address: "Calle 50, Tegucigalpa, Honduras",
      availableDays:"11-12 de dic",
      pricePerNight: "200$",
      image: "https://source.unsplash.com/random"
    },
    {
      id: 2,
      name: "Casa en la playa",
      address: "Playa Bonita, Roatán, Honduras",
      availableDays: "11-12 de dic",
      pricePerNight: "300$",
      image: "https://source.unsplash.com/random"
    },
    {
      id: 3,
      name: "Bungalow en la montaña",
      address: "La Esperanza, Honduras",
      availableDays: "11-12 de dic",
      pricePerNight: "100$",
      image: "https://source.unsplash.com/random"
    },
    {
      id: 4,
      name: "Apartamento en el centro",
      address: "Calle 50, Tegucigalpa, Honduras",
      availableDays:"11-12 de dic",
      pricePerNight: "200$",
      image: "https://source.unsplash.com/random"
    },
    {
      id: 5,
      name: "Casa en la playa",
      address: "Playa Bonita, Roatán, Honduras",
      availableDays: "11-12 de dic",
      pricePerNight: "300$",
      image: "https://source.unsplash.com/random"
    },
    {
      id: 6,
      name: "Bungalow en la montaña",
      address: "La Esperanza, Honduras",
      availableDays: "11-12 de dic",
      pricePerNight: "100$",
      image: "https://source.unsplash.com/random"
    },
  ];

export const CardContainer = () => {
  return (
    <div className="grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
      {alojamientos.map((alojamiento) => (
          <HostCardItem key={alojamiento.id} name={alojamiento.name} address={alojamiento.address} availableDays={alojamiento.availableDays} pricePerNight={alojamiento.pricePerNight} image={alojamiento.image} />
        ))}
      </div>
  )
}