// Funcion update token para actualizar el mismo en local storage cada vex que cambie el usuario

// Esta función actualiza el token en el almacenamiento local cada vez que cambia el usuario.

export const updateToken = () => {
    // Obtener el usuario del almacenamiento local
    const user = localStorage.getItem("user");

    // Si hay usuario, parsearlo y devolver su token
    if(user) {
        const parseUser = JSON.parse(user);
        return parseUser.token;
    }
}
