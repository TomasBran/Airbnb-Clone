const apiUrl = 'http://149.50.133.215:80';

export async function login(userData) {
    try {
        const response = await fetch(apiUrl+"/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData)
        })

        if(response.ok){
            const data = await response.json()
            localStorage.setItem('token', data.token);
            console.log('Inicio de sesión exitoso. Token JWT guardado.');
        } else {
            console.error('Error al iniciar sesión:', response.statusText);
        }
        
        } catch (error) {
            console.error('Error de red:', error);
        }
    
}

export async function register(userData) {
    
    try {
        const response = await fetch(apiUrl+"/auth/register", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData)
        })

        if(response.ok){
            const data = await response.json()
            localStorage.setItem('token', data.token);
            console.log('Registro de usuario exitoso. Usuario guardado.');
        } else {
            console.error('Error al registrar usuario:', response.statusText);
        }
        
        } catch (error) {
            console.error('Error de red:', error);
        }
    
}

export function logout() {
    if (localStorage.getItem('token')) {
        localStorage.removeItem('token');
        console.log('Sesión cerrada correctamente.')
    }
}

export async function submitProperty(formData) {
    const token = localStorage.getItem('token') ? localStorage.getItem('token') : ''

        try {
            const response = await fetch(`${apiUrl}/api/property`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: formData
            });

            if (!response.ok) {
                throw new Error();
            }

            const data = await response.json();
        } catch (error) {
            console.error('There was an error:', error);
        }
}

export function forceLogout () {
    logout()
    alert('Sesión expirada, vuelve a logear')
}

export async function updateUserData (setUser, username) {
    const token = localStorage.getItem('token') ? localStorage.getItem('token') : ''


    try {
        const response = await fetch(`${apiUrl}/api/user/username/${username}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })

        if(response.ok){
            const data = await response.json()
            setUser(data)
        } else {
            if(response.status === 403){
                forceLogout()
            }
            console.error('error de respuesta');
        }
        
        } catch (error) {
            console.error('Error de red:', error);
        }
}

export async function deleteUser (id) {
    const token = localStorage.getItem('token') ? localStorage.getItem('token') : ''
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

export async function getAllUsers () {
    const token = localStorage.getItem('token') ? localStorage.getItem('token') : ''
    try {
        const response = await fetch(`${apiUrl}/api/user`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })

        if(response.ok){
            const data = await response.json()
        } else {
            console.error('error de respuesta');
        }
        
    } catch (error) {
        console.error('Error de red:', error);
    }
}

