const consultandoUsuarios = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/user');
        if(!response.ok){
            throw new Error(`Error status: ${response.status}`);
        }
        const usuarios = await response.json();
        console.log(usuarios);
    } catch (error) {
        console.log(error.message);
    }
}

consultandoUsuarios();
