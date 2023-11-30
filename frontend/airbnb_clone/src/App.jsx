import './App.css'
import { HostCardItem } from './components/shared/HostCardItem/HostCardItem'
import { Header } from './components/header'

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
];

function App() {
  

  return (
    <>
    <Header/>   
     <div className="grid grid-cols-6 gap-4">
    {alojamientos.map((alojamiento) => (
          <HostCardItem key={alojamiento.id} name={alojamiento.name} address={alojamiento.address} availableDays={alojamiento.availableDays} pricePerNight={alojamiento.pricePerNight} image={alojamiento.image} />
        ))}
    </div>
    </>
  )
}

export default App
