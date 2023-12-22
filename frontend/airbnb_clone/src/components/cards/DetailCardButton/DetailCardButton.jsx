import { Typography } from "@material-tailwind/react";
import { useState } from "react";


export const DetailCardButton = (id) => {
  console.log(id);

  const [showContact, setShowContact] = useState(false)

  const handleShow = () => {
      setShowContact(prev => !prev)
  }

  if(showContact){
    return(
      <div className="flex justify-center items-center h-16" onClick={handleShow}>
        <Typography color='red' variant="h5">
          Telefono: 11-5418-1927
        </Typography>
      </div>
    )
  }

    return ( 
        <button
          className="
            h-16
            relative
            disabled:opacity-70
            rounded-lg
            hover:opacity-80
            transition
            w-full
            bg-pink-500
            border-pink-500
            text-white
            text-md
            py-3
            font-semibold
            border-2
          "
          onClick={handleShow}
        >
          Reservar
        </button>
       );
}
