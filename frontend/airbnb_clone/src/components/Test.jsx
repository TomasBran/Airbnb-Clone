import { Button } from "@material-tailwind/react"
import { useAuth } from "../context/authContext";
import { updateUserData } from "../services/apiRequests";


export const Test = () => {
    const apiUrl = 'http://149.50.133.215:80';
    const token = localStorage.getItem('token') ? localStorage.getItem('token') : ''

    const { user, setUser } = useAuth()


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
                    'Content-Type': 'application/json',
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

      const deleteUser = async (id) => {
        try {
            const response = await fetch(`${apiUrl}/api/user/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: property
            });
            

            if (!response.ok) {
                throw new Error();
            }

        } catch (error) {
            console.error('There was an error:', error);
        }
      }


      const getUsers = async () => {
        try {
            const response = await fetch(`${apiUrl}/api/user`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
    
            if(response.ok){
                const data = await response.json()
                console.log(data)
            } else {
                console.error('error de respuesta');
            }
            
            } catch (error) {
                console.error('Error de red:', error);
            }
      }


    async function checkUserByMail () {
        const token = localStorage.getItem('token') ? localStorage.getItem('token') : ''
        if (token === ''){
            alert("No estás logeado")
            return
        }

    
        try {
            const response = await fetch(`${apiUrl}/api/user/username/${user.username}`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
    
            if(response.ok){
                const data = await response.json()
                console.log(data)
            } else {
                console.error('error de respuesta');
            }
            
            } catch (error) {
                console.error('Error de red:', error);
            }
    }


    return (
        <>
            <Button onClick={getUsers}>Get Data</Button>
            {/* <Button onClick={sendProperty}>Send Property</Button> */}
            {/* <Button onClick={deleteUser}>Delete User</Button> */}
            <Button onClick={checkUserByMail}>get user con mail</Button>
        </>
    )
}