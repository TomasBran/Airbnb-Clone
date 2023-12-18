import { Button } from "@material-tailwind/react"



export const Test = () => {
    const apiUrl = 'http://149.50.133.215:80';
    const token = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbkBhZG1pbi5jb20iLCJpYXQiOjE3MDI5MTQzMjcsImV4cCI6MTcwMjkxNTc2N30.ii_eZ_wlP7MkXK6exY6G9YtCMivA3HtJfANWHi64uH0'
    const id = "11131b21-eb85-4df7-b181-9d718897a267"


    const getData = async () => {
        try {
            const response = await fetch(`${apiUrl}/api/user`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
    
            if(response.ok){
                const data = await response.json()
                console.log(data);
            } else {
                if(response.status === 403){
                    console.log("FUE ERROR 403")
                }
                console.error('error de respuesta');
            }
            
            } catch (error) {
                console.error('Error de red:', error);
            }
      }
      

      const property = {
        "title": "Titulo",
        "description": "Descripcion",
        "images": [],
        "value": "123",
        "location": "Antarctica",
        "category": "casa",
        "subCategory": "cabana",
        "bathroom": "2",
        "bed": "5",
        "bedroom": "1",
        "serviceTypes": [
            "cocina",
            "mascotas"
        ],
        "permanent_availability": "true",
        "availability": [],
        "active": "true",
        "user": "user_owner_placeholder"
    }


      const sendProperty = async () => {
        try {
            const response = await fetch(`${apiUrl}/api/property`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`
                },
                body: property
            });

            if (!response.ok) {
                throw new Error();
            }

            const data = await response.json();
            console.log('Property saved:', data);
        } catch (error) {
            console.error('There was an error:', error);
        }
      }


    return (
        <>
            <Button onClick={getData}>Get Data</Button>
            <Button onClick={sendProperty}>Send Property</Button>
        </>
    )
}